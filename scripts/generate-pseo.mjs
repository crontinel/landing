#!/usr/bin/env node

/**
 * pSEO page generator for Crontinel landing site.
 * Picks the next 2 slugs from pseo-queue.json, generates MDX content
 * via Claude Opus, writes files, commits, and pushes.
 *
 * Usage: node scripts/generate-pseo.mjs
 *
 * API key resolution order:
 *   1. ANTHROPIC_API_KEY environment variable
 *   2. ANTHROPIC_API_KEY in .env file at repo root
 *   3. claude CLI (Claude Code session) - used as fallback
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync, execFileSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const QUEUE_FILE = join(ROOT, 'pseo-queue.json');
const USE_CASES_DIR = join(ROOT, 'src', 'content', 'use-cases');

// Load .env file from repo root if present
function loadDotEnv() {
  const envPath = join(ROOT, '.env');
  try {
    const lines = readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx < 1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (key && !process.env[key]) process.env[key] = val;
    }
  } catch {
    // .env not present, fine
  }
}
loadDotEnv();

// Determine generation mode: 'sdk' (direct Anthropic API) or 'cli' (claude -p)
function resolveMode() {
  if (process.env.ANTHROPIC_API_KEY) {
    console.log('Using ANTHROPIC_API_KEY for generation.');
    return { mode: 'sdk', apiKey: process.env.ANTHROPIC_API_KEY };
  }

  // Check if claude CLI is available
  try {
    execSync('which claude', { encoding: 'utf8', stdio: 'pipe' });
    console.log('No ANTHROPIC_API_KEY found. Using claude CLI (Claude Code session).');
    return { mode: 'cli' };
  } catch {
    // neither available
  }

  console.error(
    'ERROR: No ANTHROPIC_API_KEY set and claude CLI not found.\n' +
      'Set ANTHROPIC_API_KEY in your .env file or environment.\n' +
      'Get a key from: https://console.anthropic.com/settings/keys'
  );
  process.exit(1);
}

const { mode, apiKey } = resolveMode();
const sdkClient = mode === 'sdk' ? new Anthropic({ apiKey, maxRetries: 4 }) : null;

// --- Helpers ---

function slugToCommandName(slug) {
  const parts = slug.split('-');
  if (parts.length >= 2) {
    return parts[0] + ':' + parts.slice(1).join('-');
  }
  return slug;
}

function todayDate() {
  return new Date().toISOString().split('T')[0];
}

function buildContentPrompt(slug) {
  const commandName = slugToCommandName(slug);
  const pageTitle = `Monitoring ${commandName} in Laravel Production`;

  return `Write a page for crontinel.com, a Laravel cron and queue monitoring SaaS. The page targets developers searching for how to monitor the \`${commandName}\` Artisan command in production. The page title is: "${pageTitle}"

Output ONLY the MDX body, starting immediately with the first paragraph. No preamble, no "Here is the content:", no code fences wrapping the output, no frontmatter. Just the raw MDX starting from sentence one.

Requirements:
- 600 to 900 words total
- Open with a concrete production scenario: a specific failure or problem a developer actually hits, not a definition of the command
- At least one code block (using triple backticks) showing a real, useful command or configuration snippet
- Practitioner voice, direct, specific, no fluff. Write as if explaining to a colleague
- Mention Crontinel naturally once or twice max, where it genuinely fits. Do not open with Crontinel
- No em dashes anywhere. Use commas, colons, or rewrite the sentence instead
- Do not use the words: delve, today's post, in conclusion, in summary, overview
- No section called "Introduction" or "Conclusion"
- Use 3 to 5 H2 headings (## ) to structure the content
- Reference real Laravel version details where relevant (Laravel 10, 11, or 12)
- The content must be specific to \`${commandName}\`: not generic cron monitoring advice`;
}

function buildDescriptionPrompt(slug) {
  const commandName = slugToCommandName(slug);
  return `Write a single SEO meta description sentence (under 155 characters) for a page titled "Monitoring ${commandName} in Laravel Production". Specific to this command, mentions production monitoring, written for a developer audience. No em dashes. Output only the sentence.`;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Generate via Anthropic SDK
async function sdkGenerate(prompt) {
  const stream = sdkClient.messages.stream({
    model: 'claude-opus-4-6',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });
  const message = await stream.finalMessage();
  return message.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();
}

// Generate via claude CLI
function cliGenerate(prompt) {
  const result = execFileSync(
    'claude',
    ['-p', '--model', 'claude-opus-4-6'],
    {
      input: prompt,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 4,
      timeout: 120000,
    }
  );
  // Strip Claude Code footer line (e.g. "⏰ [dir] || 🤖 [model]")
  // and any preamble lines before the actual content starts
  const lines = result.split('\n');

  // Remove footer lines with emoji clocks/robots
  const withoutFooter = lines.filter((line) => !line.match(/^[\u23f0\u{1f916}]/u));

  // If the output is wrapped in a ```mdx ... ``` fence, extract the inner content
  const joined = withoutFooter.join('\n').trim();
  const fenceMatch = joined.match(/^```(?:mdx|markdown)?\s*\n([\s\S]*?)\n```\s*$/);
  if (fenceMatch) {
    return fenceMatch[1].trim();
  }

  // Strip any preamble line that looks like "Here's the content:" or similar
  const contentLines = withoutFooter;
  let startIdx = 0;
  for (let i = 0; i < Math.min(contentLines.length, 5); i++) {
    const line = contentLines[i].trim();
    if (
      line.match(/^(here'?s?|now|okay|sure|below|here is|this is)/i) ||
      line.match(/^```/) ||
      line === ''
    ) {
      startIdx = i + 1;
    } else {
      break;
    }
  }

  return contentLines.slice(startIdx).join('\n').trim();
}

async function generate(prompt) {
  if (mode === 'sdk') {
    return sdkGenerate(prompt);
  }
  return cliGenerate(prompt);
}

async function generateMdxContent(slug) {
  const commandName = slugToCommandName(slug);
  console.log(`  Generating content for: ${commandName}...`);
  return generate(buildContentPrompt(slug));
}

async function generateDescriptionLine(slug) {
  const commandName = slugToCommandName(slug);
  console.log(`  Generating description for: ${commandName}...`);
  const raw = await generate(buildDescriptionPrompt(slug));
  return raw.replace(/^["']|["']$/g, '').split('\n')[0].trim();
}

function buildMdxFile(slug, description, body) {
  const commandName = slugToCommandName(slug);
  const title = `Monitoring ${commandName} in Laravel Production`;
  const date = todayDate();

  return `---
title: "${title}"
description: "${description}"
date: ${date}
---

${body}
`;
}

async function processSlug(slug) {
  console.log(`\nProcessing slug: ${slug}`);
  const body = await generateMdxContent(slug);
  await sleep(1500);
  const description = await generateDescriptionLine(slug);
  const mdx = buildMdxFile(slug, description, body);

  const filename = `monitor-${slug}.mdx`;
  writeFileSync(join(USE_CASES_DIR, filename), mdx, 'utf8');
  console.log(`  Written: src/content/use-cases/${filename}`);
  return filename;
}

function gitExec(cmd) {
  try {
    const output = execSync(cmd, { cwd: ROOT, encoding: 'utf8' });
    if (output.trim()) console.log(output.trim());
  } catch (err) {
    console.error(`Git command failed: ${cmd}`);
    console.error(err.message);
    throw err;
  }
}

// --- Main ---

async function main() {
  let queue;
  try {
    queue = JSON.parse(readFileSync(QUEUE_FILE, 'utf8'));
  } catch (err) {
    console.error('Failed to read pseo-queue.json:', err.message);
    process.exit(1);
  }

  if (!queue.pending || queue.pending.length === 0) {
    console.log('No pending slugs in pseo-queue.json. Nothing to do.');
    process.exit(0);
  }

  const batch = queue.pending.slice(0, 2);
  console.log(`Generating pages for: ${batch.join(', ')}`);

  mkdirSync(USE_CASES_DIR, { recursive: true });

  const generatedFiles = [];
  for (let i = 0; i < batch.length; i++) {
    const slug = batch[i];
    const filename = await processSlug(slug);
    generatedFiles.push(filename);
    if (i < batch.length - 1) {
      console.log('  Pausing 2s before next slug...');
      await sleep(2000);
    }
  }

  // Update queue
  queue.pending = queue.pending.slice(2);
  queue.completed = [...(queue.completed || []), ...batch];
  writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2) + '\n', 'utf8');
  console.log('\nUpdated pseo-queue.json');

  // Git: add, commit, push
  console.log('\nCommitting...');
  const commandNames = batch.map(slugToCommandName).join(', ');
  const fileArgs = generatedFiles.map((f) => `src/content/use-cases/${f}`).join(' ');

  gitExec(`git add ${fileArgs} pseo-queue.json`);
  gitExec(`git commit -m "feat(pseo): add monitoring pages for ${commandNames}"`);

  console.log('\nPushing...');
  gitExec('git push');

  console.log(`\nDone. Generated ${generatedFiles.length} pages: ${generatedFiles.join(', ')}`);
  process.exit(0);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
