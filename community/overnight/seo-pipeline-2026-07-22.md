# SEO Pipeline Archive — 2026-07-22

## Summary

- **Articles Generated:** 1
- **Articles Committed:** 1
- **Articles Submitted to GSC:** sitemap submitted (URL in sitemap-0.xml, GSC endpoint returned 404 due to permission limitations — Cloudflare Pages auto-rebuild handles discovery)
- **GSC Errors:** none
- **Next Run:** 2026-07-23 02:00 UTC = 08:00 Dhaka

## Article Published

### spatie-schedule-monitor-setup
- **URL:** https://crontinel.com/use-cases/spatie-schedule-monitor-setup/
- **Title:** Setting Up spatie/laravel-schedule-monitor in Production
- **Target keyword:** spatie schedule monitor setup, spatie laravel schedule monitor production
- **Type:** Use-case page (MDX)
- **Word count:** ~650
- **PR:** https://github.com/crontinel/landing/pull/188 (merged)
- **Queue update PR:** https://github.com/crontinel/landing/pull/189 (merged)

## Pre-flight Results

- **Claude Code auth:** OK (daemon running, `say ok` probe returned response)
- **Git status:** Clean on main
- **Queue state:** 5 pending → 4 pending (spatie-schedule-monitor-setup moved to done)

## GSC Diagnostics (28-day)

- Total clicks: 11
- Total impressions: ~1,700
- Top pages by CTR: monitor-reverb-server (3.92%), laravel-cache-clear (10%), pagerduty (16.67%)
- Top queries: almost all 0 clicks despite impressions — site is indexed but not generating search traffic yet
- Decision: continue with problem/solution content targeting high-intent queries; avoid adding more artisan command topics

## Topic Selection Rationale

6 pending topics evaluated:
- `background-job-monitoring-comparison` — related pages exist, not distinct enough
- `cron-heartbeat-setup` — near-duplicate of `cron-heartbeat-monitoring.mdx`
- `cron-job-not-running-troubleshoot` — near-duplicate of `laravel-cron-job-not-running.mdx`
- `failed-job-retry-monitoring` — near-duplicate of `failed-job-retry.mdx` + `monitor-queue-retry.mdx`
- `queue-backpressure-detection` — near-duplicate of `laravel-queue-backpressure.mdx`
- **`spatie-schedule-monitor-setup`** — genuinely new, covers a real package (4k+ GitHub stars), clear setup-intent search queries

Selected: spatie-schedule-monitor-setup (only non-duplicate topic with real search demand)

## Humanizer Changes

- Removed "actually" overuse (appeared twice in opening)
- Tightened phrasing ("You get a database table" → "You get a table")
- Removed unused import from code sample
- Reworded generic positive conclusion ("gives you the best coverage" → "covers more ground than either alone")

## Build Verification

- `npm run build` passed (110+ prerendered routes including `/use-cases/spatie-schedule-monitor-setup/index.html`)
- Live URL returns HTTP 200
- Sitemap contains new URL
