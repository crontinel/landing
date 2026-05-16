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
const base = readFileSync('src/layouts/Base.astro', 'utf8');
const deployWorkflow = readFileSync('.github/workflows/deploy.yml', 'utf8');
const wrangler = readFileSync('wrangler.json', 'utf8');

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

const gaChecks = [
  ['Base layout reads the GA measurement ID', /PUBLIC_GA_MEASUREMENT_ID/.test(base)],
  ['Base layout falls back to the provided GA measurement ID', base.includes("G-R9Z5Y2H6X4")],
  ['Base layout loads gtag.js', base.includes('https://www.googletagmanager.com/gtag/js?id=')],
  ['Base layout gates GA on cookie consent', base.includes("localStorage.getItem('cookie_consent') === 'accepted'")],
  ['Deploy workflow passes the GA secret', deployWorkflow.includes('PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.PUBLIC_GA_MEASUREMENT_ID }}')],
  ['Wrangler config contains the GA measurement ID', wrangler.includes('PUBLIC_GA_MEASUREMENT_ID')],
  ['Wrangler config has the provided GA measurement ID', wrangler.includes('G-R9Z5Y2H6X4')],
];
const gaFailures = gaChecks.filter(([, pass]) => !pass).map(([label]) => label);

if (!scriptIncluded || missingHooks.length > 0 || gaFailures.length > 0) {
  console.error('Landing homepage or analytics wiring is incomplete.');
  if (!scriptIncluded) console.error('Missing /src/main.js script include on the homepage.');
  if (missingHooks.length > 0) console.error(`Missing hero hooks: ${missingHooks.join(', ')}`);
  if (gaFailures.length > 0) console.error(`GA readiness checks failed: ${gaFailures.join(', ')}`);
  process.exit(1);
}

console.log('Landing copy punctuation, hero animation wiring, and GA4 wiring verified.');
