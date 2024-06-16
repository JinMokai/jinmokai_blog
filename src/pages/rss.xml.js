import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const blog = await getCollection('blogs')
  return rss({
    title: 'Jinmokai’s Blog',
    description: 'A Simple Blog for Documenting Your Life',
    site: context.site,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blogs/${post.slug}/`,
    })),
    customData: `<language>zh-cn</language>`,
  })
}
