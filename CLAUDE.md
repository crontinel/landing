# Crontinel Landing — CLAUDE.md

> **This is the landing page repo only** (`crontinel.com`).
> Do not reference or modify the OSS package (`crontinel`) or SaaS app (`crontinel-app`) from here.

## Scope of this repo

Astro 6 hybrid site deployed to Cloudflare Pages at `crontinel.com`.
Static by default. MDX content in `src/content/`.

## Stack

- Astro 6 + Tailwind CSS + MDX
- Cloudflare Pages (static output + CF adapter)
- No JS framework — Alpine via CDN only if needed
- Google Analytics 4 via `PUBLIC_GA_MEASUREMENT_ID` env var (consent-gated)

## Key files

| File | Purpose |
|---|---|
| `src/layouts/Base.astro` | Base HTML, SEO meta, cookie consent, GA4 |
| `src/components/Nav.astro` | Top navigation |
| `src/components/Footer.astro` | Footer |
| `src/pages/index.astro` | Homepage |
| `src/pages/pricing.astro` | Pricing page |
| `src/pages/features.astro` | Features page |
| `src/content.config.ts` | Content collection schemas |
| `src/content/blog/` | Blog posts (MDX) |
| `src/content/vs/` | Comparison pages (MDX) |
| `src/content/use-cases/` | Use case pages (MDX) |
| `src/content/integrations/` | Integration pages (MDX) |
| `.github/workflows/deploy.yml` | Auto-deploy to CF Pages on push to main |

## Dev conventions

- Dark theme only (gray-950 bg, green-400 accents)
- All pages must prerender (no server-side routes)
- SEO pages (blog, vs, use-cases, integrations) are MDX content collections
- Never add tracking scripts to app.crontinel.com — landing page only
- Run `npm run build` before committing to verify no errors

## Content plan

24 SEO pages total (v1): 10 blog, 4 vs/competitor, 6 use-case, 4 integration.
Add as MDX files in the respective `src/content/` subdirectory.
