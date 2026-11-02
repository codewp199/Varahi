# Claude Code Build Prompt — Varahi Portfolio

Copy this prompt into Claude Code with the `Varahi` repository open as the working directory.

---

## Role and outcome

Act as a senior product designer and front-end engineer. Build a polished, responsive, professional portfolio website for **Varahi**, a four-founder, service-led B2B website design and management venture.

The site should help a local business owner quickly understand:

1. Who the team is
2. Which local business problems it is exploring
3. What services the team may offer
4. How a project would work
5. How to start a conversation

This is an early-stage business and a portfolio draft. The founders are balancing other jobs, so the site and workflow should feel credible, focused, and maintainable by a small team.

## Repository-first instructions

Before writing code:

1. Inspect the entire repository, including the existing README and every file in `docs/`.
2. Preserve all existing founder planning documents and Git history.
3. Confirm the current branch, working tree, Git remotes, and authentication status. Do not overwrite existing files without reading them first.
4. Treat existing documents as the source of truth. Where this prompt and the existing documents differ, preserve accurate project facts and explain the conflict instead of inventing a resolution.
5. Build the website in this repository root. Do not create a nested duplicate repository or put the app in an unrelated directory.
6. Keep changes reviewable. Do not force-push, delete branches, rewrite history, expose credentials, enable public deployment, or change the draft/noindex setting without the founders' approval.

## Business context

- **Business model:** service-led B2B website design and ongoing website management.
- **Initial geography:** Peoria, Illinois area, as a starting hypothesis to validate.
- **Initial customer segments:** restaurants, local cafes, small clinics and gaming zones. These are the team's starting focus; discovery will determine which to prioritize first.
- **Positioning:** design and manage mobile-friendly websites that make menus, services, hours, locations and customer pathways easy to find. Hand over accounts and content clearly.
- **Core areas of work:** website design; menu and service pages; business contact and appointment pathways; agreed website content updates and routine checks.
- **Case-by-case work:** setup of third-party booking or ordering platforms when the customer's workflow supports them.
- **Later possibilities:** custom software, deeper integrations, automation, or AI only when discovery shows a real, repeatable problem and the team can support the solution.
- **Technology principle:** prefer proven, maintainable, platform-neutral tools. Use a custom build only when an observed need cannot be met well with an appropriate existing platform.

This is **not currently a SaaS product company**. Do not position Varahi as an established AI startup. Do not claim the LLC has been formed.

## Accuracy and trust rules

Never invent or imply:

- Paying clients, client logos, testimonials, customer quotes, case studies, or launch history
- Revenue, conversion, traffic, time-saved, performance, or other business outcomes
- Founder names, biographies, credentials, years of experience, or responsibilities that were not provided
- Existing customer integrations, live inventory synchronization, payment processing, or booking connections
- That an LLC or other legal entity has been formed
- Proven market demand, product-market fit, guaranteed results, or a final service package

Use **Varahi** as the selected public brand in an editable configuration value. Do not imply that an LLC has been formed. Keep an explicit draft-preview indicator and search-engine noindex behavior on. Do not change draft mode to live or remove the noindex rule.

Use editable placeholders for unconfirmed public information. Known placeholders include:

- Contact email: `varahi@gmail.com` (confirm it is monitored before launch)
- Founders: Bhuvaneshwari, Koushik, Lokendra and Pravalika; list each role as **Co-Founder**. Do not invent bios or credentials.
- Any social links, address, business hours, pricing, legal name, or domain: not supplied

Use Peoria, Illinois as the initial service-area hypothesis only. Describe it as an initial focus area, not proof of local coverage or a registered business address.

For portfolio visuals, create complete, clearly labeled **sample website previews** for the four selected segments. Do not present them as client work, add invented testimonials, or use fabricated metrics.

## Design direction

Create a high-caliber, contemporary digital studio presentation: clean, confident, editorial, and warm enough for independent business owners. It should feel carefully designed and industry-ready, not like a school project or a generic starter theme.

- Establish a strong typographic hierarchy, generous spacing, intentional grids, and restrained motion.
- Use a cohesive color system with accessible contrast and a memorable accent color.
- Build a distinctive hero with concise copy, one primary call to action, and one secondary path to explore services/work.
- Make the mobile experience feel deliberately designed, not compressed desktop content.
- Avoid generic purple gradients, noisy decoration, overused stock photos, fake dashboard screenshots, and copied brand identities.
- Use CSS/SVG-based concept illustrations or original simple graphics where they add value. Do not hotlink images from other sites.
- Keep effects subtle and respect `prefers-reduced-motion`.
- Ensure visible focus states, semantic structure, keyboard navigation, descriptive link text, and usable touch targets.

## Recommended page content

Build a polished single-page portfolio with clear navigation and these sections:

1. **Hero:** identify Varahi as a local-business web and digital services team; state the customer problem plainly; include “Discuss a project” and “Explore services” actions.
2. **Who we serve:** show restaurants, local cafes, small clinics and gaming zones in and around Peoria.
3. **Services:** use editable, data-driven service cards for website design, menu and service pages, website management, and customer contact pathways. Keep third-party booking and ordering setup case by case.
4. **Approach:** show the working path from discovery and requirements through platform choice, design/build or setup, workflow testing, owner handoff, and support.
5. **Sample website previews:** show complete mobile website screens for a restaurant, cafe, small clinic and gaming zone. Use readable sample business copy, menus/services, hours and calls to action; do not present samples as client projects or use invented testimonials.
6. **Team:** show Bhuvaneshwari, Koushik, Lokendra and Pravalika, with each role listed as Co-Founder. Do not invent biographies.
7. **Contact:** make the next step obvious and use `varahi@gmail.com` as the `mailto:` action. Do not build a fake form that appears to submit without a working backend.
8. **Footer:** include navigation, draft context, the selected public brand and accurate contact information.

