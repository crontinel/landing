# SEO Pipeline Archive — 2026-07-24

## Summary

- **Articles Generated:** 1
- **Article:** "What Happens to In-Flight Jobs When Horizon Supervisors Restart" (`/blog/horizon-supervisor-restart-job-loss/`)
- **Articles Committed:** 1
- **Articles Submitted to GSC:** 0 (service account has readonly scope — sitemap submit blocked)
- **Meta Descriptions Improved:** 4 pages (failed-jobs-monitoring, horizon-idle-workers, withoutoverlapping, telescope-clear, index.astro)
- **GSC Errors:** none
- **Queue Status:** 2 pending topics remaining (prometheus-laravel-integration, cron-scheduler-alternatives)
- **Next Run:** 2026-07-25 02:00 UTC (08:00 Dhaka)

## What Happened

1. Pipeline picked topic `horizon-supervisor-restart-job-loss` from queue
2. Generated 1,429-word article about job loss during Horizon supervisor restarts
3. Improved meta descriptions on 4 existing blog posts + homepage for better CTR
4. All 4 previously pending topics (cron-heartbeat-setup, cron-job-not-running-troubleshoot, failed-job-retry-monitoring, queue-backpressure-detection) were already covered by existing content — moved to completed
5. PR #197 created, merge conflict resolved (meta description PR #196 had already merged), PR merged
6. Live URL verified: https://crontinel.com/blog/horizon-supervisor-restart-job-loss/ returns 200
7. GSC submission skipped: service account has `webmasters.readonly` scope, sitemap.submit() returns 404

## GSC Data (Last 28 Days)

- **Total:** 13 clicks, 4,444 impressions, 0.29% CTR, avg position 13.3
- **Top queries:** "laravel bootstrap/cache" variations (developer confusion, not monitoring intent)
- **Assessment:** Content is indexed but generates near-zero search traffic. The artisan command use-case pages are the primary issue — they target keywords with no search demand.

## Decision: No new topics queued tonight

The remaining 2 pending topics (prometheus-laravel-integration, cron-scheduler-alternatives) were added by a previous run. They are genuine monitoring topics with search potential and should be processed in future runs.
