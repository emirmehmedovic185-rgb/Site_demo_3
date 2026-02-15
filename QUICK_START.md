# 🚀 Démarrage Rapide - Upload GitHub & Vercel

Résumé rapide pour mettre votre projet en ligne en 10 minutes!

## 📋 Avant de commencer

✅ Vérifiez que vous avez:
- [ ] Un compte GitHub (gratuit sur https://github.com)
- [ ] Un compte Vercel (gratuit sur https://vercel.com)
- [ ] Votre clé API Google Generative AI (https://makersuite.google.com/app/apikey)
- [ ] Git installé localement

## 🎯 Les 3 Étapes Principales

### ÉTAPE 1️⃣: Tester localement (2 min)

```bash
cd Site_demo_3
npm install
npm run build
npm run preview
```

✅ Si ça fonctionne, continuez.
❌ Si erreur? Lisez à la fin la section "Troubleshooting".

---

### ÉTAPE 2️⃣: Créer un Repository GitHub (3 min)

**Sur GitHub.com:**
1. Allez sur https://github.com/new
2. Nom: `martin-electricite`
3. Visibility: Private (recommandé) ou Public
4. **NE cochez PAS** "Add a README"
5. Cliquez "Create repository"

**Dans votre terminal:**
```bash
cd Site_demo_3
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/martin-electricite.git
git push -u origin main
```

✅ Votre code est maintenant sur GitHub!

---

### ÉTAPE 3️⃣: Déployer sur Vercel (5 min)

**Sur Vercel.com:**
1. Allez sur https://vercel.com/new
2. "Continue with GitHub"
3. Autorisez Vercel
4. Sélectionnez `martin-electricite`
5. Cliquez "Import"
6. Attendez

**Configurer les variables:**
1. Dans Vercel: Settings > Environment Variables
2. Cliquez "Add New"
3. Name: `VITE_GEMINI_API_KEY`
4. Value: Votre clé API
5. Sélectionnez tous les environnements
6. Cliquez "Save"

**Redéployer:**
1. Vercel: Deployments
2. Le dernier déploiement
3. "Redeploy"
4. Attendez ~2 min

✅ Votre site est en ligne! 🎉

---

## 📍 Où trouver quoi?

### GitHub
- Repository: `https://github.com/VOTRE_USERNAME/martin-electricite`
- Vérifier le code: Cliquez sur les fichiers
- Voir les actions: Onglet "Actions"

### Vercel
- Dashboard: `https://vercel.com/dashboard`
- Votre site: `https://martin-electricite.vercel.app`
- Logs: Deployments > (un déploiement) > Logs

### Localement
- Code: `/Site_demo_3/`
- Git status: `git status`
- Derniers commits: `git log`

---

## 🔄 Après le déploiement initial

Quand vous faites un changement:

```bash
# 1. Modifiez vos fichiers...

# 2. Commitez
git add .
git commit -m "fix: some description"

# 3. Poussez
git push

# ✅ Vercel redéployera automatiquement!
```

C'est tout! Vercel observe GitHub et redéploie à chaque push automatiquement.

---

## 🆘 Problèmes?

### "npm install" échoue
```bash
rm -rf node_modules package-lock.json
npm install
```

### "npm run build" échoue
```bash
npm run type-check
# Vérifiez les erreurs TypeScript listées
```

### Vercel dit "Build failed"
- Allez sur Vercel Dashboard
- Cliquez sur le dernier déploiement
- Regardez les logs
- Cherchez les lignes rouges d'erreur

### Clé API ne fonctionne pas
Dans Vercel:
1. Settings > Environment Variables
2. Supprimez une `VITE_GEMINI_API_KEY`
3. Recréez-la avec la vraie valeur
4. Redéployez

---

## 📚 Guides Détaillés

Pour des instructions plus complètes:
- **🚀 Vercel:** Lisez [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **🐙 GitHub:** Lisez [GITHUB_SETUP.md](GITHUB_SETUP.md)
- **🐛 Problèmes:** Lisez [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **✅ Checklist:** Lisez [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)

---

## 🎯 Prochaines Étapes (Optionnel)

1. **Ajouter un domaine custom**
   - Vercel: Deployments > Settings > Domains
   - Exemple: `martin-electricite.fr`

2. **Activer HTTPS**
   - Déjà activé par défaut! ✅

3. **Analytics Vercel**
   - Vercel: Analytics tab
   - Voir les visites et performances

4. **Ajouter des collaborateurs**
   - GitHub: Settings > Collaborators
   - Vercel: Settings > Team

---

## ✨ C'est Fait!

Votre application:
- ✅ Est sur GitHub
- ✅ Est déployée sur Vercel
- ✅ Se redéploie automatiquement
- ✅ Est accessible au monde entier!

---

**Vous avez des questions?**
1. Relisez cette page
2. Consultez les guides détaillés
3. Vérifiez les logs Vercel
4. Consultez Google/Stack Overflow

**Félicitations! 🚀 Vous êtes prêt!**

---

*Dernière mise à jour: Février 2026*
