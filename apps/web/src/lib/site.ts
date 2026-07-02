export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: "L'Admissible",
  url: process.env.SITE ?? 'https://ladmissible.com',
  description:
    "Le media vif et utile pour comprendre les ecoles de commerce, les admissions, les classements, Parcoursup et les concours.",
  defaultAuthor: "La redaction de L'Admissible",
  locale: 'fr_FR',
};

export function withBase(path = '/') {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('#')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}` || '/';
}

export function absoluteUrl(path = '/') {
  return new URL(withBase(path), site.url).toString();
}
