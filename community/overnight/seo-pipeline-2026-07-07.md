# SEO Pipeline Archive — 2026-07-07

**Date:** 2026-07-07 (pipeline run: 2026-07-07 02:00 UTC)
**Product:** Crontinel
**State:** 1 article published — manual generation

## Summary

- **Articles Generated:** 1
- **Articles Committed:** 1 (feature branch → PR → squash merge to main)
- **Articles Submitted to GSC:** 1 new URL + sitemap re-submitted; previous pending (monitor-db-wipe) moved to submitted
- **GSC Errors:** none — sitemap submitted successfully, 0 errors
- **Next Run:** 2026-07-08 02:00 UTC (08:00 Dhaka)

## New Article

| Field | Value |
|---|---|
| File | `monitor-migrate-rollback.mdx` |
| URL | `https://crontinel.com/use-cases/monitor-migrate-rollback/` |
| Keyword | "detect when php artisan migrate:rollback fails in production" |
| Type | Use-case page — companion to monitor-migrate and monitor-migrate-fresh |
| Words | ~900 body, 3 code samples |
| Generation | Manual (Claude Code auth still unavailable) |
| Humanizer | Applied — em dashes removed, promotional language tightened |

## GSC Actions

- Sitemap (`https://crontinel.com/sitemap.xml`) re-submitted — 0 errors
- `monitor-db-wipe` URL: pending → submitted in gsc-queue.json
- `monitor-migrate-rollback` URL: added to gsc-queue.json (pending)
- GSC permission: `siteOwner` on `sc-domain:crontinel.com` — full read/write

## GSC Findings (7-day — 2026-06-30 to 2026-07-07)

- 1 click (homepage) across entire site — site is early in search lifecycle
- Homepage: pos 4.7, 111 impressions — position improving
- No blog/use-case pages have clicks yet

## Blockers

### Claude Code auth still unavailable
- `claude auth status` reports `loggedIn: false`
- Non-interactive login cannot complete in cron context
- Pipeline continues with manual article generation as fallback
- To fix: run `claude auth login --console` in an interactive terminal

## Queue Status

- **Completed this run:** migrate-rollback
- **Remaining pending:** pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-interrupt, inspire
- **Note:** Remaining topics are low-intent artisan commands. Pipeline should consider queue renewal with GSC gap topics when data becomes available.

## Self-Improvement Data

| Page | Published | Days Since | GSC Status |
|---|---|---|---|
| monitor-pulse-check | 2026-06-24 | 13 | No clicks — insufficient data |
| monitor-scout-sync-index-settings | 2026-07-01 | 6 | No data visible |
| monitor-event-clear | 2026-07-03 | 4 | No data visible |
| monitor-db-wipe | 2026-07-06 | 1 | Too new |
| monitor-migrate-rollback | 2026-07-07 | 0 | Too new |

No pages have enough GSC data for CTR-based optimization. Recheck in 2 weeks.

## Decisions

None — standard conservative run.
