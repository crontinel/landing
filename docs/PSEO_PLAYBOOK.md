# pSEO Playbook: Buy-Intent Parasite SEO for Crontinel

Source framework: a 5-point buy-intent parasite SEO method (find buyer questions via GSC regex, map to parent keywords, layer ICP + context, publish on high-authority "parasite" platforms, write in GEO format). This doc expands that into a 7-step operating cycle and applies it specifically to Crontinel, using data already in this repo (`SEO/SEO_GROWTH.md`, `SEO/CONTENT_PLAN.md`, `docs/backlink-progress.json`) rather than starting from scratch.

**What this is not:** a replacement for the existing on-site pSEO pipeline (57 blog posts, 75 use-cases, 14 vs pages, 7 integrations per `SEO/CONTENT_PLAN.md`). This is a second, off-site lever, content hosted on someone else's high-Domain-Rating platform, targeting the same buyer-intent keywords, to win SERP real estate and referral traffic the landing domain's own authority can't yet reach alone.

## The 7-step cycle

### 1. Find the questions buyers actually ask (GSC regex)

Filter Search Console's Queries report (Performance → Queries, or the API) with a regex that isolates buying-intent modifiers rather than generic informational queries:

```
alternative|vs\.?|versus|pricing|price|cost|free|open.source|self.?hosted|
best .* for|not working|stopped|silently|keeps failing|why (is|does)|
without overlapping|how to monitor
```

GSC regex uses RE2 syntax (case-insensitive by default in the UI). Run this against **Pages: contains `/blog/` or `/vs/` or `/use-cases/`** filtered to impressions > 0, sorted by impressions descending. The output is a raw list of real phrases people typed before landing on (or near) a Crontinel page, which is a stronger signal than keyword-tool volume estimates.

Cross-reference against `SEO/SEO_GROWTH.md`'s existing "Top Attention" sections. Queries already surfacing there with high impressions but low CTR (e.g. the recurring `cronradar` competitor query, or homepage queries at position ~5) are buyer-intent signals already validated by real search data. Wait for pipeline note: 32-page or larger pull will need the GSC API rather than the UI export, since the UI caps at 1,000 rows.

### 2. Map each question to its parent keyword

A long-tail buyer question almost always rolls up to a broader "parent" term Google already has strong intent signal for. Mapping matters because the parasite piece should target the long-tail in its title/H1 but structure its content so it can also rank for the parent.

| Long-tail (buyer question) | Parent keyword |
|---|---|
| "is there a free alternative to dead man's snitch" | dead man's snitch alternative |
| "open source healthchecks.io alternative self hosted" | healthchecks.io alternative |
| "how do I know if my laravel horizon queue is stuck" | laravel horizon monitoring |
| "cron job says it ran but nothing happened" | silent cron failure |
| "cheapest way to monitor cron jobs for a small saas" | cron monitoring pricing |
| "does uptime robot monitor cron jobs" | uptimerobot cron monitoring |

Note four of these six already have a matching `/vs/` page on-site (`crontinel-vs-deadmanssnitch`, `crontinel-vs-healthchecks-io`, `crontinel-vs-uptimerobot`, plus `cron-monitoring-pricing-compared-2026`). That's not a blocker, it's the point: the parasite post targets the same parent keyword from a different domain, then links back to the existing on-site page as the "full comparison," splitting the SERP between two properties instead of fighting for one slot with one page.

### 3. Layer ICP + context

"Location" for a geography-agnostic dev tool doesn't mean city or country, it means the buyer's technical or business context: framework, hosting platform, team size, or role. Layer one of these onto the parent keyword to produce a long-tail with less competition and higher purchase intent than the bare parent term:

