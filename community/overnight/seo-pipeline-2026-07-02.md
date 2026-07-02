---
date: 2026-07-02
agent: ct
pipeline: crontinel-seo-nightly
---

# SEO Pipeline Archive — 2026-07-02

## Summary

**Articles Generated:** 0
**Articles Published:** 0
**Articles Submitted to GSC:** 0
**Claude Code Auth:** Unavailable — `claude auth status` reports `loggedIn: false`.

## No New Content — Rationale

All remaining pending queue topics are low-search-intent artisan commands:

| Topic | Assessment |
|---|---|
| `event-clear` | Closely related to already-covered `event-cache`. Low incremental SEO value. |
| `db-seed` | Laravel dev topic, not monitoring. Doesn't tie naturally to Crontinel. |
| `db-wipe` | Same as db-seed. Dev command, not monitoring use-case. |
| `migrate-rollback` | Already adjacent to published `monitor-migrate` and `monitor-migrate-fresh`. |
| `pulse-restart` | Related to published `monitor-pulse-check`. Low search volume. |
| `pennant-purge` | Niche Laravel Pennant feature. Extremely low search intent. |
| `passport-purge` | Low search volume for API token purging as standalone content. |
| `sanctum-prune-expired` | Same as passport-purge. Niche command. |
| `schedule-interrupt` | Adjacent to published `monitor-schedule-run` and `monitor-schedule-work`. |
| `about` | `php artisan about` is a dev info command, not a monitoring scenario. |
| `inspire` | Novelty command — zero search intent. |

None cleared the quality bar for a strong, specific, genuinely useful SEO article. Preferring quality over volume.

## GSC Findings (30-day — 2026-06-03 to 2026-07-01)

- **sc-domain:crontinel.com**: siteOwner — full GSC permission
- **Total clicks (30d):** 3 across all pages (very early stage, site building impressions)
- **Top queries by impressions:** "laravel monitoring" (60 imp, pos 64.9, 0 clicks)
- **Best performing pages:**
  - `/blog/laravel-cron-queue-monitoring-tools/` — 1 click, 317 impressions, pos 23.6
  - `/blog/laravel-cron-timezone-issues/` — 1 click, 32 impressions, pos 7.7, CTR 3.1%
  - `/blog/laravel-horizon-idle-workers/` — 1 click, 36 impressions, pos 9.2, CTR 2.8%
- **Homepage:** 0 clicks, 174 impressions, pos 7.6 — title/meta could be stronger but 174 imp/30d is still low data
- **`/about/`:** 0 clicks, 61 impressions, pos 5.0 — solid position but no clicks yet
- Most use-case pages still have zero or single-digit impressions — indexing is still building

**Sitemap status:** 119 submitted URLs, 0 indexed — GSC still processing.

## Stale Content Check

- No content >180 days old
- Next stale-content due: ~2026-10-06 (earliest articles from April 2026)

## Technical Checks

- **npm run build:** ✅ Passes clean
- **No pending PRs:** main branch clean
- **GitHub auth:** ✅ Logged in (gh)
- **GSC auth:** ✅ siteOwner on sc-domain:crontinel.com

## Blockers

- **Claude Code not logged in.** `claude auth status` reports `loggedIn: false` for non-interactive use. This prevents Claude Code-driven content generation if a strong topic emerges.

## Next Run

- Remaining queue topics are low-intent artisan commands. Consider trimming the queue or adding new topic ideas from GSC query gaps.
- Stale content refresh: no articles due until October 2026.
- Self-improvement GSC check for recent posts (scout-sync-index-settings, scout-import): due 2026-07-08+.
