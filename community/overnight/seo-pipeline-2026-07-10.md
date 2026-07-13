# SEO Pipeline Archive — 2026-07-10

**Date:** 2026-07-10 (pipeline run: 2026-07-10 02:00 UTC)
**Product:** Crontinel
**State:** Healthy maintenance run — GSC submission + queue cleanup

## Summary

| Metric | Value |
|---|---|
| **Articles Generated** | 0 |
| **Articles Committed** | 0 |
| **Articles Submitted to GSC** | 1 (monitor-pulse-restart URL + sitemap resubmitted) |
| **GSC Errors** | none |
| **Existing Content Improved** | 0 (no data-backed improvement opportunity) |
| **Stale Content Refresh** | 0 (no articles >180 days old) |
| **GSC Queue Updated** | monitor-pulse-restart: pending → submitted |
| **Next Run** | 2026-07-11 02:00 UTC (08:00 Dhaka) |

## GSC Actions

- Sitemap (`https://crontinel.com/sitemap.xml`) re-submitted — 0 errors
- `monitor-pulse-restart` URL: pending → submitted in gsc-queue.json (URL live since 2026-07-08, already in sitemap)
- URL inspection confirmed page returns 200 and is in sitemap; Google status was "URL is unknown to Google" — sitemap resubmission should trigger discovery
- Indexing API not available (separate scope required — `https://www.googleapis.com/auth/indexing` not configured for service account)

## GSC Findings (7-day — 2026-07-03 to 2026-07-10)

- **0 clicks**, 50 total impressions — very quiet week
- Top pages: `laravel-cron-queue-monitoring-tools` (13 imp), `docs.crontinel.com/security/` (9 imp), `webhook-monitoring` (8 imp)
- No pages with >50 impressions and 0 clicks — no data-backed rewrite candidates
- Homepage: 0 clicks this week (down from 1 last week) — likely variance at low volume

## Pending Topics Assessment

Remaining pending topics (unchanged):

| Topic | Assessment |
|---|---|
| `pennant-purge` | Feature flag cleanup — very narrow, no search intent |
| `passport-purge` | OAuth token cleanup — niche |
| `sanctum-prune-expired` | Token pruning — narrow |
| `schedule-interrupt` | Strongest remaining — graceful deploy shutdown, companion to schedule-run/schedule-work |
| `inspire` | Easter egg — not viable |

**Recommendation (unchanged):** Content pause continues. None clear the quality bar. Queue renewal still needed.

## Self-Improvement Data

No pages have enough GSC data for CTR-based optimization. Site is still in very early search presence building phase.

## Blockers

### Queue renewal needed
- 5 low-intent topics remain with no clear search-intent gap
- Pipeline continues in maintenance mode

### Indexing API scope
- Service account has `siteOwner` on `sc-domain:crontinel.com` but Indexing API scope is not configured
- Sitemap resubmission is the working discovery path

## Notes

- Site has 119 MDX pages — adequate content volume
- Sitemap shows 0 submitted/0 indexed on last check (latency in GSC data) — sitemap file itself is live and contains all URLs
- All 124+ submitted URLs in gsc-queue.json accounted for
- Content pause continues until GSC shows clear search demand or Harun adds new high-intent topics
