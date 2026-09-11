import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const siteUrl = context.site ?? new URL('https://xinkouhe.github.io');
  const base = import.meta.env.BASE_URL;

  return rss({
    title: 'xinkouhe · 心口合',
    description: '把日子写成风，把心事放进山水之间。',
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${base}posts/${post.id}/`,
    })),
    customData: '<language>zh-CN</language>',
  });
}
