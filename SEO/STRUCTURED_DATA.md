# Structured Data Tracker

## Implemented

| Page | Schema | Status |
|---|---|---|
| All pages | Organization + WebSite | ✅ Base.astro |
| Homepage | SoftwareApplication + BreadcrumbList | ✅ index.astro |
| Features | SoftwareApplication + BreadcrumbList | ✅ features.astro |
| Pricing | FAQPage + BreadcrumbList + PricingPage/AggregateOffer | ✅ pricing.astro |
| Blog | BreadcrumbList | ✅ blog/index.astro |
| Blog posts | Article (BlogPosting) | ✅ blog/[...slug].astro |
| VS index | BreadcrumbList | ✅ vs/index.astro |
| VS pages | BreadcrumbList | ✅ vs/[...slug].astro |
| Use-case index | BreadcrumbList | ✅ use-cases/index.astro |
| Use-case pages | BreadcrumbList | ✅ use-cases/[...slug].astro |
| Integrations index | BreadcrumbList | ✅ integrations/index.astro |
| Integration pages | BreadcrumbList | ✅ integrations/[...slug].astro |
| About | BreadcrumbList | ✅ about.astro |
| Changelog | BreadcrumbList | ✅ changelog.astro |
| Security | BreadcrumbList | ✅ security.astro |
| Legal pages | BreadcrumbList | ❌ legal/* |
| Lifetime deal | BreadcrumbList | ❌ lifetime-deal.astro |
| FAQ page | BreadcrumbList | ❌ faq.astro |

## Pending

- [ ] BreadcrumbList — legal, faq, lifetime-deal pages
- [ ] WebPage — about, changelog, legal pages
