# Crontinel SEO Pipeline — 2026-08-10

## Pre-flight

| Check | Status |
|---|---|
| Claude Code auth | N/A (title refresh only, no content generation) |
| Git status | ✅ Clean working tree |
| Branch | `seo/refresh-pricing-comparison-2026-08-10` |
| pseo-queue.json | 5 pending topics (laravel-octane-cron, supervisor-queue-worker-config, queue-worker-memory-limit, laravel-deploy-zero-downtime-queue, horizon-rebalancing-strategy) |
| gsc-queue.json | 1 pending URL |
| Sitemap | ✅ 200 OK (https://crontinel.com/sitemap.xml) |

## GSC Diagnostics (sc-domain:crontinel.com, 28-day: 2026-07-13 to 2026-08-10)

- **Total impressions:** ~5,763 across 100+ pages
- **Total clicks:** 12
- **Overall CTR:** ~0.21%

### Top pages by clicks
| Page | Clicks | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| /blog/cron-scheduler-alternatives/ | 2 | 90 | 2.2% | 17.9 |
| /blog/laravel-cron-job-not-running/ | 2 | 100 | 2.0% | 17.9 |
| /blog/laravel-failed-jobs-monitoring/ | 2 | 195 | 1.0% | 18.6 |
| /blog/laravel-schedule-withoutoverlapping-explained/ | 2 | 347 | 0.6% | 9.7 |
| /use-cases/monitor-reverb-server/ | 2 | 49 | 4.1% | 12.8 |

### Zero-click pages (impressions > 50)
- /blog/laravel-cron-queue-monitoring-tools/: 266 imp, pos 22.7, 0 clicks — **title refreshed**
- /blog/: 114 imp, pos 16.8, 0 clicks
- /blog/cron-monitoring-pricing-compared-2026/: 98 imp, pos 4.9, 0 clicks — **title refreshed**
- /blog/laravel-cron-vs-queue-when-to-use/: 96 imp, pos 20.8, 0 clicks
- /: 95 imp, pos 6.6, 0 clicks
- /blog/horizon-supervisor-stopped-jobs-not-processing/: 93 imp, pos 15.5, 0 clicks
- /blog/laravel-horizon-idle-workers/: 91 imp, pos 20.5, 0 clicks

### Key observations
1. Pricing comparison page at position 4.9 with 98 impressions but 0 clicks — title was generic, now leads with brand names
2. Monitoring tools page at position 22.7 with 266 impressions — low position for "laravel monitoring" query; title refreshed with year signal
3. Site continues to get impressions but very low clicks — position is the primary constraint for most pages
4. Queue has 5 pending topics but all are artisan-command-adjacent; content strategy recommends against these

## Actions Taken

1. ✅ **Pricing comparison title refresh** — "Crontinel vs Cronitor vs CronRadar: 2026 Pricing Compared" (55 chars) — leads with brand names for competitor search queries
2. ✅ **Monitoring tools title refresh** — "Laravel Cron and Queue Monitoring Tools: 2026 Comparison" (55 chars) — matches "laravel monitoring" intent, adds year for freshness
3. ✅ **Build verified** — `npm run build` passes
4. ✅ **PR created** — https://github.com/crontinel/landing/pull/241
5. ✅ **Archive written**

## Articles Generated: 0

No new content published tonight. Focused on refreshing two high-impression pages with 0 clicks by improving title/meta alignment with search intent.

## Queue Status

5 pending topics remain in pseo-queue.json. Next run should evaluate:
- Whether these topics have genuine search demand (artisan-command-adjacent topics historically show near-zero traffic)
- Whether to reprioritize toward problem/solution content instead

## DECISIONS NEEDED

1. **Queue repopulation** — The 5 pending topics (laravel-octane-cron, supervisor-queue-worker-config, queue-worker-memory-limit, laravel-deploy-zero-downtime-queue, horizon-rebalancing-strategy) are artisan-command-adjacent. The content strategy recommends against these. Should the queue be cleared and repopulated with problem/solution topics, or should we test one of these to see if it performs better than previous artisan pages?

2. **Homepage CTR** — Position 6.6 with 95 impressions, 0 clicks. Title is framework-agnostic ("Cron Monitoring That Actually Works - Free Open Source | Crontinel"). Should we add structured data / FAQ to take more SERP real estate, or accept that position 6 is the constraint?

## Next Run

Tomorrow night. Will focus on:
- Evaluating queue topics for search demand before generating
- Considering homepage meta/structured data optimization
- Stale content refresh if GSC data supports it
