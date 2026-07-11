# SEO Pipeline Archive — 2026-07-12

**Date:** 2026-07-12 (pipeline run: 2026-07-12 02:00 UTC)
**Product:** Crontinel
**State:** 1 new article published + self-improvement pass

## Summary

| Metric | Value |
|---|---|
| **Articles Generated** | 1 |
| **Articles Published** | 1 (monitor-schedule-interrupt) |
| **Articles Committed** | 1 (PR #152 → squash merged → CF Pages deploy) |
| **Articles Submitted to GSC** | 1 (via sitemap resubmission) |
| **GSC Errors** | none — sitemap submitted, 0 errors, 0 warnings |
| **Existing Content Improved** | 0 |
| **Stale Content Refresh** | 0 (no articles >180 days old) |
| **Self-Improvement Queue Expansions** | 6 new topics added to pending from high-CTR pages |
| **Next Run** | 2026-07-13 02:00 UTC (08:00 Dhaka) |

## New article: monitor-schedule-interrupt

| Field | Value |
|---|---|
| **Slug** | `/use-cases/monitor-schedule-interrupt/` |
| **Title** | How to Detect When Laravel schedule:interrupt Fails After Deployment |
| **Topic** | Deployment safety gap: what happens when you deploy while schedule:run is mid-cycle with sub-minute scheduling |
| **Keyword** | "detect when Laravel schedule:interrupt fails to stop stale schedule:run processes after deployment" |
| **Body** | ~780 words, 4 code samples, humanizer pass applied |
| **Failure modes** | Missing interrupt call in deploy script, wrong cache driver, Supervisor timing issues, deploy script crash |
| **Distinct from** | monitor-schedule-run (cron-based), monitor-schedule-work (daemon approach) |

## Self-Improvement: GSC-driven queue expansions

**28-day GSC data** (2026-06-14 to 2026-07-11):
- 7 total clicks across all pages — site building presence
- **5 pages with CTR ≥ 2%** triggered queue expansion:

| Page | Clicks | Impressions | Pos | CTR | Expansion Topics Added |
|---|---|---|---|---|---|
| monitor-reverb-server | 1 | 27 | 10.6 | 3.7% | reverb-connection-drops, broadcast-failure-detection |
| monitor-telescope-clear | 1 | 33 | 9.8 | 3.0% | telescope-storage-cleanup |
| monitor-horizon-purge | 1 | 43 | 7.0 | 2.3% | horizon-stale-process-cleanup |
| laravel-cron-timezone-issues | 1 | 41 | 7.4 | 2.4% | laravel-schedule-timezone-mismatch |
| laravel-horizon-idle-workers | 1 | 48 | 9.6 | 2.1% | horizon-worker-starvation |

## Queue Changes

- schedule-interrupt: pending → completed
- inspire: removed from pending (Easter egg command, no production monitoring value)
- Added 6 expansion topics from high-CTR pages (queued for future runs, not generated tonight)
- Added backlog of expansion topics to match conservative pacing

## Blocker: Claude Code auth

- `claude auth status` returned `loggedIn: false`
- `claude --print -p "..."` returned "Not logged in"
- The `claude.sh` daemon was already in use for another task
- Article was written manually — same approach as July 3, 7, and 10 runs
- Pipeline continues on manual path

## GSC Data Summary

- sc-domain:crontinel.com: siteOwner — full GSC access
- Sitemap: 0 errors, 0 warnings
- URL Inspection API returns 404 for all URLs (known GSC API issue — use sitemap submission instead)
- First meaningful GSC data emerging after ~3 months of content building
