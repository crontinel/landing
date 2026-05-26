# Crontinel SEO pipeline archive - 2026-05-25

Run time: 2026-05-25 02:00 Dhaka
Repository: `/Users/ray/Work/crontinel/landing`
Branch: `seo/nightly-gsc-2026-05-24`

## Summary

Articles Generated: 0
Articles Committed: 0
Articles Submitted to GSC: 0 new article URLs; sitemap resubmitted successfully

No new page was published. The run stayed conservative because Claude Code content generation is still blocked in this cron environment, and GSC did not show a strong enough content gap to justify a manual article without the required Opus writing pass.

## Pre-flight

- Claude Code OAuth status: `loggedIn: false`, `authMethod: none`
- Claude print-mode probe: failed with `Not logged in · Please run /login`
- GSC credentials: working via service account at `/Users/ray/Work/crontinel/.secrets/gsc-service-account.json`
- GSC permission for `sc-domain:crontinel.com`: `siteOwner`
- GitHub CLI auth: invalid token for `HarunRRayhan`; push/PR workflow remains blocked
- Current local branch already contains yesterday's unpushed archive commit: `1bde84c seo: archive nightly gsc run`

## GSC diagnostics checked

Date range: 2026-04-25 to 2026-05-23

Top pages with data:

- `https://crontinel.com/`: 2 clicks, 17 impressions, CTR 11.76%, avg position 7.71
- `https://crontinel.com/blog/how-to-set-up-laravel-cron-monitoring/`: 1 click, 11 impressions, CTR 9.09%, avg position 8.18
- `https://crontinel.com/blog/laravel-cron-queue-monitoring-tools/`: 1 click, 48 impressions, CTR 2.08%, avg position 7.58
- `https://docs.crontinel.com/introduction/`: 1 click, 3 impressions, CTR 33.33%, avg position 4.00

Top discovered queries remain sparse:

- `laravel forge queue monitoring`: 1 impression, position 7
- `laravel monitoring solutions`: 1 impression, position 29
- `cronofy scheduling api review evaluation`: 1 impression, position 7

The only page with meaningful impressions is `laravel-cron-queue-monitoring-tools`. CTR is above the low-CTR threshold and the query sample is still too small, so no title/meta rewrite was applied.

## Actions taken

- Verified `https://crontinel.com/` returns HTTP 200.
- Verified `https://crontinel.com/sitemap.xml` returns HTTP 200.
- Verified `https://app.crontinel.com/` returns HTTP 302 to `/login`, which is healthy for the app.
- Confirmed GSC sitemap status has 0 warnings and 0 errors.
- Submitted `https://crontinel.com/sitemap.xml` to GSC successfully.
- Ran `npm run build`; build passed and prerendered current SEO routes.

## Blockers

### Claude Code auth

Claude Code is not authenticated in this scheduled run environment. The required Crontinel content workflow uses Claude Code Opus for content writing. Because the auth probe failed, the pipeline did not generate or publish a new SEO article.

Failing probe:

```text
claude -p 'hello' --model sonnet --max-turns 1
Not logged in · Please run /login
```

### GitHub push auth

GitHub CLI auth is still invalid, so the branch cannot be pushed and no PR can be opened from this cron environment.

```text
gh auth status
The token in default is invalid.
```

## Verification

- `npm run build` passed.
- Landing home returned HTTP 200.
- Sitemap returned HTTP 200.
- App returned HTTP 302 to `/login`, healthy.
- GSC sitemap submission returned success.

## Next action

Authenticate Claude Code for the cron environment or provide an API-key-backed cron environment so `claude -p` works non-interactively. Refresh GitHub auth so SEO branches can be pushed and PRs can be opened.
