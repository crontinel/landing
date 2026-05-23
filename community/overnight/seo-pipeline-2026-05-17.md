# Crontinel SEO Pipeline Archive - 2026-05-17

Run time: 2026-05-17 02:00 Dhaka
Repo: `/Users/ray/Work/crontinel/landing`
Branch observed: `fix/bing-cache-purge`

## Summary

Articles Generated: 0
Articles Committed: 0
Articles Submitted to GSC: 0/0
GSC Errors: none found in sitemap status

No new page was published tonight. This was intentional under the conservative pacing rule: GSC has almost no usable performance data yet, the current checkout is not on `main`, and Claude Code content generation is blocked by auth. Publishing a manually generated page from a non-main branch would be a higher risk than waiting.

## Pre-flight

- Claude Code auth: blocked
  - `claude auth status` returned `loggedIn: false`
  - `claude -p 'hello' --model sonnet --max-turns 1` returned: `Not logged in · Please run /login`
- Build: passed with `npm run build`
- Git state: current branch is `fix/bing-cache-purge`, with `community/` untracked before this archive was written

## GSC diagnostics

Property checked: `sc-domain:crontinel.com`
Permission level: `siteOwner`
Date range: 2026-04-17 to 2026-05-15
Rows returned: 3

Observed pages:

- `https://crontinel.com/blog/laravel-cron-queue-monitoring-tools/`
  - Clicks: 0
  - Impressions: 2
  - CTR: 0.00%
  - Avg position: 18.0
  - Queries: `laravel forge queue monitoring`, `laravel monitoring solutions`
- `https://crontinel.com/`
  - Clicks: 0
  - Impressions: 1
  - CTR: 0.00%
  - Avg position: 55.0
  - Query: `cronicle cron`

No page had enough impressions to justify a title/meta rewrite. Threshold used: at least 10 impressions for a low-confidence check, preferably 20+ before changing live titles.

## Sitemap / live checks

- `https://crontinel.com/`: 200 with browser-like user agent
- `https://crontinel.com/sitemap.xml`: 200
- GSC sitemap status for `https://crontinel.com/sitemap.xml`: 0 warnings, 0 errors
- Sitemap submitted successfully to GSC during this run
- `https://app.crontinel.com/`: redirected to `/login` and returned login page, which is healthy for the app

## Queue / content decision

Pending queue starts with:

1. `route-clear`
2. `config-cache`
3. `config-clear`
4. `view-cache`
5. `view-clear`

I did not move a topic to `in_progress` because the content generation prerequisite failed and the current branch is not an SEO feature branch. The queue remains unchanged.

## Blocker

Claude Code is not authenticated in the cron execution context. This blocks the supported Opus writing path.

Specific blocker:

```text
Not logged in · Please run /login
```

Fix needed:

- Restore Claude Code auth for the cron environment, either with console login or a valid `ANTHROPIC_API_KEY` visible to the cron runner.
- Verify with:

```bash
cd /Users/ray/Work/crontinel/landing
claude -p 'hello' --model sonnet --max-turns 1
```

## Next run

Next scheduled Crontinel SEO run: 2026-05-18 08:00 Dhaka if using the current table schedule (`0 2 * * *` UTC).