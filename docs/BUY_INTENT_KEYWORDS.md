# Buy-Intent Keyword Matrix

A parent-keyword x ICP x query-format matrix for Crontinel, generated as the step 2/3 input for [`PSEO_PLAYBOOK.md`](./PSEO_PLAYBOOK.md) (parent keyword mapping + ICP/context layering). Every cell below is a candidate long-tail buyer query: a real title shape, not yet a claim about search volume. Before committing writing time to any cell, validate it against Search Console per the playbook's step 1 (GSC regex over buying-intent modifiers) and against `SEO/CONTENT_PLAN.md`'s collision-prevention rule.

**Parent keywords:** cron monitoring, Laravel queue monitoring, Horizon monitoring, scheduled job monitoring, job queue monitoring
**ICPs:** Laravel SaaS, Laravel agencies, Shopify apps, fintech, e-commerce, AI agents, DevOps teams
**Formats:** `best X for Y` · `X alternative for Y` · `how much does X cost for Y` · `X vs Healthchecks for Y`

## How to use this matrix

1. Each row (parent keyword x ICP) is a topic cluster, not a single page. The four format columns are four different search intents for the same cluster (discovery, switching, budget, competitive), so they can become four short parasite pieces or one longer on-site page that answers all four framings.
2. Cross-reference the "Existing on-site coverage" note under each table before writing. Cells marked covered should get a parasite post that links back to the existing page rather than a new on-site page (avoids the duplication risk called out in `PSEO_PLAYBOOK.md`).
3. Cells under greenfield ICPs (Shopify apps, fintech, e-commerce, AI agents, none currently referenced anywhere in `src/content/`, confirmed by grep) are the highest-priority white space; route these to the parasite pipeline first since there's no on-site cannibalization risk. DevOps teams sits between the two groups: mentioned in passing in `cron-scheduler-alternatives.mdx` and `reduce-cron-alert-fatigue.mdx`, but with no dedicated ICP-specific page, so treat it as partial coverage like Laravel SaaS, Laravel agencies, and AI agents, not as fully greenfield.
4. "X vs Healthchecks for Y" cells are a deliberate competitive angle: Healthchecks.io has no Laravel/Horizon-specific awareness (per `src/content/vs/crontinel-vs-healthchecks-io.mdx`), so the Horizon and Laravel-queue rows in that column are structurally favorable comparisons, not a stretch.

---

## cron monitoring

| ICP | best X for Y | X alternative for Y | how much does X cost for Y | X vs Healthchecks for Y |
|---|---|---|---|---|
| Laravel SaaS | best cron monitoring for Laravel SaaS | cron monitoring alternative for Laravel SaaS | how much does cron monitoring cost for Laravel SaaS | cron monitoring vs Healthchecks for Laravel SaaS |
| Laravel agencies | best cron monitoring for Laravel agencies | cron monitoring alternative for Laravel agencies | how much does cron monitoring cost for Laravel agencies | cron monitoring vs Healthchecks for Laravel agencies |
| Shopify apps | best cron monitoring for Shopify apps | cron monitoring alternative for Shopify apps | how much does cron monitoring cost for Shopify apps | cron monitoring vs Healthchecks for Shopify apps |
| fintech | best cron monitoring for fintech | cron monitoring alternative for fintech | how much does cron monitoring cost for fintech | cron monitoring vs Healthchecks for fintech |
| e-commerce | best cron monitoring for e-commerce | cron monitoring alternative for e-commerce | how much does cron monitoring cost for e-commerce | cron monitoring vs Healthchecks for e-commerce |
| AI agents | best cron monitoring for AI agents | cron monitoring alternative for AI agents | how much does cron monitoring cost for AI agents | cron monitoring vs Healthchecks for AI agents |
| DevOps teams | best cron monitoring for DevOps teams | cron monitoring alternative for DevOps teams | how much does cron monitoring cost for DevOps teams | cron monitoring vs Healthchecks for DevOps teams |

**Existing on-site coverage:** `cron-monitoring-guide.mdx` covers the general "best cron monitoring" framing broadly; `cron-monitoring-pricing-compared-2026.mdx` covers general pricing; `crontinel-vs-healthchecks-io.mdx` covers the general vs-Healthchecks angle. None of these are ICP-specific, so every cell above is still open, the on-site pages are the link-back target for a parasite piece rather than a duplicate.

## Laravel queue monitoring

