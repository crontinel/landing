---
date: 2026-06-30
agent: ct
pipeline: crontinel-seo-nightly
---

# SEO Pipeline Archive — 2026-06-30

## Summary

**Articles Generated:** 0
**Articles Published:** 0
**Articles Submitted to GSC:** 0
**Claude Code Auth:** Blocked — `claude auth status` shows `loggedIn: false`. Non-interactive probe `echo "test" | claude -p "Reply with the word OK only"` returned "Not logged in · Please run /login". Interactive login requires browser OAuth — not available in cron runtime.

## What Was Checked

- **pseo-queue.json:** 12 pending topics (event-clear, db-seed, db-wipe, migrate-rollback, scout-sync-index-settings, pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-interrupt, about, inspire). All are niche Laravel artisan command monitoring topics. No strong search-intent gap justifies manual writing without Claude Code.
- **Stale content (>180 days):** None found. Oldest content is from April 6, 2026 (~85 days). No refresh needed.
- **GSC health:** Clean. Main sitemap (sitemap.xml) has 0 errors, 0 warnings, 118 URLs. Crontinel.com confirmed `siteOwner` permission.
- **Working tree:** Clean. On `main` branch. Latest commit: `01929a5` (PR #126 merged).

## Title Rewrite CTR Check (8 days post-rewrite — due 2026-06-29)

Both pages with June 22 title rewrites were checked via GSC 28-day search analytics:

| Page | Before Rewrite (Jun 22) | After Rewrite (Jun 30) | Δ |
|---|---|---|---|
| `monitor-route-cache` | 73 imp, 0 clicks, pos 11.4 | 101 imp, 0 clicks, pos 7.8 | +28 imp, pos +3.6 |
| `monitor-horizon-purge` | 35 imp, 0 clicks, pos 7.7 | 45 imp, 0 clicks, pos 7.8 | +10 imp, pos ~same |

Both pages improved in impressions and position but still have 0% CTR. The position improvement for monitor-route-cache (+3.6 spots) is encouraging. However, 0 clicks on 101 and 45 impressions suggests either:
- The title still isn't compelling enough for searchers at position ~8
- Or the domain lacks authority/trust signals for click-through (new domain effect)

**Decision:** Do NOT rewrite again yet. Sample sizes are still small for a new domain. Re-check in 14 days (2026-07-14) if position/impressions continue growing but clicks stay at 0.

## Scout-Import GSC Check

monitor-scout-import page (published 2026-06-29): No GSC data yet. Expected — URL not yet indexed. Will check again in 7 days (2026-07-07).

## Overall GSC (last 7 days)

- Total clicks: 0 across all pages
- Top query: "laravel monitoring" — 12 impressions, 0 clicks, pos 66.5
- Very early stage for this domain — building search presence

## Blockers

- **Claude Code auth still broken.** `claude auth login --console` opens a browser OAuth URL that can't complete in cron. This has been the blocker for multiple nights now (was already noted in June 29's archive). The pending topics (scout-sync-index-settings, schedule-interrupt, migrate-rollback) each need Claude Code for quality generation — writing them manually produces lower-quality articles that don't meet the quality bar.
- **Fix:** Run `claude auth login --console` interactively in a terminal session, complete the browser OAuth flow. Or switch to `ANTHROPIC_API_KEY`-based auth if available.

## Next Run

- Claude Code auth fix is blocker #1
- scout-sync-index-settings: next strong candidate after scout-import (complements it naturally — sync settings before import in deploy scripts)
- schedule-interrupt: second candidate — niche but has a clear monitoring use case
- Title rewrite CTR re-check: 2026-07-14 if needed
- Scout-import GSC debut check: 2026-07-07
