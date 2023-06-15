// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    draft: z.boolean(),
    description: z.string(),
    period: z.string(),
    client: z.string(),
    location: z.string(),
    member: z.enum(['Spyros Gavriilidis', 'Diogo Pereira']),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'projects': projectsCollection,
  // 'blog': blogCollection,
};
