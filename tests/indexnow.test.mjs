import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { buildIndexNowBody, collectUrls, extractLocs, isSitemapIndex, pingIndexNow } from '../scripts/indexnow.mjs';

const key = 'b7e2c4a91f6d4c0e8a3b5d7f9c1e2a40';

test('the IndexNow key file is published at the site root', () => {
  const published = readFileSync(new URL(`../public/${key}.txt`, import.meta.url), 'utf8').trim();
  assert.equal(published, key);
});

test('sitemap indexes expand to page URLs', async () => {
  const pages = await collectUrls('https://crontinel.com/sitemap-index.xml', async (url) => {
    if (url.endsWith('sitemap-index.xml')) {
      return new Response(`<sitemapindex><sitemap><loc>https://crontinel.com/sitemap-0.xml</loc></sitemap></sitemapindex>`);
    }

    return new Response(`<urlset><url><loc>https://crontinel.com/</loc></url><url><loc>https://crontinel.com/pricing/</loc></url></urlset>`);
  });

  assert.deepEqual(pages, ['https://crontinel.com/', 'https://crontinel.com/pricing/']);
});

test('a urlset is submitted as an IndexNow body', () => {
  const xml = '<urlset><url><loc>https://crontinel.com/faq/</loc></url></urlset>';
  assert.equal(isSitemapIndex(xml), false);
  assert.deepEqual(extractLocs(xml), ['https://crontinel.com/faq/']);
  assert.deepEqual(buildIndexNowBody({ host: 'crontinel.com', key, urls: extractLocs(xml) }), {
    host: 'crontinel.com',
    key,
    keyLocation: `https://crontinel.com/${key}.txt`,
    urlList: ['https://crontinel.com/faq/'],
  });
});

test('IndexNow retries until the key is accepted', async () => {
  let calls = 0;
  const result = await pingIndexNow({
    host: 'crontinel.com',
    key,
    urls: ['https://crontinel.com/'],
    fetchImpl: async () => {
      calls += 1;
      return new Response('', { status: calls === 1 ? 403 : 202 });
    },
    wait: async () => {},
  });

  assert.equal(result.status, 202);
  assert.equal(calls, 2);
});
