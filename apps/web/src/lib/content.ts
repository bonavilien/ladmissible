import { getCollection, type CollectionEntry } from 'astro:content';
import { getCategory } from '../data/categories';

export type Article = CollectionEntry<'articles'>;

export function getArticleSlug(article: Article) {
  return ((article as Article & { slug?: string }).slug ?? article.id).replace(/\.mdx?$/, '');
}

export function getArticleUrl(article: Article) {
  return `/articles/${getArticleSlug(article)}/`;
}

export function getCategoryUrl(slug: string) {
  return `/categories/${slug}/`;
}

export function getTagSlug(tag: string) {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getTagUrl(tag: string) {
  return `/tags/${getTagSlug(tag)}/`;
}

export async function getPublishedArticles() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  return articles.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );
}

export async function getFeaturedArticle() {
  const articles = await getPublishedArticles();
  return articles.find((article) => article.data.featured) ?? articles[0];
}

export async function getArticlesByCategory(slug: string) {
  const articles = await getPublishedArticles();
  return articles.filter((article) => article.data.category === slug);
}

export function getAllTags(articles: Article[]) {
  const tags = new Map<string, { name: string; slug: string; count: number }>();

  for (const article of articles) {
    for (const tag of article.data.tags) {
      const slug = getTagSlug(tag);
      const existing = tags.get(slug);

      tags.set(slug, {
        name: existing?.name ?? tag,
        slug,
        count: (existing?.count ?? 0) + 1,
      });
    }
  }

  return [...tags.values()].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name, 'fr');
  });
}

export function getArticlesByTag(tagSlug: string, articles: Article[]) {
  return articles.filter((article) =>
    article.data.tags.some((tag) => getTagSlug(tag) === tagSlug),
  );
}

export function getArticleCategory(article: Article) {
  return getCategory(article.data.category);
}

export function getArticleWordCount(article: Article) {
  const text = article.body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/[#>*_[\]()~-]/g, ' ');

  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTimeMinutes(article: Article) {
  return Math.max(1, Math.ceil(getArticleWordCount(article) / 220));
}

export function slugifyHeading(text: string) {
  return getTagSlug(text);
}

export function getArticleHeadings(article: Article) {
  return Array.from(article.body.matchAll(/^##\s+(.+)$/gm)).map((match) => {
    const text = match[1].trim();
    return {
      text,
      id: slugifyHeading(text),
    };
  });
}

export function getRelatedArticles(article: Article, articles: Article[], limit = 3) {
  const currentSlug = getArticleSlug(article);
  const currentTags = new Set(article.data.tags);
  const candidates = articles.filter((candidate) => getArticleSlug(candidate) !== currentSlug);

  const related = candidates
    .map((candidate) => {
      const sharedTags = candidate.data.tags.filter((tag) => currentTags.has(tag)).length;
      const sameCategory = candidate.data.category === article.data.category ? 2 : 0;

      return {
        article: candidate,
        score: sameCategory + sharedTags,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.article.data.publishDate.getTime() - a.article.data.publishDate.getTime();
    })
    .slice(0, limit)
    .map((item) => item.article);

  if (related.length >= limit) return related;

  const relatedSlugs = new Set(related.map((candidate) => getArticleSlug(candidate)));
  const fallback = candidates
    .filter((candidate) => !relatedSlugs.has(getArticleSlug(candidate)))
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .slice(0, limit - related.length);

  return [...related, ...fallback];
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
