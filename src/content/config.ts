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
    rating: z.enum(['General', 'Teen', 'Mature', 'Explicit']),
    category: z.enum(['Gen', 'M/M', 'F/F', 'F/M', 'Multi', 'Other']).default('Gen'),
    status: z.enum(['Complete', 'In Progress', 'Hiatus']).default('In Progress'),
    wordCount: z.number(),
    warnings: z.array(z.string()).default(["No Archive Warnings Apply"]),
    
    // --- Multi-Chapter Work Logic (Single Fic) ---
    isMultiChapter: z.boolean().default(false),
    chapterNumber: z.number().optional(), // Chapter 1, 2, etc.
    chapterTitle: z.string().optional(),
    chaptersTotal: z.string().default("1"), // The "1" or "?" in "1/1" or "1/?"
    
    // --- Series Logic (Multi-Work Collection) ---
    seriesName: z.string().optional(),     // The name of the overarching series
    seriesPart: z.number().optional(),     // Part 1, Part 2 of that series
  }),
});

export const collections = { fanfics };