| Parent keyword | + ICP/context layer | Resulting long-tail |
|---|---|---|
| cron monitoring | Laravel agencies managing multiple client apps | "cron monitoring for laravel agencies managing multiple client sites" |
| healthchecks.io alternative | self-hosted, no Docker | "healthchecks.io alternative without docker" |
| laravel horizon monitoring | AWS/Vapor | "laravel vapor horizon queue monitoring" |
| dead man's snitch alternative | Node.js / non-PHP teams | "dead man's snitch alternative for node cron jobs" |
| cron monitoring pricing | solo indie hacker, free tier | "free cron monitoring for solo saas founders" |
| silent cron failure | AI agent / LLM scheduled runs | "how to detect a silently failed scheduled ai agent run" |

### 4. Publish on high-authority parasite platforms

Pick the platform by content shape, not by habit. All three below already outrank crontinel.com on Domain Rating by a wide margin, which is exactly why a fresh post on them can rank faster than the same content on the landing site.

| Platform | Approx. DR | Best content shape | Notes |
|---|---|---|---|
| **Medium** | ~96 | Long-form technical explainer, "X vs Y" comparison, postmortem-style ("why our cron jobs failed silently for 3 weeks") | No sign-up friction beyond an account; supports canonical-less publishing so treat as a distinct asset, not a syndicate copy |
| **Substack** | ~93 | Newsletter-style opinion/analysis, "state of cron monitoring in 2026," roundups that naturally cite Crontinel as one option | Best when there's already a small list to seed initial opens; also indexable as a public post even without an active newsletter |
| **GitHub** | ~96 (repo/org dependent) | READMEs, `awesome-*` list entries, Discussions threads answering a specific buyer question, Gists with a working code snippet + a one-line mention | Developer-native audience already has buy-intent; the highest-trust placement of the three, but the least tolerant of anything that reads as an ad |
| Dev.to / Hashnode (secondary) | ~85-90 | Same shape as Medium, dev-specific audience | Use when the piece is code-heavy enough that a dev-only audience outperforms Medium's broader readership |

This is a distinct lever from `docs/backlink-progress.json`, which tracks directory/listing submissions (BetaList, G2, Product Hunt, etc.). Directories are "we exist" signals with a link. Parasite content is "here's the answer to your exact question" with a link, on a platform Google already trusts, and it should target the buyer-intent keywords from step 3, not generic "best cron monitoring tools" roundups that directories already cover.

### 5. Write in GEO format

Every landing-repo blog post already follows this shape (see `src/content/blog/datadog-cron-monitoring.mdx`, `eventbridge-cron-monitoring.mdx`, `laravel-scheduler-timezone.mdx`). Reuse it verbatim for parasite posts, it's the same format regardless of host domain:

1. **Direct-answer opening paragraph.** Answer the exact buyer question in the first 2-3 sentences, before any setup or story. This is what an LLM or featured-snippet crawler lifts.
2. **`> **Quick summary:**` blockquote** immediately after, restating the answer plus the key differentiator in 2-4 sentences. This is the GEO (Generative Engine Optimization) block, written so an AI answer engine can quote it directly.
3. **Body content** covering the mechanics, then the gap, then Crontinel's fit, matching the parent keyword's actual informational need, not just repeating the summary.
4. **Comparison table** when the piece touches a named competitor or alternative.
5. **`## FAQ`** section, `### Question?` sub-headers, 4-6 real questions with direct, non-marketing answers.
6. **One link back** to the single most relevant Crontinel page (a specific `/vs/`, `/blog/`, or `/use-cases/` page, not the homepage), using the buyer-intent phrase itself as anchor text, plus one clear CTA line at the end.

See the template file below for a fill-in-the-blanks version.

### 6. Publish and interlink

- Publish the parasite piece under the platform's own account (Medium: a Crontinel-branded profile; GitHub: Discussions on the crontinel org repos or a relevant third-party repo's issue/discussion where the question was genuinely asked; Substack: a dedicated or existing newsletter).
- Link back to exactly one Crontinel URL, chosen from step 2's parent-keyword mapping, not the homepage.
- Where a matching on-site post already exists (e.g. `crontinel-vs-datadog`), the parasite piece should feel like a shorter, differently-angled companion, not a copy. Rewrite the framing (buyer question first, not product-first) rather than re-publishing on-site copy elsewhere, which risks duplicate-content dilution instead of SERP-splitting.
- Do **not** add these URLs to `docs/backlink-progress.json` (that file tracks directory/listing submissions specifically); track parasite posts in a new log (see Tracking below) so the two lists don't conflict.

