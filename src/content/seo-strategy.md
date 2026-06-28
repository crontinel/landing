# Crontinel SEO Strategy
Auto-generated: 2026-06-29 02:15 UTC — new use-case page: monitor-scout-import

## Run Summary (2026-06-29)

**New article published:**
- `monitor-scout-import.mdx` — Detecting when Laravel Scout import silently fails to import all records
- URL: https://crontinel.com/use-cases/monitor-scout-import/
- Keyword: "detect when Laravel Scout import silently fails to import all records"
- Distinct from existing content: complements monitor-scout-flush (flush wipes index, import rebuilds it — common pair in deploy scripts)
- Covers failure modes: queue drops during chunked batch imports, memory exhaustion on large datasets, engine rate limits (Algolia/Meilisearch/Typesense), model serialization errors
- ~800 words, 2 code samples, humanizer pass applied
- PR #122 → squash merged to main → Cloudflare Pages auto-deploy triggered (live: 200)
- Claude Code auth unavailable — article written manually per pipeline fallback

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC
- scout-import moved pending → completed
- URL added to gsc-queue.json

**GSC findings (28-day):**
- Only 2 total clicks across all pages — site still building search presence
- `/about/` at pos 4.5 with 29 impressions, 0 clicks — potential meta rewrite candidate after more data
- Title rewrites from 2026-06-22 (monitor-route-cache, monitor-horizon-purge): no GSC data yet
- No stale content >180 days found

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
- pulse-check marked completed
- monitor-pulse-check URL submitted to GSC via sitemap
- Remaining pending: config-clear, view-cache, view-clear, event-clear, storage-link, db-seed, db-wipe, migrate-rollback, scout-import, scout-sync-index-settings, pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-interrupt, about, inspire
- Next strong candidates: scout-import (complements existing scout-flush), config-clear (stale config cache after deployment)
- Self-improvement check for monitor-pulse-check: due 2026-07-01 (7 days post-publish)

## Pending GSC improvements
- Homepage: 59 impressions, 0 clicks (pos 10.1) — need more impression data before changing meta
