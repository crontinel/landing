# Crontinel SEO Strategy
Auto-generated: 2026-07-01 02:15 UTC — new use-case page: monitor-scout-sync-index-settings

## Run Summary (2026-07-01)

**New article published:**
- `monitor-scout-sync-index-settings.mdx` — Detecting when Laravel Scout's scout:sync-index-settings fails to apply index settings to the search engine
- URL: https://crontinel.com/use-cases/monitor-scout-sync-index-settings/
- Keyword: "detect when Laravel Scout sync-index-settings fails to apply index settings to search engine"
- Distinct from existing content: completes the Scout trilogy (flush wipes index, import rebuilds it, sync-index-settings keeps engine config in sync). Covers invalid attribute names, expired API credentials, Meilisearch version strictness, Algolia async propagation gap, partial sync across multiple indexes.
- ~930 words body, 2 code samples, humanizer pass applied
- PR #128 → squash merged to main → Cloudflare Pages auto-deploy (live: 200)

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC
- scout-sync-index-settings moved pending → completed
- URL added to gsc-queue.json

**GSC findings (28-day — 2026-06-03 to 2026-07-01):**
- 2 total clicks across all pages — site still building search presence
- monitor-route-cache: position improved from 7.5→6.6 (7-day), 0 clicks
- monitor-horizon-purge: 43 imp (28-day), pos 7.7, 0 clicks
- No recent pages have meaningful GSC data yet (too new)
- Title rewrites from 2026-06-22: position improving but clicks not yet present

**Self-improvement data:**
- monitor-pulse-check: no GSC data yet (published 2026-06-24)
- monitor-route-cache title rewrite (2026-06-22): position trend positive (7.5→6.6), insufficient CTR data to conclude

## Run Summary (2026-06-24)

**New article published:**
- `monitor-pulse-check.mdx` — Monitoring Laravel Pulse health in production
- URL: https://crontinel.com/use-cases/monitor-pulse-check/
- Keyword: "how to tell if Laravel Pulse is actually collecting data"
- Distinct from existing content: covers Pulse-specific failure modes (database connection drop, Redis stream overflow, pulse:work worker crash, deploy disconnect)
- ~760 words, 3 code samples, humanizer pass applied
- PR #108 → squash merged to main → Cloudflare Pages auto-deploy triggered

**GSC actions:**
- Sitemap re-submitted to GSC
- Queue updated: pulse-check moved pending → completed

**Next strong candidates:**
- scout-import (complements existing scout-flush, covers search index rebuild monitoring)
- config-clear (stale config cache after deployment)

## Run Summary (2026-06-23)

**New article published:**
- `monitor-schedule-work.mdx` — Monitoring Laravel's `schedule:work` daemon in production
- URL: https://crontinel.com/use-cases/monitor-schedule-work/
- Keyword: "how to keep Laravel schedule:work running in production"
- Distinct from existing monitor-schedule-run page: covers daemon-specific failure modes (uncaught exceptions, memory leaks, Supervisor stopasgroup, container restart without handoff)
- ~700 words, 4 code samples, humanizer pass applied
- PR #106 → squash merged to main → Cloudflare Pages auto-deploy triggered

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted successfully
- Queue updated: schedule-work moved pending → completed

**GSC findings:**
- sc-domain:crontinel.com: siteOwner — full scope
- Minimal impressions across all pages — site is still early in search lifecycle
- No zero-click patterns have enough data to act on yet (title rewrites from 2026-06-22 need ~7 more days)

## Winning Patterns (replicate these)
- Articles with a specific real-world failure scenario in the opening hook get higher engagement
- "See also" sections with 4-5 related links improve internal link equity
- Long-tail keywords like "how to monitor Laravel Reverb server in production" target low-competition niches
- Problem-first structure: hook with the failure, then technical explanation, then monitoring solution
- Daemon-specific failure modes (memory leak timing, OOM calculations, specific config flags) add credibility and differentiation from related pages

## Improvement Needed
- GSC CTR on existing content is very low (mostly <1%) — need more impression data before acting
- Monitor-route-cache title rewrite applied 2026-06-22 — check CTR change after 2026-06-29
- Monitor-horizon-purge title rewrite applied 2026-06-22 — check CTR change after 2026-06-29
- Monitor-reverb-server: check GSC data debut after 2026-06-28

## Content Rules (accumulated learning)
- Keyword must appear in H1, first paragraph, and at least one H2
- Hook: real failure scenario in 80-120 words, specific detail (process names, port numbers, exact symptoms, numerical thresholds)
- Include a code snippet showing Crontinel integration (actual Laravel code, not generic examples)
- Word count target: 650-850 words
- Run gitleaks before commit, fix any reported secrets
- Sentence case for H2 headings (per humanizer skill)
- Avoid em dashes and promotional framing ("most reliable", "fastest")
- When covering related-but-distinct topics (daemon vs cron), explicitly differentiate the failure modes to avoid creating near-duplicate content
- Humanizer pass: convert inline-header failure mode lists to natural paragraphs, reduce em dashes, remove "the key difference" and "the first step is" signposting

## Queue Notes
- scout-sync-index-settings marked completed
- monitor-scout-sync-index-settings URL submitted to GSC via sitemap
- Remaining pending: event-clear, db-seed, db-wipe, migrate-rollback, pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-interrupt, about, inspire
- Next strong candidates: event-clear (complements existing event-cache), schedule-interrupt (complements schedule-run/schedule-work)
- Self-improvement check for monitor-pulse-check: re-check 2026-07-07 (no data yet)
- Self-improvement check for scout-sync-index-settings: due 2026-07-08

## Pending GSC improvements
- Homepage: 59 impressions, 0 clicks (pos 10.1) — need more impression data before changing meta
