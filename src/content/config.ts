import { defineCollection, z } from 'astro:content';

const fanficCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.date(),
    year: z.number(),
    fandoms: z.array(z.string()),
    pairings: z.array(z.string()).optional(),
    rating: z.enum(['General', 'Teen', 'Mature', 'Explicit']),
    status: z.enum(['Complete', 'In Progress', 'Hiatus']),
    wordCount: z.number(),
    
    // --- Multi-Chapter/Series Logic ---
    isMultiChapter: z.boolean().default(false),
    // For individual chapters, link them back to a parent slug or ID
    parentSlug: z.string().optional(), 
    chapterNumber: z.number().optional(),
    chapterTitle: z.string().optional(),
  }),
});
