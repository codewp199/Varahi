# Varahi

> Four-founder website design and management venture serving local businesses.

This repository holds the **draft portfolio website** for Varahi and the founders' planning documents. Varahi focuses on website design and management for restaurants, local cafes, small clinics and gaming zones, helping customers find menus, services, hours, location and ways to get in touch.

## Current status

**Early draft — not approved for public launch.**

- **Varahi is the selected public brand.** This does not claim that an LLC or other legal entity has been formed.
- **Initial audience and offer are set:** restaurants, local cafes, small clinics and gaming zones; website design, menus and service pages, website management, and customer contact paths.
- **No clients, testimonials, integrations or business results are claimed.** The portfolio contains sample website previews, not client case studies.
- The configured contact address is `varahi@gmail.com`; confirm it is monitored before launch.
- **Search indexing stays disabled** through the `noindex, nofollow` tag until the founders approve changing `draft` in `src/config/site.ts`.

## Positioning and customer hypothesis

- **What we do:** website design and ongoing management for restaurants, local cafes, small clinics and gaming zones. Typical pages cover menus, services, hours, location and contact or appointment paths.
- **How we work:** agree on the scope, build for mobile, test the customer path, and hand the site and accounts over clearly. Booking and ordering platform setup is scoped after discovery.
- **Initial geography:** the Peoria, Illinois area, as a starting hypothesis to validate.
- **Initial segments:** restaurants, local cafes, small clinics and gaming zones. The team still needs to learn which segment has the strongest demand and delivery fit.
- **Not a SaaS or AI product company.** Custom software, automation or AI come later, and only where discovery shows a real, repeatable need.

## Stack

- [Astro](https://astro.build) 7 (static output), TypeScript and plain CSS with design tokens as custom properties
- Self-hosted fonts via Fontsource (Fraunces and Inter). Nothing is loaded from third-party CDNs.
- GitHub Pages, deployed with GitHub Actions
- No backend, database, analytics, forms or third-party integrations. See [docs/INTEGRATIONS.md](docs/INTEGRATIONS.md).

## Repository structure

```text
.
├── .github/workflows/deploy.yml   # Build on PRs; build + deploy on push to main
├── docs/
│   ├── PRODUCT_BRIEF.md           # Customer hypothesis, candidate offer, validation criteria
│   ├── CUSTOMER_DISCOVERY.md      # Interview guide and evidence capture
│   ├── TEAM_RHYTHM.md             # Meeting cadence and responsibility lanes
│   ├── DECISION_LOG.md            # Open decisions and decision template
│   ├── CLAUDE_CODE_BUILD_PROMPT.md# Brief used to build this site
│   ├── EDITING_GUIDE.md           # How to change site content (plain language)
│   └── INTEGRATIONS.md            # What is / isn't connected, and the review process
├── public/                        # Favicon, social image, robots.txt (copied as-is)
├── scripts/og-image.html          # Source for public/og-image.png
├── src/
│   ├── config/site.ts             # ← ALL public copy and settings live here
│   ├── components/                # One component per section (reads from site.ts)
│   ├── layouts/BaseLayout.astro   # <head>, metadata, skip link and noindex
│   ├── pages/index.astro          # Home page: the order of sections
│   ├── pages/404.astro            # Custom not-found page
│   └── styles/global.css          # Design tokens and all styles
├── CLAUDE.md                      # Durable rules for AI-assisted changes
├── CONTRIBUTING.md                # Branch / PR workflow for the founders
├── astro.config.mjs               # Site URL and /Varahi/ base path
├── package.json
└── tsconfig.json
```

## Local setup

Prerequisites: **Node.js 22.22 or newer** (see `.nvmrc`), npm and Git.

```bash
git clone https://github.com/codewp199/Varahi.git
cd Varahi
npm install
npm run dev
```

Open the URL that Astro prints. It is usually <http://localhost:4321/Varahi/>, and it includes the `/Varahi/` base path.

## Validate and build

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server with live reload |
| `npm run check` | Type-check `.astro` and `.ts` files |
| `npm run build` | Type-check, then build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally |

`npm run build` fails on type errors. Run it before opening a pull request.

## Editing public content

All public copy and settings are in **`src/config/site.ts`**. That includes the brand name, headline, segments, services, approach steps, concepts, founder cards, contact email, social links, service area and the draft switch. Components only read from this file.

Step-by-step instructions are in [docs/EDITING_GUIDE.md](docs/EDITING_GUIDE.md).

## Deployment (GitHub Pages)

The site is configured for the project URL **https://codewp199.github.io/Varahi/** (`base: '/Varahi/'` in `astro.config.mjs`).

The workflow in `.github/workflows/deploy.yml` works like this:

- **Pull requests to `main`:** install and build only, as a validation check. Nothing is published.
- **Pushes to `main`, or a manual run:** build, then deploy to GitHub Pages.

**Required repository setting before the first deployment:** go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. Until that is set, the deploy job will fail and nothing is published. Only enable it after the founders agree to publish the draft.

> GitHub Pages on a private repository needs a paid GitHub plan.

If a custom domain is adopted later, build with `SITE_URL=https://your-domain BASE_PATH=/`, update the defaults in `astro.config.mjs`, and configure the domain under **Settings → Pages**.

## Draft and noindex release controls

`src/config/site.ts` → `site.draft`:

| Value | Effect |
| --- | --- |
| `true` (current) | `<meta name="robots" content="noindex, nofollow">` on every page |
| `false` | Search indexing allowed. **Requires approval from all four founders.** |

The 404 page is always `noindex`.

## Founder and project documents

- [Product brief](docs/PRODUCT_BRIEF.md) — customer hypothesis, candidate offer and validation criteria
- [Customer discovery guide](docs/CUSTOMER_DISCOVERY.md) — interview questions and evidence capture
- [Founder operating rhythm](docs/TEAM_RHYTHM.md) — Wednesday and Sunday meetings, weekly outcomes and responsibility lanes
- [Decision log](docs/DECISION_LOG.md) — open decisions and a template for evidence-backed choices
- [Claude Code build prompt](docs/CLAUDE_CODE_BUILD_PROMPT.md) — the brief used to build this site
- [Editing guide](docs/EDITING_GUIDE.md) — how to change site content
- [Integrations](docs/INTEGRATIONS.md) — what is and isn't connected, and the review steps for future integrations
- [Contributing](CONTRIBUTING.md) — branch, pull request and review workflow
- [CLAUDE.md](CLAUDE.md) — repository rules for AI-assisted changes

## Working principles

- Validate customer needs before promising a solution.
- Keep scope, pricing, timelines and responsibilities clear.
- Protect customer data and use appropriate access controls.
- Label demonstrations and concept work accurately.
- Prefer maintainable, accessible, mobile-friendly implementations.

## Next steps

1. Review the sample website previews and confirm they match the intended offer.
2. Interview local owners across the four segments; compare urgency, ability to pay and founder access.
3. Define one fixed-scope website design and management package with delivery time, exclusions, pricing and support terms.
4. Confirm `varahi@gmail.com` is monitored; add founder bios only when each person approves their own wording.
5. Complete real-device, screen-reader and accessibility checks before launch.

---

This README describes a work in progress. Varahi is the selected public brand; this is not a claim that an LLC has been formed.
