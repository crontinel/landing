// Static redirects served by the Worker before Astro or Pages assets run.
// public/_redirects must list the same 301 rules. 410 and trailing-slash
// redirects stay in the Worker: Pages _redirects cannot express them safely.

export const redirectRules = [
  { path: '/register', location: 'https://app.crontinel.com/register', status: 301 },
  { path: '/register/', location: 'https://app.crontinel.com/register', status: 301 },
  { path: '/signup', location: 'https://app.crontinel.com/register', status: 301 },
  { path: '/signup/', location: 'https://app.crontinel.com/register', status: 301 },
  { path: '/docs', location: 'https://docs.crontinel.com/introduction/', status: 301 },
  { path: '/docs/', location: 'https://docs.crontinel.com/introduction/', status: 301 },
  { path: '/vs/datadog', location: '/vs/crontinel-vs-datadog/', status: 301 },
  { path: '/vs/datadog/', location: '/vs/crontinel-vs-datadog/', status: 301 },
  { path: '/vs/cronitor', location: '/vs/crontinel-vs-cronitor/', status: 301 },
  { path: '/vs/cronitor/', location: '/vs/crontinel-vs-cronitor/', status: 301 },
  { path: '/vs/better-stack', location: '/vs/crontinel-vs-better-stack/', status: 301 },
  { path: '/vs/better-stack/', location: '/vs/crontinel-vs-better-stack/', status: 301 },
  { path: '/vs/healthchecksio', location: '/vs/crontinel-vs-healthchecks-io/', status: 301 },
  { path: '/vs/healthchecksio/', location: '/vs/crontinel-vs-healthchecks-io/', status: 301 },
  { path: '/vs/horizon', location: '/use-cases/laravel-horizon-monitoring/', status: 301 },
  { path: '/vs/horizon/', location: '/use-cases/laravel-horizon-monitoring/', status: 301 },
  { path: '/vs/crontinel-vs-betteruptime', location: '/vs/crontinel-vs-better-stack/', status: 301 },
  { path: '/vs/crontinel-vs-betteruptime/', location: '/vs/crontinel-vs-better-stack/', status: 301 },
  { path: '/blog/horizon-monitoring', location: '/blog/how-to-monitor-horizon-jobs-production/', status: 301 },
  { path: '/blog/horizon-monitoring/', location: '/blog/how-to-monitor-horizon-jobs-production/', status: 301 },
  { path: '/blog/bull-queue-monitoring', location: '/vs/crontinel-vs-cronitor/', status: 301 },
  { path: '/blog/bull-queue-monitoring/', location: '/vs/crontinel-vs-cronitor/', status: 301 },
  { path: '/blog/celery-beat-monitoring', location: '/vs/crontinel-vs-cronitor/', status: 301 },
  { path: '/blog/celery-beat-monitoring/', location: '/vs/crontinel-vs-cronitor/', status: 301 },
  { path: '/blog/incident-alert-system-laravel', location: '/use-cases/incident-alert-system/', status: 301 },
  { path: '/blog/incident-alert-system-laravel/', location: '/use-cases/incident-alert-system/', status: 301 },
  { path: '/blog/migrate-from-thenping-me', location: '/vs/crontinel-vs-thenping/', status: 301 },
  { path: '/blog/migrate-from-thenping-me/', location: '/vs/crontinel-vs-thenping/', status: 301 },
  { path: '/api/waitlist-count', status: 410 },
  { path: '/api/waitlist-count/', status: 410 },
];

const rulesByPath = new Map(redirectRules.map((rule) => [rule.path, rule]));

export function edgeRedirect(url) {
  const rule = rulesByPath.get(url.pathname);

  if (rule) {
    if (rule.status === 410) {
      return { status: 410 };
    }

    const location = rule.location.startsWith('http')
      ? rule.location
      : new URL(rule.location, url.origin).toString();

    return { status: rule.status, location };
  }

  if (needsTrailingSlash(url.pathname)) {
    const destination = new URL(url);
    destination.pathname = `${url.pathname}/`;
    return { status: 308, location: destination.toString() };
  }

  return null;
}

export function edgeRedirectResponse(url) {
  const decision = edgeRedirect(url);

  if (!decision) {
    return null;
  }

  if (decision.status === 410) {
    return new Response('Gone', {
      status: 410,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'public, max-age=3600',
      },
    });
  }

  return Response.redirect(decision.location, decision.status);
}

function needsTrailingSlash(pathname) {
  // /api/subscribe is a POST endpoint. A slash redirect would miss that route.
  if (pathname === '/' || pathname.endsWith('/') || pathname.startsWith('/api/')) {
    return false;
  }

  const last = pathname.split('/').pop() || '';
  return !last.includes('.');
}
