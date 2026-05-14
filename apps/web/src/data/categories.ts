export const categories = [
  {
    slug: 'admissions',
    name: 'Admissions',
    description: 'Dossiers, oraux, calendriers et choix qui piquent un peu quand on les decouvre trop tard.',
  },
  {
    slug: 'classements',
    name: 'Classements',
    description: 'Les classements lus avec des lunettes, pas avec des confettis.',
  },
  {
    slug: 'concours',
    name: 'Concours',
    description: 'BCE, Ecricome et concours maison, expliques sans brouillard administratif.',
  },
  {
    slug: 'parcoursup',
    name: 'Parcoursup',
    description: 'Les voeux, les dates et les arbitrages pour les programmes post-bac.',
  },
  {
    slug: 'ecoles',
    name: 'Ecoles',
    description: 'Actualites, fiches et signaux faibles des ecoles de commerce.',
  },
  {
    slug: 'guides',
    name: 'Guides',
    description: 'Des reperes pratiques pour choisir, comparer et ne pas subir les acronymes.',
  },
  {
    slug: 'vie-etudiante',
    name: 'Vie etudiante',
    description: 'Campus, logement, assos, alternance et tout ce qui arrive apres la brochure.',
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
