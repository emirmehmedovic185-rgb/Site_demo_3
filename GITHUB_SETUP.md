# Guide de Configuration GitHub 

Ce guide vous aide à configurer correctement votre repository GitHub pour un déploiement automatisé sur Vercel.

## 📝 Fichiers de Configuration GitHub

Votre repository contient:

### `.github/workflows/build.yml`
- ✅ Workflow CI/CD pour tester les builds
- ✅ Teste sur Node 18 et 20
- ✅ Vérifie les types TypeScript
- ✅ Teste la build de production

### `.github/workflows/lint.yml`
- ✅ Workflow pour vérifier les types TypeScript
- ✅ Teste la build avec les dernières versions de Node
- ✅ Valide la qualité du code

### `.github/dependabot.yml`
- ✅ Mises à jour automatiques des dépendances
- ✅ Vérifie npm chaque lundi
- ✅ Crée automatiquement des pull requests

### `.nvmrc`
- ✅ Spécifie la version Node.js (20.11.0)
- ✅ Garantit la cohérence entre développement et déploiement

## 🚀 Première Configuration

### 1. Créer le Repository sur GitHub

1. Allez sur https://github.com/new
2. Remplissez les informations:
   - **Repository name**: `martin-electricite`
   - **Description**: Martin Électricité - Architecture Lumineuse
   - **Visibility**: Choisissez "Private" ou "Public"
   - **NE cochez PAS** "Add a README file" (on l'a déjà)
3. Cliquez **"Create repository"**

### 2. Pousser votre Code Local

```bash
# 1. Navigez dans votre dossier local
cd Site_demo_3

# 2. Initialisez Git (si pas déjà fait)
git init

# 3. Ajoutez tous les fichiers
git add .

# 4. Créez le premier commit
git commit -m "Initial commit: Martin Électricité website"

# 5. Renommez la branche (GitHub utilise 'main' par défaut)
git branch -M main

# 6. Ajoutez GitHub comme remote
git remote add origin https://github.com/VOTRE_USERNAME/martin-electricite.git

# 7. Poussez le code
git push -u origin main
```

**REMPLACEZ** `VOTRE_USERNAME` par votre vrai username GitHub!

## 🔐 Configuration des Secrets (si nécessaire)

Si vous voulez stocker des secrets dans GitHub (optionnel):

1. Allez sur votre repository GitHub
2. **Settings** > **Secrets and variables** > **Actions**
3. Cliquez **"New repository secret"**
4. Ajoutez:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your API key
5. Cliquez **"Add secret"**

**Note**: Vercel réclame les variables d'environnement dans son interface, pas GitHub.

## ✅ Workflow GitHub Actions

Le fichier `.github/workflows/build.yml` exécute automatiquement:

### Quand ça s'exécute?
- À chaque `push` sur les branches `main` ou `develop`
- À chaque `pull request` vers `main` ou `develop`

### Qu'est-ce qu'il fait?
1. **Checkout du code** - télécharge votre repository
2. **Setup Node.js** - installe Node 18 et 20
3. **Install dependencies** - `npm install`
4. **Type checking** - `npm run type-check`
5. **Build** - `npm run build`
6. **Upload artifacts** - sauvegarde la build

### Voir les résultats

1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **"Actions"**
3. Cliquez sur la dernière exécution
4. Cliquez sur **"build-and-test"** pour voir les détails

## 📊 Branches et Conventions

### Branches principales

- **`main`** - Code de production, déployé sur Vercel
- **`develop`** - Code de développement, pour les PR

### Workflow de développement

```
1. Créez une branche depuis 'develop'
   git checkout -b feature/ma-fonctionnalite develop

2. Faites vos changements
   git add .
   git commit -m "feat: add my feature"

3. Poussez votre branche
   git push origin feature/ma-fonctionnalite

4. Créez une Pull Request sur GitHub
   - Dans l'interface GitHub
   - Cliquez "Pull requests" > "New pull request"
   - Sélectionnez votre branche
   - Décrivez vos changements
   - Cliquez "Create pull request"

5. Attendez que les tests passent
   - GitHub Actions teste automatiquement
   - Si les tests passent, vous pouvez merger

6. Mergez vers 'develop'
   - Cliquez "Merge pull request"
   - Optionnel: supprimez la branche feature

7. Mergez 'develop' vers 'main' pour la production
   git checkout develop
   git pull origin develop
   git checkout main
   git pull origin main
   git merge develop
   git push origin main
```

## 🔗 Connexion avec Vercel

Une fois votre repository sur GitHub, connectez-le avec Vercel:

### Étapes
1. Allez sur https://vercel.com/new
2. Cliquez **"Continue with GitHub"**
3. Autorisez Vercel
4. Sélectionnez votre repository `martin-electricite`
5. Cliquez **"Import"**
6. Configurez les variables d'environnement (voir DEPLOYMENT_GUIDE.md)
7. Cliquez **"Deploy"**

### Redéploiement automatique

Une fois configuré:
- Chaque `push` sur `main` redéploie automatiquement sur Vercel
- Les PR créent des déploiements d'aperçu
- Vercel ajoute un commentaire avec un lien d'aperçu

## 🛡️ Protéger la Branche Main

Recommandé: Activez la protection de la branche `main`

1. Allez sur votre repository GitHub
2. **Settings** > **Branches**
3. Cliquez **"Add branch protection rule"**
4. Branch name pattern: `main`
5. Cochez:
   - ✅ Require a pull request before merging
   - ✅ Require approvals
   - ✅ Require status checks to pass before merging
6. Cliquez **"Create"**

Cela force:
- Les changements doivent passer par une PR
- Les tests GitHub Actions doivent réussir
- Les approbations manuelle sont nécessaires

## 📋 Collaborateurs

Pour ajouter des collaborateurs:

1. **Settings** > **Collaborators**
2. Cliquez **"Add people"**
3. Entrez le username GitHub
4. Sélectionnez le rôle (Maintainer, Developer, etc.)
5. Cliquez **"Add"**

## 📝 Template pour les Commits

Convenez les messages de commit structurés:

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: format code
refactor: refactor code
perf: improve performance
test: add tests
chore: maintenance tasks
```

Exemple:
```bash
git commit -m "feat: add chatbot feature"
git commit -m "fix: resolve API key issue"
```

## 🔄 Mettre à Jour depuis GitHub

Récupérez les changements du serveur:

```bash
# Récupérez tous les changements
git fetch origin

# Téléchargez les changements locaux
git pull origin main
```

## 📊 Issues et Discussions

GitHub permet de suivre les bugs et discussions:

### Créer une Issue
1. **Issues** > **New issue**
2. Décrivez le problème
3. Assignez-vous ou quelqu'un d'autre
4. Ajoutez des labels (bug, feature, etc.)

### Créer une Discussion
1. **Discussions** > **New discussion**
2. Posez une question ou partagez une idée
3. Laissez les autres commenter

## 🆘 Problèmes Courants GitHub

### "Permission denied (publickey)"

**Cause:** SSH key n'est pas configurée

**Solutions:**
```bash
# Générez une clé SSH
ssh-keygen -t ed25519 -C "votre@email.com"

# Copiez la clé publique
cat ~/.ssh/id_ed25519.pub

# Allez sur GitHub:
# Settings > SSH and GPG keys > New SSH key
# Collez la clé
```

### "fatal: '[remote URL]' does not appear to be a 'git' repository"

**Cause:** Le remote n'est pas correctement configuré

**Solutions:**
```bash
# Vérifiez le remote
git remote -v

# Si incorrect, supprimez et réajoutez
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/martin-electricite.git

# Poussez
git push -u origin main
```

## 🎯 Bonnes Pratiques

1. **Commits réguliers** - Faites des commits pour chaque changement logique
2. **Messages clairs** - Décrivez vraiment ce que vous avez changé
3. **PRs avant main** - Ne poussez jamais directement sur main en production
4. **Tests avant push** - Vérifiez localement avant de pousser
5. **Branches descriptives** - `feature/`, `fix/`, `docs/`, etc.

## 📚 Ressources Utiles

- GitHub Docs: https://docs.github.com/
- Git Basics: https://git-scm.com/book/
- GitHub Flow: https://guides.github.com/introduction/flow/

---

**Dernière mise à jour:** Février 2026
