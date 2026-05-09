# Crontinel Landing Page - Design Specification

## 1. Concept & Vision

A premium, dark-first SaaS landing page for Laravel developers. The aesthetic channels the
elegance of the Laravel ecosystem (Cloud, Vapor) while borrowing the bold energy of Railway  -
striking gradient typography, glass-morphism nav, editorial section rhythm, and purposeful motion.
The page should feel like a well-engineered product: confident, minimal, alive. Not a template.
Not a clone. A distinct identity for Crontinel.

## 2. Design Language

### Aesthetic Direction
Premium dark SaaS with Laravel DNA. Think: if Cloud.laravel.com and Railway.com had a child
with better taste. Strong typographic hierarchy, green-on-black palette with warm glow accents,
editorial breathing room between sections.

### Color Palette
| Token          | Hex       | Usage                              |
|----------------|-----------|------------------------------------|
| `--bg-base`    | `#000000` | Page background (pure black)       |
| `--bg-surface` | `#0c0c0c` | Section surfaces                   |
| `--bg-card`    | `#111111` | Card backgrounds                   |
| `--border`     | `#1c1c1c` | Subtle card/section borders        |
| `--border-glow`| `#22c55e/15` | Green glow borders             |
| `--text-primary`| `#ffffff`| Headlines, key text               |
| `--text-secondary`| `#a3a3a3` | Body, descriptions             |
| `--text-muted` | `#525252` | Labels, tertiary text             |
| `--accent`     | `#22c55e` | Primary CTA, highlights, badges    |
| `--accent-dim` | `#16a34a` | Hover state for accent             |
| `--danger`     | `#ef4444` | Alert states, failed status        |

### Typography
- **Headings**: System font stack - `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` - with tight tracking (`-0.02em`) and bold weight
- **Body**: Same stack, normal weight, relaxed leading
- **Mono**: `"Geist Mono", "Fira Code", ui-monospace, monospace` - for code blocks and terminal UI
- **Scale**: Hero 64px → Section 48px → Card 20px → Body 16px → Small 14px

### Spatial System
- Section vertical padding: `py-24` (96px) desktop, `py-16` mobile
- Card padding: `p-6` to `p-8`
- Container max-width: `max-w-5xl` with horizontal padding `px-4 sm:px-6`
- Card gap: `gap-6` grid
- Generous whitespace between sections to create editorial pacing

### Motion Philosophy
- **Entrance**: Elements fade up on load (opacity 0→1, translateY 20px→0, 600ms ease-out)
- **Scroll reveal**: Intersection Observer triggers `.is-visible` class; CSS handles the animation
- **Hover**: Cards lift with `translateY(-2px)` + border brightens + subtle shadow glow
- **Ambient**: Hero background has a slow-moving radial gradient pulse
- **Reduced motion**: All animations respect `prefers-reduced-motion`

### Visual Assets
- Icons: Custom inline SVGs - consistent 20x20 or 24x24 stroke icons
- Dashboard preview: Styled terminal mockup (dark card, traffic lights, monospace)
- No emoji anywhere - all visual accents are SVG
- Background: Subtle noise texture overlay on hero; radial gradient blobs on a few key sections
- Decorative: Faint grid/dot pattern behind hero

## 3. Layout & Structure

```
[Nav] - floating frosted glass, sticky, backdrop-blur
[Hero] - full-width, bold headline, subtext, CTA buttons, trust badges
[Metrics Strip] - 3 numbers: developers, apps monitored, uptime
[Problem] - 3-card grid with icon-led headers
[Features] - Bento-style asymmetric grid (6 features)
[How It Works] - 3-step horizontal flow with step numbers
[Dashboard Preview] - terminal mockup, full-width card
[Integrations] - pill badges, categorized
[Pricing] - 3-tier cards + billing toggle
[OSS vs SaaS] - 2-column comparison
[Final CTA] - centered, email capture + install command
[Footer] - links, copyright
```

**Visual pacing**: Hero is loud (gradient headline, glow background). Metrics is quiet.
Problem is medium. Features is rich. How it Works is structured. Dashboard is immersive.
Pricing is focused. Final CTA is warm and inviting. Footer is minimal.

