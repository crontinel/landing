import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

const RATE_LIMIT_KV = 'subscribe_ratelimit';

type SubscribeBody = {
  email?: unknown;
};

type TurnstileResponse = {
  success?: boolean;
};

type SubscribeEnv = Cloudflare.Env & {
  TURNSTILE_SECRET_KEY?: string;
  SUBSCRIBE_KV?: KVNamespace;
  RESEND_API_KEY?: string;
  RESEND_AUDIENCE_ID?: string;
};

const bindings = env as SubscribeEnv;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json() as SubscribeBody;
    const email = body.email;

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ ok: false, error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // --- Bot protection via Cloudflare Turnstile ---
    const turnstileToken = request.headers.get('cf-turnstile-response');
    const turnstileSecret = bindings.TURNSTILE_SECRET_KEY;

    if (turnstileSecret && turnstileToken) {
      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
          remoteip: request.headers.get('CF-Connecting-IP') ?? '',
        }),
      });

      const turnstileData = await turnstileRes.json() as TurnstileResponse;
      if (!turnstileData.success) {
        return new Response(JSON.stringify({ ok: false, error: 'Security check failed. Please try again.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // --- Rate limiting via KV (max 3 signups per IP per hour) ---
    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const kv = bindings.SUBSCRIBE_KV;

    if (kv) {
      const key = `${RATE_LIMIT_KV}:${ip}`;
      const existing = await kv.get(key);
      const count = existing ? parseInt(existing, 10) : 0;

      if (count >= 3) {
        return new Response(JSON.stringify({
          ok: false,
          error: 'Too many signup attempts. Please try again later.',
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '3600',
          },
        });
      }

      await kv.put(key, String(count + 1), { expirationTtl: 3600 });
    }

    const resendApiKey = bindings.RESEND_API_KEY;
    const resendAudienceId = bindings.RESEND_AUDIENCE_ID;

    if (!resendApiKey || !resendAudienceId) {
      console.error('Missing env vars:', {
        hasApiKey: !!resendApiKey,
        hasAudienceId: !!resendAudienceId,
      });
      return new Response(JSON.stringify({ ok: false, unavailable: true, error: 'Signup is temporarily unavailable.' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resendRes = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        audience_id: resendAudienceId,
      }),
    });

    const data = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Resend error:', data);
      return new Response(JSON.stringify({ ok: false, error: 'Failed to subscribe' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Subscribe error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
