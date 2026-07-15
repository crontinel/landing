# Crontinel SEO Strategy
Auto-generated: 2026-07-15 03:15 UTC — new use-case page: monitor-queue-latency

## Run Summary (2026-07-15)

**New article published:**
- `monitor-queue-latency.mdx` — Monitor Laravel Queue Processing Time — Detect When Jobs Run Slow
- URL: https://crontinel.com/use-cases/monitor-queue-latency/
- Keyword: "detect when Laravel queue processing time increases"
- Distinct from existing monitor-queue-worker-timeout (covers frozen/hanging workers with exceeded --timeout): this covers performance degradation — jobs that process but take much longer than expected
- Covers 4 failure modes: database query slowdowns, external API latency, resource contention, deadlock/lock contention
- ~700 words body, 1 code sample, 4 H3 failure mode sections, humanizer pass applied
- Feature branch → PR #162 → Cloudflare Pages auto-deploy (pending merge)

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC — 0 errors, 0 warnings
- URL added to gsc-queue.json (pending)
- queue-latency-monitoring moved pending → completed in pseo-queue.json
- monitor-horizon-stale-process-cleanup moved to gsc-queue submitted (merged via PR #161)

**GSC findings (28-day — 2026-06-17 to 2026-07-15):**
- 0 clicks across most pages — site still building search presence
- Top page by impressions: homepage (468 imp, pos 5.6, 1 click)
- Top blog: laravel-cron-queue-monitoring-tools (425 imp, pos 20.1, 0 clicks)
- Notable: monitor-telescope-clear (76 imp, pos 16.9, 1 click), laravel-horizon-idle-workers (74 imp, pos 14.6, 1 click)
- monitor-reverb-server: 34 imp, pos 11.1, 1 click — improving
- Sitemap healthy: 140 URLs, 0 errors, 0 warnings

**Self-improvement data:**
- No articles yet have enough GSC clicks to draw CTR conclusions
- Still insufficient data for title rewrite decisions on any page

**Queue status:**
- queue-latency-monitoring: completed (PR #162, pending merge to main)
- 6 topics remaining pending: kubernetes-laravel-horizon, laravel-schedule-timezone-mismatch, laravel-supervisor-configuration, long-running-cron-jobs, self-hosted-monitoring-comparison (deferred), telescope-storage-cleanup


## Run Summary (2026-07-11)

**New article published:**
- `monitor-pennant-purge.mdx` — Monitoring php artisan pennant:purge in Laravel Production
- URL: https://crontinel.com/use-cases/monitor-pennant-purge/
- Keyword: "detect when Laravel pennant:purge stops cleaning stale feature flags"
- Merged PR #148 (open since 2026-07-10 — never merged until now)
- Covers scheduler stoppage, wrong environment scope in shared backends, feature class autoloading failures, large data set timeouts
- ~670 words body, 3 code samples, humanizer pass applied
- Live: HTTP 200 verified

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC
- URL moved pending → submitted in gsc-queue.json

**GSC findings (30-day):**
- Site still building search presence — minimal impressions/click data
- monitor-route-cache: still no CTR data sufficient for action
- Remaining pending topics (passport-purge, sanctum-prune-expired, schedule-interrupt, inspire) are all low-intent artisan commands — none clear the quality bar for new content

**Self-improvement data:**
- monitor-pulse-check (published 2026-06-24): ~17 days — still no clicks
- monitor-scout-sync-index-settings (2026-07-01): ~10 days — no GSC data
- monitor-event-clear (2026-07-03): ~8 days — no GSC data
- monitor-db-wipe (2026-07-06): ~5 days — too new
- monitor-migrate-rollback (2026-07-07): ~4 days — too new
- monitor-pennant-purge (2026-07-10/11): just published — too new
- No articles have enough GSC data (clicks/impressions) to trigger title rewrites or self-improvement queue expansion yet

**Queue status:**
- pennant-purge: completed (moved from pending, PR merged)
- Remaining pending: passport-purge, sanctum-prune-expired, schedule-interrupt, inspire
- Consider: queue renewal needed — replace low-intent topics with GSC gap topics once data accumulates

## Run Summary (2026-07-07)

**New article published:**
- `monitor-migrate-rollback.mdx` — Detecting when php artisan migrate:rollback fails in production
- URL: https://crontinel.com/use-cases/monitor-migrate-rollback/
- Keyword: "detect when php artisan migrate:rollback fails in production"
- Companion piece to existing `monitor-migrate` and `monitor-migrate-fresh` articles
- Covers partial rollback traps (non-transactional per-migration rollback), destructive down() methods dropping data, wrong batch rollbacks, and silent failures where the command exits non-zero but some migrations were already undone
- ~900 words, 3 code samples, humanizer pass applied
- Written manually (Claude Code auth was down — same issue as 2026-07-03)
- Feature branch → PR → squash merge → Cloudflare Pages auto-deploy

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC
- migrate-rollback moved pending → completed in pseo-queue.json
- URL added to gsc-queue.json (pending, submitted via sitemap)
- monitor-db-wipe URL moved from pending → submitted in gsc-queue.json

**GSC findings (7-day — 2026-06-30 to 2026-07-07):**
- 1 total click across all pages (homepage) — site still building search presence
- Homepage: 1 click, 111 impressions, pos 4.7 — position improving
- No blog/use-case pages have recorded clicks yet
- Most pages have 0-15 impressions in the last 7 days
- monitor-route-cache: no data shown in 7-day window (needs 28-day aggregation)
- monitor-pulse-check: self-improvement GSC check due — no clicks yet, insufficient data to draw conclusions

**Self-improvement data:**
- monitor-pulse-check (published 2026-06-24): no GSC clicks in any time window yet — recheck in 2 weeks
- monitor-scout-sync-index-settings (published 2026-07-01): no GSC data visible yet
- monitor-event-clear (published 2026-07-03): no GSC data visible yet
- monitor-db-wipe (published 2026-07-06): too new for GSC data
- monitor-migrate-rollback (published 2026-07-07): too new for GSC data

**Claude Code auth status:** Still unavailable (`loggedIn: false`). Article was written manually. Pipeline continues on this path.

**Queue status:**
- migrate-rollback: completed
- Remaining pending: pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-interrupt, inspire
- These are low-intent artisan commands — no strong search gap identified yet

## Run Summary (2026-07-03)

**New article published:**
- `monitor-event-clear.mdx` — Monitoring event:clear in Laravel Production
- URL: https://crontinel.com/use-cases/monitor-event-clear/
- Keyword: "detect when Laravel event:clear silently fails to clear cached events"
- Companion piece to existing `monitor-event-cache` article, following the same pattern as `config-clear` (companion to `config-cache`)
- Covers cleared-but-never-rebuilt, mixed cache states in rolling deploys, permission errors, and one-server-cleared scenarios
- ~780 words body, 2 code samples, humanizer pass applied
- Written manually (Claude Code auth was down)
- PR #131 → squash merged to main → Cloudflare Pages auto-deploy

**GSC actions:**
- Sitemap (https://crontinel.com/sitemap.xml) re-submitted to GSC
- event-clear moved pending → completed in pseo-queue.json
- URL added to gsc-queue.json (pending, submitted via sitemap)

**GSC findings (30-day — 2026-06-03 to 2026-07-03):**
- 3 total clicks across all pages — site still building search presence
- Homepage position improving (7.1→5.2 over last 12d), still 0 clicks
- monitor-route-cache (title rewrite 2026-06-22): position 7.2, 132 imp, 0 clicks — stable/improving
- monitor-horizon-purge (title rewrite 2026-06-22): position 8.1, 12 imp, 0 clicks — too few impressions
- monitor-reverb-server: position 10.9, 15 imp, 0 clicks — too few impressions

**Self-improvement data:**
- monitor-pulse-check: no GSC data yet (published 2026-06-24)
- monitor-scout-sync-index-settings: no GSC data yet (published 2026-07-01)
- monitor-event-clear: no GSC data yet (published 2026-07-03) — check after 2026-07-10

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
- Cache driver misconfiguration as a failure mode resonates because it's a real, common deployment pitfall
- Deployment-timing failure modes (interrupt called before/after restart) add credibility — teams deploying via Supervisor hit this

## Improvement Needed
- GSC CTR on existing content is very low — homepage 0.3% on 393 impressions, needs internal link improvements to drive traffic to content pages
- about page: 125 impressions, 0 clicks — consider adding contextual cross-links from blog posts
- better-stack-cron-monitoring-gone: 25 imp, pos 5.1, CTR 0% — low impressions but good position; title rewrite candidate if impressions grow
- Self-improvement queue expansion triggered for reverb-server, telescope-clear, horizon-purge, timezone-issues, horizon-idle-workers (all CTR ≥ 2% on 28-day data)

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
- For deployment-safety topics, cite Deployer recipe and Laravel docs as authority sources

## Queue Notes
- schedule-interrupt marked completed
- schedule-interrupt URL added to gsc-queue.json pending — submit via sitemap
- GSC 28-day data shows 5 pages with CTR ≥ 2% — expansion topics should be added to queue
- Remaining pending: sanctum-prune-expired, inspire
- Recommend: remove inspire (no production monitoring value), replace with high-CTR expansion topics
- Consider: sanctum-prune-expired has a weak but real use case for teams using Sanctum API tokens

## Pending GSC improvements
- Homepage: 393 imp (28-day), 1 click, pos 5.6, CTR 0.3% — impressions growing, keep monitoring
- about: 125 imp, pos 5.5, 0 clicks — add cross-links from use-case pages
- better-stack-cron-monitoring-gone: 25 imp, pos 5.1, 0 clicks — watch for CTR data
- monitor-route-cache: position 5-7 across multiple queries, 0 clicks — keyword-specific pages need time
- monitor-horizon-purge: 1 click, 43 imp, 7.0 pos, CTR 2.3% — healthy, queue expansion triggered
- monitor-reverb-server: 1 click, 27 imp, pos 10.6, CTR 3.7% — high CTR, good keyword alignment
- monitor-telescope-clear: 1 click, 33 imp, pos 9.8, CTR 3.0% — high CTR, queue expansion triggered
