# SEO Pipeline Archive — 2026-07-21

## Articles Generated: 1

1. `laravel-scheduler-events-monitoring` → `/blog/laravel-scheduler-events-monitoring/`
   - Title: "Laravel Scheduler Events: Build Custom Monitoring With Before and After Hooks"
   - Keyword: "Laravel scheduler event listeners for custom monitoring"
   - New post: covers ScheduledTaskStarted/Finished/Failed events, listener wiring, database logging dashboard, and inside-out vs outside-in monitoring strategy
   - Internal links added from `monitor-laravel-scheduled-tasks-production` and `laravel-schedule-withoutoverlapping-explained`
   - Humanizer pass applied ✓
   - Merged via PR #186 (squash merge to main)

## Articles Committed: 1

PR #186 merged to main. Cloudflare Pages auto-deploy triggered from main branch push.

## GSC Submission

- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC — 152 URLs, 0 errors, 0 warnings
- New URL added to gsc-queue submitted list ✓
- Pending queue now empty ✓

## GSC Diagnostics (28 days — 2026-06-23 to 2026-07-21)

```
Total clicks: 12
Total impressions: 1,889 (sampled top 20)
CTR: ~0.63%
```

- Top pages by clicks:
  - `/blog/laravel-schedule-withoutoverlapping-explained/` — 2 clicks, 256 imp, pos 9.2
  - `/use-cases/monitor-reverb-server/` — 2 clicks, 46 imp, pos 10.2 (CTR 4.35%)
  - Homepage — 1 click, 495 imp, pos 4.6
- Notable zero-click pages with good position:
  - `/about/` — 163 imp, pos 5.4, 0 clicks
  - `/blog/better-stack-cron-monitoring-gone/` — 71 imp, pos 4.5, 0 clicks
  - `/blog/cron-monitoring-pricing-compared-2026/` — 73 imp, pos 4.7, 0 clicks
- Sitemap healthy: 152 URLs, 0 errors, 0 warnings

## Quality Improvements

- About page (163 imp, pos 5.4, 0 clicks) remains a cross-link candidate
- Zero-click pages with position <10 (pricing-comparison, better-stack-gone) could benefit from meta description rewrites — deferred pending more data
- No stale content >180 days found
- Homepage meta audit: "Cron & Queue Monitoring — Catch Silent Failures Before Users Do | Crontinel" ✓ framework-agnostic

## Claude Code Status

- Daemon `crontinel-M4Air-cc`: still reports `Not logged in` (same as previous nights)
- Article was generated manually in earlier pipeline run (qualifies as pre-existing work)

## Queue Status

- scheduler-events-custom-monitoring: completed ✓
- Remaining pending (6 topics):
  - background-job-monitoring-comparison — comparison content, high-demand category
  - cron-heartbeat-setup — overlap with cron-heartbeat-monitoring use-case
  - cron-job-not-running-troubleshoot — overlap with 3 existing blog posts
  - failed-job-retry-monitoring — overlap with monitor-queue-retry + monitor-queue-failed
  - queue-backpressure-detection — overlap with existing blog post
  - spatie-schedule-monitor-setup — specific package guide (strongest remaining candidate)

## Next Run

- 2026-07-22 02:00 UTC (08:00 Dhaka)
- Consider: queue replenishment with GSC gap topics; about page cross-linking
