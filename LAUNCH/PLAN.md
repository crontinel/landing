# Crontinel Launch Plan — Apr 21, 2026

> Launch day: **Monday, April 21, 2026**
> Product: Crontinel — Laravel-native cron & queue monitoring
> Owner key: **H** = Harun | **A** = Agent | **B** = Both

---

## 1. Pre-Launch Checklist

### T-7 (Apr 14) — Infrastructure ✅ DONE
- [x] App deployed to Railway (app.crontinel.com) — H
- [x] Landing deployed to Cloudflare Pages (crontinel.com) — H
- [x] Docs deployed (docs.crontinel.com) — H
- [x] All 13 repos CI green — B
- [x] MCP server published to npm (@crontinel/mcp-server v0.2.0) — H
- [x] SEO audit complete — A
- [x] GitHub org profile filled in (description, blog, location, Twitter) — A

### T-3 (Apr 18) — Content & Marketing ✅ DONE
- [x] Landing redesigned and deployed — B
- [x] LTD page live ($149 one-time) — H
- [x] Twitter/X thread draft ready — H
- [x] Reddit launch post draft ready — H
- [x] Launch email draft ready — H
- [x] Outreach email sent to laravel-news.com — H
- [x] GitHub OAuth + Google OAuth deployed — B
- [x] Packagist description sharpened (Laravel-native differentiator) — A

### T-1 (Apr 20 — TODAY) — Critical Blockers
- [ ] **BLOCKER**: Swap Stripe test keys → live keys in Railway — **H**
- [ ] End-to-end smoke test: sign up → create monitor → trigger ping — **H**
- [ ] Test GitHub OAuth login flow — **H**
- [ ] Test Google OAuth login flow — **H**
- [ ] Test transactional email (welcome, alert) via Resend — **H**
- [ ] Test Stripe checkout (Pro $19/mo, LTD $149) — **H**
- [ ] Verify all 3 pricing tiers enforce limits correctly — **H**
- [ ] Check crontinel.com on mobile (Safari iOS, Chrome Android) — **H**
- [ ] Verify OG images render correctly (Twitter Card Validator, OG Debugger) — **H**
- [ ] Clear Cloudflare cache after any last landing tweaks — **H**
- [ ] Set Railway to production mode / disable debug output — **H**

### Launch Day Eve (Apr 20 night)
- [ ] Stage all social posts in scheduler or draft tabs — **H**
- [ ] Sleep — **H** 😴

---

## 2. Launch Day Execution — Apr 21, 2026

> ⚠️ **REVISED TIMING (CCBot review): Do NOT launch PH and HN on the same day.**
> Both require you to be present and responding for hours. Split across the week.

| Time (ET) | Action | Owner | Notes |
|---|---|---|---|
| 07:00 | Final smoke test: sign up, create monitor, receive ping | H | Must pass before anything goes live |
| 07:30 | Confirm Railway health: `railway status`, check logs for errors | H | |
| 08:00 | **Post Twitter/X thread** | H | Use the drafted thread, first tweet pinned |
| 08:05 | **Submit to Hacker News** (Show HN) | H | Title: "Show HN: Crontinel – open-source cron job monitoring for Laravel" |
| 09:00 | Reply to HN comments, be present — camp for 4 hours | H | Don't disappear! |
| 12:00 | Check HN position, early signals | H | |
| **14:00** | **Send launch email** to list | H | Send at 2 PM — by then you have social proof: "launched on HN, X devs already using" |
| 15:00 | Second Twitter/X engagement post | H | |
| 17:00 | End-of-day summary: thank early users, no day-1 numbers unless good | H | |

### Launch Day +1 (Apr 22)
| Time (ET) | Action | Owner | Notes |
|---|---|---|---|
| 08:00 | Post to **r/laravel** | H | Use the Reddit draft |
| 10:00 | Post to **Laravel Discord** | H | Share in relevant channels |
| 12:00 | Check metrics, reply to any remaining HN/HN comments | H | |

