# Structured Data Tracker

## Implemented

| Page | Schema | Status |
|---|---|---|
| All pages | Organization (WebSite + sameAs) | ✅ Base.astro |
| Homepage | SoftwareApplication | ✅ index.astro |
| Features | SoftwareApplication | ✅ features.astro |
| Pricing | FAQPage | ✅ pricing.astro |
| Blog posts | Article (BlogPosting) | ✅ blog/[...slug].astro |
| VS pages | BreadcrumbList | ✅ vs/[...slug].astro |
| Use-case pages | BreadcrumbList | ✅ use-cases/[...slug].astro |
| Integration pages | BreadcrumbList | ✅ integrations/[...slug].astro |
| All pages | BreadcrumbList | ❌ Pending |

## Pending

- [ ] BreadcrumbList — homepage, pricing, features, about, changelog, legal pages
- [ ] Article/BlogPosting — blog posts (done but verify datePublished is ISO)
- [ ] PricingPage + Offer — /pricing (AggregateOffer with price ranges)
- [ ] About page — Person or Organization schema
- [ ] WebPage — about, changelog, legal pages (partial)
