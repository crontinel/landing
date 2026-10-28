import astroWorker from './dist/_worker.js/index.js';
import { enforceCrawlLimit } from './src/lib/enforce-crawl-limit.mjs';
import { edgeRedirectResponse } from './src/lib/edge-redirects.mjs';
import { markdownPath, wantsMarkdown } from './src/lib/markdown-page.mjs';

const localHosts = new Set(['localhost', '127.0.0.1', '::1']);

export default {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    const isTailscaleHost = url.hostname.endsWith('.ts.net');

    const needsCanonicalHost =
      !isTailscaleHost &&
      !localHosts.has(url.hostname) &&
      (url.protocol === 'http:' || url.hostname === 'www.crontinel.com');

    if (needsCanonicalHost) {
      url.protocol = 'https:';
      url.hostname = 'crontinel.com';
    }

    // Answer known redirects before assets. Pages turns external _redirects
    // into Worker exception 1101 and internal ones into duplicate 200s.
    const redirected = edgeRedirectResponse(url);
    if (redirected) {
      return redirected;
    }

    if (needsCanonicalHost) {
      return Response.redirect(url.toString(), 301);
    }

    const limited = await enforceCrawlLimit(request, env);
    if (limited) {
      return limited;
    }

    const mdPath = wantsMarkdown(request.headers.get('Accept')) && markdownPath(url.pathname);
    if (mdPath) {
      const md = await env.ASSETS.fetch(new URL(mdPath, url));
      if (md.ok) {
        const headers = new Headers(md.headers);
        headers.set('Content-Type', 'text/markdown; charset=utf-8');
        headers.set('Vary', 'Accept');
        return new Response(md.body, { status: 200, headers });
      }
    }

    return astroWorker.fetch(request, env, ctx);
  },
};
