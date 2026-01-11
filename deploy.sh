#!/bin/bash

# Script de déploiement automatique sur Vercel
# Ce script automatise complètement le déploiement

echo "🚀 Déploiement automatique sur Vercel"
echo "======================================"
echo ""

# Vérification du répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: Exécutez ce script depuis le répertoire du projet"
    exit 1
fi

# Installation de Vercel CLI si nécessaire
if ! command -v vercel &> /dev/null && ! [ -f "node_modules/.bin/vercel" ]; then
    echo "📦 Installation de Vercel CLI..."
    npm install --save-dev vercel
fi

# Utiliser le Vercel local si disponible
VERCEL_CMD="npx vercel"

echo ""
echo "🔐 Authentification requise"
echo "Vous allez être redirigé vers votre navigateur pour vous connecter à Vercel"
echo ""

# Login à Vercel
$VERCEL_CMD login

echo ""
echo "🏗️  Déploiement en production..."
echo ""

# Déploiement en production
$VERCEL_CMD --prod --yes

echo ""
echo "✅ Déploiement terminé!"
echo ""
echo "📊 Pour voir votre site et obtenir l'URL:"
echo "   $VERCEL_CMD ls"
echo ""
echo "🌐 Pour ouvrir votre site dans le navigateur:"
echo "   $VERCEL_CMD --prod"
echo ""