| ICP | best X for Y | X alternative for Y | how much does X cost for Y | X vs Healthchecks for Y |
|---|---|---|---|---|
| Laravel SaaS | best Laravel queue monitoring for Laravel SaaS | Laravel queue monitoring alternative for Laravel SaaS | how much does Laravel queue monitoring cost for Laravel SaaS | Laravel queue monitoring vs Healthchecks for Laravel SaaS |
| Laravel agencies | best Laravel queue monitoring for Laravel agencies | Laravel queue monitoring alternative for Laravel agencies | how much does Laravel queue monitoring cost for Laravel agencies | Laravel queue monitoring vs Healthchecks for Laravel agencies |
| Shopify apps | best Laravel queue monitoring for Shopify apps | Laravel queue monitoring alternative for Shopify apps | how much does Laravel queue monitoring cost for Shopify apps | Laravel queue monitoring vs Healthchecks for Shopify apps |
| fintech | best Laravel queue monitoring for fintech | Laravel queue monitoring alternative for fintech | how much does Laravel queue monitoring cost for fintech | Laravel queue monitoring vs Healthchecks for fintech |
| e-commerce | best Laravel queue monitoring for e-commerce | Laravel queue monitoring alternative for e-commerce | how much does Laravel queue monitoring cost for e-commerce | Laravel queue monitoring vs Healthchecks for e-commerce |
| AI agents | best Laravel queue monitoring for AI agents | Laravel queue monitoring alternative for AI agents | how much does Laravel queue monitoring cost for AI agents | Laravel queue monitoring vs Healthchecks for AI agents |
| DevOps teams | best Laravel queue monitoring for DevOps teams | Laravel queue monitoring alternative for DevOps teams | how much does Laravel queue monitoring cost for DevOps teams | Laravel queue monitoring vs Healthchecks for DevOps teams |

**Existing on-site coverage:** `queue-monitoring-setup.mdx` and `saas-background-job-monitoring.mdx` cover the general setup and SaaS framing without an ICP split. `multi-tenant-job-monitoring.mdx` is the closest existing match to the "Laravel agencies" row (multi-tenant is an agency-relevant concept), worth linking rather than duplicating. Shopify apps, fintech, e-commerce, and AI agents rows are fully greenfield.

## Horizon monitoring

| ICP | best X for Y | X alternative for Y | how much does X cost for Y | X vs Healthchecks for Y |
|---|---|---|---|---|
| Laravel SaaS | best Horizon monitoring for Laravel SaaS | Horizon monitoring alternative for Laravel SaaS | how much does Horizon monitoring cost for Laravel SaaS | Horizon monitoring vs Healthchecks for Laravel SaaS |
| Laravel agencies | best Horizon monitoring for Laravel agencies | Horizon monitoring alternative for Laravel agencies | how much does Horizon monitoring cost for Laravel agencies | Horizon monitoring vs Healthchecks for Laravel agencies |
| Shopify apps | best Horizon monitoring for Shopify apps | Horizon monitoring alternative for Shopify apps | how much does Horizon monitoring cost for Shopify apps | Horizon monitoring vs Healthchecks for Shopify apps |
| fintech | best Horizon monitoring for fintech | Horizon monitoring alternative for fintech | how much does Horizon monitoring cost for fintech | Horizon monitoring vs Healthchecks for fintech |
| e-commerce | best Horizon monitoring for e-commerce | Horizon monitoring alternative for e-commerce | how much does Horizon monitoring cost for e-commerce | Horizon monitoring vs Healthchecks for e-commerce |
| AI agents | best Horizon monitoring for AI agents | Horizon monitoring alternative for AI agents | how much does Horizon monitoring cost for AI agents | Horizon monitoring vs Healthchecks for AI agents |
| DevOps teams | best Horizon monitoring for DevOps teams | Horizon monitoring alternative for DevOps teams | how much does Horizon monitoring cost for DevOps teams | Horizon monitoring vs Healthchecks for DevOps teams |

**Existing on-site coverage:** `monitor-horizon-worker-starvation.mdx`, `monitor-horizon-stale-process-cleanup.mdx`, and `laravel-horizon-config-env-mismatch.mdx` cover specific Horizon failure modes, not the "best/alternative/cost/vs" buyer-decision framing. This is the strongest column for the "vs Healthchecks" format specifically: Healthchecks.io genuinely has no Horizon supervisor awareness, so every cell in that column is a structurally honest comparison, not a stretch.

## scheduled job monitoring

