# Show HN: Crontinel - open-source Laravel cron/queue/Horizon monitoring (no external service needed)

**Title:** I built an open-source tool that actually tells you when your Laravel cron jobs fail

---

I kept finding out about failed jobs the way nobody wants to: a user emails support.

A Horizon supervisor would go down at 2am. A scheduled task would silently stop. Laravel's scheduler says what is supposed to run, not what actually failed or drifted late.

I built Crontinel to fix that.

**What it monitors:**
- Cron jobs: exit code, duration, late detection
- Queue depth: per-queue counts, failed job counts, oldest job age
- Horizon: supervisor-level status (not just "Horizon is running")

It hooks into Laravel's `ScheduledTaskFinished` and `ScheduledTaskFailed` events automatically. No wrapping, no modifying your existing commands.

Two commands to install:

```
composer require crontinel/laravel
php artisan crontinel:install
```

You get a local dashboard, CLI health check (`php artisan crontinel:check` for CI/CD), and Slack/email/webhook alerts. MIT licensed, PHP 8.2+, Laravel 11/12.

There's also a hosted SaaS if you want multi-app dashboards and team access, but the package stands alone.

GitHub: https://github.com/crontinel/laravel
Docs: https://docs.crontinel.com
Site: https://crontinel.com

Feedback welcome, especially on the package API and docs.
