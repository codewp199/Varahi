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
| Public brand name | `site.name` (currently Varahi) |
| Browser tab title / search description | `site.title`, `site.description` |
| Service area | `site.serviceArea` (also mentioned in `audience.heading` / `audience.intro`) |
| Contact email | `site.contact.email`, and `site.contact.emailSubject` for the pre-filled subject |
| Social links | `site.social`, e.g. `[{ label: 'LinkedIn', href: 'https://…' }]` |
| Hero headline, intro, buttons | `hero` |
| Who we serve, segments, problems | `audience` |
| Services | `servicesIntro` and the `services` list |
| Service labels ("Core service" / "Scoped after discovery") | `status` on each service; label wording in `serviceStatusLabels` |
| Process steps | `approachIntro`, `approach`, `principles` |
| Sample website previews | `conceptsIntro` and the `concepts` list |
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
{ name: 'Bhuvaneshwari', role: 'Co-Founder', bio: '', link: '' },
```

- `bio` and `link` are **hidden** when empty, so there are no blank gaps.
- Only add details each founder has written and approved for public use.

### Sample website previews

Each preview has a `layout` (`'restaurant'`, `'cafe'`, `'clinic'` or `'gaming'`) that chooses a complete sample website screen, plus an `imageDescription` for screen readers. Keep the label as `'Website preview'`. Do not present sample content as a client project or use invented testimonials.

## Placeholders that must be approved before launch

| Value | Current placeholder | Who approves |
| --- | --- | --- |
| Contact email | `varahi@gmail.com` | Confirm the inbox is monitored before launch |
| Founder bios and profile links | Not supplied | Each founder for their own card |
| Social links | None | All founders |
| Domain | Not set (uses `codewp199.github.io/Varahi/`) | All founders |
| Positioning and service copy | Website design and management for four selected local segments | Review after customer discovery |
| Favicon and social image | Placeholder "V" mark | Design & Content lane |
| Business address, hours, pricing, legal name | Not shown, so don't add them | All founders |

## Search indexing and noindex

At the top of `site.ts`:

```ts
draft: true,
```

While `true`, the site tells search engines not to index it (`<meta name="robots" content="noindex, nofollow">`).

Set it to `false` **only** after all four founders approve launch. This is recorded in the [decision log](DECISION_LOG.md). The 404 page is never indexed.

## Adding or removing a whole section

Sections are kept separate so content doesn't get scattered:

1. **Content** goes in `src/config/site.ts`. Add a new exported object, e.g. `export const faq = { … }`.
2. **Markup** goes in a new file in `src/components/`, e.g. `Faq.astro`. It imports from `site.ts` and contains no hard-coded business copy.
3. **Order:** add or remove the component in `src/pages/index.astro`.
4. **Navigation:** add or remove its entry in `navigation` in `site.ts`. The `href` must match the section's `id`, e.g. `#faq`.

To **hide** a section temporarily, remove its line from `index.astro` and its `navigation` entry. The content stays in `site.ts` for later.

## Images

Sample website layouts are built in Astro and CSS. Their photos live in `public/images/` as compressed WebP files; the paths are set on each entry in the `concepts` list. To replace a photo:

- add the optimized WebP image to `public/images/`,
- update the matching `image` value in `src/config/site.ts`,
- update `imageDescription` so screen-reader users get an accurate description, and
- use images Varahi owns or has permission to use. Don't hot-link from other sites.
