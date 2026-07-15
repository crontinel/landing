# Product Hunt Launch — Updated Jul 2026

## Tagline

**Monitor cron jobs, queues, workers, and AI agents — before your users notice.**

---

## Description

Open-source tool that hooks into your scheduler, queue driver, and agent runner to monitor what actually matters. Works with any runtime — one SDK per stack. Self-hosted or SaaS.

---

## First Comment

Hey, I'm Harun. I built Crontinel because silent failures kept turning into 3am incidents.

Your uptime monitor says everything is green. Meanwhile your queue is 6,000 deep, a worker has been stuck for 12 minutes, and your agent looped on a broken tool call for 40 minutes. Generics monitors can't tell you any of that.

Crontinel hooks into your scheduler, queue driver, and agent runner — not your endpoints. It watches job runs, queue depth, worker state, model latency, and agent tool calls. End to end.

One SDK per stack (Node, Python, Go, Ruby, .NET, Laravel):

```
npm i @crontinel/node
pip install crontinel
composer require crontinel/laravel
```

What you get:
- **Heartbeat** — 60-second detection of missed runs and late arrivals
- **Queue monitoring** — depth per queue, failed count, oldest job age
- **Worker health** — per-supervisor status, not just "process is running"
- **Agent monitoring** — tool call loops, model latency, token spend, run counts
- **Alerts** — Slack, PagerDuty, email, webhook (HMAC-signed)
- **CI/CD check** — `crontinel check` in your deploy pipeline

MIT licensed, fully self-hostable. Optional SaaS at app.crontinel.com for teams that want hosted dashboards and multi-app views.

---

## What's different from Cronitor/OhDear/Healthchecks?

Generic monitors ping your endpoints. They can't tell if your worker is actually processing or just alive. Crontinel hooks into your runtime's scheduler and queue events directly — it knows when a supervisor crashes, not just when a URL stops responding.

Plus, it's the only tool that monitors AI agent runs — tool call loops, model latency, and agent state alongside your traditional jobs.

---

## Screenshots

1. Dashboard overview: cron jobs with green/red status, duration, next run
2. Queue panel: depth sparklines, oldest job age, failed counts per queue
3. Worker status: supervisor-level health for each worker type
4. Agent monitoring: run count, tool calls, latency, loop detection
5. Slack alert: what a real failure alert looks like
6. Terminal: the two-command install (any runtime)
7. MCP server: ask Claude "are any queues backing up?" and get a real answer

---

## Links

- Website: https://crontinel.com
- GitHub: https://github.com/crontinel/crontinel
- Docs: https://docs.crontinel.com
- SaaS: https://app.crontinel.com
