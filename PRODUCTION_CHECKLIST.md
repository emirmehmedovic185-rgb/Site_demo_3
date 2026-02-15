# Checklist de Déploiement Production

Cette checklist vous aide à vérifier que tout est correct avant de déployer sur Vercel.

## ✅ Configuration du Projet

- [ ] **package.json**
  - [ ] Nom du package valide (sans caractères spéciaux)
  - [ ] Version définie correctement
  - [ ] Toutes les dépendances listées
  - [ ] Scripts `dev`, `build`, `preview` présents
  - [ ] Script `type-check` présent

- [ ] **tsconfig.json**
  - [ ] `strict: true` activé
  - [ ] `skipLibCheck` activé
  - [ ] `isolatedModules` activé
  - [ ] `jsx: "react-jsx"` défini

- [ ] **vite.config.ts**
  - [ ] `base: '/'` configuré
  - [ ] Plugins React inclus
  - [ ] Build optimisé avec chunking
  - [ ] Sourcemaps disabled en production

## 🔐 Variables d'Environnement

- [ ] **.env.example** existe
  - [ ] Contient tous les templates nécessaires
  - [ ] Documentation claire pour chaque variable
  - [ ] Pas de vraies valeurs exposées

- [ ] **.env.local** (local uniquement)
  - [ ] Créé à partir de .env.example
  - [ ] Contient les vraies valeurs pour le dev
  - [ ] **EST IGNORÉ** par Git (.gitignore)

- [ ] **Vercel Environment Variables**
  - [ ] `VITE_GEMINI_API_KEY` définie
  - [ ] Sélectionné pour tous les environnements (Production, Preview, Development)
  - [ ] Pas de caractères spéciaux problématiques

## 📁 Fichiers de Configuration

- [ ] **.gitignore**
  - [ ] `node_modules` ignoré
  - [ ] `dist` ignoré
  - [ ] `.env.local` ignoré
  - [ ] `*.local` ignoré

- [ ] **.gitattributes**
  - [ ] Contrôle des fins de ligne (CRLF vs LF)
  - [ ] Fichiers binaires marqués correctement

- [ ] **.vercelignore**
  - [ ] Fichiers de dev ignorés
  - [ ] Tests ignorés
  - [ ] Documentation optionnelle ignorée

- [ ] **.npmrc**
  - [ ] Configuration npm cohérente

- [ ] **vercel.json**
  - [ ] buildCommand correct
  - [ ] outputDirectory = `dist`
  - [ ] Framework = `vite`

## 🧪 Tests & Vérifications

```bash
# Exécutez tous ces commandes localement et vérifiez qu'elles passent:

# 1. Vérifier les types
npm run type-check
# ✅ Pas d'erreurs TypeScript

# 2. Construire localement
npm run build
# ✅ Build réussi
# ✅ Pas de warnings
# ✅ Dossier `dist` créé

# 3. Prévisualiser la build
npm run preview
# ✅ App accessible sur http://localhost:4173
# ✅ Pas d'erreurs console
# ✅ Clé API fonctionne correctement
```

- [ ] `npm run type-check` passe
- [ ] `npm run build` passe
- [ ] `npm run preview` fonctionne
- [ ] Pas de warnings concernant les dépendances
- [ ] Aucune erreur dans la console du navigateur

## 📦 Dépendances

- [ ] Toutes les dépendances sont dans `package.json`
- [ ] Pas de `require()` dynamiques problématiques
- [ ] Imports utilisant des extensions correctes (`.tsx`, `.ts`)
- [ ] Pas de dépendances dev en production

## 🚀 Déploiement Vercel

### Avant le premier déploiement:

- [ ] Repository GitHub créé
- [ ] Code pushé sur GitHub (branche `main`)
- [ ] Vercel importé depuis GitHub
- [ ] Variables d'environnement configurées
- [ ] Framework détecté comme `Vite`

### Après le premier déploiement:

- [ ] Déploiement réussi (pas d'erreurs)
- [ ] Build logs examinés (peu de warnings)
- [ ] URL de prévisualisation accessible
- [ ] App fonctionnelle sur Vercel
- [ ] Pas d'erreurs TypeScript au build
- [ ] Pas de 404 pour les assets
- [ ] API Gemini fonctionne

## 🔗 GitHub Repository

- [ ] Repository créé sur GitHub
- [ ] README.md présent et complet
- [ ] DEPLOYMENT_GUIDE.md présent
- [ ] Fichiers sensibles ignorés:
  - [ ] `.env.local` pas pushé
  - [ ] `node_modules` pas pushé
  - [ ] `dist` pas pushé
- [ ] Branch `main` est la branche par défaut
- [ ] Aucun conflit de fusion

## 📊 Structure du Projet

```
project-root/
├── .github/
│   └── workflows/
│       └── build.yml               ✅ CI/CD
├── components/
│   ├── Chatbot.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ScrollToTop.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── DemoNotice.tsx
├── .env.example                     ✅ Template env
├── .gitignore                       ✅ Git ignore
├── .gitattributes                   ✅ Line endings
├── .npmrc                           ✅ NPM config
├── .vercelignore                    ✅ Vercel ignore
├── App.tsx                          ✅ App principale
├── index.tsx                        ✅ Entry point
├── index.html                       ✅ HTML template
├── tsconfig.json                    ✅ TS config
├── vite.config.ts                   ✅ Vite config
├── vercel.json                      ✅ Vercel config
├── package.json                     ✅ Dependencies
├── package-lock.json                ✅ Lock file
├── README.md                        ✅ Documentation
├── DEPLOYMENT_GUIDE.md              ✅ Guide déploiement
└── PRODUCTION_CHECKLIST.md          ✅ Cette checklist
```

## 🔄 CI/CD Pipeline (GitHub Actions)

- [ ] Workflow `.github/workflows/build.yml` créé
- [ ] Test sur Node 18 et 20
- [ ] Vérification des types
- [ ] Build test
- [ ] Artifacts stockés

## 🎯 Vérifications Finales

Avant de déclarer "prêt pour production":

- [ ] Aucune dépendance non utilisée
- [ ] Aucune fonction console.log/console.error en production
- [ ] Tous les liens absolus remplacés par des chemins relatifs
- [ ] Images optimisées
- [ ] Pas de secrets exposés
- [ ] Pas d'erreurs dans le build Vercel
- [ ] App fonctionne correctement sur Vercel
- [ ] Performance acceptable (Lighthouse check)

## 📝 Documentation

- [ ] README.md complet
- [ ] DEPLOYMENT_GUIDE.md lisible et clair
- [ ] Code commenté pour les parts complexes
- [ ] Types TypeScript documentés

## 🎉 Prêt pour la Production!

Si tous les points sont cochés ✅, votre application est prête pour la production!

```bash
# Dernière commande avant d'annoncer le lancement:
npm run build && npm run preview
```

Felicitations! 🚀

---

**Généré le:** Février 2026  
**Projet:** Martin Électricité - Architecture Lumineuse
