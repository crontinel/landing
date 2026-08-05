# Parasite SEO Plan: Medium, Substack, GitHub

A practical publishing plan that puts `docs/PSEO_PLAYBOOK.md` (the framework) and `docs/GEO_CONTENT_TEMPLATE.md` (the content shape) into action. Scope: which existing posts go out first, how each gets adapted per platform, how the accounts are run, how linking stays disciplined, and a concrete 2-week calendar to start from.

## Which posts to republish first

Three already-shipped posts, chosen because each maps cleanly to a distinct parent keyword and ICP from `docs/BUY_INTENT_KEYWORDS.md`, and each already follows the GEO shape (direct-answer opening, quick-summary block, comparison table, sourced FAQ), so adapting them is a re-angling exercise, not a rewrite from scratch.

| Source post | On-site URL (link-back target) | Parent keyword | Best-fit angle |
|---|---|---|---|
| `datadog-cron-monitoring.mdx` | `/blog/datadog-cron-monitoring/` | cron monitoring (alternative/cost intent) | Postmortem/comparison: "Datadog has no cron primitive, here's what that costs you" |
| `eventbridge-cron-monitoring.mdx` | `/blog/eventbridge-cron-monitoring/` | scheduled job monitoring / job queue monitoring | Technical explainer: three silent EventBridge failure modes CloudWatch won't catch by default |
| `laravel-scheduler-timezone.mdx` | `/blog/laravel-scheduler-timezone/` | Laravel queue monitoring / cron monitoring | Bug-diagnosis narrative: the four-layer timezone chain that breaks Laravel schedules |

These three cover three different platforms/ecosystems (Datadog/AWS users, AWS-native teams, Laravel developers), so publishing all three avoids making the whole parasite effort read as one narrow niche.

## How to adapt for each platform

None of these get republished verbatim. Each keeps the same GEO backbone (answer-first paragraph, quick-summary block, sourced FAQ) but is re-angled and shortened to fit the platform's own norms, per `PSEO_PLAYBOOK.md` step 6's re-angling rule.

### Medium (~DR96, long-form technical explainer)

