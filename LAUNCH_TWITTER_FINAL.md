1/5 Your Laravel cron jobs are failing in production and nobody knows. Queue workers die silently. Horizon supervisors go down at 2am. You find out when a customer emails you. We built Crontinel to fix this.

2/5 Crontinel monitors:
- Cron exit codes, execution time, and late runs
- Queue depth per queue and failed jobs
- Horizon supervisor status and oldest job age
No external services. Ships with an MCP server so your AI tools can query it directly.

3/5 Two commands to get started:
composer require crontinel/laravel
php artisan crontinel:install
That gives you a local dashboard for every scheduled task, queue, and Horizon process. PHP 8.2+ / Laravel 11, 12, 13.

4/5 MIT licensed, always. Self-hosted dashboard is free. Run it on your own infra, own your data. Optional SaaS at app.crontinel.com if you want hosted alerts and multi-app views. Early access open now.

5/5 Go try it and tell us what breaks.
GitHub: https://github.com/crontinel/crontinel
Docs: https://docs.crontinel.com
Site: https://crontinel.com
Stars, issues, and PRs all welcome.
