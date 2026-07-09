import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const fics = await getCollection('fanfics');
  const sortedFics = fics.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Archive of Our Own (Astro Edition)',
    description: 'Latest updates and creative prose additions.',
    site: context.site || 'https://yourdomain.com',
    items: sortedFics.map((fic) => ({
      title: fic.data.isMultiChapter 
        ? `${fic.data.title} (Ch. ${fic.data.chapterNumber})` 
        : fic.data.title,
      pubDate: fic.data.pubDate,
      description: fic.data.summary,
      link: `/fanfics/${fic.slug}/`,
    })),
  });
}
