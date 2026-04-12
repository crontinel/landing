# SEO Writing Guide

## What this is

This guide trains the crontinel-docs-writer cron job to produce SEO content for Crontinel's blog.

---

## Content Pillars

1. **Cron job monitoring** — what it is, why it matters, how it works
2. **Laravel Horizon** — internals, Redis, supervisor monitoring
3. **Queue monitoring** — queue depth, job age, failed jobs
4. **Alerting** — Slack, email, PagerDuty, webhook setup
5. **Comparisons** — Crontinel vs Cronitor, Better Stack, UptimeRobot, Forge Heartbeats
6. **Best practices** — alert fatigue, thresholds, on-call
7. **Use cases** — SaaS billing jobs, scheduled tasks, multi-tenant

---

## Tone

- Direct, specific, not fluffy
- Assumes Laravel developer audience
- Code examples where relevant
- Ends with a CTA to install or waitlist

---

## Post Structure

```
---
title: "Title with target keyword"
description: "150 char description with keyword"
pubDate: YYYY-MM-DD
tags: [laravel, cron, monitoring]
---

[Opening hook — the pain point, 2-3 sentences]

## H2 — target keyword
[Body]

## H2 — secondary topic
[Body]

## H2 — third topic
[Body]

## H2 — actionable takeaway
[Wrap up with install command or waitlist link]
```

---

## Keyword Notes

- Primary keyword: "laravel cron monitoring" / "laravel queue monitoring" / "laravel horizon monitoring"
- Secondary: "cron job failed silently" / "queue depth monitoring" / "background job alerts"
- Long-tail: "laravel scheduler not running" / "how to monitor cron jobs laravel"

---

## Internal Linking

Every post should link to:
- `/pricing` — once
- `/features` — once or twice
- Relevant VS page — once
- OSS package GitHub — at CTA

---

## Format

Write in Markdown. Frontmatter: `title`, `description` (≤160 chars), `pubDate`, `tags`.

Save to: `src/content/blog/your-post-slug.md`
