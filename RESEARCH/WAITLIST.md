# Waitlist Email Capture - Implementation Plan

## 1. Current State

The full waitlist signup flow is already built and wired up. Nothing is missing on the code side.

### Form (index.astro, lines 35–108)

- Lives in the hero section of `/src/pages/index.astro`
- Input: `#waitlist-email` (type=email, required)
- Button: `#waitlist-btn` ("Get early access")
- Inline `<script>` intercepts submit, POSTs `{ email }` as JSON to `/api/subscribe`
- On success (`res.ok && data.ok`): shows green confirmation text, resets the form
- On failure: shows red error text from `data.error`, re-enables the button
- Handles network errors separately

### API Endpoint (functions/api/subscribe.ts)

- CF Pages Function at `POST /api/subscribe`
- Reads `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` from `env`
- Validates email with a basic regex (422 on bad input)
- Calls `POST https://api.resend.com/audiences/{AUDIENCE_ID}/contacts`
- Treats HTTP 409 (already subscribed) as success
- **Graceful degradation**: if either env var is missing, logs an error but returns `{ ok: true }` - so the form appears to work even without the real keys. This means the feature is silently broken right now in production.
- CORS headers set for `*` (OPTIONS preflight also handled)

### Email Provider

Resend is the chosen provider. The function calls the Resend Contacts API directly via `fetch` - no SDK installed or needed.

---

## 2. What's Missing

### Missing: two CF Pages environment variables

| Variable | Where to get it | Status |
|---|---|---|
| `RESEND_API_KEY` | Resend dashboard → API Keys → Create API Key (send access) | **Not set** |
| `RESEND_AUDIENCE_ID` | Resend dashboard → Audiences → create or pick audience → copy ID | **Not set** |

These are **not** in `.env.example` - the file only documents `PUBLIC_GA_MEASUREMENT_ID` and optional CI secrets. They need to be added to `.env.example` and set in the Cloudflare Pages dashboard under Settings → Environment Variables → Production.

### No `.dev.vars` for local testing

CF Pages Functions read secrets from `.dev.vars` during `wrangler dev`. This file does not exist. Without it, local `wrangler dev` testing will silently succeed (graceful degradation) rather than exercising the real Resend call.

### `.env.example` is incomplete

`RESEND_API_KEY` and `RESEND_AUDIENCE_ID` are not documented there, making it easy to miss them on a fresh setup.

---

## 3. Best Fallback if Resend Account Setup Is Delayed

If you cannot get a Resend API key this week, here are ranked options:

### Option A: Loops.so free tier (recommended fallback)
- Free tier: up to 1,000 contacts, unlimited sends
- Embed their hosted form or use their API (same shape as Resend Contacts API)
- Signup at loops.so takes ~5 minutes
- Change: swap the `fetch` URL and auth header in `subscribe.ts`

### Option B: ConvertKit (Kit) free tier
- Free up to 10,000 subscribers
- Add a subscriber via their API: `POST https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe`
- Requires `api_key` (public, safe to set as env var) and a `form_id`
- Change: ~10 lines in `subscribe.ts`

### Option C: Google Form embed (zero-code fallback)
- Create a Google Form with one email field
- Replace the `<form>` in `index.astro` with an `<iframe>` embed
- Responses go to a Google Sheet automatically
- Downside: ugly by default, no custom confirmation message without extra JS

### Option D: Formspree free tier
- `action="https://formspree.io/f/{YOUR_ID}"` on the existing form - no backend change needed
- Free tier: 50 submissions/month
- Only suitable for very early validation, not real launch volume

**Recommendation**: Use Loops.so if Resend is delayed. It is production-quality, free at waitlist scale, and the code change in `subscribe.ts` is about 5 lines.

---

## 4. Exact Implementation Checklist (once Resend keys exist)

### Step 1: Create Resend account and audience
- [ ] Sign up at resend.com (free tier supports up to 50,000 monthly emails)
- [ ] Verify your sending domain (`crontinel.com`) under Domains → Add Domain
- [ ] Create an audience: Audiences → Create Audience → name it "Crontinel Waitlist"
- [ ] Copy the **Audience ID** (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
- [ ] Create an API key: API Keys → Create API Key → scope to "Sending access" → copy immediately

### Step 2: Set env vars in Cloudflare Pages
- [ ] Go to: Cloudflare Dashboard → Pages → `crontinel-landing` → Settings → Environment Variables
- [ ] Add variable: `RESEND_API_KEY` = `re_...` - set for **Production** (and optionally Preview)
- [ ] Add variable: `RESEND_AUDIENCE_ID` = the UUID from step 1
- [ ] Save and trigger a new deployment (or redeploy the latest commit)

### Step 3: Set up local `.dev.vars` for development testing
- [ ] Create `/Users/ray/Work/crontinel/landing/.dev.vars` (already gitignored by Wrangler by default):
  ```
  RESEND_API_KEY=re_...
  RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  ```
- [ ] Confirm `.dev.vars` is in `.gitignore` (add it if not)

### Step 4: Update `.env.example`
- [ ] Add the two Resend variables to `.env.example` with comments:
  ```
  # Resend API key for waitlist email capture
  # Get from: https://resend.com/api-keys
  RESEND_API_KEY=re_...

  # Resend Audience ID for waitlist contacts
  # Get from: https://resend.com/audiences
  RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  ```
- [ ] Commit and push this change

### Step 5: Verify deployment picked up the new env vars
- [ ] Wait for the CF Pages deployment to finish after setting env vars
- [ ] Check deployment logs in Cloudflare dashboard for any build errors

---

## 5. Smoke Test Steps (immediately after env vars are set)

Run these in order after a successful deployment with the real keys:

### Test 1: Happy path - new email
1. Open `https://crontinel.com` in a browser
2. Enter a fresh email address you control (e.g. a `+waitlist` alias)
3. Click "Get early access"
4. Expected: button shows "Joining...", then green text "You're on the list! We'll email you when Crontinel launches."
5. Verify in Resend dashboard → Audiences → Crontinel Waitlist → the email appears as a contact

### Test 2: Duplicate email (409 should succeed silently)
1. Submit the same email address again
2. Expected: same green success message (409 is treated as success in the API)
3. No error should appear

### Test 3: Invalid email
1. Open browser DevTools → Network tab
2. Manually POST to `/api/subscribe` with `{"email": "notanemail"}`
   ```
   fetch('/api/subscribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email:'bad'}) })
   ```
3. Expected: HTTP 422, `{ "error": "Valid email address required." }`

### Test 4: Check CF Workers logs
1. Cloudflare Dashboard → Pages → `crontinel-landing` → Functions → Logs
2. Confirm no `Resend env vars not configured` errors appear after a real submission
3. If that error still appears, the env vars were not saved correctly - re-check step 2

### Test 5: Mobile form layout
1. Open the site on a mobile viewport (or DevTools device emulation)
2. The form stacks vertically (column layout at `sm:` breakpoint)
3. Both input and button should be full-width and tappable

---

## Notes

- The graceful degradation in `subscribe.ts` (line 24–28) means the form shows success even when env vars are missing. This is a silent failure. If you want to catch misconfiguration sooner, consider changing it to return a 500 in non-production environments.
- There is no rate limiting or bot protection on the endpoint. For a waitlist this is fine. Add Cloudflare Turnstile before launch if spam becomes an issue.
- The Resend Contacts API does not send a confirmation email automatically - it just stores the contact. If you want a "thanks for joining" transactional email, that requires a separate Resend email send call or a Resend Broadcast to the audience.
