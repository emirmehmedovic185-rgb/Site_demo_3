# Guide de Déploiement - GitHub & Vercel

Ce guide vous accompagnera pas à pas pour déployer votre application sur GitHub et Vercel sans erreurs.

## 📋 Avant de commencer

Assurez-vous d'avoir:
- Un compte GitHub (https://github.com)
- Un compte Vercel (https://vercel.com) - peut être créé avec votre compte GitHub
- Une clé API Google Generative AI (https://makersuite.google.com/app/apikey)
- Git installé sur votre ordinateur
- Node.js 18+ installé

## 🔑 Étape 1: Préparer votre clé API

1. Allez sur https://makersuite.google.com/app/apikey
2. Créez une nouvelle clé API (cliquez sur "Create API Key")
3. Copiez la clé générée
4. **Ne partagez JAMAIS cette clé publiquement**

## 💻 Étape 2: Configuration locale et test

### 2.1 Préparer votre environnement
```bash
# Naviguez dans le dossier du projet
cd Site_demo_3

# Installez les dépendances
npm install
```

### 2.2 Créer le fichier .env.local
```bash
# Créez le fichier basé sur .env.example
cp .env.example .env.local
```

Éditez `.env.local` et remplacez `your_api_key_here` par votre vraie clé API:
```
VITE_GEMINI_API_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
```

### 2.3 Tester localement
```bash
# Lancez le serveur de développement
npm run dev

# Vérifiez qu'il n'y a pas d'erreurs TypeScript
npm run type-check

# Testez le build de production
npm run build
npm run preview
```

✅ Si tout fonctionne, vous pouvez passer à l'étape suivante.

## 🌐 Étape 3: Créer et configurer le repository GitHub

### 3.1 Créer un nouveau repository sur GitHub
1. Allez sur https://github.com/new
2. Nommez le repository (ex: `martin-electricite`)
3. Sélectionnez "Private" (privé) si vous ne voulez pas que ce soit public
4. **NE cochez PAS** "Add a README file" (on l'a déjà)
5. Cliquez sur "Create repository"

### 3.2 Initialiser Git Local et pusher votre code

```bash
# Dans le dossier du projet
cd Site_demo_3

# Initialiser Git (si pas déjà fait)
git init

# Ajouter GitHub comme remote
git remote add origin https://github.com/VOTRE_USERNAME/martin-electricite.git

# Ajouter tous les fichiers (sauf ceux dans .gitignore)
git add .

# Créer le premier commit
git commit -m "Initial commit: Martin Électricité app"

# Pousser le code sur GitHub
# Note: la branche par défaut peut être 'main' ou 'master'
git branch -M main
git push -u origin main
```

✅ Votre code est maintenant sur GitHub!

### 3.3 Vérifier que les fichiers sensibles sont ignorés
Sur votre repository GitHub, vérifiez que:
- ❌ `.env.local` n'est PAS présent
- ❌ `node_modules` n'est PAS présent
- ❌ `dist` n'est PAS présent
- ✅ `.env.example` EST présent
- ✅ Tous les autres fichiers source sont présents

## 🚀 Étape 4: Déployer sur Vercel

### 4.1 Se connecter à Vercel
1. Allez sur https://vercel.com/new
2. Cliquez sur "Continue with GitHub"
3. Autorisez Vercel à accéder à vos repositories

### 4.2 Sélectionner et configurer le repository
1. Vous verrez votre repository `martin-electricite`
2. Cliquez sur "Import"
3. Laissez les paramètres par défaut:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 4.3 Configurer les variables d'environnement
1. Dans la section "Environment Variables":
2. Ajoutez une nouvelle variable:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: Votre clé API (celle que vous avez copiée plus tôt)
3. Sélectionnez les environnements: `Production`, `Preview`, `Development`

### 4.4 Déployer
1. Cliquez sur "Deploy"
2. Attendez que Vercel construise et déploie votre app (2-5 minutes)
3. Une fois terminé, vous verrez "Congratulations!" avec un lien vers votre site

✅ Votre site est en ligne!

## 📝 Votre URL Vercel

Votre application sera disponible à:
```
https://martin-electricite.vercel.app
```

(Le nom exact dépend de votre configuration)

## 🔄 Épush des mises à jour

Une fois configuré, chaque fois que vous pushez du code sur GitHub:
```bash
# Faire vos modifications
git add .
git commit -m "Description des changements"
git push
```

**Vercel se redéploiera automatiquement!** 🎉

## 🆘 Dépannage courant

### Problème: "Build failed" sur Vercel

**Solution:**
```bash
# Vérifiez localement
npm run type-check
npm run build
```

Si vous avez des erreurs, corrigez-les et commitez.

### Problème: "VITE_GEMINI_API_KEY is undefined"

**Solution:**
1. Allez dans Settings de votre projet Vercel
2. Cliquez sur "Environment Variables"
3. Vérifiez que `VITE_GEMINI_API_KEY` est bien définie
4. Retrigger le déploiement (Redeploy)

### Problème: "Module not found"

**Solution:**
```bash
# Assurez-vous que package.json est à jour
npm install

# Vérifiez que les imports utilisent les bonnes extensions
# Tous les fichiers React doivent être .tsx
# Tous les fichiers TypeScript doivent être .ts
```

## ✅ Checklist finale avant production

- [ ] Code testé localement avec `npm run dev`
- [ ] `npm run type-check` passe sans erreurs
- [ ] `npm run build` réussit sans erreurs
- [ ] `.env.local` n'est PAS committé (vérifié dans `.gitignore`)
- [ ] Clé API définie dans les variables Vercel
- [ ] Repository GitHub est créé et accessible
- [ ] Vercel est configuré et a déployé avec succès
- [ ] Vous pouvez accéder à votre site via l'URL Vercel

## 🎯 Prochaines étapes

1. **Domaine personnalisé**: Vous pouvez ajouter un domaine personnalisé dans les settings Vercel
2. **SSL**: Vercel fourni automatiquement HTTPS
3. **Analytics**: Activez les analytics dans le dashboard Vercel
4. **Monitoring**: Configurez les alertes et monitoring

## 📞 Support

Pour les erreurs Vercel spécifiques:
- Visitez: https://vercel.com/docs
- Consultez les logs de build dans le dashboard Vercel

Pour les erreurs TypeScript/React:
- Vérifiez les messages d'erreur dans votre terminal
- Utilisez `npm run type-check` pour identifier les problèmes de type

---

**Félicitations! 🚀 Votre application est maintenant en production!**
