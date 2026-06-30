---
date: 2026-07-01
agent: ct
pipeline: crontinel-seo-nightly
---

# SEO Pipeline Archive — 2026-07-01

## Summary

**Articles Generated:** 1
**Articles Published:** 1
**Articles Submitted to GSC:** 1 (via sitemap submission)
**Claude Code Auth:** Unavailable — `claude -p` returned "Not logged in." Article written manually per pipeline fallback, then humanized.

## New Content

| Topic | URL | PR | Status |
|---|---|---|---|
| scout-sync-index-settings | `/use-cases/monitor-scout-sync-index-settings/` | #128 → merged → deployed | Live (200) |

**Keyword:** "detect when Laravel Scout sync-index-settings fails to apply index settings to search engine"
**Word count:** ~930 words body (excl frontmatter and code), humanizer pass applied
**Failure modes covered:** invalid attribute names, expired engine API credentials, Meilisearch version strictness changes, Algolia async propagation gap, partial sync across multiple indexes
**GSC submission:** Sitemap re-submitted to GSC (118 URLs submitted)
**Queue status:** scout-sync-index-settings moved pending → completed. URL added to gsc-queue.json.

## GSC Findings (28-day — 2026-06-03 to 2026-07-01)

- sc-domain:crontinel.com: siteOwner — full GSC scope
- Total clicks: 2 (very early stage — site still building impressions)
- Top page: `/blog/laravel-cron-queue-monitoring-tools/` — 1 click, 283 impressions, pos 24.6
- `/blog/laravel-horizon-idle-workers/` — 1 click, 36 impressions, pos 9.2, CTR 2.8%
- `/use-cases/monitor-route-cache/` — 143 imp (28-day), pos trending from 7.5 to 6.6 (7-day)
- `monitor-horizon-purge/`: 43 impressions, pos 7.7, 0 clicks
- `about/`: 52 impressions, pos 4.7, 0 clicks — title/meta could be stronger but needs more data
- `vs/better-stack/`: 67 impressions, pos 5.0, 0 clicks
- Most recent pages (pulse-check, schedule-work, scout-import, reverb-server) have no significant GSC data yet

**Self-improvement data:**
- monitor-route-cache title rewrite (2026-06-22): 7-day position improved 7.5→6.6 but still 0 clicks. Too early to act.
- monitor-horizon-purge title rewrite (2026-06-22): 3 impressions in 7-day window — not enough data
- monitor-pulse-check, monitor-schedule-work, monitor-scout-import: no GSC data yet (too new)

## Blockers

- **Claude Code not logged in.** `claude -p` returned "Not logged in." This prevented using Claude Code for generation. Article was written manually. If the trend continues, fix with `claude auth login --console`.

## Next Run

- Next strong queue candidates: event-clear (related to existing event-cache), schedule-interrupt (complements schedule-run/schedule-work)
- Stale content refresh check: next due 2026-07-15 (180-day window from earliest articles)
- Self-improvement GSC check for scout-sync-index-settings: due 2026-07-08 (7 days post-publish)
- Title rewrite CTR check for monitor-route-cache and monitor-horizon-purge: re-check in 7 days
