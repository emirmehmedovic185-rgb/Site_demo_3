<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Martin Électricité - Architecture Lumineuse

Application web moderne pour Martin Électricité, construite avec React, TypeScript, Vite et Tailwind CSS.

## 📋 Prérequis

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- Une clé API Google Generative AI (Gemini)

## 🚀 Installation et Développement Local

### 1. Cloner le repository
```bash
git clone https://github.com/votre-username/martin-electricite.git
cd martin-electricite
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
```bash
cp .env.example .env.local
```
Éditez `.env.local` et ajoutez votre clé API Gemini:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

Obtenez votre clé API gratuitement sur: https://makersuite.google.com/app/apikey

### 4. Lancer le serveur de développement
```bash
npm run dev
```
L'application sera disponible sur `http://localhost:3000`

## 🛠️ Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la build de production localement
- `npm run type-check` - Vérifie les types TypeScript

## 📦 Déploiement sur Vercel

### Configuration automatique (Recommandée)

1. **Connecter le repository GitHub**
   - Allez sur https://vercel.com/new
   - Connectez votre compte GitHub
   - Sélectionnez ce repository

2. **Configurer les variables d'environnement**
   - Dans les paramètres de déploiement Vercel, allez à "Environment Variables"
   - Ajoutez: `VITE_GEMINI_API_KEY` = votre clé API Gemini

3. **Déployer**
   - Vercel construira et déploiera automatiquement votre application

### Configuration manuelle

Si vous déployez manuellement:
```bash
npm i -g vercel
vercel
```

## 📊 Structure du Projet

```
.
├── components/          # Composants React réutilisables
│   ├── Chatbot.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ScrollToTop.tsx
├── pages/              # Pages de l'application
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── DemoNotice.tsx
├── App.tsx             # Composant principal avec routing
├── index.tsx           # Point d'entrée React
├── index.html          # Template HTML
├── vite.config.ts      # Configuration Vite
├── tsconfig.json       # Configuration TypeScript
├── package.json        # Dépendances et scripts
├── .env.example        # Template variables d'environnement
├── .gitignore          # Fichiers à ignorer par Git
├── .gitattributes      # Configuration Git
└── vercel.json         # Configuration Vercel

```

## 🔧 Technologies Utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Bundler et dev server ultra-rapide
- **React Router v7** - Routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icônes
- **Google Generative AI** - API Gemini pour le chatbot

## ⚙️ Configuration Vite

La configuration Vite est optimisée pour:
- Code splitting automatique des dépendances
- Assets minifiés en production
- Source maps désactivées en production (pour des builds plus légers)
- Support des alias de chemins (`@/` pour la racine)

## 🔐 Sécurité

- Les variables d'environnement commençant par `VITE_` sont exposées au client
- N'exposez **JAMAIS** les secrets sensibles avec le préfixe `VITE_`
- Utilisez `.env.local` localement et ne commitez **PAS** ce fichier

## 📝 Convention de Nommage des Variables d'Environnement

- Préfixe `VITE_` pour les variables accessibles au code client
- Exemple: `VITE_GEMINI_API_KEY`

## 🐛 Débogage

### Vérifier les types TypeScript
```bash
npm run type-check
```

### Problèmes courants sur Vercel

1. **Erreur de type TypeScript au build**
   - Vérifiez que `npm run type-check` passe localement
   - Vercel refuse de déployer avec des erreurs TypeScript

2. **Clé API non reconnue**
   - Vérifiez que la variable `VITE_GEMINI_API_KEY` est définie dans les settings Vercel
   - Le nom doit correspondre exactement

3. **Problèmes d'imports**
   - Vérifiez que tous les fichiers utilisent des extensions `.ts` ou `.tsx`
   - Utilisez les alias `@/` pour les chemins relatifs complexes

## 📄 Licence

Propriétaire - Tous droits réservés

## 📞 Support

Pour toute question ou problème, veuillez contacter l'administrateur du projet.

---

**Dernière mise à jour:** Février 2026
**Version:** 1.0.0
