# SEO Pipeline Archive — 2026-07-04

**Date:** 2026-07-04 (pipeline run: 2026-07-05 02:00 UTC)
**Product:** Crontinel
**State:** Maintenance run — no new content generated

## Summary

- **Articles Generated:** 0 — Claude Code not authenticated
- **Articles Committed:** 0
- **Articles Submitted to GSC:** 2 existing URLs submitted via sitemap
- **GSC Errors Fixed:** 1 (removed stale `sitemap-index.xml` that returned 404; submitted `sitemap.xml`)
- **Next Run:** 2026-07-05 02:00 UTC (08:00 Dhaka)

## Blockers

### Claude Code auth unavailable
- `claude auth status` reports `loggedIn: false`
- `claude -p` non-interactive probe: `Not logged in · Please run /login`
- `claude auth login --console` opens browser (non-interactive — cannot complete in cron context)
- **Impact:** Cannot generate new content through Claude Code. Both interactive and print-mode paths blocked.
- **Action needed (Harun):** Run `claude auth login --console` on the machine to restore auth.

## What was checked

### Pre-flight
- [x] Repo: `~/Work/crontinel/landing/`, branch: `main`
- [x] pseo-queue.json: 9 pending topics (db-wipe, migrate-rollback, pulse-restart, etc.)
- [x] gsc-queue.json: 2 pending URLs → moved to submitted
- [x] GSC service account: `siteOwner` on `sc-domain:crontinel.com`

### Technical SEO fixes
- [x] Removed broken `sitemap-index.xml` from GSC (returned 404, had 1 error)
- [x] Submitted `sitemap.xml` to GSC — now has 121 URLs
- [x] New URLs `monitor-db-seed` and `monitor-event-clear` confirmed live (both return HTTP 200)
- [x] Verified both new URLs are already in the live sitemap
- [x] Updated gsc-queue.json: pending → submitted, last_push updated

### Content health
- [x] 58 use-case pages, 35 blog posts, 13 vs pages, 4 integrations — all live
- [x] No stale content (< 180 days); oldest from 2026-04-07 (~89 days)
- [x] No content gaps urgent enough to warrant manual generation without Claude

## Archive Contents
- gsc-queue.json updated: 2 URLs moved from pending to submitted
- No new content committed
- Sitemap `sitemap-index.xml` removed from GSC (404 dead entry)
- `https://crontinel.com/sitemap.xml` submitted (now primary sitemap)