| ICP | best X for Y | X alternative for Y | how much does X cost for Y | X vs Healthchecks for Y |
|---|---|---|---|---|
| Laravel SaaS | best scheduled job monitoring for Laravel SaaS | scheduled job monitoring alternative for Laravel SaaS | how much does scheduled job monitoring cost for Laravel SaaS | scheduled job monitoring vs Healthchecks for Laravel SaaS |
| Laravel agencies | best scheduled job monitoring for Laravel agencies | scheduled job monitoring alternative for Laravel agencies | how much does scheduled job monitoring cost for Laravel agencies | scheduled job monitoring vs Healthchecks for Laravel agencies |
| Shopify apps | best scheduled job monitoring for Shopify apps | scheduled job monitoring alternative for Shopify apps | how much does scheduled job monitoring cost for Shopify apps | scheduled job monitoring vs Healthchecks for Shopify apps |
| fintech | best scheduled job monitoring for fintech | scheduled job monitoring alternative for fintech | how much does scheduled job monitoring cost for fintech | scheduled job monitoring vs Healthchecks for fintech |
| e-commerce | best scheduled job monitoring for e-commerce | scheduled job monitoring alternative for e-commerce | how much does scheduled job monitoring cost for e-commerce | scheduled job monitoring vs Healthchecks for e-commerce |
| AI agents | best scheduled job monitoring for AI agents | scheduled job monitoring alternative for AI agents | how much does scheduled job monitoring cost for AI agents | scheduled job monitoring vs Healthchecks for AI agents |
| DevOps teams | best scheduled job monitoring for DevOps teams | scheduled job monitoring alternative for DevOps teams | how much does scheduled job monitoring cost for DevOps teams | scheduled job monitoring vs Healthchecks for DevOps teams |

**Existing on-site coverage:** none of the `/vs/` or pricing pages target "scheduled job monitoring" as the head term specifically (they target "cron monitoring"). Treat this parent keyword as a distinct cluster from "cron monitoring" above, not a synonym to fold in, since "scheduled job" is the more common phrasing outside the PHP/Laravel world (Node, Python, .NET audiences) and reads more naturally for the AI agents and DevOps rows in particular.

## job queue monitoring

| ICP | best X for Y | X alternative for Y | how much does X cost for Y | X vs Healthchecks for Y |
|---|---|---|---|---|
| Laravel SaaS | best job queue monitoring for Laravel SaaS | job queue monitoring alternative for Laravel SaaS | how much does job queue monitoring cost for Laravel SaaS | job queue monitoring vs Healthchecks for Laravel SaaS |
| Laravel agencies | best job queue monitoring for Laravel agencies | job queue monitoring alternative for Laravel agencies | how much does job queue monitoring cost for Laravel agencies | job queue monitoring vs Healthchecks for Laravel agencies |
| Shopify apps | best job queue monitoring for Shopify apps | job queue monitoring alternative for Shopify apps | how much does job queue monitoring cost for Shopify apps | job queue monitoring vs Healthchecks for Shopify apps |
| fintech | best job queue monitoring for fintech | job queue monitoring alternative for fintech | how much does job queue monitoring cost for fintech | job queue monitoring vs Healthchecks for fintech |
| e-commerce | best job queue monitoring for e-commerce | job queue monitoring alternative for e-commerce | how much does job queue monitoring cost for e-commerce | job queue monitoring vs Healthchecks for e-commerce |
| AI agents | best job queue monitoring for AI agents | job queue monitoring alternative for AI agents | how much does job queue monitoring cost for AI agents | job queue monitoring vs Healthchecks for AI agents |
| DevOps teams | best job queue monitoring for DevOps teams | job queue monitoring alternative for DevOps teams | how much does job queue monitoring cost for DevOps teams | job queue monitoring vs Healthchecks for DevOps teams |

**Existing on-site coverage:** `monitor-redis-queue-performance.mdx` and `monitor-queue-latency/` cover queue mechanics without the ICP or buyer-decision framing. This parent keyword is the most framework-agnostic of the five (no "Laravel" in the term itself), making it the best candidate for the Node/Python/Go/Ruby SDK audiences specifically, worth a Medium or Dev.to piece per the playbook rather than another Laravel-flavored on-site page.

---

## Priority order (first 10 cells to validate in GSC)

Highest-priority cells: greenfield ICP (Shopify apps, fintech, e-commerce, AI agents) crossed with the "vs Healthchecks" and "alternative" formats, since those carry the clearest purchase intent and the least on-site duplication risk.

1. cron monitoring alternative for fintech
2. cron monitoring vs Healthchecks for e-commerce
3. Horizon monitoring vs Healthchecks for AI agents
4. job queue monitoring alternative for AI agents
5. best cron monitoring for Shopify apps
6. Laravel queue monitoring alternative for fintech
7. scheduled job monitoring vs Healthchecks for DevOps teams
8. how much does cron monitoring cost for e-commerce
9. Horizon monitoring alternative for Shopify apps
10. job queue monitoring vs Healthchecks for fintech

Run each through the GSC regex from `PSEO_PLAYBOOK.md` step 1 before writing; a cell with zero real impressions on any close variant is a bet on category creation, not existing demand, and should be sized accordingly (a shorter parasite post rather than a full on-site page).