### Launch Day +2 (Apr 23)
| Time (ET) | Action | Owner | Notes |
|---|---|---|---|
| 08:00 | Post to **r/selfhosted** | H | Docker/self-host angle |
| 10:00 | Post to **r/PHP** | H | Short version |
| 12:00 | **Laracasts forum** — find existing threads about "cron not running" or "Horizon supervisor down" and reply helpfully with a tool mention | H | Not a promo post — be genuinely helpful |
| 14:00 | **PHP Weekly** newsletter submission | H | Free, different audience |

### PH Launch Day (Apr 28 — Monday, one week later)
| Time (PT) | Action | Owner | Notes |
|---|---|---|---|
| 23:30 (Apr 27) | Schedule PH post | H | Schedule to go live at 12:01 AM PT |
| 08:00 | Be present on PH, reply to all comments | H | |
| 10:00 | Cross-post PH launch to Twitter/X | H | |

---

## 3. Web Directory Submissions (Do Today — 10 min each)

> These are permanent SEO backlinks. Do them in parallel with other work.

| Directory | URL | Notes |
|---|---|---|
| **AlternativeTo** | alternativeto.net | Submit as alternative to Cronitor, Healthchecks.io, Dead Man's Snitch, OhDear |
| **Laravel News /packages** | packages.laravel-news.com | Community package listing — highest-traffic Laravel directory |
| **awesome-laravel** | github.com/chiraggude/awesome-laravel | PR #662 submitted — monitor for merge |
| **daily.dev** | daily.dev | Submit blog posts about Crontinel |
| **Made with Laravel** | madewithlaravel.com | Niche but exactly your audience |
| **PHP Weekly** | phpweekly.com | Free newsletter submission |

**⏱️ Do these NOW — takes 10 min each, permanent SEO value.**

---

## 4. Post-Launch Week — Apr 22–28

### Day 1 (Apr 22) — Capitalize on HN signal
- [ ] Reply to every HN, PH, Reddit comment — **H**
- [ ] Follow up with laravel-news.com if no response — **H**
- [ ] DM top Laravel influencers who engaged on Twitter — **H**
- [ ] Check for any bug reports, fix critical issues same-day — **B**
- [ ] **Don't tweet day-1 numbers unless they're good.** Broadcasting 30 stars hurts. — **H**

### Day 2–3 (Apr 23–24) — Content Push
- [ ] Publish first blog post: "Why we built Crontinel" — **H**
- [ ] Submit to Laravel News manually if outreach has no response — **H**
- [ ] Post to dev.to / Hashnode with launch story — **H**
- [ ] Check for any Railway performance issues under real load — **H**
- [ ] Monitor Stripe for first paid conversions — **H**

### Day 4–5 (Apr 25–26) — SEO & Distribution
- [ ] Submit sitemap to Google Search Console — **H**
- [ ] Post to Indie Hackers (launch story) — **H**
- [ ] Publish comparison page content (vs. Cronitor, vs. Healthchecks.io) — **A**
- [ ] Respond to all support emails/DMs — **H**

### Day 6–7 (Apr 27–28) — Retrospective
- [ ] Week-1 metrics review (see §6 below) — **H**
- [ ] Ship any fixes surfaced by early users — **B**
- [ ] Write Week 1 retrospective tweet/post — **H**
- [ ] Plan Week 2: feature requests, roadmap update — **H**
- [ ] Follow up on any LTD purchases — thank personally — **H**

---

## 5. Missing Assets — Do After Launch

| Asset | Why It Matters | Priority |
|---|---|---|
| **90-second demo video** | Highest-ROI missing asset. Install → dashboard → job fails → Slack alert. Embed on landing hero, PH listing, HN thread | P0 |
| **Animated GIF in GitHub README** | READMEs with moving dashboard screenshots get dramatically more stars | P0 |
| **Real Slack alert screenshot** | "Does it actually work?" — show actual failure data | P1 |

---

## 6. What NOT to Waste Time On

> CCBot review — skip these entirely:
> - ❌ Cold-DMing influencers — near-zero conversion. Reply to their tweets instead.
> - ❌ "Giveaway for mentions" — low-quality, non-credible signals.
> - ❌ BetaList — wrong audience entirely.
> - ❌ More blog content this week — you have 28 posts. Distribute what exists.
> - ❌ Small PHP newsletters beyond PHP Weekly — tiny audiences, time sink.
> - ❌ "Partnership outreach" to Spatie — you're unknown. Contribute first.
> - ❌ Don't tweet day-1 numbers unless they're good.

