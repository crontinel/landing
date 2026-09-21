import astroWorker from './dist/_worker.js/index.js';

const localHosts = new Set(['localhost', '127.0.0.1', '::1']);

export default {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    const isTailscaleHost = url.hostname.endsWith('.ts.net');

    if (
      !isTailscaleHost &&
      !localHosts.has(url.hostname) &&
      (url.protocol === 'http:' || url.hostname === 'www.crontinel.com')
    ) {
      url.protocol = 'https:';
      url.hostname = 'crontinel.com';
      return Response.redirect(url.toString(), 301);
    }

    return astroWorker.fetch(request, env, ctx);
  },
};
