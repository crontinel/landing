import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { enforceCrawlLimit } from '../src/lib/enforce-crawl-limit.mjs';

const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bingbot',
];

test('marketing robots allows named AI and search crawlers', () => {
  for (const bot of aiBots) {
    assert.match(robots, new RegExp(`User-agent: ${bot}\\nAllow: /`));
  }
  assert.match(robots, /Sitemap: https:\/\/crontinel\.com\/sitemap\.xml/);
  assert.match(robots, /LLMs\.txt: https:\/\/crontinel\.com\/llms\.txt/);
});

test('unknown automated clients receive 429 when the limiter is exhausted', async () => {
  const request = new Request('https://crontinel.com/', {
    headers: {
      'user-agent': 'python-requests/2.32.0',
      'cf-connecting-ip': '203.0.113.8',
    },
  });
  const response = await enforceCrawlLimit(request, {
    UNKNOWN_CRAWL_LIMITER: { async limit() { return { success: false }; } },
  });
  assert.equal(response?.status, 429);
  assert.equal(response?.headers.get('retry-after'), '60');
});

test('named AI crawlers use the AI limiter and can pass', async () => {
  let key = '';
  const request = new Request('https://crontinel.com/pricing/', {
    headers: {
      'user-agent': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.2; +https://openai.com/gptbot',
      'cf-connecting-ip': '203.0.113.9',
    },
  });
  const response = await enforceCrawlLimit(request, {
    AI_CRAWL_LIMITER: {
      async limit(options) {
        key = options.key;
        return { success: true };
      },
    },
    UNKNOWN_CRAWL_LIMITER: { async limit() { throw new Error('wrong limiter'); } },
  });
  assert.equal(response, null);
  assert.equal(key, 'ai:203.0.113.9');
});

test('browsers are not rate limited', async () => {
  const request = new Request('https://crontinel.com/', {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    },
  });
  const response = await enforceCrawlLimit(request, {
    UNKNOWN_CRAWL_LIMITER: { async limit() { throw new Error('browsers are not limited'); } },
  });
  assert.equal(response, null);
});

test('a missing limiter fails open', async () => {
  const request = new Request('https://crontinel.com/', {
    headers: { 'user-agent': 'Scrapy/2.11.0' },
  });
  assert.equal(await enforceCrawlLimit(request, {}), null);
});

test('a limiter error fails open', async () => {
  const request = new Request('https://crontinel.com/', {
    headers: { 'user-agent': 'curl/8.7.1', 'cf-connecting-ip': '203.0.113.10' },
  });
  const response = await enforceCrawlLimit(request, {
    UNKNOWN_CRAWL_LIMITER: { async limit() { throw new Error('binding down'); } },
  });
  assert.equal(response, null);
});
