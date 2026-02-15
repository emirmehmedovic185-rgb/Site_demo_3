# Dépannage - Vercel & GitHub Deployment

Guide de dépannage pour les problèmes courants lors du déploiement de votre application.

## 🔴 Problèmes de Build Vercel

### Build échoue avec "Build failed"

**Problème:** Vercel refuse de builder votre application.

**Vérifications:**
```bash
# 1. Testez le build localement
npm run build

# 2. Vérifiez qu'il n'y a pas d'erreurs TypeScript
npm run type-check

# 3. Regardez les détails du build dans Vercel
# - Allez sur votre projet Vercel
# - Cliquez sur l'outil qui a échoué
# - Regardez les logs détaillés
```

**Solutions courantes:**
- Erreur TypeScript → vérifiez `npm run type-check`
- Module manquant → vérifiez que la dépendance est dans `package.json`
- Erreur d'import → vérifiez les chemins avec l'alias `@/`
- Variable d'env manquante → ajoutez-la dans Vercel Settings > Environment Variables

---

### "VITE_GEMINI_API_KEY is undefined"

**Problème:** L'API Gemini ne fonctionne pas en production.

**Solutions:**
1. Allez dans Vercel Dashboard
2. Sélectionnez votre projet
3. Settings > Environment Variables
4. Vérifiez que `VITE_GEMINI_API_KEY` est définie
5. Vérifiez que le nom est EXACT (case-sensitive)
6. Cliquez sur "Redeploy" pour refaire le déploiement

**Alternative**: Réinitialisez la variable:
- Supprimez `VITE_GEMINI_API_KEY`
- Recréez-la
- Redéployez

---

### "Cannot find module 'react'"

**Problème:** La dépendance React n'est pas trouvée au build.

**Solutions:**
```bash
# 1. Supprimez node_modules et package-lock.json
rm -rf node_modules package-lock.json

# 2. Réinstallez
npm install

# 3. Testez le build
npm run build

# 4. Commitez et pushez
git add .
git commit -m "fix: reinstall dependencies"
git push
```

---

## 🟡 Problèmes de Runtime

### "Module not found" avec un alias `@/`

**Problème:** Les imports avec `@/` ne fonctionnent pas.

**Vérifications:**
1. Vérifiez que vite.config.ts a l'alias:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, '.'),
  }
}
```

2. Vérifiez que tsconfig.json a les paths:
```json
"paths": {
  "@/*": ["./*"]
}
```

3. Vérifiez vos imports sont corrects:
```typescript
// ✅ Bon
import MyComponent from '@/components/MyComponent'

// ❌ Mauvais
import MyComponent from '@/components/MyComponent.tsx'
```

---

### "Cannot GET /" (page 404)

**Problème:** Votre site retourne une 404 sur la page d'accueil.

**Solutions:**
1. Vérifiez que `index.html` existe à la racine
2. Vérifiez que Vite est configuré avec `base: '/'`
3. Vérifiez que votre route racine `/` existe dans App.tsx
4. Assurez-vous que `vite.config.ts` utilise `outDir: 'dist'`

---

## 🟠 Problèmes GitHub

### "Permission denied: pre-deploy-check.sh"

**Problème:** Le script de vérification ne s'exécute pas.

**Solutions sur Windows:**
```bash
# Exécutez le script batch à la place
pre-deploy-check.bat
```

**Solutions sur Mac/Linux:**
```bash
# Rendez le script exécutable
chmod +x pre-deploy-check.sh

# Exécutez-le
./pre-deploy-check.sh
```

---

### "fatal: Not a git repository"

**Problème:** Git n'est pas initialisé.

**Solutions:**
```bash
# Initialisez Git
git init

# Ajoutez GitHub comme remote
git remote add origin https://github.com/VOTRE_USERNAME/martin-electricite.git

# Configurez votre utilisateur Git (si nécessaire)
git config user.name "Votre Nom"
git config user.email "votre@email.com"

# Poussez
git branch -M main
git push -u origin main
```

---

### ".env.local a été committé par accident"

**Problème:** Vous avez pusché le fichier `.env.local` avec vos secrets.

**Solutions d'urgence:**
1. Changez immédiatement votre clé API sur makersuite.google.com
2. Créez une nouvelle clé API
3. Exécutez ces commandes pour supprimer le fichier de l'historique:
```bash
# Supprimez le fichier du dernier commit
git rm --cached .env.local
git commit --amend --no-edit
git push --force-with-lease
```

4. Ajoutez `.env.local` à `.gitignore`
5. Commitez la correction

---

## 🔵 Problèmes de Performance

### "Build size is too large"

**Problème:** Votre build Vercel est plus gros que prévu.

**Vérifications:**
```bash
# Vérifiez la taille du build
npm run build

# Vérifiez la taille de dist/
du -sh dist/
```

**Solutions:**
1. Activez la minification dans vite.config.ts
2. Vérifiez que `sourcemap: false` en production
3. Vérifiez que les dépendances non utilisées sont supprimées
4. Utilisez la lazy loading pour les routes

---

### "Website is slow"

**Problème:** Le site met du temps à charger.

**Diagnostiques:**
1. Allez sur PageSpeed Insights
2. Entrez l'URL de votre site Vercel
3. Vérifiez les métrics (LCP, FID, CLS)

**Solutions:**
- Optimisez les images
- Réduisez les dépendances non utilisées
- Utilisez la lazy loading
- Activez la compression dans vercel.json

---

## 🟣 Problèmes TypeScript

### "Type '...' is not assignable to type '...'"

**Problème:** Erreur TypeScript au build.

**Solutions:**
```bash
# Vérifiez l'erreur exacte
npm run type-check

# Vérifiez que tous les fichiers React sont .tsx
# Vérifiez que tous les fichiers TypeScript sont .ts

# Installez les types manquants
npm install --save-dev @types/react @types/react-dom
```

---

### "Cannot find module '@/...'"

**Problème:** TypeScript ne reconnaissance pas les alias.

**Solutions:**
1. Vérifiez `tsconfig.json`:
```json
"compilerOptions": {
  "paths": {
    "@/*": ["./*"]
  }
}
```

2. Redémarrez le serveur de développement
3. Vérifiez que VS Code lise le `tsconfig.json` correct

---

## 🟢 Checklist de Dépannage

Avant de contacter le support:

- [ ] `npm run type-check` passe sans erreurs
- [ ] `npm run build` fonctionne localement
- [ ] `.env.local` n'est pas committé
- [ ] Les variables Vercel sont définies
- [ ] Vous avez attendu 5-10 minutes après le push (cache)
- [ ] Vous avez essayé un redéploiement manuel
- [ ] Les logs Vercel ont été vérifiés
- [ ] `npm install` a été exécuté

---

## 📞 Si le problème persiste

1. **Vérifiez les docs officielles:**
   - Vite: https://vitejs.dev/
   - Vercel: https://vercel.com/docs
   - React: https://react.dev/

2. **Déploiement manuel testé:**
   - Construisez: `npm run build`
   - Testez: `npm run preview`
   - Vérifiez: Pas d'erreurs en console

3. **Logs détaillés:**
   - Vérifiez les logs Vercel complets
   - Copiez les erreurs exactes
   - Cherchez sur Google/Stack Overflow

4. **Réinitialisation complète:**
   ```bash
   rm -rf node_modules package-lock.json dist
   npm install
   npm run build
   ```

---

**Dernière mise à jour:** Février 2026
