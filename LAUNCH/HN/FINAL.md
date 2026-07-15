# Show HN: Crontinel — open-source cron/queue/agent monitoring (self-host or SaaS, any stack)

**Title:** I built an open-source tool that actually tells you when your cron jobs, queues, and AI agents fail

---

I kept finding out about failed jobs the way nobody wants to: a user emails support.

A worker process would crash at 2am. A scheduled task would silently stop. The scheduler says what is *supposed* to run, not what actually failed or drifted late. And when I started building AI agents, I realized nobody was monitoring tool-call loops or model latency either.

I built Crontinel to fix that.

**What it monitors:**
- Cron/scheduled tasks: exit code, duration, late detection
- Queue depth: per-queue counts, failed job counts, oldest job age
- Worker health: per-supervisor status, not just "process is running"
- Agent runs: tool calls, model latency, token spend, loop detection
- CI/CD: `crontinel check` in your deploy pipeline

It hooks into your runtime's scheduler and queue events — not your endpoints. No endpoint pings, no per-task wrapping.

One SDK per stack:

```
npm i @crontinel/node
pip install crontinel
composer require crontinel/laravel
go get github.com/crontinel/go
gem install crontinel
dotnet add package Crontinel
```

MIT licensed, fully self-hostable. Local dashboard, CLI, no SaaS needed. There's also a hosted version for teams.

GitHub: https://github.com/crontinel/crontinel
Docs: https://docs.crontinel.com
Site: https://crontinel.com

Feedback welcome — especially on the SDK API, docs, and what runtime you'd want supported next.
