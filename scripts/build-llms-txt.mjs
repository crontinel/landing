import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parseFrontmatter, renderLlmsDocument } from '../src/lib/llms-document.mjs';

const site = 'https://crontinel.com';
const root = new URL('..', import.meta.url);

const collections = [
  { dir: 'src/content/blog', heading: 'Blog', prefix: '/blog' },
  { dir: 'src/content/use-cases', heading: 'Use cases', prefix: '/use-cases' },
  { dir: 'src/content/vs', heading: 'Comparisons', prefix: '/vs' },
  { dir: 'src/content/integrations', heading: 'Integrations', prefix: '/integrations' },
];

function walk(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      files.push(...walk(path));
    } else if (/\.(md|mdx)$/.test(entry)) {
      files.push(path);
    }
  }

  return files;
}

function pageUrl(prefix, file, base) {
  const slug = relative(base, file).replace(/\.(md|mdx)$/, '').replaceAll('\\', '/');
  return `${site}${prefix}/${slug}/`;
}

export function contentItems(dir, prefix) {
  const base = join(root.pathname, dir);

  return walk(base)
    .map((file) => {
      const source = readFileSync(file, 'utf8');
      const data = parseFrontmatter(source);

      if (data.draft === 'true') {
        return null;
      }

      return {
        title: data.title || relative(base, file),
        url: pageUrl(prefix, file, base),
        description: data.description || '',
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.url.localeCompare(b.url));
}

const core = [
  ['Home', `${site}/`, 'Cron and queue monitoring for any framework'],
  ['Features', `${site}/features/`, 'Supervisors, queue depth, cron runs, alerts, and integrations'],
  ['Pricing', `${site}/pricing/`, 'Hosted plans, including a free plan'],
  ['FAQ', `${site}/faq/`, 'Frequently asked questions'],
  ['About', `${site}/about/`, 'The product and the team'],
  ['Products', `${site}/products/`, 'Products in the Crontinel catalog'],
  ['Agent', `${site}/agent/`, 'Using Crontinel from an AI agent'],
  ['Changelog', `${site}/changelog/`, 'Product changes'],
  ['Security', `${site}/security/`, 'Security practices and data handling'],
  ['Privacy', `${site}/legal/privacy/`, 'Privacy policy'],
  ['Terms', `${site}/legal/terms/`, 'Terms of service'],
  ['Cookie policy', `${site}/legal/cookies/`, 'Cookie usage and consent'],
];

const sectionIndexes = {
  Blog: ['Blog', `${site}/blog/`, 'Cron monitoring guides, comparisons, and failure write-ups'],
  'Use cases': ['Use cases', `${site}/use-cases/`, 'Monitoring setups by framework and job'],
  Comparisons: ['Comparisons', `${site}/vs/`, 'Crontinel compared with other monitoring tools'],
  Integrations: ['Integrations', `${site}/integrations/`, 'Alert channels and framework integrations'],
};

export function marketingSections() {
  const sections = [
    {
      heading: 'Core pages',
      items: core.map(([title, url, description]) => ({ title, url, description })),
    },
  ];

  for (const collection of collections) {
    const [title, url, description] = sectionIndexes[collection.heading];
    sections.push({
      heading: collection.heading,
      items: [
        { title, url, description },
        ...contentItems(collection.dir, collection.prefix),
      ],
    });
  }

  sections.push(
    {
      heading: 'Documentation',
      items: [
        { title: 'Docs home', url: 'https://docs.crontinel.com/', description: 'Documentation for installing and operating Crontinel' },
        { title: 'Docs guide for assistants', url: 'https://docs.crontinel.com/llms.txt', description: 'Page index for the docs site' },
      ],
    },
    {
      heading: 'Connect',
      items: [
        { title: 'HTTP receipt', url: 'https://crontinel.com/#sec-install', description: 'POST /api/v1/ingest/cron with the app ingest key' },
        { title: 'Laravel package', url: 'https://github.com/crontinel/laravel', description: 'Schedule attach, queue depth, and Horizon. Outcome metrics are on GitHub main, not the current Packagist release.' },
      ],
    },
    {
      heading: 'Open source',
      items: [
        { title: 'GitHub organization', url: 'https://github.com/crontinel', description: 'Source repositories' },
        { title: 'Laravel package source', url: 'https://github.com/crontinel/laravel', description: 'Open source Laravel SDK' },
      ],
    },
    {
      heading: 'Status',
      items: [
        { title: 'Status page', url: 'https://status.crontinel.com', description: 'Crontinel service status' },
      ],
    },
  );

  return sections;
}

export function marketingLlms() {
  return renderLlmsDocument({
    title: 'Crontinel',
    summary: 'Completed is not done. Crontinel tells you when a background job finished without doing the work. Any runtime sends one HTTP receipt. The Laravel package attaches that receipt from the scheduler and can add queue depth and Horizon freshness.',
    sections: marketingSections(),
  });
}

if (process.argv[1] && process.argv[1].endsWith('build-llms-txt.mjs')) {
  const output = new URL('../public/llms.txt', import.meta.url);
  writeFileSync(output, marketingLlms());
}
