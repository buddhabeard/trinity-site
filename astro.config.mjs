import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://trinitylifeministry.com",
  integrations: [tailwind(), react(), sitemap(), robotsTxt()],
  redirects: {
    "/lost-then-found": "/thrift-store",
    "/residential-application": "/apply",
    "/about-4": "/who-we-are",
    "/tlm-calendar": "/blog?category=Event Upcoming",
  },
});
