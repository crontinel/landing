import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { contentItems, marketingLlms } from '../scripts/build-llms-txt.mjs';

const generated = marketingLlms();
const published = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8');

test('llms.txt lists every published content page', () => {
  const groups = [
    ['src/content/blog', '/blog'],
    ['src/content/use-cases', '/use-cases'],
    ['src/content/vs', '/vs'],
    ['src/content/integrations', '/integrations'],
  ];

  for (const [dir, prefix] of groups) {
    for (const item of contentItems(dir, prefix)) {
      assert.match(generated, new RegExp(item.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }
  }
});

test('llms.txt includes the public pages that were missing from the hand-written guide', () => {
  for (const url of [
    'https://crontinel.com/products/',
    'https://crontinel.com/agent/',
    'https://crontinel.com/changelog/',
    'https://crontinel.com/legal/privacy/',
    'https://crontinel.com/legal/terms/',
    'https://docs.crontinel.com/llms.txt',
  ]) {
    assert.match(generated, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('the published llms.txt matches the generator', () => {
  assert.equal(published, generated);
});
