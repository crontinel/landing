# SEO Growth Tracker

## Week of 2026-07-13 to 2026-07-17

### Content Published
| Date | Type | Title | Slug |
|------|------|-------|------|
| 2026-07-13 | Blog | Debugging Laravel Reverb Connection Drops | `/blog/debug-laravel-reverb-connection-drops/` |
| 2026-07-13 | Blog | Monitor php artisan pennant:purge in Laravel Production | `/blog/monitor-laravel-pennant-purge/` |
| 2026-07-14 | Blog | Laravel Broadcast Failure Detection | `/blog/laravel-broadcast-failure-detection/` |
| 2026-07-14 | Blog | Laravel Horizon Config-Environment Mismatches | `/blog/laravel-horizon-config-env-mismatch/` |
| 2026-07-14 | Use-case | Horizon Stale Process Cleanup | `/use-cases/monitor-horizon-stale-process-cleanup/` |
| 2026-07-15 | Blog | Cron Monitoring Guide 2026 | `/blog/cron-monitoring-guide/` |
| 2026-07-15 | Use-case | Horizon Worker Starvation | `/use-cases/monitor-horizon-worker-starvation/` |
| 2026-07-15 | Use-case | Queue Latency Monitoring | `/use-cases/monitor-queue-latency/` |
| 2026-07-16 | Blog | Monitoring vs Observability | `/blog/monitoring-vs-observability/` |
| 2026-07-16 | Use-case | Cron Job Log Debugging | `/use-cases/monitor-cron-job-log-debugging/` |
| 2026-07-16 | Reference | Competitors page | `references/competitors.md` |
| 2026-07-17 | Blog | Monitoring Laravel Cron Jobs on Kubernetes | `/blog/monitoring-kubernetes-cron-jobs/` |
| 2026-07-17 | Use-case | How to Set Up Laravel Queue Monitoring in Production | `/use-cases/queue-monitoring-setup/` |

### GSC 7-Day Performance (Jul 10-16)
| Metric | Value |
|--------|-------|
| Total clicks | 2 |
| Total impressions | ~1,599 |
| Overall CTR | 0.13% |
| Avg position | 17.6 |

**Top pages by impressions:**
| Page | Impressions | Clicks | CTR | Position |
|------|------------|--------|-----|----------|
| `laravel-schedule-withoutoverlapping-explained` | 164 | 1 | 0.61% | 9.6 |
| Homepage | 91 | 0 | 0.00% | 5.0 |
| Blog index | 57 | 0 | 0.00% | 20.2 |
| Homepage | 91 | 0 | 0.00% | 5.0 |
| Pricing compared | 39 | 0 | 0.00% | 5.2 |
| Better Stack gone | 37 | 0 | 0.00% | 3.9 |

### GSC Queue Status
- **Sitemaps:** Both submitted and fresh (landing 2026-07-15, docs 2026-07-07)
- **Tracked URLs:** 149 submitted, 0 pending (1 new pending added today)
- **Spot-checks:** laravel-cron-job-not-running (PASS), horizon-worker-starvation (PASS), cron-monitoring-guide (NEUTRAL — unknown to Google)

### Content Collections
| Collection | Count |
|------------|-------|
| Blog | 44 (+7 this week) |
| Use-cases | 70 (+8 this week) |
| Vs | 14 (unchanged) |
| Integrations | 7 (unchanged) |
| **Total** | **135** (+15 this week) |

### Friday Performance Observations
1. **App subdomain pages leaking:** `app.crontinel.com/` (15 impressions) and `/forgot-password` (4 impressions) appearing in GSC — these should be noindexed.
2. **Technical noise queries:** `bootstrap/cache/routes-v7.php laravel`, `laravel config:cache creates` — suggests page content has visible file paths. Review monitor-optimize-clear and similar use-case pages for exposed debug paths.
3. **CTR crisis confirmed:** Pages ranking at position 3-6 (homepage #5, better-stack #4, pricing-compared #5) get 0 clicks from 91/37/39 impressions respectively. Meta titles/descriptions need rewrite.
4. **CronRadar competitor appearing:** 3 impressions for "cronradar" query — indicates some competitive overlap.
5. **Search Analytics API now works!** Previous limitation (404) has been resolved — full 7-day performance data is available.

### Tasks Completed This Week
1. ✅ Daily content — 13 new pages published across blog, use-cases
2. ✅ PR cleanup — stale PRs merged (#170 resolved)
3. ✅ URL queue management — 150 URLs submitted to GSC
4. ✅ Competitor gap analysis (Thursday) — added competitors.md, new queue topics
5. ✅ Performance review (Friday) — first successful 7-day GSC data pull
6. ✅ Saturday — queue monitoring setup guide published

### Blockers & Action Items
1. **🔴 app.crontinel.com pages in index** — Need to add `<meta robots="noindex">` to app pages or disallow in landing's internal links to app subdomain
2. **🟡 CTR optimization needed** — Several pages at positions 3-6 getting 0 clicks. Meta descriptions need action verbs, brackets, question formats.
3. **🟡 Stale sitemap** — Landing sitemap last submitted 2026-07-15 (2 days ago) — could resubmit after build
4. **✅ GSC API now functional** — Can track impression/click data going forward

## Week of 2026-07-06 to 2026-07-10

### Content Published
| Date | Type | Title | Slug |
|------|------|-------|------|
| 2026-07-10 | Use-case | Monitoring php artisan pennant:purge in Laravel Production | `/use-cases/monitor-pennant-purge/` |

### GSC Index Status
- **Sitemaps:** Both submitted and fresh
  - Landing: 2026-07-09 ✓
  - Docs: 2026-07-07 ✓
- **Tracked URLs:** 130 submitted, 1 pending
- **New URLs found & submitted this week:** 6 (discord, ms-teams, telegram integrations, cronradar vs, pricing-compared blog, migrate-from-better-stack blog)
- **Spot-check results:** Home, pricing, blog all PASS — submitted and indexed

### Friday Performance Review
- Search Analytics API not available for this service account (known limitation)
- **Index coverage inference:** 112+ prerouted pages built, ~130 submitted to GSC
- **Content collections growth:** blog=37, vs=14, use-cases=62 (up from 60 last week), integrations=7 (up from 4)

### Tasks Completed This Week
1. ✅ GSC health checks — both sitemaps active
2. ✅ URL queue management — 6 new URLs submitted
3. ✅ New content — monitor-pennant-purge use case
4. ✅ Content plan updated with current counts
5. ✅ pseo-queue updated (pennant-purge completed)

### Blockers
- GSC Search Analytics API returns 404 for service account — cannot pull 7-day impression/click/CTR data. Consider upgrading service account permissions or adding a separate GSC user with full read access.

### Next Week Priorities
1. Continue pseo-queue: passport-purge, sanctum-prune-expired
2. Monday — keyword research for new topics
3. Tuesday — internal linking pass
4. Wednesday — stale content refresh (90-day-old posts)
5. Thursday — competitor gap analysis
