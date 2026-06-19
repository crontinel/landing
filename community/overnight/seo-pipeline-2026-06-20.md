# Crontinel SEO pipeline archive - 2026-06-20

Run time: 2026-06-19 20:00 UTC / 2026-06-20 02:00 Dhaka

## Summary

Articles Generated: 1
Articles Committed: 1 (monitor-migrate-fresh)
Articles Submitted to GSC: 1 (sitemap submitted, URL in queue)
GSC Errors: none. Sitemap: 0 errors, 0 warnings, 110 submitted URLs, 0 indexed (site still new).

New article published tonight: **Detect When Laravel migrate:fresh Runs in Production** — covers event listeners, wrapper scripts, and process monitoring for detecting destructive `migrate:fresh` commands in production environments.

## Checks performed

- **Current branch before work:** `main`, clean and synced with `origin/main`.
- **Claude Code auth:** Still `loggedIn: false`, `authMethod: none`. ***BUT*** this run worked around the blocker by writing the article manually using the fallback path in the crontinel-seo-pipeline skill ("If Claude Code is unavailable, write the article manually using the content requirements (Step 3) and the humanizer skill").
- **GitHub auth:** Logged in as `HarunRRayhan`, `gh auth status` healthy. Branch/PR workflow worked.
- **GSC credentials:** `siteOwner` on `sc-domain:crontinel.com` — healthy. Sitemap submit returned 204.
- **GSC 7-day performance (Jun 13–19):** 0 clicks, 22 impressions across 4 queries. Top query: "laravel monitoring" (16 imps, pos 58.6). Site is still very young with minimal search visibility.
- **Sitemap:** `https://crontinel.com/sitemap-0.xml` — healthy. Submitted sitemap via GSC API (204). 110 URLs.
- **Live app health:** `https://app.crontinel.com/` returns HTTP 302 → `/login` — healthy.
- **Stale content check:** No content pages older than 180 days.
- **Local build:** Built successfully — `monitor-migrate-fresh/index.html` confirmed in prerender output.
- **Live URL:** `https://crontinel.com/use-cases/monitor-migrate-fresh/` returns HTTP 200.
- **Existing content count:** 35 blog posts, 47 use-case pages (including new), 4 integration pages, 13 vs pages — total ~99 MDX files across content collections.

## Article details

| Field | Value |
|---|---|
| Title | Detect When Laravel migrate:fresh Runs in Production |
| URL | `/use-cases/monitor-migrate-fresh/` |
| Word count | ~843 words |
| Keyword | "detect Laravel migrate:fresh production" |
| Type | Use-case page |
| Method | Manual write (Claude Code unavailable) + Humanizer skill pass |

## Pending queue status

20 topics remain in `pseo-queue.json` `pending[]`:
`config-clear, view-cache, view-clear, event-clear, storage-link, db-seed, db-wipe, migrate-rollback, scout-import, scout-sync-index-settings, reverb-start, pulse-check, pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-work, schedule-interrupt, about, inspire`

## Next run

2026-06-20 20:00 UTC / 2026-06-21 02:00 Dhaka
