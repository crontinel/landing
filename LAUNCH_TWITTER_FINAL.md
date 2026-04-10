# Twitter/X Launch Thread - Final

**Status:** FINAL
**Refined:** 2026-04-10

---

1/ Your Laravel cron job failed at 3am. Nobody noticed until a customer emailed Monday morning. Queue workers died overnight. Horizon went down and restarted into a broken state. We kept hitting this, so we built Crontinel.

2/ Crontinel is an open-source Laravel package. It monitors cron exit codes, duration, and late runs. Tracks queue depth and failed jobs per queue. Watches Horizon supervisors and oldest job age. All local. No external services.

3/ It also ships an MCP server. Your AI tools can query your cron history, queue health, and Horizon status directly. "Which jobs failed this week?" Just ask. No other Laravel monitoring tool does this.

4/ Two commands to get started:

composer require crontinel/laravel
php artisan crontinel:install

Local dashboard tracks every scheduled task, every queue, every Horizon process. PHP 8.2+, Laravel 11/12/13.

5/ The package is MIT licensed and always will be. Self-hosted dashboard is free forever. Run it on your own infra, own your data. Optional SaaS at app.crontinel.com if you want alerts, multi-app views, and a managed dashboard.

6/ Pro is $19/mo. Team is $49/mo. Lifetime deals available during early access. But the open-source package gives you everything you need to monitor a single app for $0.

7/ Install it, break it, file issues. Stars and PRs welcome.

GitHub: github.com/crontinel/laravel
Docs: crontinel.com/docs
Site: crontinel.com
