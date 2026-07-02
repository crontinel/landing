---
date: 2026-07-03
agent: ct
pipeline: crontinel-seo-nightly
---

# SEO Pipeline Archive — 2026-07-03

## Summary

**Articles Generated:** 1
**Articles Published:** 1
**Articles Submitted to GSC:** 1 (via sitemap resubmission)
**Claude Code Auth:** Unavailable — `claude -p` returns "Not logged in".
**Blockers:** Claude Code auth still down for non-interactive use.

## New Content

**`monitor-event-clear`** — companion piece to the existing `monitor-event-cache` article, following the same pattern as `config-clear` (companion to `config-cache`).

| Field | Value |
|---|---|
| URL | `https://crontinel.com/use-cases/monitor-event-clear/` |
| Keyword | "detect when Laravel event:clear silently fails to clear cached events" |
| Word count | ~780 words body, 2 code samples |
| Humanizer pass | Applied (1 em dash replaced with comma) |
| PR | #131 — squash merged to main, branch deleted |
| Build | ✅ Clean |

**Coverage gap filled:** The event cache pair is now complete (event:cache + event:clear), matching the config cache pair (config:cache + config:clear). Covers cleared-but-never-rebuilt, mixed cache states in rolling deploys, permission errors, and one-server-cleared scenarios.

## GSC Findings (30-day — 2026-06-03 to 2026-07-03)

- **sc-domain:crontinel.com**: siteOwner — full GSC permission
- **Total clicks (30d):** 3 across all pages
- **Total impressions (30d):** 846
- **Top pages by impressions:**
  - `/blog/laravel-cron-queue-monitoring-tools/` — 1 click, 321 imp, pos 23.7
  - `/` — 0 clicks, 190 imp, pos 7.1 (improving from 7.6 last period to 5.2 in last 12d — steady upward trend)
  - `/about/` — 0 clicks, 67 imp, pos 5.0
  - `/blog/laravel-cron-timezone-issues/` — 1 click, 32 imp, pos 7.7 (CTR 3.1%)
  - `/blog/laravel-horizon-idle-workers/` — 1 click, 36 imp, pos 9.2 (CTR 2.8%)
- **Sitemap:** 119 submitted, 0 indexed — GSC still processing

**Title-rewritten pages (2026-06-22), 12d data:**
- `monitor-route-cache`: 132 imp, pos 7.2, 0 clicks — position stable/improving (was 7.5), insufficient clicks
- `monitor-horizon-purge`: 12 imp, pos 8.1, 0 clicks — too few impressions
- `monitor-reverb-server`: 15 imp, pos 10.9, 0 clicks — too few impressions

**No actionable CTR data yet.** Site is still building search presence. Title rewrites from 2026-06-22 need at least 2 more weeks before CTR conclusions.

## Stale Content Check

- No articles >180 days old
- Next stale-content due: ~October 2026

## Technical Checks

- **npm run build:** ✅ Passes clean
- **Sitemap re-submitted:** ✅ Successfully to GSC
- **GitHub auth:** ✅ Logged in
- **GSC auth:** ✅ siteOwner on sc-domain:crontinel.com
- **Claude Code auth:** ❌ `claude -p` returns "Not logged in" — same as yesterday. Article was written manually (per pipeline fallback).

## Queue Status

- **event-clear**: pending → completed
- **Remaining pending** (10 topics): db-seed, db-wipe, migrate-rollback, pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-interrupt, about, inspire
- **Assessment:** All remaining pending topics are low-search-intent artisan commands. None clear the quality bar for a strong, specific article. Consider adding new topic ideas from GSC query gaps or removing remaining weak topics from the queue.

## Self-Improvement Note

- `monitor-pulse-check` (published 2026-06-24): GSC self-improvement check due 2026-07-07 — no data yet
- `monitor-scout-sync-index-settings` (published 2026-07-01): GSC self-improvement check due 2026-07-08 — no data yet
- `monitor-event-clear` (this run): Self-improvement check due 2026-07-10

## Decisions Needed

- **Queue renewal:** The remaining 10 pending topics are all weak artisan commands. Consider removing them or replacing with better topic ideas (e.g., from GSC query gap analysis: "laravel horizon monitoring", "laravel queue worker timeout", "laravel sail cron", "laravel octane scheduled tasks").
- **Homepage meta:** Position improving (7.1→5.2 over 12d) but 0 clicks out of 190 impressions. Not enough data to act on title yet — re-evaluate in 2 weeks.
- **Claude Code auth:** Second consecutive night down. `claude auth login --console` needed from an interactive session to restore non-interactive generation capability.

## Next Run

- 2026-07-04 02:00 UTC (08:00 Dhaka)
- If Claude Code auth restored: consider new topic from GSC gaps or remaining queue
- If still down: manual generation for any strong topic, or no-publish with archive
