import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect HTTP to HTTPS (except localhost dev)
  if (url.protocol === 'http:' && !['localhost', '127.0.0.1', '::1'].includes(url.hostname)) {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // Redirect www to non-www
  if (url.hostname === 'www.crontinel.com') {
    url.hostname = 'crontinel.com';
    return Response.redirect(url.toString(), 301);
  }

  // Keep canonical URLs on slash form to match the static site output and sitemap.
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    return next();
  }

  // Redirect /docs to docs.crontinel.com
  if (url.pathname === '/docs') {
    return Response.redirect('https://docs.crontinel.com', 301);
  }

  return next();
});
