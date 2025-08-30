import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  // Path aliases
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@fonts': path.resolve(__dirname, './src/fonts'),
        '@scripts': path.resolve(__dirname, './src/scripts'),
        '@content': path.resolve(__dirname, './src/content'),
        '@i18n': path.resolve(__dirname, './src/i18n'),
        '@public': path.resolve(__dirname, './public'),
      }
    }
  }
});