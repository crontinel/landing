# Launch Checklist

## Pre-Launch
- [x] Landing page (crontinel.com) - live
- [x] Docs (docs.crontinel.com) - live
- [x] OSS packages - Packagist + npm published
- [x] Security page - live
- [x] Cookie policy - live
- [x] DMARC + DKIM + SPF - configured
- [x] App (app.crontinel.com) - live, login/register working
- [x] Stripe - real Price IDs + webhook secret
- [x] Pricing page matches Stripe charges
- [x] Footer framework-agnostic
- [x] SEO meta framework-agnostic on all pages

## Directory Submissions
See [DIRECTORIES.md](./DIRECTORIES.md) for full list with DR scores.

**High priority (start now, takes days to approve):**
- [ ] BetaList
- [ ] SaaSHub
- [ ] AlternativeTo
- [ ] Crunchbase
- [ ] G2 / Capterra / GetApp

**Launch day:**
- [ ] Product Hunt
- [ ] Hacker News (Show HN)
- [ ] Twitter/X launch thread
- [ ] Reddit (r/laravel, r/devops, r/selfhosted, r/opensource)
- [ ] DevHunt
- [ ] Uneed
- [ ] dev.to post
- [ ] Medium cross-post

**After launch:**
- [ ] Peerlist
- [ ] LibHunt
- [ ] Indie Hackers
- [ ] Fazier
- [ ] MicroLaunch
- [ ] Failory
- [ ] Tier C directories (batch)

## GitHub Polish
- [x] Topics set on all 5 public repos
- [x] App repo description set
- [x] Landing README framework-agnostic
- [x] Packagist description updated
- [x] GitHub org profile README (badges, links, SDKs)
- [x] crontinel/crontinel README promotional landing page (PR #1)
- [x] Org description framework-agnostic
- [x] X handle fixed to @crontinel
- [ ] Pin featured repos on org page
- [ ] Add org logo/avatar

## App Health
- [x] 500 error on /dashboard fixed (Redis limit + bootstrap bug)
- [x] 500 error on POST /login fixed (same root cause)
- [x] GET /login = 200
- [x] GET /register = 200
- [x] POST /login = 419 (expected CSRF, app running)
- [x] Health endpoint /up = 200

## SEO
- [x] twitter:site / twitter:card
- [x] SoftwareApplication JSON-LD (homepage + features)
- [x] FAQPage JSON-LD (pricing)
- [x] Organization + WebSite JSON-LD (all pages)
- [x] Framework-agnostic meta titles
- [x] SEO pillar page (cron-monitoring-guide)
- [x] pSEO queue updated with high-value topics
- [x] Sitemap submitted to GSC
- [x] Noindex applied to app subdomain (PR #309)
- [x] Internal links from pillar to all use-case pages
- [ ] BreadcrumbList schema (VS/use-case/integration pages)
- [ ] Integrations index page

## Missing Assets (Need Creation)
- [ ] 7 Product Hunt screenshots
- [ ] 90-second demo video
- [ ] Animated GIF for README
