import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const fics = await getCollection('fanfics');
  
  // Sort with newest stories/chapters first
  const sortedFics = fics.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'My Fanfic Archive',
    description: 'Latest creative prose additions and story updates.',
    site: context.site,
    items: sortedFics.map((fic) => ({
      title: fic.data.isMultiChapter 
        ? `${fic.data.title} - Chapter ${fic.data.chapterNumber}: ${fic.data.chapterTitle || ''}` 
        : fic.data.title,
      pubDate: fic.data.pubDate,
      description: fic.data.summary,
      link: `/fanfics/${fic.slug}`,
    })),
  });
}
