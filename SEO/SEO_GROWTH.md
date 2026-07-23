# SEO Growth Tracker

## Week of 2026-07-20 to 2026-07-24

### Content Published
| Date | Type | Title | Slug |
|------|------|-------|------|
| 2026-07-24 | Blog | Horizon Supervisor Restart Job Loss | `/blog/horizon-supervisor-restart-job-loss/` |

### GSC 7-Day Performance (Jul 17-23)
| Metric | Value |
|--------|-------|
| Total clicks | 5 |
| Total impressions | ~1,094 |
| Overall CTR | 0.46% |
| Avg position | 12.1 |

**Daily breakdown:**
| Date | Clicks | Impr | CTR | Pos |
|------|--------|------|-----|-----|
| Jul 17 | 1 | 195 | 0.5% | 15.9 |
| Jul 18 | 1 | 159 | 0.6% | 8.3 |
| Jul 19 | 1 | 164 | 0.6% | 7.9 |
| Jul 20 | 0 | 138 | 0.0% | 9.5 |
| Jul 21 | 1 | 192 | 0.5% | 12.5 |
| Jul 22 | 1 | 120 | 0.8% | 14.1 |
| Jul 23 | 0 | 126 | 0.0% | 16.7 |

**Top pages by impressions (28d):**
| Page | Impressions | Clicks | CTR | Position |
|------|------------|--------|-----|----------|
| Homepage | 508 | 1 | 0.2% | 4.3 |
| schedule-withoutoverlapping | 277 | 2 | 0.7% | 9.3 |
| failed-jobs-monitoring | 187 | 1 | 0.5% | 14.7 |
| about | 167 | 0 | 0.0% | 5.5 |
| blog index | 135 | 0 | 0.0% | 12.0 |
| telescope-clear | 109 | 1 | 0.9% | 16.1 |
| better-stack-gone | 79 | 0 | 0.0% | 4.5 |
| cron-timezone-issues | 65 | 1 | 1.5% | 9.8 |
| app.crontinel.com | 69 | 0 | 0.0% | 7.7 |
| monitor-reverb-server | 55 | 3 | 5.5% | 10.2 |

### GSC Queue Status
- **Sitemaps:** Both submitted and fresh (landing 2026-07-21, docs 2026-07-07)
- **Tracked URLs:** 155 submitted, 2 pending
- **Pending:** background-job-monitoring-comparison (NEUTRAL), laravel-job-batching-monitoring (new from sitemap)
- **Spot-checks:** homepage (PASS), schedule-withoutoverlapping (PASS), monitor-reverb-server (PASS)

### Content Collections
| Collection | Count |
|------------|-------|
| Blog | 50 (+6 this period) |
| Use-cases | 71 (+1 this period) |
| Vs | 14 (unchanged) |
| Integrations | 7 (unchanged) |
| **Total** | **142** (+7 this period) |

### Friday Performance Observations
1. **Impressions trending up:** 1,465 → 3,018 over 28 days. Google is finding more pages.
2. **CTR still low but improving:** 0.29% overall, up from 0.13% two weeks ago. Top-performing page (monitor-reverb-server) at 5.5% CTR shows what's possible.
3. **App subdomain still indexed:** app.crontinel.com/ (69 impressions, pos 7.7) and /forgot-password (9 impressions, pos 13.4) are in the index. These are Railway-hosted app pages that should not be indexed. The app redirects to /login. Need to add noindex meta tag to the app or disallow in robots.txt.
4. **Technical noise persisting:** bootstrap/cache/routes-v7.php laravel (15 impressions, pos 6.1), bootstrap/cache/routes-v8.php laravel (4 impressions, pos 8.0). These queries suggest some page content has visible file paths or the site is matching on package documentation queries.
5. **CronRadar competitor appearing:** 21 impressions for "cronradar" query at position 5.9 — competitive overlap growing.
6. **Homepage CTR crisis:** 508 impressions, 1 click (0.2% CTR) at position 4.3. Meta title/description needs urgent rewrite with action verbs.
7. **about page underperforming:** 167 impressions, 0 clicks at position 5.5. Description likely too generic.
8. **better-stack-gone page:** 79 impressions, 0 clicks at position 4.5. High position but no clicks — description doesn't compel action.

### Tasks Completed This Week
1. Daily content — 1 new blog post (horizon-supervisor-restart-job-loss)
2. URL queue management — 155 URLs submitted, 2 new pending
3. GSC health check — both sitemaps fresh, no errors
4. Performance review — 7-day data analyzed, weekly summary updated
5. pseo-queue cleaned — 4 stale topics moved to completed (all had existing content)

### Blockers & Action Items
1. **app.crontinel.com indexed** — App subdomain pages (login, forgot-password) are in Google's index with 69+ impressions. These are Railway-hosted app pages. Fix: add `<meta name="robots" content="noindex">` to the app, or add `Disallow: /` for app.crontinel.com in the landing robots.txt (won't help since app is separate). Best fix: add noindex to the app's layout.
2. **Homepage CTR crisis** — 508 impressions, 0.2% CTR at position 4.3. Meta title/description rewrite is the #1 lever.
3. **Technical noise queries** — bootstrap/cache file paths appearing in search results. Audit use-case pages for exposed file paths.
4. **about page CTR** — 167 impressions, 0 clicks. Rewrite meta description.

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

### Tasks Completed This Week
1. Daily content — 13 new pages published across blog, use-cases
2. PR cleanup — stale PRs merged (#170 resolved)
3. URL queue management — 150 URLs submitted to GSC
4. Competitor gap analysis (Thursday) — added competitors.md, new queue topics
5. Performance review (Friday) — first successful 7-day GSC data pull
6. Saturday — queue monitoring setup guide published

### Blockers & Action Items
1. app.crontinel.com pages in index — Need noindex
2. CTR optimization needed — Several pages at positions 3-6 getting 0 clicks
3. GSC API now functional — Can track impression/click data going forward
