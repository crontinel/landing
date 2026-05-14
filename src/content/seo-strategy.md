# Crontinel SEO Strategy
Auto-generated: 2026-05-12 02:20 UTC - updated after second SEO pipeline run

## Run Summary (2026-05-12)

**Topic published:** monitor-route-cache.mdx
- Keyword: "monitor laravel route:cache in production" (stale cache after deploy is the primary failure scenario)
- Angle: route cache staleness after deployment, named route conflicts hidden in cache, syntax error handling
- 7517 bytes, ~730 words body, 4 failure modes, 2 code samples

**GSC findings:**
- Pages are indexed once Google crawls the canonical slash URLs from the sitemap
- The prior "0 indexed" sitemap view was a lagging report, not the actual page coverage state
- Canonical URLs should normalize to trailing slash for this deploy target
- robots.txt allows all crawlers (no blocking issues)

**Critical finding:** The site had a slash-policy mismatch: no-slash requests were getting redirected to slash, while some slash URLs were serving redirect/noindex artifacts. The fix is to align Astro, the sitemap, and canonical URLs on trailing slash so Google lands on the real content pages instead of redirect pages.

**GitHub auth blocked:** Cannot push to main - GitHub token is invalid in osxkeychain. CI deploy won't trigger. Commit is local only. Harun needs to re-authenticate `gh` or push manually.

## Winning Patterns (replicate these)
- Articles with a specific real-world failure scenario in the opening hook (not generic intro) get higher engagement
- "See also" sections with 4-5 related links improve internal link equity
- Long-tail keywords like "how to detect when Laravel backup:clean fails" outperform generic "Laravel backup monitoring"
- Problem-first structure: hook with the failure, then technical explanation, then monitoring solution
- route:cache article: Named route conflicts "silently baked into cached file" is a unique insight not covered by generic Laravel docs

## Improvement Needed
- GSC URL inspection API requires live pages - sitemap submission is the reliable fallback when Cloudflare Pages hasn't rebuilt yet
- GitHub auth is broken in this environment - commits are local only until Harun re-authenticates

## Content Rules (accumulated learning)
- Keyword must appear in H1, first paragraph, and at least one H2
- Hook: real failure scenario in 80-120 words, specific detail (table names, command names, exact symptoms)
- Include a code snippet showing Crontinel integration (actual Laravel code, not generic examples)
- "See also" section at end with 4-5 links to related articles
- Word count target: 650-850 words (trim if over, expand if under)
- Run gitleaks before commit, fix any reported secrets

## Queue Notes
- route-cache marked complete
- Remaining topics: notifications-prune, scout-import, scout-flush, reverb-start, pulse-check, config-cache, view-cache, event-clear, storage-link, db-seed, db-wipe, migrate-fresh, migrate-rollback, schedule-work, schedule-interrupt, passport-purge, sanctum-prune-expired
- Next run: pick from notifications-prune or scout-flush (both have clear search intent for Laravel devs)
- Total queue: 24 topics pending
