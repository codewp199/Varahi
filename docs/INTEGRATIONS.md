# Integrations

## What is connected today

**Nothing.** The portfolio site is a static set of HTML, CSS and font files built by Astro and served by GitHub Pages.

| Integration | Status |
| --- | --- |
| Contact form / form provider | **Not connected.** Contact is a plain `mailto:` link to `varahi@gmail.com`. |
| Email provider / inbox | **Not connected.** The site uses `varahi@gmail.com`; confirm the inbox is monitored before launch. |
| Analytics or tracking | **Not connected.** No scripts, cookies or trackers. |
| Booking, ordering, commerce (e.g. Square, Shopify, booking tools) | **Not connected.** Mentioned only as a possible service. |
| Google Business Profile / maps / reviews | **Not connected.** |
| Customer systems or data | **Not connected.** No customer data is stored or processed. |
| External APIs, Claude plugins, databases | **None.** |
| Third-party CDNs or hot-linked images | **None.** Fonts are self-hosted from npm packages. |

The only external service involved is **GitHub**, which hosts the code and, once a founder enables it, deploys the site through GitHub Actions and Pages.

## Why the MVP has no integrations

- The site's job is to explain who we are and start a conversation. A `mailto:` link does that reliably at no cost.
- Each integration adds cost, accounts, data-handling responsibility and something that can break. A four-founder, part-time team should only take that on for a proven need.
- A form that appears to submit but has no working backend would mislead visitors, so we don't add one.
- Concept work illustrates booking or ordering paths visually only. They are labeled "not connected".

## On the public site

Platform setup or integration work for **customers** is described only as a possible service. It depends on discovery, customer approval, account access, feasibility, and separately agreed scope and cost. The site must not imply that any customer integration exists.

## Review steps before adding any integration

Whether for this website or for a customer project, complete and record (in the [decision log](DECISION_LOG.md) or the PR) the following:

1. **Need and permission:** the problem it solves, with evidence. For customer work, written permission from the business owner.
2. **Minimum access:** the narrowest account role, scopes and data needed. Use the customer's own accounts where possible, with no shared passwords.
3. **Named owner:** one founder accountable for setup, credentials and ongoing health.
4. **Data and privacy review:** what personal or business data flows where, how long it is kept, who can see it, and the provider's terms. Collect nothing sensitive that isn't needed.
5. **Secrets handling:** keys live only in the provider dashboard or GitHub encrypted secrets, never in the repository, client-side code or chat. Server-side handling is required for anything secret.
6. **Test plan:** how it is tested end-to-end before release, including failure cases (what the visitor sees if it is down).
7. **Support plan:** who monitors it, how issues are noticed, and what happens when a founder is unavailable.
8. **Cost:** setup and ongoing cost, and who pays.
9. **Exit plan:** how to remove it or hand it over cleanly.

Until all steps are complete and tested, the integration is labeled **not connected**.

## If a working contact form is requested later

Decide and document these first:

- The provider (e.g. a form-handling service or a small serverless function) and its cost and terms
- Server-side handling and spam protection
- Where submissions go and who reads them
- Privacy notice wording

Then implement it on a branch with secrets stored only as GitHub encrypted secrets or in the provider, test it end-to-end, and get founder review. If any environment variables are needed, add only their **names** to a `.env.example` file. `.env` is already git-ignored.
