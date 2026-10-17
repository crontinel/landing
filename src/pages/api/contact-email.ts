import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

// Addresses live only here, so they never appear in page HTML or the client bundle.
const CONTACTS = {
  support: 'support@crontinel.com',
  security: 'security@crontinel.com',
};

const bindings = env as Cloudflare.Env & { TURNSTILE_SECRET_KEY?: string };

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export const POST: APIRoute = async ({ request }) => {
  const secret = bindings.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return json({ ok: false, error: 'Contact details are temporarily unavailable.' }, 503);
  }

  const { token } = (await request.json().catch(() => ({}))) as { token?: unknown };
  if (typeof token !== 'string' || !token) {
    return json({ ok: false, error: 'Please complete the security check.' }, 400);
  }

  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') ?? '',
    }),
  }).then((r) => r.json() as Promise<{ success?: boolean }>).catch(() => ({ success: false }));

  if (!verify.success) {
    return json({ ok: false, error: 'Security check failed. Please try again.' }, 403);
  }

  return json({ ok: true, contacts: CONTACTS });
};
