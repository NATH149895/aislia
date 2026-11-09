# Aislia.es

Site Astro 5 statique, en espagnol d'Espagne, de génération de leads : isolation des combles (fiche CAE RES022)
et aérothermie (fiche CAE RES060 + multiplicateurs, RDL 7/2026). Hébergé sur Netlify (déploiement auto depuis `main`).

- Réglages : `src/data/site.ts` (WhatsApp, GA, données légales). Provinces : `src/data/provinces.ts`.
- Articles : `src/content/blog/*.md` (schéma dans `src/content.config.ts`). Plan : `PLAN-ARTICLES.md`. Prompt routine : `ROUTINE-PROMPT.md`.
- Formulaire de leads : Netlify Forms, nom `simulador` (`src/components/Simulator.astro`). Ne pas renommer les champs.
- Toujours écrire « desde 1 € », jamais « 1 € para todos ». N'inventer aucun chiffre réglementaire.
- Vérifier `npm run build` avant chaque push.
