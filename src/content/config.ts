import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const i18n = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/i18n' }),
});

export const collections = { i18n };