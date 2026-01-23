import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageHeight: z.number().optional(),
    imageWidth: z.number().optional(),
    externalLink: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageHeight: z.number().optional(),
    imageWidth: z.number().optional(),
    externalLink: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageHeight: z.number().optional(),
    imageWidth: z.number().optional(),
    externalLink: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, projects, experience };
