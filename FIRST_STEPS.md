# 🎯 Premiers Pas - par où commencer?

Bienvenue! Ce fichier vous guide sur la bonne séquence pour déployer votre project.

## 📖 Lisez dans cet ordre:

### 1️⃣ **QUICK_START.md** (5 min) ⭐ COMMENCEZ PAR LÀ
   - Guide ultra-rapide pour mettre en ligne en 10 minutes
   - Les 3 étapes principales
   - Les commandes à exécuter exactement

### 2️⃣ **DEPLOYMENT_GUIDE.md** (15 min) 
   - Instructions détaillées étape par étape
   - Explications de chaque étape
   - Links vers les services externes

### 3️⃣ **GITHUB_SETUP.md** (15 min)
   - Comment configurer GitHub correctement
   - Workflows et branches
   - Bonnes pratiques Git

### 4️⃣ **TROUBLESHOOTING.md** (consultez au besoin)
   - Problèmes courants et solutions
   - À consulter quand quelque chose échoue

### 5️⃣ **PRODUCTION_CHECKLIST.md** (avant de déployer)
   - Vérifications finales
   - Assurez-vous que tout est correct

---

## ⚡ Version Ultra-Rapide (2 min)

```bash
# 1. Testez localement
npm install
npm run build

# 2. Créez sur GitHub (https://github.com/new)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOS_USERNAME/martin-electricite.git
git push -u origin main

# 3. Déployez sur Vercel (https://vercel.com/new)
# - Connectez GitHub
# - Sélectionnez le repository
# - Ajoutez VITE_GEMINI_API_KEY
# - Cliquez Deploy!
```

---

## 🔍 Vérifiez que tout fonctionne

### Windows:
```bash
pre-deploy-check.bat
```

### Mac/Linux:
```bash
chmod +x pre-deploy-check.sh
./pre-deploy-check.sh
```

---

## 📚 Documents de Référence

| Document | Pour quoi? | Durée |
|----------|-----------|-------|
| **QUICK_START.md** | Déploiement rapide | 5 min |
| **DEPLOYMENT_GUIDE.md** | Vercel complet | 15 min |
| **GITHUB_SETUP.md** | GitHub complet | 15 min |
| **TROUBLESHOOTING.md** | Débogage | ~30 min |
| **PRODUCTION_CHECKLIST.md** | Validation finale | 10 min |
| **CHANGES.md** | Quoi a changé? | 5 min |

---

## ❓ Questions Fréquentes

**Q: Par où je commence?**
A: Lisez QUICK_START.md

**Q: J'ai une erreur, quoi faire?**
A: Allez à TROUBLESHOOTING.md

**Q: Comment utiliser GitHub?**
A: Lisez GITHUB_SETUP.md

**Q: Je veux tout vérifier avant?**
A: Lisez PRODUCTION_CHECKLIST.md

---

## ✅ Checklist Minimale

- [ ] J'ai une clé API Google (https://makersuite.google.com/app/apikey)
- [ ] J'ai un compte GitHub (https://github.com)
- [ ] J'ai un compte Vercel (https://vercel.com)
- [ ] Le build fonctionne localement (`npm run build`)
- [ ] J'ai créé un repository GitHub
- [ ] J'ai configuré Vercel avec les variables d'env
- [ ] Mon site est en ligne!

---

## 🚀 Prochaines Étapes

1. ✅ Ouvrez **QUICK_START.md**
2. ✅ Suivez les 3 étapes
3. ✅ Déployez!
4. ✅ Célébrez! 🎉

---

## 💬 Besoin d'Aide?

1. Vérifiez les documents listés ci-dessus
2. Cherchez sur Google
3. Consultez les logs Vercel (Dashboard > Deployments)
4. Vérifiez les docs officielles:
   - https://vercel.com/docs
   - https://docs.github.com/
   - https://vitejs.dev/

---

**C'est parti! 🚀**

Allez à QUICK_START.md maintenant!

---

*Dernière mise à jour: Février 2026*
