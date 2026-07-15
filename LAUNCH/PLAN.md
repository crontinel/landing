# Crontinel Pre-Launch Polish & Launch Plan — Updated Jul 16

## 🎯 Pre-Launch Polish (DO BEFORE LAUNCH)

### P0 — Must Fix
- [ ] **GitHub repo polish** — Add topics (monitoring, cron, queue, background-jobs, dev-tools, hacktoberfest), update README with current screenshots, verify shields/badges work
- [ ] **crontinel/laravel repo** — Update Packagist description (remove "Laravel-native"), add topics, verify README has multi-runtime positioning
- [ ] **Screenshot/asset creation** — 7 Product Hunt screenshots needed (dashboard, queue panel, worker status, agent monitoring, Slack alert, install terminal, MCP)
- [ ] **90-second demo video** — Highest-ROI missing piece
- [ ] **GitHub README animated GIF** — Dashboard walkthrough

### P1 — Should Fix
- [ ] **Verify noindex on app subdomain** — CTH PR #309 merged, confirm deployed
- [ ] **Check all SDK READMEs** — Node, Python, Go, Ruby, .NET — are they published?
- [ ] **Twitter/X profile** — Ensure @crontinel (or relevant handle) has bio + link
- [ ] **OG images** — Verify social sharing previews work on all key pages
- [ ] **Cookie consent** — Accept/Decline buttons working on landing page
- [ ] **Mobile responsiveness** — Test pricing page on mobile
- [ ] **RTL/empty state** — App dashboard with no monitors added
- [ ] **Error pages** — 404 page on landing looks good
- [ ] **Terms of Service + Privacy Policy** — Linked and current

### P2 — Should Verify
- [ ] **Stripe webhook** — Verify webhook delivers `checkout.session.completed` properly
- [ ] **Email sending** — Resend/transactional email working (welcome email, password reset)
- [ ] **OAuth flows** — GitHub + Google login end-to-end
- [ ] **Pro/Team plan limits** — Enforcing correctly
- [ ] **Sitemap** — 144 URLs, all valid, submitted to GSC

---

## 🚀 Launch Platforms — All Free

### Primary (highest impact)
| Platform | URL | Type | Prep Needed |
|---|---|---|---|
| **Product Hunt** | producthunt.com | Launch | Draft ready ✅ — schedule for Mon/Tue |
| **Hacker News** | news.ycombinator.com | Show HN | Draft ready ✅ — post same day as PH |
| **Reddit** | r/laravel, r/PHP, r/selfhosted, r/devops | Community | Draft needed — post day after PH |

### Secondary (good exposure)
| Platform | URL | Notes |
|---|---|---|
| **BetaList** | betalist.com | Free, long queue (weeks/months) — submit early |
| **DevHunt** | devhunt.org | Weekly dev tool launches, GitHub verification |
| **Uneed** | uneed.best | Daily board, dofollow backlinks |
| **Fazier** | fazier.com | Daily leaderboard, free |
| **MicroLaunch** | microlaunch.net | Extended month-long exposure |
| **Peerlist** | peerlist.io | Weekly Launchpad cycles |
| **SaaSHub** | saashub.com | DR backlinks, free listing |
| **G2** | g2.com | Free profile, business audience |
| **Crunchbase** | crunchbase.com | Free company profile |
| **AlternativeTo** | alternativeto.net | List as alternative to Cronitor/OhDear/etc |

### Community & Content
| Platform | URL | Notes |
|---|---|---|
| **Laravel News** | laravel-news.com/links | Submit link post |
| **PHP Weekly** | phpweekly.com | Newsletter submission |
| **daily.dev** | daily.dev | Submit blog post |
| **dev.to** | dev.to | Write "How we built Crontinel" post |
| **Medium** | medium.com | Mirror the dev.to post |
| **Indie Hackers** | indiehackers.com | Founder story post |

---

## 🔗 Backlink Opportunities

### Directory Listings (dofollow backlinks)
| Site | URL | Priority |
|---|---|---|
| **SaaSHub** | saashub.com/submit | ⭐ High — DR 75+ |
| **AlternativeTo** | alternativeto.net | ⭐ High — DR 80+ |
| **BetaList** | betalist.com/criteria | ⭐ High |
| **Uneed** | uneed.best | High |
| **Fazier** | fazier.com | Medium |
| **DevHunt** | devhunt.org | Medium |
| **Open Source Software Directory** | opensourcesoftwaredirectory.com | Medium |
| **LibHunt** | libhunt.com | Medium |
| **Smol Launch** | smollaunch.com | Medium |
| **Launching Next** | launchingnext.com | Medium |
| **G2** | g2.com | Medium |
| **Crunchbase** | crunchbase.com | Medium |
| **PitchGround** | pitchground.com | Low |
| **Geekflare** | geekflare.com | Low |
| **Postmake** | postmake.io | Low |

### OSS-Specific
| Site | URL | Notes |
|---|---|---|
| **awesome-laravel** | PR #662 | ⭐ Already open — follow up |
| **awesome-selfhosted** | github.com/awesome-selfhosted | PR needed |
| **awesome-opensource** | github.com | PR for relevant lists |
| **OSS Directory** | osssoftware.org | Free listing |

### Content Backlinks (write to earn)
| Site | Topic | Link |
|---|---|---|
| **dev.to** | "Building open-source cron monitoring" | Can link to crontinel.com |
| **Medium** | "How we detect silent queue failures" | Natural crontinel.com links |
| **PHP Weekly** | Sponsor or submit tool | Newsletter mention |
| **Laravel News** | Tool submission | Link + traffic |

---

## 📅 Suggested Launch Timeline

### T-7 days (now): Polish & Prep
- [ ] All P0 items above
- [ ] Submit to BetaList, AlternativeTo, SaaSHub, Uneed, Fazier, DevHunt (they take days to approve)
- [ ] Create all 7 PH screenshots + demo GIF
- [ ] Write Reddit posts
- [ ] Follow up awesome-laravel PR #662

### T-1 day: Stage
- [ ] Submit PH listing (schedule for next day)
- [ ] Stage HN post
- [ ] Queue Twitter/X thread

### T-0: Launch Day
- [ ] **00:01 PT** — PH goes live
- [ ] **00:30 PT** — Post Show HN
- [ ] **01:00 PT** — Twitter/X thread
- [ ] **All day** — Reply to every PH comment
- [ ] **End of day** — Submit to remaining directories

### T+1 day: Follow-up
- [ ] Reddit posts (r/laravel, r/PHP, r/selfhosted, r/devops)
- [ ] dev.to / Medium post
- [ ] Submit to daily.dev, Laravel News, PHP Weekly
- [ ] Follow up on all directory submissions
