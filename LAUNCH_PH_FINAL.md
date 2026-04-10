# Product Hunt Launch

## Tagline

**Monitor your Laravel cron jobs, queues, and Horizon supervisors — before your users notice.**

---

## Description

Open-source Laravel package that monitors cron exit codes, queue depth, and Horizon internals. Two commands to install. Self-hosted or SaaS.

---

## First Comment

Hey, I'm Harun. I built Crontinel because cron failures kept turning into 3am incidents.

Laravel tells you what is scheduled to run. It does not tell you when a cron silently fails, a Horizon supervisor dies, or your queue starts backing up. You find out when a user emails support.

Crontinel watches all of it.

Install with Composer:

```
composer require crontinel/laravel
php artisan crontinel:install
```

What you get:
- Cron: exit codes, duration, late detection
- Queues: depth per queue, failed count, oldest job age
- Horizon: supervisor-level status, not just "Horizon is running"
- Alerts via Slack, email, or webhooks (HMAC-signed payloads)
- CLI health check for CI/CD pipelines: `php artisan crontinel:check`

The package is MIT licensed and fully self-hostable. There's also an optional SaaS at app.crontinel.com for teams that want hosted dashboards and multi-app views.

---

## What's different from Cronitor/OhDear?

Generic cron monitors ping your endpoints. They can't see inside your Laravel app. Crontinel hooks into Laravel's scheduler and Horizon internals directly — it knows when a supervisor goes down, not just when a URL stops responding.

---

## Screenshots

1. Dashboard overview: cron jobs with green/red status, duration, next run
2. Horizon panel: supervisor statuses, queue sparklines, failed job counts
3. Slack alert: what a real alert looks like in your #ops channel
4. Terminal: the two-command install
5. MCP server: ask Claude "are any queues backing up?" and get a real answer

---

## Links

- Website: https://crontinel.com
- GitHub: https://github.com/crontinel/crontinel
- Docs: https://docs.crontinel.com
- SaaS: https://app.crontinel.com
