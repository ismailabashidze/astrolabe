import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    partytown({
      // Add Partytown configuration options here
      config: {
        forward: ['dataLayer.push', 'gtag'],
        resolveUrl: (url, location, type) => {
          // Add any custom URL resolution logic here if needed
          return url;
        }
      }
    })
  ],
  // Add i18n support
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'], // English and Persian (Farsi) as examples
    routing: {
      prefixDefaultLocale: false,
    },
  },
});