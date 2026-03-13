// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import icon from 'astro-icon';


import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: { en: "es" },
  },

  vite: {
    // @ts-expect-error - Version mismatch between Astro's bundled Vite and @tailwindcss/vite
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});