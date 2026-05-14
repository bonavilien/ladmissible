import type { Article } from './content';
import { absoluteUrl, site } from './site';
import { getArticleSlug } from './content';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
};

export function buildTitle(title: string) {
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}

export function buildSeo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
}: SeoInput) {
  return {
    title: buildTitle(title),
    description,
    canonical: absoluteUrl(path),
    image: image ? absoluteUrl(image) : undefined,
    type,
  };
}

export function buildArticleJsonLd(article: Article) {
  const articleUrl = absoluteUrl(`/articles/${getArticleSlug(article)}/`);
  const isNews = article.data.type === 'news';

  return {
    '@context': 'https://schema.org',
    '@type': isNews ? 'NewsArticle' : 'Article',
    headline: article.data.title,
    description: article.data.description,
    datePublished: article.data.publishDate.toISOString(),
    dateModified: (article.data.updatedDate ?? article.data.publishDate).toISOString(),
    author: {
      '@type': 'Person',
      name: article.data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    image: article.data.image ? [absoluteUrl(article.data.image)] : undefined,
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
