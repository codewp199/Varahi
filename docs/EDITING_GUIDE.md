# Editing Guide

How to change what the Varahi website says, in plain language. You don't need to know Astro. Almost every change happens in one file:

**`src/config/site.ts`**

It is a list of labeled text values. Change the text between the quotes, save, and the site updates. Keep the quotes, commas and brackets as they are.

> Before editing, create a branch. See [CONTRIBUTING.md](../CONTRIBUTING.md).

## Run and preview the site locally

```bash
npm install      # first time only
npm run dev      # starts a local server with live reload
```

Open the address shown in the terminal (usually `http://localhost:4321/Varahi/`). Changes appear when you save.

To check the final production version:

```bash
npm run build    # type-checks and builds into dist/
npm run preview  # serves the built site
```

If `npm run build` reports an error, it usually points to a missing quote or comma near the line you edited.

## What to change, and where

All of these are in `src/config/site.ts`.

| To change… | Edit… |
| --- | --- |
| Brand name | `site.name` (and `site.nameStatus` — remove the "working name" wording only once confirmed) |
| Browser tab title / search description | `site.title`, `site.description` |
| Service area | `site.serviceArea` (also mentioned in `audience.heading` / `audience.intro`) |
| Contact email | `site.contact.email`, and `site.contact.emailSubject` for the pre-filled subject |
| Social links | `site.social`, e.g. `[{ label: 'LinkedIn', href: 'https://…' }]` |
| Hero headline, intro, buttons | `hero` |
| Who we serve, segments, problems | `audience` |
| Services | `servicesIntro` and the `services` list |
| Service labels ("Core service" / "Scoped after discovery") | `status` on each service; label wording in `serviceStatusLabels` |
| Process steps | `approachIntro`, `approach`, `principles` |
| Concept work | `conceptsIntro` and the `concepts` list |
| Founder cards | `founders` |
| Contact section text | `contactSection` |
| Navigation links | `navigation` |

### Services

Each service looks like this:

```ts
{
  title: 'Business websites',
  summary: 'One or two sentences.',
  includes: ['Item', 'Item', 'Item'],
  status: 'core',            // or 'case-by-case'
},
```

To add a service, copy one block including its `{ … },` and edit it. To remove one, delete its whole block.

### Founder cards

```ts
{ name: '', role: 'Product & Engineering Lead', bio: '', link: '' },
```

- Leave `name` empty to show "Founder 1 — name pending".
- Leave `role` empty to show "Role to be confirmed".
- `bio` and `link` are **hidden** when empty, so there are no blank gaps.
- Only add details each founder has written and approved for public use.

### Concept work

Each concept has a `layout` (`'retail'`, `'grocery'` or `'appointments'`) that chooses the drawn phone illustration, plus an `imageDescription` for screen readers. Keep `label` as `'Illustrative concept'` or `'Concept'`. Never name a real business or describe a concept as client work.

## Placeholders that must be approved before launch

| Value | Current placeholder | Who approves |
| --- | --- | --- |
| Brand name | `Varahi` (working name) | All founders, after name, domain and legal checks |
| Contact email | `hello@example.com` | All founders, and it must be a monitored inbox |
| Founder names, roles 2–4, bios, links | Empty / pending | Each founder for their own card |
| Social links | None | All founders |
| Domain | Not set (uses `codewp199.github.io/Varahi/`) | All founders |
| Positioning and service copy | Draft from the product brief | All founders, after discovery |
| Favicon and social image | Placeholder "V" mark | Design & Content lane |
| Business address, hours, pricing, legal name | Not shown, so don't add them | All founders |

## Draft banner and noindex

At the top of `site.ts`:

```ts
draft: true,
```

While `true`, the site:

- shows a yellow **"Draft preview"** banner at the top of every page, and
- tells search engines not to index it (`<meta name="robots" content="noindex, nofollow">`).

Set it to `false` **only** after all four founders approve launch. This is recorded in the [decision log](DECISION_LOG.md). The 404 page is never indexed.

## Adding or removing a whole section

Sections are kept separate so content doesn't get scattered:

1. **Content** goes in `src/config/site.ts`. Add a new exported object, e.g. `export const faq = { … }`.
2. **Markup** goes in a new file in `src/components/`, e.g. `Faq.astro`. It imports from `site.ts` and contains no hard-coded business copy.
3. **Order:** add or remove the component in `src/pages/index.astro`.
4. **Navigation:** add or remove its entry in `navigation` in `site.ts`. The `href` must match the section's `id`, e.g. `#faq`.

To **hide** a section temporarily, remove its line from `index.astro` and its `navigation` entry. The content stays in `site.ts` for later.

## Images

The current illustrations are drawn in CSS, so there are no image files to manage. If you add photos later:

- put them in `public/images/`,
- reference them with the base path (ask the Product & Engineering lead, or follow the existing `BASE_URL` pattern in the components),
- write meaningful alt text, and
- only use photos you own or have permission to use. Don't hot-link from other sites.
