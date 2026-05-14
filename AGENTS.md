# AGENTS.md

## Role du projet

L'Admissible est un media digital francais consacre aux ecoles de commerce, aux admissions, aux classements, a Parcoursup, aux concours, a la vie etudiante, aux programmes post-bac et au Programme Grande Ecole.

Le projet doit produire un site rapide, clair, SEO-first et lisible sur mobile, avec une ligne editoriale journalistique: serieuse sur les faits, vive dans l'angle, parfois sarcastique, jamais corporate.

## Regles de collaboration

- Ne pas coder le site tant que les documents de cadrage ne sont pas valides.
- Respecter la stack preferee: Astro en base, pages statiques autant que possible.
- Preparer l'architecture pour un CMS headless ajoute plus tard, sans l'installer maintenant.
- Prioriser la performance, le HTML semantique, l'accessibilite et le SEO.
- Eviter les abstractions inutiles et les choix techniques lourds pour un media editorial.
- Documenter les decisions structurantes dans les fichiers de cadrage avant implementation.

## Contraintes editoriales non negociables

- Ton journalistique, vif, un peu sarcastique, pop-culture friendly.
- Faits verifies, sources citees quand une information precise est avancee.
- Pas de ton corporate, pas de langage institutionnel, pas de prose de plaquette.
- Pas d'emojis.
- Ne jamais employer la formule composee de `avenir` suivi de `international`.
- Eviter les formulations trop IA: phrases molles, transitions automatiques, conclusions generiques.
- Les titres doivent donner envie sans survendre.

## Contraintes techniques non negociables

- Site tres rapide, mobile-first, SEO-first.
- HTML semantique.
- Pages statiques autant que possible.
- Astro comme stack preferee.
- JavaScript client limite au strict necessaire.
- Images optimisees, dimensions explicites, chargement paresseux hors contenu critique.
- Donnees structurees a prevoir pour les articles, listes, auteurs et fil d'Ariane.
- CMS headless a ajouter plus tard, avec une couche de contenu suffisamment isolee pour le brancher proprement.

## Definition of done avant code

Avant toute implementation, les fichiers suivants doivent etre presents et valides:

- `PRODUCT.md`
- `DESIGN.md`
- `docs/product-brief.md`
- `docs/editorial-line.md`
- `docs/seo-guidelines.md`
- `.agents/skills/editorial-style/SKILL.md`

## Definition of done pour une future implementation

- Le site charge vite sur mobile.
- Les pages principales sont statiques quand c'est possible.
- Les templates utilisent des balises semantiques: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`.
- Chaque page a un titre, une meta description, une URL propre et une structure Hn coherente.
- Les contenus editoriaux suivent la ligne definie dans `docs/editorial-line.md`.
- Les recommandations SEO suivent `docs/seo-guidelines.md`.
- Les composants UI suivent `DESIGN.md`.
