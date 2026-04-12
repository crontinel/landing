import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect www to non-www
  if (url.hostname === 'www.crontinel.com') {
    url.hostname = 'crontinel.com';
    return Response.redirect(url.toString(), 301);
  }

  return next();
});
