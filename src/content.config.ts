import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const vs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    competitor: z.string(),
    date: z.coerce.date(),
  }),
});

const useCases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
  }),
});

const integrations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/integrations' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, vs, 'use-cases': useCases, integrations };
