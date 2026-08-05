# Product Hunt Launch Prep Checklist

Builds on the existing copy in [`FINAL.md`](./FINAL.md) (tagline, description, first comment, and the original 7-shot screenshot list) rather than starting over. The main gap since `FINAL.md` was written: the app now has the new Live Monitor UI, so the gallery should be re-shot from that before launch, per `LAUNCH/CHECKLIST.md`'s still-unchecked "7 Product Hunt screenshots" item under Missing Assets.

## Assets needed

**Logo / thumbnail**
- Product Hunt's thumbnail slot wants a square logo, historically 240x240 minimum. `public/favicon-512.png` and `public/logo.png` (plus `logo-dark.png`/`logo-light.png`) already exist and should cover this, confirm the current spec on Product Hunt's own upload page before finalizing since these platform requirements drift.
- Make sure the logo reads clearly at thumbnail size (small), not just at full size, PH's thumbnail renders quite small in list view.

**Gallery screenshots (re-shoot from the new Live Monitor UI)**
`FINAL.md`'s existing 7-shot list is still the right shape, it just needs re-capturing against the current Live Monitor UI instead of whatever build it was originally captured from:

1. Live Monitor dashboard overview: cron jobs with green/red status, duration, next run
2. Queue panel: depth sparklines, oldest job age, failed counts per queue
3. Worker status: supervisor-level health for each worker type
4. Agent monitoring: run count, tool calls, latency, loop detection
5. Slack alert: what a real failure alert looks like
6. Terminal: the two-command install (any runtime)
7. MCP server: asking Claude "are any queues backing up?" and getting a real answer

Capture these from the actual live app (not mockups), same aspect ratio across all seven so the gallery scrolls cleanly, and check current PH gallery image specs (historically ~1270x760, first image is what shows in feed previews so it carries the most weight) before export.

**Video (optional but recommended)**
`LAUNCH/CHECKLIST.md` already lists a 90-second demo video as a missing asset. If it gets made in time, PH supports a video as the first gallery item (usually a YouTube link); the strongest 90 seconds would walk shots 1 through 4 above in sequence: dashboard, queue, worker, agent, in that order, since that's the actual monitoring depth story.

## Tagline options

Current, quoted verbatim from `FINAL.md`:
> Monitor cron jobs, queues, workers, and AI agents — before your users notice.

Alternatives to test against it, keep under Product Hunt's tagline character limit (verify the current limit; it has historically sat around 60 characters, several of these will need trimming to fit):

1. "Know when your cron jobs, queues, or AI agents go quiet."
2. "Your dashboard says green. Crontinel checks if that's true."
3. "Monitoring for jobs, queues, and AI agents, not just uptime."
4. "Catches the job that didn't run, not just the server that's up."

Pick whichever tests best in a quick internal poll or with the first few people the launch gets shared with privately before going live; don't finalize this alone the morning of launch.

## First-comment template

Post this from the maker account within minutes of going live, it should not be the first comment ever, but it should be early enough to set the frame before anyone else does:

```markdown
Hey, I'm Harun. I built Crontinel because silent failures kept turning into 3am incidents.

Your uptime monitor says everything is green. Meanwhile your queue is 6,000 deep, a worker
has been stuck for 12 minutes, and your agent looped on a broken tool call for 40 minutes.
Generic monitors can't tell you any of that.

Crontinel hooks into your scheduler, queue driver, and agent runner, not your endpoints.
[One current, specific line here: a real number, a recent fix, or what changed since the
last time this was pitched publicly, keep it concrete and dated, not generic.]

One SDK per stack (Node, Python, Go, Ruby, .NET, Laravel):

npm i @crontinel/node
pip install crontinel
composer require crontinel/laravel

MIT licensed, fully self-hostable. Optional SaaS at app.crontinel.com for teams that want
hosted dashboards and multi-app views.

Happy to answer anything, what you're monitoring today, what's broken about it, or what
Crontinel is missing. I'll be here all day.
```

The bracketed line is the one thing to actually fill in fresh the morning of launch, everything else can be prepped in advance.

## Hunter vs. maker strategy

- **Self-hunt (recommended default):** post it directly under the Crontinel/Harun maker account. The first comment is already written in first-person founder voice, and PH audiences respond well to a founder who's visibly present and replying all day. This also avoids depending on someone else's schedule or follow-through.
- **External hunter (only if a strong one is already lined up):** a hunter with a large, engaged PH following can meaningfully lift early votes in the first hour, which matters because PH's ranking algorithm weights early velocity heavily. Only worth pursuing if there's a specific hunter with real reach who's confirmed and enthusiastic, not a cold outreach the week of launch, a hunter who forgets to post or share isn't better than self-hunting.
- Either way, the maker (Harun) still needs to be the one live in the comments all day; a hunter doesn't replace that.

## Day-of timeline (all times Pacific, PH's day boundary)

| Time (PT) | Action |
|---|---|
| 12:01 AM | Product goes live. Post immediately as maker (or have the hunter post). |
| 12:05 AM | Post the first comment (template above). |
| 12:10 AM - 6:00 AM | Quiet overnight window. Share the link privately with close network, existing customers, and any Slack/Discord communities, asking for honest feedback, not "please upvote" (which violates PH's guidelines). Reply to any early comments within the hour. |
| 6:00 AM - 9:00 AM | US East Coast and Europe wake up, typically the highest-traffic window. Reply to every comment within minutes. |
| 9:00 AM - 12:00 PM | Cross-post to Twitter/X (reuse `LAUNCH/TWITTER/FINAL.md`), relevant Laravel/DevOps communities, and dev.to/Medium if pieces are already staged (see `docs/PARASITE_SEO_PLAN.md`). Keep replying to every PH comment. |
| 12:00 PM - 3:00 PM | Check ranking position. If something breaks under load (this is real traffic on the app, not just the landing page), fix and reply transparently rather than staying quiet. |
| 3:00 PM - 6:00 PM | Final push: thank commenters by name, surface any strong user quotes into the thread. |
| 6:00 PM onward | Traffic naturally tapers as Pacific evening hits. Keep monitoring, but don't expect the pace of the morning window. |

## Post-launch follow-up

- **Within 24 hours:** reply to every remaining unanswered comment, no comment should go unanswered by the next morning.
- **Within 48 hours:** check `LAUNCH/CHECKLIST.md`'s "Launch day" Product Hunt item, write a short internal recap of what worked and what didn't (ranking achieved, signups, any bugs found live), and consider whether the recap itself is worth adapting into a Medium or Substack post per `docs/PARASITE_SEO_PLAN.md`.
- **Within 1 week:** personally follow up with anyone who left a critical or blocking comment once their issue is actually fixed, don't let a legitimate complaint sit unresolved. If the launch ranked well, add a Product Hunt badge to the homepage footer. Move on to the "After launch" tier of directories in `LAUNCH/DIRECTORIES.md`.
- **Within 2 weeks:** log the actual traffic and signup numbers the launch drove (`SEO/SEO_GROWTH.md` or a dedicated retro note), so the next launch-style push (a major version, a new SDK, whatever comes next) has a real baseline to compare against instead of guessing.
