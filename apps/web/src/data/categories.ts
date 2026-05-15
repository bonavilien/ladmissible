export const categories = [
  {
    slug: 'admissions',
    name: 'Admissions',
    description: 'Dossiers, oraux, calendriers et choix qui piquent un peu quand on les decouvre trop tard.',
    seoTitle: 'Admissions en ecole de commerce',
    seoDescription:
      "Guides et articles sur les admissions en ecole de commerce: dossiers, oraux, admissions paralleles, calendriers et choix d'ecole.",
    intro:
      "Les admissions ont l'air simples jusqu'au moment ou chaque ecole invente sa propre petite gymnastique. Ici, on trie les dossiers, dates et oraux sans vernis commercial.",
  },
  {
    slug: 'classements',
    name: 'Classements',
    description: 'Les classements lus avec des lunettes, pas avec des confettis.',
    seoTitle: 'Classements des ecoles de commerce',
    seoDescription:
      "Analyses des classements des ecoles de commerce: methodes, criteres, limites et signaux a regarder avant de s'emballer.",
    intro:
      "Un classement peut aider. Il peut aussi hypnotiser. Cette rubrique lit les methodes avant de commenter le podium.",
  },
  {
    slug: 'parcoursup',
    name: 'Parcoursup',
    description: 'Les voeux, les dates et les arbitrages pour les programmes post-bac.',
    seoTitle: 'Parcoursup et ecoles de commerce post-bac',
    seoDescription:
      "Articles pour comprendre les ecoles de commerce sur Parcoursup: voeux, frais, bachelors, programmes post-bac et points a verifier.",
    intro:
      "Parcoursup aime les calendriers, les cases et les formulations qui rassurent un peu trop. On regarde ce qu'il faut verifier avant de valider.",
  },
  {
    slug: 'concours',
    name: 'Concours',
    description: 'BCE, Ecricome et concours maison, expliques sans brouillard administratif.',
    seoTitle: "Concours d'ecoles de commerce",
    seoDescription:
      "Actualites et guides sur les concours d'ecoles de commerce: BCE, Ecricome, calendriers, epreuves, oraux et resultats.",
    intro:
      "Concours, banques d'epreuves, oraux, calendriers: tout ce qui peut faire paniquer un candidat avant meme le sujet.",
  },
  {
    slug: 'vie-etudiante',
    name: 'Vie etudiante',
    description: 'Campus, logement, assos, alternance et tout ce qui arrive apres la brochure.',
    seoTitle: 'Vie etudiante en ecole de commerce',
    seoDescription:
      "Articles sur la vie etudiante en ecole de commerce: campus, logement, associations, alternance, budget et quotidien.",
    intro:
      "Apres la brochure, il y a les loyers, les assos, les campus, l'alternance et le quotidien. Bref, la partie que personne ne devrait decouvrir trop tard.",
  },
  {
    slug: 'ecoles',
    name: 'Ecoles',
    description: 'Actualites, fiches et signaux faibles des ecoles de commerce.',
    seoTitle: 'Ecoles de commerce',
    seoDescription:
      "Actualites, analyses et reperes sur les ecoles de commerce: programmes, campus, frais, admissions et vie des etablissements.",
    intro:
      "Les ecoles parlent beaucoup. Cette rubrique garde ce qui aide vraiment a comparer: programmes, frais, campus, admissions et signaux faibles.",
  },
  {
    slug: 'guides',
    name: 'Guides',
    description: 'Des reperes pratiques pour choisir, comparer et ne pas subir les acronymes.',
    seoTitle: 'Guides ecoles de commerce',
    seoDescription:
      "Guides pratiques pour comprendre les ecoles de commerce, les admissions, les concours, Parcoursup et les choix d'orientation.",
    intro:
      "Des guides pour comprendre vite, verifier les bons points et eviter de se perdre dans la foret des acronymes.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
