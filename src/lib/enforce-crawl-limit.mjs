import { classifyUserAgent } from './crawl-policy.mjs';

const BINDINGS = {
  ai: 'AI_CRAWL_LIMITER',
  search: 'SEARCH_CRAWL_LIMITER',
  unknown: 'UNKNOWN_CRAWL_LIMITER',
};

export async function enforceCrawlLimit(request, env) {
  const kind = classifyUserAgent(request.headers.get('user-agent'));
  const binding = BINDINGS[kind];

  if (!binding) {
    return null;
  }

  const limiter = env?.[binding];

  if (!limiter || typeof limiter.limit !== 'function') {
    return null;
  }

  const ip = request.headers.get('cf-connecting-ip') || 'unknown';

  try {
    const { success } = await limiter.limit({ key: `${kind}:${ip}` });

    if (success) {
      return null;
    }
  } catch {
    return null;
  }

  return new Response('Too Many Requests', {
    status: 429,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'retry-after': '60',
      'cache-control': 'no-store',
    },
  });
}
