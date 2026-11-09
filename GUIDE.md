# Aislia.es — Guide de mise en ligne

Coût total : **≈ 10 € par an** (le nom de domaine). Tout le reste est gratuit.

---

## 0. Ce que contient le site

| Page | URL |
|---|---|
| Accueil + simulateur | `/` |
| Isolation des combles (RES022) | `/aislamiento-desvanes-1-euro/` |
| Aérothermie (RES060 + bonus) | `/aerotermia-1-euro/` |
| Simulateur seul | `/simulador/` |
| Comment ça marche | `/como-funciona/` |
| Qu'est-ce que les CAE | `/que-son-los-cae/` |
| Zones climatiques | `/zonas-climaticas/` |
| FAQ | `/preguntas-frecuentes/` |
| 52 pages province (SEO local) | `/provincias/leon/`, `/provincias/madrid/`… |
| Blog (3 articles de départ) | `/blog/` |
| Pages légales | `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/` |

SEO déjà en place : balises titre et description par page, sitemap automatique, robots.txt,
données structurées (Organization, Service, FAQ, Article, fil d'Ariane), image de partage,
site statique très rapide.

**Le seul fichier à modifier pour les réglages : `src/data/site.ts`**
(numéro WhatsApp, téléphone, identifiant Google Analytics, données légales).

---

## 1. Acheter le domaine (≈ 10 €/an)
1. Va sur un registrar : **Dondominio.com**, **OVH.es** ou **Namecheap**.
2. Cherche `aislia.es`. S'il est pris, choisis-en un autre et dis-le-moi : je modifie le site.
3. Achète-le (pas besoin des options « hébergement » ou « email »).

## 2. Mettre le code sur GitHub
1. Crée ton compte sur **github.com**.
2. Crée un dépôt **privé** nommé `aislia` (bouton « New repository », sans README).
3. Reviens dans cette session Claude et dis « le dépôt est créé » : je pousse le code dessus.

## 3. Héberger gratuitement sur Netlify
1. Va sur **app.netlify.com** → « Sign up » → **avec ton compte GitHub**.
2. « Add new site » → « Import an existing project » → GitHub → choisis `aislia`.
3. Les réglages sont détectés automatiquement (fichier `netlify.toml`) → « Deploy ».
4. Après environ 1 minute, ton site est en ligne sur une adresse en `xxx.netlify.app`.
5. **Activer la réception des leads** : Site → « Forms » → « Enable form detection »,
   puis redéploie (« Deploys » → « Trigger deploy »). Les leads apparaissent dans « Forms → simulador ».
6. **Être alerté à chaque lead** : Forms → « Form notifications » → « Add notification » → Email.
   (Le plan gratuit inclut 100 leads par mois. Au-delà, on branchera ton CRM.)

## 4. Brancher le domaine
1. Netlify → « Domain management » → « Add a domain » → `aislia.es`.
2. Netlify t'affiche des serveurs DNS (ex. `dns1.p01.nsone.net`…).
3. Chez ton registrar, remplace les serveurs DNS par ceux de Netlify.
4. Attends quelques heures. Le HTTPS s'active automatiquement.

## 5. Google Search Console (indispensable pour le SEO)
1. Va sur **search.google.com/search-console** avec un compte Google.
2. « Ajouter une propriété » → type **Domaine** → `aislia.es`.
3. Google te donne un enregistrement **TXT** : ajoute-le dans Netlify → Domain management →
   aislia.es → « DNS settings » → « Add new record » → type TXT.
4. Clique sur « Valider ».
5. Menu « Sitemaps » → saisis `sitemap-index.xml` → « Envoyer ».
6. Pour accélérer : « Inspection de l'URL » → colle l'adresse de l'accueil → « Demander l'indexation ».
   Fais de même pour les pages aérothermie, isolation et quelques provinces.

Ce qu'il faut regarder ensuite (une fois par semaine) : **Performances** (clics, impressions,
requêtes qui t'amènent du trafic) et **Pages** (pages indexées ou non).

## 6. Google Analytics 4 (optionnel)
1. **analytics.google.com** → « Commencer » → crée une propriété « Aislia », pays Espagne, devise EUR.
2. Crée un flux de données « Web » → `https://aislia.es`.
3. Copie l'**ID de mesure** (`G-XXXXXXXXXX`).
4. Donne-le-moi, ou colle-le dans `src/data/site.ts` → `gaId`.
   La bannière de cookies (obligatoire en Espagne) s'active alors toute seule.
5. Chaque lead envoie un événement `generate_lead` : dans GA4, marque-le comme
   **événement clé** (Admin → Événements) pour suivre tes conversions.

## 7. La routine d'articles automatiques
1. Sur **claude.ai/code** → Routines → nouvelle routine, avec le dépôt `aislia`.
2. Colle le prompt du fichier `ROUTINE-PROMPT.md`.
3. Fréquence : 2 à 3 fois par semaine (mieux vaut moins d'articles, mais solides).
4. Les sujets sont dans `PLAN-ARTICLES.md` : ajoute ou retire-en quand tu veux.

## 8. ⚠️ À faire avant de lancer de la publicité ou de pousser fort
- [ ] Remplir les **données légales** dans `src/data/site.ts` (raison sociale, NIF, adresse, email).
      Sans elles, les pages légales affichent « [pendiente de completar] ». C'est obligatoire
      en Espagne (LSSI + RGPD) dès qu'on collecte des données.
- [ ] Ajouter le **numéro WhatsApp** (`whatsapp: '34600000000'`).
- [ ] Vérifier dans le BOE les **codes exacts des fiches « FC »** et la date d'ouverture des dossiers avec bonus.
- [ ] Faire relire les **mentions par province** (fichier `src/pages/provincias/[slug].astro`, bloc `NOTES`)
      par quelqu'un qui connaît le terrain.

## Modifier le site en local (optionnel)
```bash
npm install
npm run dev      # aperçu sur http://localhost:4321
npm run build    # génère le site dans dist/
```
