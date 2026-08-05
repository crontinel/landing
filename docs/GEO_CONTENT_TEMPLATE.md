# GEO Content Template

A reusable structural checklist for every new Crontinel post (blog, `/vs/`, use-case, or integration page), optimized for GEO (Generative Engine Optimization): written so both a traditional search crawler and an AI answer engine can lift the direct answer without reading the whole page. This is the canonical, on-site version of the template; [`PSEO_PLAYBOOK.md`](./PSEO_PLAYBOOK.md) step 5 points back here and reuses the same shape for off-site parasite content.

Six required elements. All six should be present before a post is considered done, regardless of collection.

## 1. A 3-5 sentence summary block that stands alone

Immediately after the opening paragraph, add a `> **Quick summary:**` blockquote of 3-5 sentences. Test it by reading only the blockquote with no surrounding context: it must still make sense and answer the implied query on its own, since this is the block an LLM or featured-snippet crawler is most likely to quote verbatim.

Shape: sentence 1 restates the direct answer, sentences 2-3 add the mechanism or key differentiator, an optional final sentence states Crontinel's angle. Stay inside the 3-5 sentence range, shorter reads as thin, longer stops being a "quick" summary and just becomes a second paragraph.

## 2. Answer the query in paragraph 1, before any setup

The opening paragraph (before the blockquote) must answer the exact question implied by the title in its first 2-3 sentences, no throat-clearing, no "in today's world of distributed systems," no scene-setting story. If a reader (or a crawler) only sees paragraph 1, they should already have the core answer.

## 3. FAQ built from real questions

Source the `## FAQ` questions from evidence that someone actually asked them, not from guessing what sounds plausible:

- GSC's Queries report (see `PSEO_PLAYBOOK.md` step 1's regex) for phrasings people already searched near this topic.
- Stack Overflow, GitHub issues/Discussions, or Reddit threads discussing the same failure mode or tool.
- Support tickets or DMs, when the topic maps to a question Crontinel has actually been asked.

Format stays consistent with existing posts: `### Question?` sub-headers, 4-6 questions, direct non-marketing answers (see `laravel-scheduler-timezone.mdx` or `eventbridge-cron-monitoring.mdx` for the pattern). Invented questions that no one has asked read as filler to both readers and ranking systems, skip them rather than pad to a round number.

## 4. One original statistic or data point

Every post needs at least one number the post itself is asserting, not a restated vendor marketing claim. Acceptable sources, in order of preference:

1. **Crontinel's own product or usage data**, when genuinely known and true (a real setup-time comparison, a real count from `SEO/SEO_GROWTH.md`, etc.). Never state a number as measured fact unless it actually is.
2. **A clearly-labeled reasoned estimate.** The Datadog post's "20 to 40 minutes per job" for manual Datadog cron setup is the model: it's presented as an estimate of realistic setup time, not dressed up as a vendor-reported figure.
3. **Publicly verifiable data about a competitor or platform**, cited from that platform's own docs or pricing page (matches the existing no-fabricated-claims rule in `crontinel-vs-datadog.mdx` and `PSEO_PLAYBOOK.md`'s guardrails).

An estimate must read as an estimate. Don't imply precision the post can't back up.

## 5. One image with a keyword filename and matching alt text

Place the image at `public/images/blog/<primary-keyword-slug>.png` (or `.webp`), for example `public/images/blog/datadog-cron-monitoring-setup.png`, and reference it inline in the MDX body with standard markdown image syntax:

```markdown
![Datadog cron monitoring dashboard showing a dogwrap service check](/images/blog/datadog-cron-monitoring-setup.png)
```

Alt text should read naturally and include the target keyword phrase once, not be stuffed with variants. Two things worth knowing before doing this: `public/images/blog/` doesn't exist yet (no current post embeds an image), and `src/content.config.ts`'s blog schema has no `image` frontmatter field, so there's no automatic OG/social-card wiring today. This template establishes the inline-image convention going forward; wiring a frontmatter `image` field for OG cards would be a separate, schema-level change, not something to bolt on ad hoc per post.

## 6. Internal links

One link back to the single most relevant Crontinel page (a specific `/vs/`, `/blog/`, or `/use-cases/` page, never the homepage), using the buyer-intent phrase itself as anchor text. A second internal link is fine when there's a genuinely related deeper-dive post, like `laravel-scheduler-timezone.mdx` linking to `laravel-cron-timezone-issues` for the DST mechanics. Cap it at one or two; more starts to read as a link farm to both readers and crawlers.

---

## Before / after: the Datadog post

The published opening of `datadog-cron-monitoring.mdx` already follows this template. Here's what a first-draft version without it would have looked like, next to what actually shipped.

**Before (no GEO structure):**

```markdown
Cron jobs are a critical part of many production systems, and keeping them
running reliably matters more as an application grows. Many teams already
use Datadog for their infrastructure monitoring, so it's natural to wonder
whether Datadog can also be used to keep an eye on scheduled tasks. In this
post we'll walk through how that works, some of the tradeoffs involved, and
look at how Crontinel compares as a purpose-built alternative for teams
running Laravel and Horizon.
```

This buries the answer three sentences deep in throat-clearing, has no quotable summary block, and gives an LLM nothing to lift, it would have to read the whole post to extract "how do I monitor cron with Datadog."

**After (what actually shipped, `datadog-cron-monitoring.mdx` lines 9-11):**

```markdown
Datadog cron monitoring works by wrapping your scheduled command in the
Datadog Agent's `dogwrap` tool, or by emitting a custom metric through
DogStatsD, and then building a monitor that alerts when the expected
service check, event, or metric doesn't show up on time. It's a workable
approach if you're already running Datadog for infrastructure and APM,
but Datadog wasn't built around the idea of a scheduled job. That shows
up quickly once you look at Laravel schedules, Horizon queues, and the
monthly bill.

> **Quick summary:** Datadog has no native concept of a cron job. You
> monitor one by wrapping the command with `dogwrap` or a custom DogStatsD
> metric, then creating a "no data" monitor on top of it, one job at a
> time. It has no Laravel scheduler awareness, no Horizon supervisor or
> queue depth tracking, and cron monitoring isn't billed separately, it
> rides on your existing per-host and per-metric Datadog costs. Crontinel
> is a purpose-built alternative: install a Composer package and it
> automatically tracks every scheduled command, Horizon supervisor status,
> and queue depth, on a flat per-app price instead of per-host billing.
```

Paragraph 1 answers "how does Datadog cron monitoring work" directly in its first sentence. The blockquote is 4 sentences, stands alone, and states the differentiator. The post's original data point ("20 to 40 minutes per job" setup time) appears later in the "How to set up" section, an estimate, explicitly framed as one, not a vendor figure.

## Pre-publish checklist

- [ ] Paragraph 1 answers the title's implied query in its first 2-3 sentences
- [ ] `> **Quick summary:**` block, 3-5 sentences, reads standalone
- [ ] FAQ questions traced to a real source (GSC, forum thread, support ticket), 4-6 of them
- [ ] One original statistic or data point, clearly labeled as measured fact vs. estimate
- [ ] One image at `public/images/blog/<keyword-slug>.png` with matching alt text
- [ ] One or two internal links to specific pages, not the homepage, using buyer-intent anchor text
