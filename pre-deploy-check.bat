@echo off
REM Script de vérification pré-déploiement pour Windows
REM Vérifiez que tout est configuré correctement avant de déployer sur Vercel

setlocal enabledelayedexpansion
set passed=0
set failed=0

echo.
echo 🔍 Verification de la configuration du projet...
echo.

REM Fonction pour vérifier un test
set "GREEN=✓"
set "RED=✗"

REM Teste les fichiers
echo 📁 Fichiers de configuration:
if exist package.json (
    echo %GREEN% package.json existe
    set /a passed+=1
) else (
    echo %RED% package.json manquant
    set /a failed+=1
)

if exist tsconfig.json (
    echo %GREEN% tsconfig.json existe
    set /a passed+=1
) else (
    echo %RED% tsconfig.json manquant
    set /a failed+=1
)

if exist vite.config.ts (
    echo %GREEN% vite.config.ts existe
    set /a passed+=1
) else (
    echo %RED% vite.config.ts manquant
    set /a failed+=1
)

if exist vercel.json (
    echo %GREEN% vercel.json existe
    set /a passed+=1
) else (
    echo %RED% vercel.json manquant
    set /a failed+=1
)

if exist .env.example (
    echo %GREEN% .env.example existe
    set /a passed+=1
) else (
    echo %RED% .env.example manquant
    set /a failed+=1
)

if exist .gitignore (
    echo %GREEN% .gitignore existe
    set /a passed+=1
) else (
    echo %RED% .gitignore manquant
    set /a failed+=1
)

if exist .gitattributes (
    echo %GREEN% .gitattributes existe
    set /a passed+=1
) else (
    echo %RED% .gitattributes manquant
    set /a failed+=1
)

if exist README.md (
    echo %GREEN% README.md existe
    set /a passed+=1
) else (
    echo %RED% README.md manquant
    set /a failed+=1
)

echo.
echo 📦 Dependances Node.js:
if exist node_modules (
    echo %GREEN% node_modules installes
    set /a passed+=1
) else (
    echo %RED% node_modules manquants ^(executez: npm install^)
    set /a failed+=1
)

echo.
echo 🔒 Configuration de securite:
findstr /M "node_modules" .gitignore >nul 2>&1
if %errorlevel% equ 0 (
    echo %GREEN% node_modules est dans .gitignore
    set /a passed+=1
) else (
    echo %RED% node_modules n'est pas dans .gitignore
    set /a failed+=1
)

findstr /M ".env.local" .gitignore >nul 2>&1
if %errorlevel% equ 0 (
    echo %GREEN% .env.local est dans .gitignore
    set /a passed+=1
) else (
    echo %RED% .env.local n'est pas dans .gitignore
    set /a failed+=1
)

findstr /M "dist" .gitignore >nul 2>&1
if %errorlevel% equ 0 (
    echo %GREEN% dist est dans .gitignore
    set /a passed+=1
) else (
    echo %RED% dist n'est pas dans .gitignore
    set /a failed+=1
)

echo.
echo. Results:
echo Tests reussis: %passed%
echo Tests echoues: %failed%

if %failed% equ 0 (
    echo.
    echo ✓ Tout est pret pour le deploiement!
    echo.
    echo Prochaines etapes:
    echo 1. git add .
    echo 2. git commit -m "votre message"
    echo 3. git push
    echo.
    exit /b 0
) else (
    echo.
    echo ✗ Veuillez corriger les problemes ci-dessus avant de deployer
    echo.
    exit /b 1
)
