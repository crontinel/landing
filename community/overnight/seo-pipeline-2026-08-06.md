# Crontinel SEO Pipeline — 2026-08-06

## Pre-flight

| Check | Status |
|---|---|
| Claude Code auth | ❌ FAILED — `./claude.sh -p 'say ok'` did not return ok |
| Git status | ✅ Clean working tree |
| Branch | `seo/daily-2026-08-06` |
| pseo-queue.json | Empty — 91 completed, 0 pending, 0 in_progress |
| gsc-queue.json | 1 URL pending (monitor-github-actions-scheduled-workflows) |

## GSC Diagnostics (sc-domain:crontinel.com, last 28 days)

- **Total impressions:** 5,763 across 100 pages
- **Total clicks:** 20
- **Overall CTR:** 0.35%
- **Sitemap:** 171 URLs submitted, 0 indexed (GSC reporting — likely lag, not actual zero-index)

### Top pages by clicks
| Page | Clicks | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| /use-cases/monitor-reverb-server/ | 3 | 56 | 5.36% | 12.0 |
| /integrations/pagerduty/ | 1 | 6 | 16.67% | 5.2 |
| /blog/laravel-failed-jobs-monitoring/ | 2 | 219 | 0.91% | 8.8 |
| /blog/laravel-schedule-withoutoverlapping-explained/ | 2 | 418 | 0.48% | 14.5 |

### Zero-click pages (impressions > 10)
- **61 pages** with >10 impressions and 0 clicks = **4,278 wasted impressions**
- Top wasted: `/use-cases/monitor-config-cache/` — 441 impressions, position 8.6, 0 clicks
- Homepage — 284 impressions, position 5.0, 0 clicks

### Key insights
1. **Homepage at position 5.0 with 0 clicks** — title/meta are decent (56 chars, 155 chars) but position 5 means 4 results above it
2. **Config-cache page at position 8.6 with 0 clicks** — content targets informational "laravel config:cache" queries, not commercial intent for monitoring
3. **Many pages rank positions 15-30+** — need content depth or backlinks to reach page 1
4. **Blog posts getting impressions but low CTR** — content exists but isn't converting searchers

## Actions Taken

1. ✅ **GSC sitemap submitted** — `https://crontinel.com/sitemap.xml` submitted to sc-domain:crontinel.com (was the 1 pending URL)
2. ✅ **gsc-queue.json updated** — moved pending URL to submitted
3. ✅ **Archive written**

## Articles Generated: 0

Content queue is fully drained (91 completed). Claude Code auth unavailable. No new content generated tonight.

## DECISIONS NEEDED

1. **Homepage CTR optimization** — Position 5.0 with 0 clicks on 284 impressions. Current title: "Cron Monitoring That Actually Works - Free Open Source | Crontinel". Description is strong (pain-point focused). Is this a meta issue or a position issue? Recommendations welcome.

2. **Config-cache page strategy** — 441 impressions at position 8.6 with 0 clicks. The page targets informational queries ("laravel config:cache") but tries to sell monitoring. Options: (a) rewrite to better match informational intent with a soft CTA, (b) accept this is a top-of-funnel page that won't convert directly, (c) delete and redirect.

3. **Zero-click page prioritization** — 61 pages with impressions but no clicks. Should we batch-optimize meta titles/descriptions for the top 10, or focus on fewer high-impact pages?

## Next Run

Tomorrow night. Queue is empty — next run will focus on:
- Stale content refresh (pages >180 days old)
- Homepage/meta optimization if decisions are made
- New topic research if queue gets repopulated
