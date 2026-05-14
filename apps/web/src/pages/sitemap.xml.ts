import { categories } from '../data/categories';
import { getArticleSlug, getPublishedArticles } from '../lib/content';
import { absoluteUrl } from '../lib/site';

function xmlEscape(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const articles = await getPublishedArticles();
  const staticPaths = ['/', '/articles/', '/a-propos/'];
  const categoryPaths = categories.map((category) => `/categories/${category.slug}/`);
  const articlePaths = articles.map((article) => `/articles/${getArticleSlug(article)}/`);
  const paths = [...staticPaths, ...categoryPaths, ...articlePaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => `  <url><loc>${xmlEscape(absoluteUrl(path))}</loc></url>`)
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
