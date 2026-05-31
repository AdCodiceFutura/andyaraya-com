import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const knowledge = defineCollection({
  loader: glob({ base: './src/content/knowledge', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    featured: z.boolean().default(false)
  })
});

const systems = defineCollection({
  loader: glob({ base: './src/content/systems', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    outcome: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string().default('placeholder'),
    featured: z.boolean().default(false)
  })
});

const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    featured: z.boolean().default(false)
  })
});

const resume = defineCollection({
  loader: glob({ base: './src/content/resume', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional()
  })
});

export const collections = {
  knowledge,
  systems,
  projects,
  lab,
  resume
};
