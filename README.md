# powerops-web

Site vitrine de **PowerOps Tech** — ingénierie DevOps & Cloud souverain (SecNumCloud, Kubernetes, Terraform, MLOps).

Site statique (HTML/CSS, sans étape de build) hébergé sur **Firebase Hosting**.

## Structure

```
.
├── public/
│   ├── index.html             # Accueil : offres, secteurs, méthode, tarifs, cabinet, contact
│   ├── mentions-legales.html  # Mentions légales + confidentialité (servie en /mentions-legales)
│   ├── 404.html               # Page d'erreur
│   ├── robots.txt, sitemap.xml, favicon-32.png, apple-touch-icon.png
│   └── assets/
│       ├── css/styles.css     # Toute la charte (variables CSS dans :root)
│       ├── js/main.js         # Menu mobile, formulaire -> mailto
│       ├── fonts/             # Manrope, Inter, JetBrains Mono (auto-hébergées)
│       └── img/               # Logo (symbole + texte), image de partage og-image.png
├── firebase.json         # Config Hosting (dossier publié : public/)
├── .firebaserc           # Projet Firebase par défaut : poweropstech-a9
└── .github/workflows/
    ├── firebase-hosting-merge.yml         # Déploiement en production sur push vers main
    └── firebase-hosting-pull-request.yml  # Canal de preview sur chaque pull request
```

Aucune ressource tierce n'est chargée : polices et images sont servies depuis le site. Les en-têtes de sécurité (CSP stricte, HSTS…) sont définis dans `firebase.json` : la CSP interdit les `<script>` et attributs `style="…"` inline, tout passe par `styles.css` et `main.js`.

Les contenus à compléter avant mise en ligne sont repérés par `À COMPLÉTER` (`grep -rn "À COMPLÉTER" public/`).

## Développement local

Prérequis : [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`).

```bash
firebase login
firebase serve --only hosting     # ou : firebase emulators:start --only hosting
```

Le site est alors disponible sur http://localhost:5000.

Sans Firebase CLI, n'importe quel serveur statique suffit :

```bash
python3 -m http.server -d public 8000
```

## Déploiement

Le déploiement est automatisé via GitHub Actions :

| Événement            | Résultat                                             |
|----------------------|------------------------------------------------------|
| Pull request         | Déploiement sur un canal de preview (lien commenté sur la PR) |
| Push / merge sur `main` | Déploiement en production (canal `live`)          |

Les workflows utilisent le secret `FIREBASE_SERVICE_ACCOUNT_POWEROPSTECH_A9`, à configurer dans les secrets du dépôt GitHub.

Déploiement manuel si besoin :

```bash
firebase deploy --only hosting
```

## Contact

contact@poweropstech.com
