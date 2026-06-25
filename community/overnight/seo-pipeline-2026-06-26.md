# SEO Pipeline Run — 2026-06-26

## Summary

- **Date:** 2026-06-26
- **Branch:** `seo/content/monitor-view-cache` → PR #114 → squash merged to main
- **Type:** New article — 1 use-case page
- **Claude Code auth:** Unavailable (loggedIn: false) — article written directly with humanizer pass
- **GitHub auth:** OK — PR created and merged successfully

## Topic Selected

- **Topic:** view-cache (moved pending → completed)
- **URL:** https://crontinel.com/use-cases/monitor-view-cache/
- **Keyword:** "monitor view:cache in Laravel production"
- **Word count:** ~700 words, 2 code samples, 4 failure modes

## What Was Published

1 new use-case page:
- `src/content/use-cases/monitor-view-cache.mdx` — Monitoring Laravel view:cache: stale compiled views from previous releases, permission errors between deploy/user accounts, timestamp edge cases in automated git deployments (laravel/framework#53394), rolling deploy inconsistencies, clear-before-cache deploy script with Crontinel heartbeat, health check endpoint for compiled view verification

## GSC Actions

- Sitemap submitted to GSC (204)
- GSC queue updated: monitor-view-cache URL added to submitted

## Articles Generated: 1

## Quality Notes

- Humanizer pass applied: tightened opening hook, removed "this is the most common" preface, simplified call-to-action sections, removed signposting language
- Content differentiated from existing config-cache and route-cache articles by focusing specifically on Blade template compilation and the timestamp edge case unique to view caching
- Internal links: config-cache, route-cache, route-clear, optimize-clear — natural cross-references from related cache/optimization topics
- Build passed: /use-cases/monitor-view-cache/index.html prerendered (verified in build output)

## Queue State

- **Pending:** 15 topics (view-cache moved to completed)
- **In progress:** 0
- **Completed:** 37
- **GSC submitted:** 181 URLs
- **GSC pending:** 0

## Next Strong Candidates

1. **view-clear** — paired cleanup step after view:cache, deployment sequencing
2. **migrate-rollback** — deployment rollback monitoring (high-value topic)
3. **schedule-interrupt** — newer Laravel 11+ feature, direct cron scheduling failure signal

## GSC Health Summary (28-day)

- Site permission: siteOwner — full control
- Sitemap: 114 URLs, 0 errors
- Total impressions: low (~500 range for top pages) — site is still early in GSC
- Top page: `/blog/laravel-cron-queue-monitoring-tools/` — 215 impressions, 1 click
- **Zero-click pages with decent positions:**
  - `/use-cases/monitor-horizon-purge/` — pos 7.8, 0 clicks (title is decent, needs more time)
  - `/use-cases/monitor-route-cache/` — pos 9.9, 0 clicks (title could be more direct)
- No stale content (>180 days) — oldest articles are from 2026-04-07 (~80 days)

## Self-Improvement Reminders

- Monitor-view-cache GSC data check: due 2026-07-03 (7 days post-publish)
- Monitor-config-clear GSC data check: due 2026-07-02
- Monitor-pulse-check GSC data check: due 2026-07-01
- Monitor-schedule-work GSC data check: due 2026-06-30

## Blockers

- Claude Code auth still unavailable (loggedIn: false) — manual writing path continues to work
- No fix attempted this run (cron context, cannot use interactive login)