A custom 404 page is appropriate if it fits the implementation.

## Technical requirements

Use the existing plan: **Astro, TypeScript, and plain CSS**, deployed as a static site with **GitHub Pages via GitHub Actions**.

- Inspect installed dependencies and current package versions before changing them. Avoid unnecessary major upgrades and unnecessary UI libraries.
- No backend, database, authentication, payments, or server-side API is required for this portfolio MVP.
- Configure Astro for the GitHub Pages project path: repository `Varahi`, account `codewp199`, project site base `/Varahi/`. Keep URLs and assets correct under that base path.
- Create a repeatable GitHub Actions workflow for building and deploying to GitHub Pages, with minimum required permissions.
- Keep the content maintainable: put public copy, service data, process steps, founder cards, concept examples, contact details, social links, and draft settings in one typed source of truth, preferably `src/config/site.ts`.
- Separate layout, components, page composition, styles, and public assets.
- Define design tokens in CSS custom properties.
- Keep secrets, API keys, private data, and tokens out of the repository and browser bundle.
- Use stable, accessible HTML and TypeScript. Add dependencies only when there is a concrete need.

Suggested structure (adapt if the existing repository has a better structure):

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── PRODUCT_BRIEF.md
│   ├── CUSTOMER_DISCOVERY.md
│   ├── TEAM_RHYTHM.md
│   ├── DECISION_LOG.md
│   ├── EDITING_GUIDE.md
│   └── INTEGRATIONS.md
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   ├── config/
│   │   └── site.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── .editorconfig
├── CLAUDE.md
├── CONTRIBUTING.md
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Keep existing `docs/` files. Add only the missing files needed for a complete, understandable project.

## APIs, plugins, and external connections

For this static portfolio, **no external API, Claude plugin, database, analytics tool, or app connection is needed**.

- Do not add API calls or plugin declarations just to make the site seem more technical.
- Do not connect to customer systems, Google Business Profile, Square, Shopify, booking tools, email providers, or analytics accounts.
- Mention platform setup or integration work only as a possible service subject to discovery, customer approval, account access, feasibility, and separately agreed scope.
- Add `docs/INTEGRATIONS.md` that says what is and is not connected today, the reason the MVP has no integrations, and the review steps for any future integration: customer permission, minimum access, named owner, data/privacy review, test plan, support plan, and cost.
- If a working contact form is later requested, document the required provider and server-side handling first. Never put provider secrets in client-side code or commit real credentials. Do not add a nonfunctional form.
- If an integration is not implemented and tested, label it “not connected” rather than implying it works.
- Do not add `.env` values unless the code genuinely requires them. If needed, add only safe placeholder names to `.env.example` and make sure `.env` is ignored.

## Editable-content documentation

Add `docs/EDITING_GUIDE.md` explaining, in plain language:

- How to change the brand name, headline, services, process, concept work, founder details, contact email, social links, and service area
- Which values are placeholders and must be approved
- How the draft banner and noindex setting work
- How to add or remove a section without scattering content across components
- How to run and preview the site locally

Add a concise `CLAUDE.md` with durable repository rules, including accuracy constraints, editing conventions, accessibility, no secrets, and the requirement to inspect before modifying.

## README requirements

Create/update the root `README.md` so a new founder can use the repo without asking for missing context. Include:

- Project purpose and current draft status
- Current positioning and target-customer hypothesis
- Stack and repo structure
- Local setup: `npm install`, `npm run dev`
- Validation/build commands
- How to edit public content via `src/config/site.ts`
- GitHub Pages deployment overview
- Required GitHub Pages repository setting: Pages source set to GitHub Actions
- Draft/noindex release controls
- Links to all founder planning, editing, integrations, and contribution docs
- A clear statement that the venture name, public content, and entity status require founder confirmation

Add `CONTRIBUTING.md` with a lightweight branch/pull-request workflow, review checklist, and basic commit naming guidance suitable for four co-founders.

## Quality checks and completion criteria

Before declaring the task complete:

1. Install only the dependencies required by the implementation.
2. Run TypeScript/type checks if configured and run the production build.
3. Resolve build errors and warnings that come from this work.
4. Check the compiled asset paths for the `/Varahi/` GitHub Pages base path.
5. Check internal navigation and links; ensure a 404 page works if included.
6. Review responsive layouts at 320, 375, 768, and 1440 px widths.
7. Run an automated accessibility scan if a suitable checker is already available or can be added with low effort; fix meaningful WCAG A/AA findings.
8. Check keyboard navigation, visible focus, reduced motion, color contrast, image descriptions, and headings.
9. Report tests performed, results, known limitations, and manual checks still needed. Do not claim a real-device or screen-reader test unless actually performed.

## Git workflow

- Check `gh auth status` before any remote operation.
- Work on a feature branch named `feat/varahi-portfolio`; do not rewrite or force-push `main`.
- Commit coherent changes with a clear message after validation.
- If authenticated and the remote points to `codewp199/Varahi`, push the feature branch and open a pull request to `main` for founder review. Do not merge the PR.
- If authentication is unavailable, finish the local project, leave all changes intact, and provide the exact commands the user can run after authenticating. Never ask the user to paste a token.
- Do not enable GitHub Pages, remove draft/noindex protections, or represent the site as launch-ready. The founders will review the public identity and content first.

## Final response format

When done, provide:

1. A short summary of what was built
2. The repository folder structure
3. The exact local run and build commands
4. The files founders should edit first
5. The commit/branch/PR status (or exact authentication blocker)
6. QA completed and anything that still requires human review
7. Any decisions still needed from today's founder meeting
