// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  trailingSlash: 'always',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  build: {
    assets: '_astro',
  },
  integrations: [mdx()],
  site: 'https://crontinel.com',
  server: {
    // Local-dev-only: allow the site to be reached via a Tailscale hostname
    // (e.g. https://<mac-hostname>.<tailnet>.ts.net:<port>/) when exposed to
    // other devices on the user's private tailnet via Conductor. Vite's
    // DNS-rebinding protection otherwise rejects any non-localhost Host
    // header with a 403. `true` accepts any host rather than hardcoding one
    // machine's Tailscale hostname (which would break on hostname changes
    // or for teammates using their own Macs). Set via Astro's own
    // `server.allowedHosts` (not `vite.server.allowedHosts`): Astro merges
    // its own server config over the user's `vite` config last, and older
    // Vite versions the Astro cli depends on don't special-case boolean
    // `true` there, so a `vite.server.allowedHosts: true` gets silently
    // downgraded to `[true]` (a useless host-string allowlist) during that
    // merge. This top-level key is Astro's documented option and survives
    // the merge intact. Only affects `astro dev`; Cloudflare Pages runs
    // `astro build`, which never invokes Vite's dev server host-check.
    allowedHosts: true,
  },
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
});
