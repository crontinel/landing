import { defineMiddleware } from 'astro:middleware';
import { edgeRedirectResponse } from './lib/edge-redirects.mjs';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect HTTP to HTTPS (except localhost dev and Tailscale hosts, which
  // terminate TLS at the tailnet edge and forward to us as plain HTTP)
  const isTailscaleHost = url.hostname.endsWith('.ts.net');
  if (
    url.protocol === 'http:' &&
    !['localhost', '127.0.0.1', '::1'].includes(url.hostname) &&
    !isTailscaleHost
  ) {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // Redirect www to non-www
  if (url.hostname === 'www.crontinel.com') {
    url.hostname = 'crontinel.com';
    return Response.redirect(url.toString(), 301);
  }

  const redirected = edgeRedirectResponse(url);
  if (redirected) {
    return redirected;
  }

  // Redirect /sitemap-index.xml (wrong GSC path) to correct sitemap
  if (url.pathname === '/sitemap-index.xml') {
    url.pathname = '/sitemap.xml';
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