### 7. Track and iterate

- Watch GSC for the **parent keyword**, not just the exact long-tail, since that's the term both the on-site and parasite assets are competing/splitting for.
- Where the platform exposes its own stats (Medium post views, Substack open rate, GitHub Discussion upvotes/replies), log them alongside GSC data monthly.
- Any long-tail that generates real impressions but has no dedicated on-site page yet becomes a candidate for the next `pseo-queue` entry (see `SEO/CONTENT_PLAN.md` "Next Priorities"), feeding this cycle back into the existing daily content pipeline instead of running as a parallel, disconnected effort.

## Which parasites to target first

Priority order, matched against existing `/vs/` gaps and current GSC signal from `SEO/SEO_GROWTH.md`:

1. **GitHub Discussions / Gists**, lowest effort, highest trust, best fit for the already-strong dev audience. Start with `awesome-laravel`-adjacent repos and any repo where a maintainer or issue thread already asks a version of a buyer question from step 1.
2. **Medium**, one long-form piece per month, prioritizing parent keywords that already show impressions in GSC but no dedicated on-site page (checked against `CONTENT_PLAN.md` before writing, per its own "Content Collision Prevention" rule).
3. **Substack**, lowest priority initially; revisit once there's a real subscriber base to seed opens, since a zero-subscriber Substack post still indexes but gets none of the platform's internal distribution boost.

## Buy-intent keyword ideas (starter list)

Grouped by the ICP/context layer from step 3. Each should be checked against `src/content/blog/` and `src/content/vs/` for an existing on-site match before writing, per the collision-prevention rule in `CONTENT_PLAN.md`.

**Alternative/competitor intent**
- "healthchecks.io alternative without docker"
- "dead man's snitch alternative for node cron jobs"
- "open source uptimerobot alternative for cron jobs"
- "self-hosted cronitor alternative"

**Framework + pain intent**
- "laravel vapor horizon queue monitoring"
- "node.js cron job monitoring free"
- "python scheduled task monitoring self-hosted"
- ".net background job monitoring open source"

**Pricing/budget intent**
- "free cron monitoring for solo saas founders"
- "cheapest way to monitor laravel horizon in production"
- "cron monitoring pricing compared 2026" (reinforce existing on-site page from an off-site angle)

**Bottom-funnel problem intent**
- "how to know if a cron job ran laravel"
- "cron job says it ran but nothing happened"
- "how to detect a silently failed scheduled ai agent run"

## GEO content template (reusable)

```markdown
[Direct answer to the exact buyer question, 2-3 sentences, no preamble.]

> **Quick summary:** [Restate the answer in one sentence, then the
> key differentiator in 1-3 more sentences. Written so an AI answer
> engine can quote this block on its own.]

## [Mechanics section covering how the thing actually works]

## [The gap / what the obvious solution misses]

## [How Crontinel fills the gap]

| | [Alternative] | Crontinel |
|---|---|---|
| ... | ... | ... |

## FAQ

### [Real question 1]?
[Direct, non-marketing answer.]

### [Real question 2]?
[Direct, non-marketing answer.]

### [Real question 3]?
[Direct, non-marketing answer.]

---

[One-line CTA] [Try it free](https://app.crontinel.com/register).
```

## Guardrails

- No keyword stuffing in titles or headers; write for the buyer question, not the SERP.
- No fabricated comparison claims about a named competitor. If a specific pricing or feature claim can't be verified from that competitor's own public site, keep the claim qualitative (matches the standing rule already followed in `src/content/vs/crontinel-vs-datadog.mdx`).
- One outbound link per parasite piece back to Crontinel. Multiple links read as spam on GitHub and Medium both, and risk the account/platform standing this playbook depends on.
- Never publish the same piece verbatim in two places (on-site and parasite). Re-angle it: buyer question first, platform-native tone, shorter than the on-site equivalent.
