# Contributing

A lightweight workflow for four co-founders working part-time. The goal is that every change is easy to review and nothing reaches `main` without a second pair of eyes.

## Workflow

1. **Start from an up-to-date `main`.**
   ```bash
   git checkout main
   git pull
   ```
2. **Create a branch** named by type and topic:
   ```bash
   git checkout -b content/founder-profiles
   ```
   Prefixes: `feat/` (new feature or section), `fix/` (bug), `content/` (copy or data), `docs/` (documentation), `chore/` (tooling or dependencies).
3. **Make small, focused changes.** Most content edits only touch `src/config/site.ts`. See [docs/EDITING_GUIDE.md](docs/EDITING_GUIDE.md).
4. **Check locally:**
   ```bash
   npm run build
   npm run preview
   ```
5. **Commit** with a clear message (see below), then push:
   ```bash
   git push -u origin content/founder-profiles
   ```
6. **Open a pull request to `main`.** Describe what changed and why, and include a screenshot for visual changes.
7. **Review:** at least **one other founder** approves. Changes to public identity, claims, pricing or `draft` mode need **all four** founders.
8. **Merge** with "Squash and merge". Delete the branch afterwards.

Never force-push `main`, rewrite shared history or merge your own PR without review.

## Commit messages

Use `type: short summary` in the present tense, under about 70 characters.

```text
feat: add concept work section
content: update services copy after discovery interviews
fix: correct mobile menu focus order
docs: explain draft mode in editing guide
chore: update astro to 7.3.9
```

Add a body when the reason isn't obvious from the summary.

## Review checklist

**Accuracy**
- [ ] No invented clients, testimonials, results, credentials or founder details
- [ ] No claim that an LLC or other entity exists
- [ ] Concepts still labeled as concepts; integrations not built are "not connected"
- [ ] Copy matches the current [product brief](docs/PRODUCT_BRIEF.md) and [decision log](docs/DECISION_LOG.md)

**Quality**
- [ ] `npm run build` passes with no errors or warnings
- [ ] Checked at phone (about 375px) and desktop widths
- [ ] Keyboard: can tab through everything, focus is visible, mobile menu opens and closes
- [ ] Links work, including under the `/Varahi/` path
- [ ] New images or graphics have appropriate alt text

**Safety**
- [ ] No secrets, tokens or customer data
- [ ] `draft` setting unchanged, unless all founders approved
- [ ] No new dependency without a stated reason

## Recording decisions

When a PR reflects a business decision (segment, package, name, pricing), add or update an entry in [docs/DECISION_LOG.md](docs/DECISION_LOG.md) in the same PR.
