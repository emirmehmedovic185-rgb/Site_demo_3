#!/usr/bin/env bash

# Script de vérification pré-déploiement
# Vérifiez que tout est configuré correctement avant de déployer sur Vercel

echo "🔍 Vérification de la configuration du projet..."
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

passed=0
failed=0

# Fonction pour vérifier un test
check_test() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
        ((passed++))
    else
        echo -e "${RED}✗${NC} $2"
        ((failed++))
    fi
}

# Tests de fichiers
echo "📁 Fichiers de configuration:"
test -f package.json && check_test 0 "package.json existe" || check_test 1 "package.json manquant"
test -f tsconfig.json && check_test 0 "tsconfig.json existe" || check_test 1 "tsconfig.json manquant"
test -f vite.config.ts && check_test 0 "vite.config.ts existe" || check_test 1 "vite.config.ts manquant"
test -f vercel.json && check_test 0 "vercel.json existe" || check_test 1 "vercel.json manquant"
test -f .env.example && check_test 0 ".env.example existe" || check_test 1 ".env.example manquant"
test -f .gitignore && check_test 0 ".gitignore existe" || check_test 1 ".gitignore manquant"
test -f .gitattributes && check_test 0 ".gitattributes existe" || check_test 1 ".gitattributes manquant"
test -f README.md && check_test 0 "README.md existe" || check_test 1 "README.md manquant"

echo ""
echo "📦 Dépendances Node.js:"
test -d node_modules && check_test 0 "node_modules installés" || check_test 1 "node_modules manquants (exécutez: npm install)"

echo ""
echo "🔒 Configuration de sécurité:"
grep -q "node_modules" .gitignore && check_test 0 "node_modules est dans .gitignore" || check_test 1 "node_modules n'est pas dans .gitignore"
grep -q "\.env\.local" .gitignore && check_test 0 ".env.local est dans .gitignore" || check_test 1 ".env.local n'est pas dans .gitignore"
grep -q "dist" .gitignore && check_test 0 "dist est dans .gitignore" || check_test 1 "dist n'est pas dans .gitignore"

echo ""
echo "⚙️ Configuration package.json:"
grep -q '"build"' package.json && check_test 0 "Script 'build' présent" || check_test 1 "Script 'build' manquant"
grep -q '"type-check"' package.json && check_test 0 "Script 'type-check' présent" || check_test 1 "Script 'type-check' manquant"

echo ""
echo "✨ Résultats:"
echo -e "Tests réussis: ${GREEN}$passed${NC}"
echo -e "Tests échoués: ${RED}$failed${NC}"

if [ $failed -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Tout est prêt pour le déploiement!${NC}"
    echo ""
    echo "Prochaines étapes:"
    echo "1. git add ."
    echo "2. git commit -m 'votre message'"
    echo "3. git push"
    exit 0
else
    echo ""
    echo -e "${RED}✗ Veuillez corriger les problèmes ci-dessus avant de déployer${NC}"
    exit 1
fi
