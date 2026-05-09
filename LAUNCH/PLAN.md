# Crontinel Launch Plan - Updated Apr 24, 2026

> **Status:** All P0 blockers CLEARED as of Apr 24. Launch is live.
> Product: Crontinel - Laravel-native cron & queue monitoring
> Owner key: **H** = Harun | **A** = Agent | **B** = Both

---

## 1. Pre-Launch Checklist - Status

### T-7 (Apr 14) ✅ DONE
- [x] App deployed to Railway (app.crontinel.com) - H
- [x] Landing deployed to Cloudflare Pages (crontinel.com) - H
- [x] Docs deployed (docs.crontinel.com) - H
- [x] All 13 repos CI green - B
- [x] MCP server published to npm (@crontinel/mcp-server v0.2.0) - H
- [x] SEO audit complete - A
- [x] GitHub org profile filled in - A

### T-3 (Apr 18) ✅ DONE
- [x] Landing redesigned and deployed - B
- [x] LTD page live ($149 one-time) - H
- [x] Twitter/X thread draft ready - H
- [x] Reddit launch post draft ready - H
- [x] Launch email draft ready - H
- [x] Outreach email sent to laravel-news.com - H
- [x] GitHub OAuth + Google OAuth deployed - B
- [x] Packagist description sharpened - A

### T-1 (Apr 20) ✅ DONE
- [x] Stripe live keys swapped in Railway - H
- [x] End-to-end smoke test - H
- [x] GitHub + Google OAuth login tested - H
- [x] Transactional email tested via Resend - H
- [x] Stripe checkout tested ($19/mo + $149 LTD) - H
- [x] All 3 pricing tiers enforce limits correctly - H
- [x] Mobile check (Safari iOS, Chrome Android) - H
- [x] OG images verified - H
- [x] Railway production mode enabled - H

---

## 2. What Actually Happened - Apr 21–24

| Date | Event |
|---|---|
| **Apr 21** | Launch day - all P0 blockers cleared. HN/Twitter/Reddit launch status unknown (see below). |
| **Apr 22** | PH launch scheduled for Apr 28 (per original plan). Status of r/laravel and other community posts unknown. |
| **Apr 23** | thenping.me capitalization executed (blog post, VS page, announcement bar). |
| **Apr 24** | Custom domain status pages live. Favicon updated to v18. Packagist webhooks attempted (secret mismatch - needs manual fix). |

