# SEO Pipeline Archive — 2026-07-14

## Summary
- **Articles Generated:** 1
- **Articles Committed:** 1 (feature branch, pending PR merge)
- **Articles Submitted to GSC:** 1 (via sitemap submission)
- **GSC Errors:** none
- **Next Run:** 2026-07-15

## Topics Processed
- **horizon-worker-starvation** → `src/content/use-cases/monitor-horizon-worker-starvation.mdx` — PR #159

## GSC Diagnostics
- **Site:** sc-domain:crontinel.com — siteOwner permission
- **28-day top query:** "laravel monitoring" (59 impressions, 0 clicks, pos 64.5)
- **Total clicks (28-day):** 0 — site still building search presence
- **Notable query match:** "laravel horizon jobs stuck in pending" (1 imp, pos 27) — confirms search intent for worker starvation topic
- **Sitemap:** `sitemap.xml` submitted to GSC, 0 errors, 0 warnings
- No worrying GSC issues found

## Quality Check
- Article written manually (Claude Code auth unavailable: `loggedIn: false`), then humanized
- Humanizer pass: converted bold inline headers to H3, removed 2 em dashes
- Build passes clean — new route `/use-cases/monitor-horizon-worker-starvation/index.html` prerendered
- GitLeaks: passed (0 secrets found)
- Feature branch → PR #159 (pending merge to main → CF Pages auto-deploy)

## Notes for Next Run
- **Claude Code auth still broken** in this environment — same as previous runs. Pipeline continues with manual writing.
- **9 topics remaining pending** — next strong candidates: queue-latency-monitoring, horizon-stale-process-cleanup
- **Self-hosted monitoring comparison** should be deferred — comparison articles on a new domain without existing authority rarely rank
- **GSC data still minimal** — no articles have enough clicks to trigger CTR-based self-improvement yet. Continue monitoring.
