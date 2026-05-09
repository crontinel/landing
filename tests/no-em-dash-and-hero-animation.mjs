import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const emDash = String.fromCharCode(0x2014);
const disallowed = [
  emDash,
  '&' + 'mdash;',
  '&#' + '8212;',
  '&#x' + '2014;',
];
const offenders = [];
const files = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

for (const file of files) {
  if (!existsSync(file)) continue;

  let content;
  try {
    content = readFileSync(file, 'utf8');
  } catch {
    continue;
  }

  content.split(/\r?\n/).forEach((line, index) => {
    if (disallowed.some((token) => line.includes(token))) {
      offenders.push(`${file}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (offenders.length > 0) {
  console.error('No em dash characters or entities are allowed.');
  console.error(offenders.join('\n'));
  process.exit(1);
}

const index = readFileSync('src/pages/index.astro', 'utf8');
const scriptIncluded = /<script\b[^>]+src=["']\/src\/main\.js["'][^>]*><\/script>/.test(index);
const heroHooks = [
  'id="hb-line"',
  'id="hb-fill"',
  'id="hb-dot"',
  'id="feed"',
  'id="stat-jobs"',
  'id="stat-lat"',
];
const missingHooks = heroHooks.filter((hook) => !index.includes(hook));

if (!scriptIncluded || missingHooks.length > 0) {
  console.error('Landing hero animation wiring is incomplete.');
  if (!scriptIncluded) console.error('Missing /src/main.js script include on the homepage.');
  if (missingHooks.length > 0) console.error(`Missing hero hooks: ${missingHooks.join(', ')}`);
  process.exit(1);
}

console.log('Landing copy punctuation and hero animation wiring verified.');