---

## 7. Crisis / Rollback Plan

### Scenario A: App is down (Railway crash)
1. Check Railway dashboard → redeploy last working image
2. If DB issue: check Neon dashboard, connection string, connection limits
3. Temporary: put landing in maintenance mode via Cloudflare — edit `_routes.json`
4. Post status update on Twitter within 15 minutes
5. If >30 min downtime: post on X + HN thread, be transparent

### Scenario B: Stripe not processing payments
1. Confirm live keys are in Railway (not test keys)
2. Check Stripe dashboard for error logs
3. If can't fix in <1 hour: remove pricing CTAs from landing, replace with "join waitlist" temporarily
4. Refund any failed charges manually from Stripe dashboard

### Scenario C: GitHub OAuth broken (can't sign in)
1. Check `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` in Railway env — most likely cause
2. Confirm callback URL in GitHub OAuth app settings matches `app.crontinel.com/auth/github/callback`
3. Temporary mitigation: add email/password auth as fallback if implemented, or redirect to support

### Scenario D: Email not sending
1. Check `RESEND_API_KEY` in Railway, confirm domain verified in Resend dashboard
2. Check Resend logs for bounce/block reason
3. Mitigation: users can still use the app, transactional emails are non-blocking
4. Fix and re-send welcome emails manually if <50 affected users

### Scenario E: HN/PH post flagged or removed
1. Don't spam — one submission per platform
2. If flagged on HN: do not resubmit, engage in comments to surface the link organically
3. Focus energy on Reddit and direct community posts instead

### General rollback:
- **Railway**: `railway rollback` or redeploy previous release tag
- **Landing**: `git revert` + push to main → Cloudflare auto-deploys in ~60s
- **Docs**: same as landing

---

## 8. Success Metrics

### Launch Day Targets
| Metric | Target | Stretch |
|---|---|---|
| Signups | 50 | 150 |
| GitHub Stars | 100 | 300 |
| PH upvotes | 100 | 300 |
| HN points | 50 | 150 |
| LTD purchases | 3 | 10 |
| Pro subscriptions | 1 | 5 |

### Week 1 Targets
| Metric | Target | Stretch |
|---|---|---|
| Signups | 200 | 500 |
| GitHub Stars | 250 | 600 |
| Active monitors created | 100 | 300 |
| LTD purchases | 10 | 25 |
| MRR (Pro+Team) | $50 | $200 |
| Mentions / backlinks | 5 | 15 |

### Ongoing KPIs (track weekly)
- DAU / WAU ratio (engagement health)
- Monitor ping success rate (product reliability)
- Stripe churn rate (first 30 days)
- Free → Pro conversion rate (target: 3–5%)
- Support ticket volume (< 5/day = healthy)
- Railway error rate (target: < 0.1%)

### What success looks like at 30 days:
- 500+ signups
- 30+ paying customers
- 1–2 community-written blog posts or tutorials about Crontinel
- Laravel News feature (organic or via outreach)

---

## Immediate Action Items (Today, Apr 21 Morning)

```
Priority 1 — BLOCKERS (nothing works without these):
  H  → Swap Stripe test → live keys in Railway

Priority 2 — Validation:
  H  → End-to-end signup + monitor + ping smoke test
  H  → GitHub + Google OAuth login test
  H  → Stripe checkout test (both $19/mo and $149 LTD)
  H  → Mobile check on landing

Priority 3 — Web directory submissions (10 min each, permanent backlinks):
  H  → AlternativeTo.net (alternative to Cronitor/Healthchecks.io/etc.)
  H  → Laravel News packages directory
  H  → daily.dev blog submission
  H  → Made with Laravel
  A  → Monitor awesome-laravel PR #662 for merge

Priority 4 — Staging:
  H  → Queue Twitter thread (draft in scheduler)
  H  → Queue HN post (submit at 8:00 AM ET)
  H  → Final pass on launch email copy
```
