import { defineCollection, z } from 'astro:content';

const fanfics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    year: z.number(),
    fandoms: z.array(z.string()),
    pairings: z.array(z.string()).optional(),
    characters: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    rating: z.enum(['General', 'Teen', 'Mature', 'Explicit']),
    status: z.enum(['Complete', 'In Progress', 'Hiatus']),
    wordCount: z.number(),
    chapters: z.string().default("1/1"),
  }),
});

export const collections = { fanfics };
