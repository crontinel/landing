# SEO Pipeline Run — 2026-06-23

## Summary

- **Date:** 2026-06-23
- **Branch:** `seo/content/monitor-schedule-work` → PR #106 → squash merged to main
- **Type:** New article — 1 use-case page
- **Claude Code auth:** Unavailable (loggedIn: false) — article written directly with humanizer pass
- **GitHub auth:** OK — PR created and merged successfully

## Topic Selected

- **Topic:** schedule-work (moved pending → completed)
- **URL:** https://crontinel.com/use-cases/monitor-schedule-work/
- **Keyword:** "how to keep Laravel schedule:work running in production"
- **Word count:** ~670 words, 4 code samples, 4 failure modes

## What Was Published

1 new use-case page:
- `src/content/use-cases/monitor-schedule-work.mdx` — Monitoring Laravel's `schedule:work` daemon: uncaught exceptions, memory leaks, Supervisor stopasgroup, container restart without handoff, Crontinel heartbeat integration

**Distinct from existing monitor-schedule-run page:** The daemon approach has fundamentally different failure modes (process death vs cron misconfiguration) and different monitoring strategies (dead-man's heartbeat vs per-task pings).

## GSC Actions

- Sitemap (https://crontinel.com/sitemap.xml) submitted successfully
- GSC queue updated: monitor-schedule-work URL added to submitted
- Service account confirmed: siteOwner on sc-domain:crontinel.com with full webmasters scope

## Articles Generated: 1

One new article tonight. Conservative single-article run.

## Quality Notes

- Humanizer pass applied: removed inline-header pattern, reduced em dashes, removed persuasive signposting ("the key difference," "the first step is"), converted passive voice to active
- Content differentiated from existing schedule-run page by focusing on daemon-specific failure modes
- Word count: 670 words (within 650-850 target)
- Build passed: /use-cases/monitor-schedule-work/index.html prerendered

## Queue State

- **Pending:** 18 topics (schedule-work moved to completed)
- **In progress:** 0
- **Completed:** 34
- **GSC submitted:** 178 URLs
- **GSC pending:** 0
- **last_push:** 2026-06-23

## Next Strong Candidates

1. **scout-import** — complements existing scout-flush page, covers search index rebuild monitoring
2. **pulse-check** — Laravel Pulse monitoring (meta-topic: monitoring the monitor)
3. **config-clear** — stale config cache after deployment (similar to existing route-cache pattern)

## Self-Improvement Reminders

- Monitor-schedule-work GSC data check: due 2026-06-30 (7 days post-publish)
- Monitor-reverb-server GSC data check: due 2026-06-28
- Monitor-route-cache title rewrite CTR check: due 2026-06-29
- Monitor-horizon-purge title rewrite CTR check: due 2026-06-29

## Blockers

- Claude Code auth still unavailable — manual writing path continues to work
- GSC data still minimal — site needs more impressions before data-driven title rewrites
