# 🚀 Guide de Déploiement sur Vercel

## Option 1: Déploiement via l'interface Vercel (Recommandé)

### Étapes:

1. **Aller sur Vercel**
   - Visitez [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub

2. **Importer le Projet**
   - Cliquez sur "Add New Project"
   - Sélectionnez le repository `Jaokimben/free`
   - Cliquez sur "Import"

3. **Configuration du Projet**
   - **Framework Preset**: Next.js (détecté automatiquement)
   - **Root Directory**: `./` (racine du projet)
   - **Build Command**: `npm run build` (par défaut)
   - **Output Directory**: `.next` (par défaut)
   - **Install Command**: `npm install` (par défaut)

4. **Variables d'Environnement** (Optionnel)
   - Aucune variable nécessaire pour la version actuelle
   - Si vous ajoutez un backend, configurez-les ici

5. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez 2-3 minutes pour le déploiement
   - Votre site sera disponible sur une URL `.vercel.app`

## Option 2: Déploiement via CLI Vercel

### Installation:
```bash
npm install -g vercel
```

### Déploiement:
```bash
cd /home/user/webapp/jalil-halim-portfolio
vercel login
vercel --prod
```

## 🌐 Après le Déploiement

### Configurer un Domaine Personnalisé:
1. Allez dans les paramètres du projet sur Vercel
2. Section "Domains"
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions pour configurer les DNS

### Déploiement Automatique:
- ✅ Chaque push sur la branche `main` déclenchera un déploiement automatique
- ✅ Les Pull Requests génèrent des previews automatiques
- ✅ Les branches de développement ont leurs propres URLs de preview

## 📊 Monitoring & Analytics

### Vercel Analytics:
1. Activez Vercel Analytics dans les paramètres du projet
2. Obtenez des métriques de performance en temps réel

### Google Analytics (Optionnel):
Ajoutez votre ID de tracking dans `app/layout.tsx`

## 🔧 Configuration Avancée

### Variables d'Environnement:
Créez un fichier `.env.local` pour le développement local:
```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### Redirections:
Modifiez `next.config.js` pour ajouter des redirections:
```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}
```

## ✅ Checklist Post-Déploiement

- [ ] Vérifier que toutes les pages se chargent correctement
- [ ] Tester le formulaire de contact
- [ ] Vérifier la responsivité sur mobile
- [ ] Tester les liens LinkedIn et email
- [ ] Vérifier le temps de chargement (< 2s)
- [ ] Tester sur différents navigateurs
- [ ] Configurer un domaine personnalisé (si applicable)

## 🆘 Support

En cas de problème:
- Documentation Vercel: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/Jaokimben/free/issues

---

**Votre site est maintenant prêt pour le déploiement! 🎉**