### Unknown / Unconfirmed
- ❓ **Hacker News** - was a Show HN submitted? Check at [news.ycombinator.com](https://news.ycombinator.com)
- ❓ **Twitter/X** - was the thread posted?
- ❓ **Reddit (r/laravel, r/PHP, r/selfhosted)** - were posts made?
- ❓ **Laravel Discord** - was there a post?
- ❓ **GitHub stars** - current count unknown
- ❓ **Signups / early traction** - unknown

---

## 3. Remaining Action Items

> These are non-blocking but important for momentum. Do this weekend.

### H (Harun) - This Weekend

- [ ] **Verify HN launch status** - did you post Show HN on Apr 21? If not, post today. Title: "Show HN: Crontinel – open-source cron job monitoring for Laravel"
- [ ] **Verify Reddit posts** - check if r/laravel, r/PHP, r/selfhosted posts were made. If not, post this weekend.
- [ ] **Verify Twitter thread** - was it posted? If not, post today.
- [ ] **Google Search Console** - add crontinel.com property + verify DNS TXT
- [ ] **Submit sitemap** to Search Console (`crontinel.com/sitemap.xml`)
- [ ] **Laravel News** - submit via [laravel-news.com/links](https://laravel-news.com/links) (packages directory no longer exists at packages.laravel-news.com)
- [ ] **AlternativeTo.net** - create account, submit using content in `docs/marketing/submission-content.md`
- [ ] **daily.dev** - submit blog post about Crontinel
- [ ] **awesome-laravel PR #662** - follow up, still open/unmerged
- [ ] **Packagist webhooks** - manual re-setup needed for crontinel/php and crontinel/laravel (webhook secret mismatch)

### A (Agent) - Monitoring
- [ ] Track awesome-laravel PR #662 status
- [ ] Monitor for new GitHub stars / social mentions

---

## 4. Upcoming Planned Events

### PH Launch - Apr 28 (Monday)
| Time (PT) | Action | Owner |
|---|---|---|
| Apr 27 23:30 | Schedule PH post | H |
| Apr 28 08:00 | Be present on PH, reply to all comments | H |
| Apr 28 10:00 | Cross-post PH launch to Twitter/X | H |

### Post-Launch Week Retrospective - Apr 27–28
- [ ] Week-1 metrics review (signups, stars, revenue) - H
- [ ] Ship any fixes surfaced by early users - B
- [ ] Write Week 1 retrospective tweet/post - H
- [ ] Follow up on LTD purchases (thank personally) - H
- [ ] Plan Week 2: feature requests, roadmap update - H

---

## 5. Web Directory Submissions

> Permanent SEO backlinks. Do them this weekend - 10 min each.

| Directory | URL | Status |
|---|---|---|
| **AlternativeTo** | alternativeto.net | ⬜ Needs account + submission |
| **Laravel News** | laravel-news.com/links | ⬜ Not submitted (old packages URL gone) |
| **awesome-laravel** | github.com/chiraggude/awesome-laravel | ⬜ PR #662 open |
| **daily.dev** | daily.dev | ⬜ Not submitted |
| **Made with Laravel** | madewithlaravel.com | ⬜ Not submitted |
| **PHP Weekly** | phpweekly.com | ⬜ Not submitted |

---

## 6. Missing Assets (P0 for next push)

| Asset | Why It Matters | Priority |
|---|---|---|
| **90-second demo video** | Highest-ROI missing asset. Install → dashboard → job fails → Slack alert. Embed on landing, PH, HN | P0 |
| **Animated GIF in GitHub README** | READMEs with moving dashboard screenshots get dramatically more stars | P0 |
| **Real Slack alert screenshot** | "Does it actually work?" - show actual failure data | P1 |

---

## 7. Success Metrics - Updated Apr 24

> Baseline unknown - Harun to fill in current numbers.

### Current (Apr 24)
| Metric | Current | Target | Stretch |
|---|---|---|---|
| Signups | ? | - | - |
| GitHub Stars | ? | - | - |
| LTD purchases | ? | - | - |
| MRR | ? | - | - |

### Week 1 Targets (by Apr 28)
| Metric | Target | Stretch |
|---|---|---|
| Signups | 200 | 500 |
| GitHub Stars | 250 | 600 |
| Active monitors | 100 | 300 |
| LTD purchases | 10 | 25 |
| MRR (Pro+Team) | $50 | $200 |
| Mentions / backlinks | 5 | 15 |

---

## 8. Crisis Plan (Unchanged)

See original §7 in previous version for Railway rollback, Stripe failure, OAuth broken, email not sending, HN/PH flagged scenarios.

---

## 9. This Weekend's Priority Stack

> **Do these in order. Don't skip the top two.**

1. ⬜ **Verify HN was posted** - if not, post NOW. This is the highest-signal thing you can do.
2. ⬜ **Verify Reddit posts** - post to r/laravel, r/PHP, r/selfhosted this weekend.
3. ⬜ **Verify Twitter thread** - post if not done.
4. ⬜ **Google Search Console** - add + verify crontinel.com (5 min)
5. ⬜ **Submit sitemap** to Search Console (2 min)
6. ⬜ **Laravel News** - submit via laravel-news.com/links (10 min)
7. ⬜ **AlternativeTo.net** - account + submission (15 min)
8. ⬜ **daily.dev** - blog post submission (10 min)
9. ⬜ **awesome-laravel PR #662** - follow up (2 min)
10. ⬜ **Packagist webhook re-setup** - manual (10 min)
