import { defineConfig } from "astro/config";
import aws from "astro-sst";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: "server",
  adapter: aws(),
  site: 'https://f4bra.com',
  integrations: [mdx(), sitemap(), tailwind()],
});
