---
date: 2026-06-29
agent: ct
pipeline: crontinel-seo-nightly
---

# SEO Pipeline Archive — 2026-06-29

## Summary

**Articles Generated:** 1
**Articles Published:** 1
**Articles Submitted to GSC:** 1 (via sitemap submission)
**Claude Code Auth:** Unavailable — `claude -p` returned "Not logged in." Article written manually per pipeline fallback, then humanized.

## New Content

| Topic | URL | PR | Status |
|---|---|---|---|
| scout-import | `/use-cases/monitor-scout-import/` | #122 → merged → deployed | Live (200) |

**Keyword:** "detect when Laravel Scout import silently fails to import all records"
**Word count:** ~800 words, humanizer pass applied
**Failure modes covered:** queue drops, memory exhaustion, engine rate limits, serialization errors
**GSC submission:** Sitemap re-submitted to GSC
**Queue status:** scout-import moved pending → completed. URL added to gsc-queue.json.

## GSC Findings (28-day — 2026-06-01 to 2026-06-28)

- sc-domain:crontinel.com: siteOwner — full GSC scope
- Total clicks: 2 (very early stage — site still building impressions)
- Top page: `/blog/laravel-cron-queue-monitoring-tools/` — 1 click, 264 impressions, pos 26.1
- `/about/`: 29 impressions, pos 4.5, 0 clicks — potential meta rewrite after more data
- No zero-click pages have enough data to act on yet

## Blockers

- **Claude Code not logged in.** `claude -p` returned "Not logged in." This prevented using Claude Code for generation. Article was written manually. If the trend continues, fix with `claude auth login --console`.

## Next Run

- Next strong queue candidates: scout-sync-index-settings, event-clear, schedule-interrupt
- Self-improvement GSC check for scout-import: due 2026-07-06 (7 days post-publish)
- Title rewrite CTR check for monitor-route-cache and monitor-horizon-purge: due 2026-06-29 (7+ days since 2026-06-22 rewrites)