- Keep close to the source post's length and structure, Medium's audience expects depth.
- Re-angle the title toward the buyer question, not the product: "Why Datadog Cron Monitoring Falls Apart for Laravel Teams" instead of the on-site "Monitoring Cron Jobs with Datadog: Setup, Limitations & Better Alternatives."
- Reuse the quick-summary block near-verbatim (it's already written to be quotable) but rewrite the surrounding body in first-person practitioner voice rather than product-site voice: "I went looking for a way to monitor..." instead of "Datadog cron monitoring works by...".
- Keep one comparison table and 3-4 of the FAQ's strongest questions, drop the rest, a Medium post that's a straight copy-paste of the FAQ block reads as thin.
- End with the one-line CTA and single link-back, same as the on-site version.

### Substack (~DR93, newsletter/roundup framing)

- Don't republish a single post 1:1. Substack's own platform table entry in `PSEO_PLAYBOOK.md` calls out its best shape as "roundups that naturally cite Crontinel as one option," so the highest-leverage move is a single roundup piece that references all three source posts as examples, not three separate Substack posts.
- Frame as analysis, not tutorial: "State of Cron and Scheduled-Job Monitoring in 2026: What Datadog, native AWS tooling, and Laravel's own scheduler each miss." Each of the three posts becomes one section/example inside it.
- Voice: opinionated newsletter analyst, not documentation. Short paragraphs, more rhetorical framing ("here's the pattern nobody talks about") than the on-site posts use.
- One link-back only, chosen for the roundup's actual throughline (see the calendar below), not one link per section, three links in one Substack post reads as an ad.

### GitHub (~DR96 repo-dependent, Discussions/Gists)

- No long-form posts. This is the least tolerant of anything reading as an ad, so content here is either a direct answer to a question someone already asked in a Discussion/issue thread, or a Gist with a working code snippet.
- Datadog angle: a Gist with the DogStatsD heartbeat one-liner from the source post (`echo "laravel.schedule.heartbeat:1|c" | nc -u -w0 127.0.0.1 8125`), posted as an answer to any open Discussion asking how to monitor cron with Datadog, with a one-line "if you want this without building the Datadog monitor yourself, I built Crontinel for exactly this" and the link.
- EventBridge angle: same pattern using the Terraform alarm snippet (`treat_missing_data = "breaching"`) from the source post, this specific gotcha (CloudWatch's default silently ignores a stopped rule) is exactly the kind of thing people ask about in `aws/aws-cdk` or `hashicorp/terraform-provider-aws` issues and Discussions.
- Laravel timezone angle: a Gist showing the `schedule_timezone` vs `app.timezone` fix checklist as a copy-pasteable diagnostic script, posted in response to Discussions on `laravel/framework` or Laravel community repos where this exact confusion recurs.
- Never post an answer that doesn't genuinely solve the asker's problem before the Crontinel mention. The code snippet has to work standalone, with or without Crontinel.

## Account strategy

- **Medium:** one Crontinel-branded profile (e.g. `medium.com/@crontinel`), bio links to crontinel.com. Every post goes out under this one identity so authority accumulates in one place rather than scattering across personal accounts.
- **Substack:** a single dedicated publication (working name: "Crontinel Notes" or similar) rather than a personal newsletter. A zero-subscriber Substack post still indexes per `PSEO_PLAYBOOK.md`, so don't wait for a subscriber base to start, but do share each post to whatever channels already exist (Twitter/X, existing customer list) to seed the first few opens rather than letting it sit at zero engagement indefinitely.
- **GitHub:** post as a real, identifiable Crontinel maintainer or the `crontinel` org account itself, never a throwaway or sockpuppet account. GitHub's community norms detect and penalize inauthentic engagement fast, and the entire rationale for this platform (developer trust) collapses if the account reads as fake. Only engage in repos/threads where the question was genuinely asked, don't post unsolicited plugs into unrelated Discussions.
- Consistency matters more than volume on all three: a profile that posts once and disappears carries less weight than one with a visible, regular (even if slow) posting history.

## Internal linking

- One link back per piece, to the specific on-site page from the table above, not the homepage. Matches `PSEO_PLAYBOOK.md` step 6 exactly.
- Anchor text is the buyer-intent phrase itself (e.g. "a purpose-built Laravel and Horizon monitoring tool"), not "click here" or the bare URL.
- Do **not** log these URLs in `docs/backlink-progress.json`, that file tracks directory/listing submissions specifically. Once the first pieces are live, start a separate `docs/parasite-content-log.md` (or similar) recording: platform, URL, publish date, which on-site page it links to, and later, whatever engagement stats the platform itself exposes (Medium views, Substack opens, GitHub Discussion replies/upvotes). This plan doesn't create that log yet, it's the natural next artifact once step 1 of the calendar below actually ships.

## 2-week publish calendar

| Day | Action |
|---|---|
| Mon (Day 1) | GitHub: post the Datadog/DogStatsD Gist + Discussion reply |
| Tue (Day 2) | GitHub: post the EventBridge Terraform-alarm Gist + Discussion reply |
| Wed (Day 3) | GitHub: post the Laravel timezone diagnostic Gist + Discussion reply |
| Thu (Day 4) | Monitor and respond to any replies on Days 1-3; no new publishing |
| Fri (Day 5) | Medium: publish the adapted Datadog piece, link back to `/blog/datadog-cron-monitoring/` |
| Sat-Sun | Monitor Medium/GitHub engagement, respond to comments |
| Mon (Day 8) | Medium: publish the adapted EventBridge piece, link back to `/blog/eventbridge-cron-monitoring/` |
| Tue (Day 9) | Monitor and respond; re-check GitHub threads from Week 1 for new replies |
| Wed (Day 10) | Medium: publish the adapted Laravel timezone piece, link back to `/blog/laravel-scheduler-timezone/` |
| Thu (Day 11) | Monitor and respond; no new publishing |
| Fri (Day 12) | Substack: publish the single roundup piece covering all three angles, one link back to `/blog/cron-monitoring-pricing-compared-2026/` (the roundup's natural "compare your options" close) |
| Weekend | Monitor all four live pieces, respond to any comments/replies |
| Day 14 | Retro: note which platform/piece got real engagement, start `docs/parasite-content-log.md`, and pull the next 2-3 candidates from `docs/BUY_INTENT_KEYWORDS.md`'s "first 10 cells to validate" list for the following cycle |

Total output over two weeks: 3 GitHub Gists/Discussion answers, 3 Medium pieces, 1 Substack roundup, each with exactly one link back to a specific on-site page. This matches `PSEO_PLAYBOOK.md`'s priority order (GitHub first, Medium at roughly one long-form piece per week to start, Substack lowest priority until there's real cadence).

## Guardrails (carried over from `PSEO_PLAYBOOK.md`)

- No verbatim republishing. Every piece is re-angled (buyer question first, platform-native voice), never a copy-paste of the on-site MDX.
- One outbound link per piece. Multiple links read as spam on Medium and GitHub both.
- No fabricated claims about Datadog, AWS/EventBridge, or Laravel that aren't already verifiable from their own docs, this plan only reuses facts already verified for the three source posts.
- Don't log parasite URLs in `docs/backlink-progress.json`; use the separate log described above once it exists.
