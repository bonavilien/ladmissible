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

export function getArticleCategory(article: Article) {
  return getCategory(article.data.category);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
