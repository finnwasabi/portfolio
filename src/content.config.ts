import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    role: z.string(),
    period: z.string(),
    // Lower numbers come first on the home page
    order: z.number(),
    summary: z.string(),
    stack: z.array(z.string()),
    teamSize: z.number().optional(),
    href: z.string().url().optional(),
    // Set to false while a case study is still being written
    published: z.boolean().default(true),
  }),
});

export const collections = { work };
