# SEO Pipeline Archive — 2026-07-11

**Date:** 2026-07-11 (pipeline run: 2026-07-11 02:00 UTC)
**Product:** Crontinel
**State:** Published pending article from July 10 branch + maintenance

## Summary

| Metric | Value |
|---|---|
| **Articles Generated** | 0 (no new content — used existing draft) |
| **Articles Published** | 1 (monitor-pennant-purge — from PR #148, open since 2026-07-10) |
| **Articles Submitted to GSC** | 1 (monitor-pennant-purge via sitemap resubmission) |
| **GSC Errors** | none — sitemap submitted, 0 errors, 0 warnings |
| **Existing Content Improved** | 1 (humanizer pass on pennant-purge article: removed AI tells, em dashes, signposting) |
| **Stale Content Refresh** | 0 (no articles >180 days old) |
| **Next Run** | 2026-07-12 02:00 UTC (08:00 Dhaka) |

## What was done

1. **Discovered PR #148** (`seo/daily-2026-07-10`) was open — never merged. The `monitor-pennant-purge.mdx` article existed on disk since July 10 but was never deployed.
2. **Humanized the article** — removed AI patterns: em dashes, "this is the specific problem" signposting, "The first thing to check" preamble, "This is rare but" hedging. Replaced with tighter language.
3. **Merged PR #148** → squash merge to main → Cloudflare Pages auto-deploy
4. **Verified live URL** — `https://crontinel.com/use-cases/monitor-pennant-purge/` returns HTTP 200
5. **Sitemap re-submitted** to GSC — `https://crontinel.com/sitemap.xml` (130 URLs, 0 errors, 0 warnings)
6. **Updated gsc-queue.json** — moved pennant-purge URL from pending → submitted
7. **Updated seo-strategy.md** with run summary

## New article

| Field | Value |
|---|---|
| **Slug** | `/use-cases/monitor-pennant-purge/` |
| **Title** | Monitoring php artisan pennant:purge in Laravel Production |
| **Topic** | Detecting when Laravel Pennant feature flag cleanup stops working |
| **Keywords** | "detect when Laravel pennant:purge stops cleaning stale feature flags" |
| **Body** | ~670 words, 3 code samples |
| **Failure modes** | Scheduler stoppage, wrong environment scope, autoloading failures, large data set timeouts |

## Pending Topics Assessment

Remaining pending topics (no strong search gap identified):

| Topic | Assessment |
|---|---|
| `passport-purge` | OAuth token cleanup — niche, low intent |
| `sanctum-prune-expired` | Token pruning — narrow |
| `schedule-interrupt` | Strongest remaining — graceful deploy shutdown |
| `inspire` | Easter egg — not viable |

**Recommendation:** Content pause on new articles continues. Remaining pending topics are low-intent artisan commands. Schedule-interrupt is the strongest candidate when/if you want to add one more page.

## GSC Findings (7-day — 2026-07-04 to 2026-07-11)

- Minimal site data — site is still building search presence
- No pages have enough impressions (<50) and 0 clicks to trigger data-backed rewrites
- Self-improvement queue expansion cannot fire yet (no CTR ≥ 2% pages)

## Blockers

### Queue renewal needed
- 4 low-intent topics remain — no clear search-intent gap
- Pipeline continues in maintenance mode
- Suggest adding high-intent operator topics (e.g., "how to fix Laravel cron not running after deploy", "Laravel queue worker died silently") from GSC search queries once data accumulates

### No Indexing API scope
- Sitemap resubmission is the working discovery path
