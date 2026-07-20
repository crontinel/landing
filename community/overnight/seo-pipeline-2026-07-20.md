# SEO Pipeline Archive — 2026-07-20

## Articles Generated: 2

1. `laravel-schedule-missed-run-alert` → `/blog/laravel-schedule-missed-run-alert/`
   - Title: "How to Detect Missed Laravel Schedule Runs Before They Cascade"
   - Keyword: "how to detect missed Laravel schedule runs"
   - Existing post (committed in earlier run today, merged via PR #180)

2. `cron-monitoring-alert-fatigue` → `/blog/reduce-cron-alert-fatigue/`
   - Title: "Cron Monitoring Alert Fatigue: How to Reduce Notification Noise"
   - Keyword: "how to reduce alert fatigue in cron job monitoring"
   - New post written tonight: real-deployment problem guide covering severity classification, grace periods, deduplication, channel routing, and stale monitor cleanup
   - Humanizer pass applied: reduced em dashes, removed inline-header-colon lists, tightened intro, removed promotional framing

## Articles Committed: 2

Both merged to main via PR #180 (squash merge, seo/daily-2026-07-20)

## GSC Submission

- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC  — 150 URLs, 0 errors, 0 warnings
- Both new URLs added to gsc-queue submitted list

## GSC Diagnostics (28 days — 2026-06-22 to 2026-07-19)

```
Total clicks: 12 (up from 11 on July 19, up from 8 on July 17)
Total impressions: 3,244
CTR: 0.37%
```

- Top pages by clicks:
  - `/blog/laravel-schedule-withoutoverlapping-explained/` — 2 clicks, 246 imp, pos 9.3
  - `/use-cases/monitor-reverb-server/` — 2 clicks, 46 imp, pos 10.2 (CTR 4.35%)
  - Homepage — 1 click, 490 imp, pos 4.6
  - Various pages with 1 click each
- Notable zero-click pages with good position:
  - `/about/` — 160 imp, pos 5.4
  - `/blog/better-stack-cron-monitoring-gone/` — 64 imp, pos 4.5
  - `/blog/cron-monitoring-pricing-compared-2026/` — 65 imp, pos 4.7
- Sitemap healthy: 150 URLs, 0 errors, 0 warnings

## Internal Linking

- No dedicated internal linking pass tonight (July 19 pass covered queue-monitoring-setup)
- About page (160 imp, pos 5.4, 0 clicks) remains a candidate for cross-links — deferred to next run

## Stale Content

- No articles >180 days old found (site is relatively new)

## Homepage Meta Audit

- Title: "Cron & Queue Monitoring — Catch Silent Failures Before Users Do | Crontinel" ✓ (framework-agnostic)
- Description: mentions "any framework" ✓
- No Laravel-specific brand-level terms found ✓

## Claude Code Status

- Daemon (`crontinel-M4Air-cc`) is running but reports `Not logged in`
- `claude --print -p` also returns "Not logged in"
- Content was generated manually (humanizer pass applied)
- No recovery attempted — working daemon session may have been interrupted

## Queue Status

- cron-monitoring-alert-fatigue: completed ✓
- 7 topics remaining pending:
  - background-job-monitoring-comparison
  - cron-heartbeat-setup (overlap noted with cron-heartbeat-monitoring use-case)
  - cron-job-not-running-troubleshoot (overlap noted with 3 existing blog posts)
  - failed-job-retry-monitoring (overlap noted with monitor-queue-retry + monitor-queue-failed)
  - queue-backpressure-detection (overlap noted with existing blog post)
  - scheduler-events-custom-monitoring
  - spatie-schedule-monitor-setup
- Strong next candidate: `background-job-monitoring-comparison` (comparison content = high-demand)

## Next Run

- 2026-07-21 02:00 UTC (08:00 Dhaka)
- Consider: queue replenishment with GSC gap topics once more traffic data accumulates
