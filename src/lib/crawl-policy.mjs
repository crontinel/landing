import bots from './crawl-bots.json' with { type: 'json' };

export const AI_BOTS = bots.ai;
export const SEARCH_BOTS = bots.search;

function includesToken(userAgent, token) {
  return userAgent.toLowerCase().includes(token.toLowerCase());
}

export function classifyUserAgent(userAgent) {
  const ua = userAgent || '';

  if (AI_BOTS.some((token) => includesToken(ua, token))) {
    return 'ai';
  }

  if (SEARCH_BOTS.some((token) => includesToken(ua, token))) {
    return 'search';
  }

  if (looksLikeBrowser(ua)) {
    return 'browser';
  }

  return 'unknown';
}

function looksLikeBrowser(userAgent) {
  if (!/Mozilla\/5\.0/.test(userAgent)) {
    return false;
  }

  if (/bot|crawler|spider|slurp|curl|wget|python|scrapy|headless/i.test(userAgent)) {
    return false;
  }

  return /(Chrome|Firefox|Safari|Edg|OPR)\//.test(userAgent);
}

function agentGroup(token, rule) {
  return `User-agent: ${token}\n${rule}\n`;
}

export function renderMarketingRobots({ sitemap, llms }) {
  const named = [...AI_BOTS, ...SEARCH_BOTS]
    .map((token) => agentGroup(token, 'Allow: /'))
    .join('\n');

  return [
    '# Named AI crawlers may learn from this public site.',
    '# Unknown automated clients are rate limited at the edge.',
    '',
    named,
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    `LLMs.txt: ${llms}`,
    '',
  ].join('\n');
}

export function renderAppRobots({ sitemap }) {
  const denied = AI_BOTS
    .map((token) => agentGroup(token, 'Disallow: /'))
    .join('\n');

  return [
    '# AI crawlers learn from crontinel.com and docs.crontinel.com.',
    '# This host allows crawlers to read only the public pages below.',
    '',
    denied,
    'User-agent: *',
    'Allow: /status$',
    'Allow: /status/',
    'Allow: /waitlist$',
    'Allow: /pricing$',
    'Allow: /legal/',
    'Allow: /sitemap.xml$',
    'Allow: /robots.txt$',
    'Disallow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');
}
