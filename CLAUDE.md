# CLAUDE.md — repository rules

Durable rules for anyone, human or AI, changing this repository.

## Inspect before modifying

- Read `README.md` and every file in `docs/` before making changes. The founder documents are the source of truth for business facts.
- Read a file before editing or overwriting it. Never delete or rewrite founder planning documents unless asked to.
- Check the branch and working tree first. Work on a feature branch, never commit directly to `main`, never force-push and never rewrite history.
- If a request conflicts with the founder documents, say so and ask. Don't invent a resolution.

## Accuracy constraints (public site)

Never add or imply:

- Clients, client logos, testimonials, quotes, case studies or launch history unless accurate, approved and supported by real customer permission
- Revenue, traffic, conversion, time-saved, performance or other outcome claims
- Founder names, bios, credentials, experience or roles that founders haven't supplied
- Live integrations, inventory sync, payments or booking connections
- That an LLC or other legal entity exists
- Proven demand, guaranteed results or a final service package

Also:

- "Varahi" is the selected public brand; do not claim that a legal entity has been formed.
- Peoria, Illinois is an **initial focus area**, not a registered address or proven coverage.
- Portfolio items are **sample website previews**. Do not imply they are client work or name a real business as a client.
- Anything not built and tested is labeled **not connected**.
- **Do not change `site.draft` or remove noindex** without explicit approval from all four founders.

## Editing conventions

- All public copy lives in `src/config/site.ts`. Components read from it and contain no business copy.
- Section order lives in `src/pages/index.astro`. Navigation entries live in `navigation` in `site.ts`.
- Styles go in `src/styles/global.css`. Use the existing CSS custom properties (tokens) rather than new hard-coded colors.
- Keep URLs base-aware: use `import.meta.env.BASE_URL` for internal links and assets. The site is served from `/Varahi/`.
- Add a dependency only when there is a concrete need. Avoid UI frameworks and unnecessary major upgrades.
- Run `npm run build` (type-check + build) before committing.

## Accessibility

- Semantic landmarks, one `<h1>` per page, headings in order.
- Visible focus on every interactive element. Keyboard-operable navigation, including the mobile menu and Escape to close it.
- Text contrast of at least 4.5:1, and touch targets of about 44px where practical.
- Every meaningful graphic has a text alternative. Decorative graphics are hidden from assistive technology.
- Respect `prefers-reduced-motion`. Keep motion subtle.
- Descriptive link text. Avoid links that just say "click here".

## Security and secrets

- No API keys, tokens, passwords or customer data in the repository, the browser bundle or commit messages.
- No `.env` values unless code genuinely needs them. `.env` is git-ignored.
- No third-party scripts, analytics, trackers or hot-linked images.
- No contact form unless a real, reviewed backend exists (see `docs/INTEGRATIONS.md`).
