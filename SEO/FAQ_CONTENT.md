# Crontinel FAQ Content

**Status:** FINAL
**Created:** 2026-04-10

---

## What exactly does Crontinel monitor?

Crontinel tracks three things in your Laravel app: scheduled tasks (cron jobs), queues, and Horizon. You get visibility into whether jobs ran on time, how long they took, whether they failed, and what your queue backlog looks like. It is not just a "did my server respond" ping. It actually understands your Laravel internals.

## How is this different from Healthchecks.io or Cronitor?

Healthchecks.io is a dead man's switch. It knows a ping didn't arrive, but it has no idea why your job failed or what your queue depth looks like. Cronitor works but it is expensive and treats Laravel like any other language, so you end up writing boilerplate to get useful data out. Crontinel is a first-class Laravel package that hooks directly into the scheduler, queue system, and Horizon with zero configuration beyond a service provider.

## Does it work with frameworks other than Laravel?

There is a framework-agnostic PHP package (`crontinel/php`) for vanilla PHP or other frameworks, but the richest experience is with Laravel 11, 12, and 13. If you are running something outside the PHP ecosystem, Crontinel is not the right tool for you today. PHP 8.2 or higher is required.

## Is there a free tier?

Yes. The free plan covers one app with up to five monitors and seven days of history. No credit card required. It is enough to monitor a side project or evaluate whether Crontinel fits your workflow before committing to a paid plan.

## How do I get started?

Install the package with `composer require crontinel/laravel`, publish the config, and set your API key. The whole setup takes under two minutes. A self-hosted dashboard is included out of the box, so you can start seeing data immediately without sending anything to an external service.

## What alert channels are supported?

Slack, email, PagerDuty, and webhooks. Webhooks support HMAC signature verification so you can trust the payload is actually from Crontinel. You can configure different channels per monitor if you want Slack alerts for non-critical jobs and PagerDuty for the ones that wake people up.

## Can I self-host everything or do I need the SaaS?

The Laravel package ships with a built-in dashboard, so you can run entirely self-hosted with no external dependencies. The SaaS at app.crontinel.com is optional and exists for teams that want centralized monitoring across multiple apps, longer history retention, and managed alert routing. Neither option locks you in.

## What does pricing look like for a small team?

Pro is $19/month for up to five apps with unlimited monitors and 90 days of history. Team is $49/month for unlimited everything. Annual billing saves you 20%. There are also lifetime deals available if you prefer a one-time payment. The free tier works fine if you just need basic monitoring for a single app.

## What is the MCP server for?

The MCP server lets AI coding assistants (like Claude or Copilot) query your Crontinel data directly. Your AI assistant can check job status, look up recent failures, or inspect queue health without you switching context to a dashboard. It is useful if you already work with an AI assistant in your editor.

## Is this package open source?

Yes, `crontinel/laravel` is MIT-licensed and fully open source. You can read every line of code, fork it, and contribute back. The SaaS layer at app.crontinel.com is a separate commercial product, but the core monitoring package and self-hosted dashboard are free and open.
