import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { edgeRedirect, edgeRedirectResponse, redirectRules } from '../src/lib/edge-redirects.mjs';

const redirectsFile = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8');

function publishedRedirects(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const [path, location, status] = line.split(/\s+/);
      return { path, location, status: Number(status) };
    });
}

test('Pages _redirects matches the Worker 301 table', () => {
  const fromFile = publishedRedirects(redirectsFile);
  const fromWorker = redirectRules
    .filter((rule) => rule.status === 301)
    .map((rule) => ({ path: rule.path, location: rule.location, status: rule.status }));

  assert.deepEqual(fromFile, fromWorker);
  assert.equal(redirectRules.some((rule) => rule.status === 410 && rule.path === '/api/waitlist-count'), true);
});

test('signup and register leave the marketing host', () => {
  for (const path of ['/register', '/register/', '/signup', '/signup/']) {
    const decision = edgeRedirect(new URL(`https://crontinel.com${path}`));
    assert.equal(decision.status, 301);
    assert.equal(decision.location, 'https://app.crontinel.com/register');
  }
});

test('retired aliases and docs paths redirect once to the canonical URL', () => {
  const cases = [
    ['/docs', 'https://docs.crontinel.com/introduction/'],
    ['/docs/', 'https://docs.crontinel.com/introduction/'],
    ['/vs/crontinel-vs-betteruptime', 'https://crontinel.com/vs/crontinel-vs-better-stack/'],
    ['/blog/horizon-monitoring/', 'https://crontinel.com/blog/how-to-monitor-horizon-jobs-production/'],
    ['/vs/datadog', 'https://crontinel.com/vs/crontinel-vs-datadog/'],
  ];

  for (const [path, location] of cases) {
    const decision = edgeRedirect(new URL(`https://crontinel.com${path}`));
    assert.equal(decision.status, 301, path);
    assert.equal(decision.location, location, path);
  }
});

test('the removed waitlist endpoint is gone', () => {
  for (const path of ['/api/waitlist-count', '/api/waitlist-count/']) {
    const response = edgeRedirectResponse(new URL(`https://crontinel.com${path}`));
    assert.equal(response.status, 410);
  }
});

test('extension-less paths gain one trailing slash and files do not', () => {
  const pricing = edgeRedirect(new URL('https://crontinel.com/pricing?plan=pro'));
  assert.equal(pricing.status, 308);
  assert.equal(pricing.location, 'https://crontinel.com/pricing/?plan=pro');

  for (const path of ['/pricing/', '/sitemap.xml', '/robots.txt', '/logo.png', '/_astro/app.js', '/api/subscribe']) {
    assert.equal(edgeRedirect(new URL(`https://crontinel.com${path}`)), null, path);
  }
});
