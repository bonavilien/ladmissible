export const site = {
  name: "L'Admissible",
  url: 'https://ladmissible.com',
  description:
    "Le media vif et utile pour comprendre les ecoles de commerce, les admissions, les classements, Parcoursup et les concours.",
  defaultAuthor: "La redaction de L'Admissible",
  locale: 'fr_FR',
};

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString();
}
