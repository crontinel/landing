import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect HTTP to HTTPS (except localhost dev)
  if (url.protocol === 'http:' && url.hostname !== 'localhost') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // Redirect www to non-www
  if (url.hostname === 'www.crontinel.com') {
    url.hostname = 'crontinel.com';
    return Response.redirect(url.toString(), 301);
  }

  // Strip trailing slash (canonical: no trailing slash, except root /)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  // Redirect /docs to docs.crontinel.com
  if (url.pathname === '/docs') {
    return Response.redirect('https://docs.crontinel.com', 301);
  }

  return next();
});
