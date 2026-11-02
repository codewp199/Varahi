// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages project site: https://codewp199.github.io/Varahi/
 *
 * The defaults below match that address. They can be overridden with
 * environment variables if the founders later move to a custom domain:
 *   SITE_URL=https://www.example.com BASE_PATH=/ npm run build
 */
const site = process.env.SITE_URL || 'https://codewp199.github.io';
const base = process.env.BASE_PATH || '/Varahi/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