### Responsive Strategy
- Mobile-first. Single column until `sm:` (640px) breakpoint.
- Hero headline wraps gracefully. Dashboard preview scrolls horizontally on mobile.
- Nav collapses to hamburger at `md:` breakpoint (consistent with existing nav)

## 4. Features & Interactions

### Nav
- Sticky, backdrop-blur with `bg-black/70 backdrop-blur-md border-b border-white/5`
- Logo left, links center (hidden mobile), CTA right
- Mobile: hamburger toggle with slide-down menu
- On scroll past 50px: adds `shadow-md` for depth

### Hero
- Headline: "Never miss a failed cron again." with "again" in accent green
- Subheadline: 1-line value prop
- Two CTAs: "Start monitoring free" (primary) + "View on GitHub" (ghost)
- Below CTAs: trust badges - "Free plan · No credit card · MIT open source"
- Background: radial gradient glow (green, very dim) + dot grid pattern
- Animation: headline fades up on load, CTAs stagger in 100ms later

### Problem Section
- Section label: "THE PROBLEM" (small, tracked, muted)
- Headline: "Your uptime monitor says green."
- 3 cards, each with: SVG icon, bold title, description
- Cards have `--border` border, hover brightens border + subtle lift

### Features Section
- Section label: "EVERYTHING YOU NEED"
- Headline: "Monitor what uptime tools miss"
- Bento grid: 2 large cards (spanning 2 cols) + 4 regular cards
- Each card: icon, title, description, optional badge
- Large cards get a subtle green top-border accent

### How It Works
- 3 steps horizontally (stacked on mobile)
- Step number in accent green circle, title, description, connector line between steps
- Minimal, clean - gives clarity on onboarding

### Dashboard Preview
- Terminal-style card with traffic lights, URL bar, monospace content
- Shows Horizon status, queue table, scheduled commands table
- Realistic data with one "alert" row highlighted in red tint

### Integrations
- Pill badges grouped by category (native / coming soon)
- Clean, scannable, no heavy graphics

### Pricing
- Monthly/Yearly toggle (20% discount for yearly)
- 3 tiers: Free, Pro (highlighted with green border + badge), Team
- Feature checklist with check/x icons
- CTA buttons per tier

### OSS vs SaaS
- 2 cards side by side: "Self-hosted" and "Crontinel SaaS"
- SaaS card gets accent treatment (green top border)
- MIT badge on the self-hosted card

### Final CTA
- Headline: "Ready to monitor what matters?"
- Email input + submit (or ghost CTA to GitHub)
- Below: `composer require crontinel/laravel` code block with copy button

## 5. Component Inventory

### `<Nav>`
- States: default (transparent-ish), scrolled (frosted glass + shadow)
- Mobile: hamburger → slide menu

### Hero
- Headline variants: gradient text for key word
- CTA primary: green bg, black text, hover dim
- CTA ghost: transparent border, white text, hover border-brighten
- Trust strip: small muted text with separator dots

### Feature Card
- States: default (border `--border`), hover (border brightens, translateY -2px)
- Badge variant: small green pill top-right for "New" / "Popular"
- Large variant: spanning 2 cols, slightly taller

### Pricing Card
- States: default, highlighted (Pro - green border + glow shadow)
- Toggle state: monthly/yearly pricing swaps reactively

### Terminal Mockup
- Traffic lights: red/yellow/green circles
- URL bar: gray text, monospace
- Body: monospace font, subtle syntax highlighting colors (green for ok, red for alert)

## 6. Technical Approach

- **Framework**: Astro 5 (static output, Cloudflare Pages adapter)
- **Styling**: Tailwind CSS v4 (CSS-based config, no tailwind.config.js)
- **Scripts**: Vanilla JS in `<script>` tags (no framework hydration needed)
- **Build**: `astro build` → Cloudflare Pages
- **Animations**: CSS `@keyframes` + Intersection Observer for scroll reveal
- **No external UI libraries** - all components hand-crafted
- **Font loading**: System fonts only (no Google Fonts CDN dependency)
- **Icons**: Inline SVG (no icon library dependency)
