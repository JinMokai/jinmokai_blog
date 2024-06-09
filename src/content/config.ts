import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    updateDate: z.string(),
    pubDate: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    draft: z.boolean(),
  }),
})

export const collections = {
  blogs: blogCollection,
}
