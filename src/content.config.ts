import { defineCollection } from "astro:content";
import { z } from "astro/zod";
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
    // Wireframe drawn on the card when there is no screenshot of the project
    poster: z.enum(["dashboard", "charts", "document", "storefront", "mobile"]).optional(),
    teamSize: z.number().optional(),
    href: z.url().optional(),
    // Optional extras for the case study page. Each block only renders when filled.
    // Results worth a number, shown as a strip under the cover: { value: "3 months", label: "to launch" }
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).max(4).optional(),
    // The calls that shaped the build, one short paragraph each
    decisions: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
    // Set to false while a case study is still being written
    published: z.boolean().default(true),
  }),
});

export const collections = { work };
