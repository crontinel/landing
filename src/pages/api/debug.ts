import type { APIRoute } from 'astro';

// REMOVE DEBUG ENDPOINT AFTER USE

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    const cfContext = (locals as any)?.cfContext;
    const result: Record<string, unknown> = {
      cfContextKeys: cfContext ? Object.keys(cfContext) : 'none',
      cfContextCache: typeof cfContext?.cache,
      cfContextProps: cfContext?.props ? Object.keys(cfContext.props) : 'none',
      cfContextExports: typeof cfContext?.exports,
      envHasResend: typeof env !== 'undefined' ? Object.keys(env).filter(k => k.includes('RESEND')) : 'env not defined',
    };
    // @ts-ignore
    if (typeof globalThis !== 'undefined') {
      // @ts-ignore
      const gt = globalThis;
      result.globalKeys = Object.keys(gt).filter(k => k.includes('RESEND') || k.includes('env') || k.includes('secret'));
      result.envVarValue = typeof env !== 'undefined' ? env.RESEND_API_KEY : 'env undefined';
    }
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
