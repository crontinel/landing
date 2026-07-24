# SEO Pipeline Run — 2026-07-23

## Queue State (Pre-Run)
- **Pending topics:** cron-heartbeat-setup, cron-job-not-running-troubleshoot, failed-job-retry-monitoring, queue-backpressure-detection
- **In progress:** none
- **Completed:** 73 topics
- **GSC pending submissions:** 1 (background-job-monitoring-comparison)

## GSC Diagnostics (Last 28 Days)
- **Total clicks:** 13
- **Total impressions:** 4,357
- **CTR:** 0.30%
- **Average position:** 13.1

### Top Pages by Clicks
| Clicks | Impressions | CTR | Position | Page |
|--------|-------------|-----|----------|------|
| 3 | 53 | 5.66% | 9.1 | /use-cases/monitor-reverb-server/ |
| 2 | 270 | 0.74% | 9.2 | /blog/laravel-schedule-withoutoverlapping-explained/ |
| 1 | 508 | 0.20% | 4.3 | Homepage |
| 1 | 43 | 2.33% | 14.3 | /blog/laravel-cron-job-not-running/ |
| 1 | 63 | 1.59% | 9.7 | /blog/laravel-cron-timezone-issues/ |

### Top Queries
Most impressions come from irrelevant Laravel bootstrap/cache file queries (zero clicks). Relevant monitoring queries have very low volume.

## Topic Evaluation
All 4 pending topics overlap with existing published content:
- `cron-heartbeat-setup` → `cron-heartbeat-monitoring.mdx` (use-cases) already covers this
- `cron-job-not-running-troubleshoot` → `laravel-cron-job-not-running.mdx` + `laravel-cron-job-not-running-after-deploy.mdx` + `cron-job-runs-manually-but-not-on-schedule.mdx` — massive overlap
- `failed-job-retry-monitoring` → `failed-job-retry.mdx` (use-cases) already covers this
- `queue-backpressure-detection` → `laravel-queue-backpressure.mdx` (blog) already covers this

## Improvement Opportunity Assessment
- **Pricing page** (`cron-monitoring-pricing-compared-2026`): 104 impressions, 0 clicks, pos 4.3 — but only 5 impressions from 3 queries in the last 28 days. Insufficient data for a title rewrite.
- **About page**: 167 impressions, 0 clicks, pos 5.5 — but 14 impressions from a single "site:crontinel.com" query. Insufficient data.
- **No page has enough impression data** (>50 impressions from relevant queries) to justify a title/meta rewrite.

## Decision
**Articles Generated: 0** — no strong topic gaps found. All pending topics duplicate existing content. No high-impact improvement opportunity identified (insufficient GSC impression data for title rewrites).

## Stale Content Refresh
No content older than 180 days found. All pages are current.

## Next Run
2026-07-24 02:00 UTC (08:00 Dhaka)
