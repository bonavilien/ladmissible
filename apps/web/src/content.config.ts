import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categorySlugs = [
  'admissions',
  'classements',
  'concours',
  'parcoursup',
  'ecoles',
  'guides',
  'vie-etudiante',
] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(categorySlugs),
    author: z.string(),
    type: z.enum(['article', 'news', 'guide', 'analysis']).default('article'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
          checkedAt: z.coerce.date(),
        }),
      )
      .default([]),
  }),
});

export const collections = { articles };
