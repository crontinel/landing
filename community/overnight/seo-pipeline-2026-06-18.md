# Crontinel SEO pipeline archive - 2026-06-18

Run time: 2026-06-17 20:00 UTC / 2026-06-18 02:00 Dhaka

## Summary

Articles Generated: 0
Articles Committed: 0
Articles Submitted to GSC: 0 (no new URLs; sitemap already healthy)
GSC Errors: none. Sitemap status shows 0 warnings, 0 errors, 109 submitted URLs, last downloaded 2026-06-12T20:09:00Z

No new SEO page was published tonight. This was a conservative no-publish run. GSC did not show a strong enough fresh content opportunity, and no technical SEO issue was identified.

## Checks performed

- Current branch before work: `main`, clean and synced with `origin/main`.
- Work branch created: `seo/nightly-2026-06-18`.
- Claude Code auth in normalized cron shell: unavailable, `loggedIn: false`, `authMethod: none`. No credentials file exists at `~/.claude/credentials.json`. Browser-based login is impossible in cron context. This is a content-generation blocker.
- GitHub CLI auth: healthy. `gh auth status` shows `HarunRRayhan` logged in with repo, workflow, and gist scopes.
- GSC credentials: service account has `siteOwner` access for `sc-domain:crontinel.com`.
- GSC performance window checked: 2026-05-19 to 2026-06-17 (30 days).
- GSC page+query rows in window: 11 total rows across all content pages.
- GSC sitemap status: 0 warnings, 0 errors, 109 submitted URLs, `isPending: false`.
- Local build: `npm run build` passed. Prerendered routes include 35 blog pages, 46 use-case pages, 4 integration pages, and 13 vs pages.
- Local quality test: `npm test` passed (`Landing copy punctuation, hero animation wiring, and GA4 wiring verified.`).
- Live homepage: `https://crontinel.com/` returned HTTP 200 (CF cache HIT).
- Live sitemap: `https://crontinel.com/sitemap.xml` returned HTTP 200, XML content.
- Live app health: `https://app.crontinel.com/` returned HTTP 302 to `/login`, which is healthy for the app.
- Stale content check: no content pages older than 180 days found.
- Existing content check: no references to Laravel Reverb or WebSocket server monitoring exist in the published content. The `reverb-start` topic remains pending in `pseo-queue.json`.

## GSC observations (30-day window)

Top content pages by impressions:

| URL | Top Query | Imp | Clicks | CTR | Pos |
|---|---|---|---:|---:|---:|---:|
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel monitoring` | 51 | 0 | 0.00% | 63.3 |
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel performance monitoring` | 4 | 0 | 0.00% | 73.8 |
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel forge monitoring` | 2 | 0 | 0.00% | 15.5 |
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel monitoring solutions` | 2 | 0 | 0.00% | 33.0 |
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel monitoring tools` | 2 | 0 | 0.00% | 25.0 |
| `/use-cases/monitor-route-cache/` | `laravel route cache file bootstrap/cache/routes-v7.php` | 4 | 0 | 0.00% | 8.3 |
| `/use-cases/monitor-route-cache/` | `laravel route:cache creates bootstrap/cache/routes-v7.php` | 2 | 0 | 0.00% | 10.5 |
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel bug monitoring` | 1 | 0 | 0.00% | 37.0 |
| `/blog/laravel-cron-queue-monitoring-tools/` | `laravel queue monitoring` | 1 | 0 | 0.00% | 10.0 |
| `/use-cases/monitor-route-cache/` | `laravel bootstrap/cache/routes-v7.php file` | 1 | 0 | 0.00% | 8.0 |
| `/use-cases/monitor-schedule-run/` | `php artisan schedule run` | 1 | 0 | 0.00% | 44.0 |

Key observations:

- **`laravel-cron-queue-monitoring-tools/`**: Still the top page by impressions (51 for "laravel monitoring"), but position 63 means it's far from the top of SERPs. This was refreshed on 2026-06-13 - 5 days ago. Too soon for another SEO change; the page needs at least 14 days of post-refresh data before a second intervention.
- **`monitor-route-cache/`**: 7 impressions total with positions 8-10 for specific route-cache queries. This is a healthy position for long-tail queries. 0 clicks is consistent with low volume, not a title mismatch.
- **`monitor-schedule-run/`**: 1 impression. No action warranted.
- **Overall**: The site still has very low search visibility (11 total rows across ALL content pages in 30 days). This is expected for a young domain growing organically. No page has enough data to act on.

## No-publish decision

Decision: do not publish new content tonight.

Reasoning:

1. **Claude Code auth is broken**: `loggedIn: false`, `authMethod: none`. No credentials file exists at `~/.claude/credentials.json`. Browser-based `claude auth login --console` is impossible in cron context. A manual fallback article is possible in theory but:
2. **No strong GSC gap**: GSC performance data is very low volume. No search query is pointing at a clear content gap that would benefit from a manual article.
3. **Main candidate recently refreshed**: `laravel-cron-queue-monitoring-tools/` was updated 5 days ago and needs more observation time.
4. **No stale content**: All pages are less than 6 months old.
5. **Conservative pacing policy**: "If the topic doesn't have a clear angle or real use-case, skip it." Publishing a speculative Reverb monitoring article without search demand data would violate the data-driven approach.

## Pending queue status

21 topics remain in `pseo-queue.json` pending[]:
`config-clear, view-cache, view-clear, event-clear, storage-link, db-seed, db-wipe, migrate-fresh, migrate-rollback, scout-import, scout-sync-index-settings, reverb-start, pulse-check, pulse-restart, pennant-purge, passport-purge, sanctum-prune-expired, schedule-work, schedule-interrupt, about, inspire`

Note: GSC is not showing search demand for any of these topics specifically. The `reverb-start` topic (monitoring Laravel Reverb WebSocket servers) has the strongest real-world production use-case among pending items, but there is no GSC data suggesting high search volume for it. It remains queued for a future run when either Claude Code auth is restored or a stronger content gap emerges.

## Blockers / decisions

- **Blocker**: Claude Code auth remains unavailable in the cron shell (`loggedIn: false`, `authMethod: none`, no credentials file exists). This blocks automated content generation. A manual fallback is possible but requires a strong, data-backed content opportunity.
- **Open question**: The `reverb-start` topic is a legitimate production monitoring use-case (Laravel Reverb WebSocket servers). Should this be developed as a manual article despite no GSC signal, or wait until Claude Code auth is restored? No strong signal either way tonight.
- **Sitemap**: Healthy with 109 submitted URLs, 0 errors. Last downloaded 2026-06-12. No action needed.

## Next run

2026-06-18 02:00 UTC / 2026-06-18 08:00 Dhaka
