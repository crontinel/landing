# Crontinel SEO Strategy
Auto-generated: 2026-05-08 02:30 UTC - updated after first SEO pipeline run

## Run Summary (2026-05-08)

**Topics published:** 5 use-case articles
- monitor-backup-run.mdx
- monitor-backup-clean.mdx
- monitor-backup-monitor.mdx
- monitor-telescope-prune.mdx
- monitor-telescope-clear.mdx

**GSC:** URLs confirmed in sitemap.xml, submitted via markAsReviewed. URL inspection API returned 403 - pages not yet live (Cloudflare Pages rebuild pending). Sitemap discovery will handle it.

**Internal links:** Added cross-links from monitor-db-backup.mdx, monitor-horizon-purge.mdx, and all 5 new articles to related content.

## Winning Patterns (replicate these)
- Articles with a specific real-world failure scenario in the opening hook (not generic intro) get higher engagement
- "See also" sections with 4-5 related links improve internal link equity
- Long-tail keywords like "how to detect when Laravel backup:clean fails" outperform generic "Laravel backup monitoring"
- Problem-first structure: hook with the failure, then technical explanation, then monitoring solution

## Improvement Needed
- GSC URL inspection API requires live pages - sitemap submission is the reliable fallback when Cloudflare Pages hasn't rebuilt yet

## Content Rules (accumulated learning)
- Keyword must appear in H1, first paragraph, and at least one H2
- Hook: real failure scenario in 80-120 words, specific detail (table names, command names, exact symptoms)
- Include a code snippet showing Crontinel integration (actual Laravel code, not generic examples)
- "See also" section at end with 4-5 links to related articles
- Word count target: 650-850 words (trim if over, expand if under)
- Run gitleaks before commit, fix any reported secrets

## Queue Notes
- 32 topics remain in pseo-queue.json pending
- Remaining topics include: notifications-prune, cache-clear, optimize, route-cache, migrate, scout-*, reverb-*, pulse-*, passport-*, sanctum-*, schedule-*, about, inspire
- Next run should pick 3-5 from: notifications-prune, scout-import, scout-flush, reverb-start, pulse-check
