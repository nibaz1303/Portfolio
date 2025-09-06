# 🌟 Portfolio Website

<div align="center">

![Portfolio Banner](https://via.placeholder.com/800x200/6366f1/ffffff?text=Modern+Portfolio+Website)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)

**Un portfolio moderne et élégant avec gestion de contenu JSON** ✨

[Demo Live](https://nihalbaz.netlify.app) • [Documentation](#-documentation) • [Contribution](#-contribution)

</div>

---

## 📋 Table des Matières

- [🎯 Aperçu](#-aperçu)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#-technologies)
- [🚀 Installation](#-installation)
- [📖 Configuration](#-configuration)
- [🎨 Personnalisation](#-personnalisation)
- [📁 Structure du Projet](#-structure-du-projet)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [🌙 Thèmes](#-thèmes)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

---

## 🎯 Aperçu

Ce portfolio website est conçu pour être **facilement personnalisable** via un système de gestion de contenu JSON. Plus besoin de modifier le code pour mettre à jour vos informations ! 

### 🌈 Caractéristiques Principales

- ⚡ **Performance optimisée** avec Next.js 14
- 🎨 **Design moderne** avec Tailwind CSS et Radix UI
- 📱 **Entièrement responsive** 
- 🌙 **Mode sombre/clair**
- 🔧 **Configuration JSON simple**
- 🚀 **Animations fluides**
- ♿ **Accessibilité optimale**

---

## ✨ Fonctionnalités

### 🏠 Sections Principales
- **Profil Personnel** - Informations de base et photo
- **À Propos** - Bio, langues, intérêts
- **Expériences** - Parcours professionnel détaillé
- **Projets** - Portfolio de projets avec galeries
- **Compétences** - Compétences techniques et soft skills  
- **Certifications** - Diplômes et certifications
- **Contact** - Formulaire de contact intégré

### 🎛️ Fonctionnalités Avancées
- 📊 **Indicateur de progression de scroll**
- 🔍 **Navigation fluide avec ancres**
- 📧 **Formulaire de contact fonctionnel**
- 🎭 **Animations au scroll**
- 🔗 **Liens sociaux dynamiques**
- 📱 **PWA Ready**

---

## 🛠️ Technologies

### Core
- **[Next.js 14.2.16](https://nextjs.org/)** - Framework React full-stack
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typage statique
- **[React 18](https://reactjs.org/)** - Bibliothèque UI

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Composants accessibles
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gestion des thèmes

### Tools & Libraries
- **[React Hook Form](https://react-hook-form.com/)** - Gestion des formulaires
- **[Zod](https://zod.dev/)** - Validation de schémas
- **[Recharts](https://recharts.org/)** - Graphiques React
- **[Class Variance Authority](https://cva.style/)** - Gestion des variantes CSS

---

## 🚀 Installation

### Prérequis
- **Node.js** 18+ 
- **pnpm** (recommandé) ou npm/yarn

### Clone du Projet
```bash
# Clone le repository
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installation des dépendances
pnpm install

# Lancement en mode développement
pnpm dev
```

🎉 Votre portfolio sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📖 Configuration

### 📄 Configuration Principale

Tout le contenu est géré via le fichier **`data/portfolio-data.json`**

```json
{
  "meta": {
    "title": "Mon Portfolio",
    "description": "Portfolio professionnel de [Votre Nom]"
  },
  "personal": {
    "name": "Votre Nom",
    "title": "Votre Titre Professionnel",
    "location": "Votre Localisation",
    "email": "votre.email@example.com",
    "avatar": "/votre-photo.jpg"
  }
}
```

### 🔧 Sections Configurables

<details>
<summary><strong>👤 Informations Personnelles</strong></summary>

```json
"personal": {
  "name": "Votre Nom",
  "title": "Développeur Full-Stack",
  "location": "Paris, France",
  "avatar": "/photos/avatar.jpg",
  "email": "contact@example.com",
  "phone": "+33 6 12 34 56 78",
  "workingHours": "Lun-Ven 9h-18h",
  "availableForWork": true,
  "badges": ["Freelance", "Remote", "Full-time"],
  "social": [
    {
      "platform": "GitHub",
      "url": "https://github.com/username",
      "icon": "Github"
    },
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/username",
      "icon": "Linkedin"
    }
  ]
}
```
</details>

<details>
<summary><strong>📝 Section À Propos</strong></summary>

```json
"about": {
  "bio": "Développeur passionné avec 5+ ans d'expérience...",
  "focus": [
    "Développement Web Modern",
    "Architecture Cloud",
    "UX/UI Design"
  ],
  "languages": [
    {
      "name": "Français",
      "proficiency": "Natif",
      "level": 100,
      "flag": "🇫🇷"
    },
    {
      "name": "Anglais",
      "proficiency": "Courant",
      "level": 90,
      "flag": "🇬🇧"
    }
  ],
  "interests": [
    "Photographie",
    "Voyage",
    "Technologie"
  ]
}
```
</details>

<details>
<summary><strong>💼 Expériences Professionnelles</strong></summary>

```json
"experience": [
  {
    "title": "Développeur Full-Stack Senior",
    "company": "Tech Company",
    "period": "2022 - Présent",
    "description": "Développement d'applications web modernes...",
    "achievements": [
      "Amélioration des performances de 40%",
      "Migration vers l'architecture microservices",
      "Formation de l'équipe junior"
    ],
    "technologies": ["React", "Node.js", "AWS", "Docker"]
  }
]
```
</details>

---

## 🎨 Personnalisation

### 🖼️ Images et Médias

1. **Ajoutez vos images** dans le dossier `/public/`
2. **Référencez-les** dans le JSON avec le chemin `/nom-image.jpg`
3. **Formats recommandés** : JPG, PNG, SVG, WebP

```bash
public/
├── photos/
│   ├── avatar.jpg      # Photo de profil
│   └── projects/       # Images des projets
├── logos/              # Logos d'entreprises
└── icons/             # Icônes personnalisées
```

### 🎨 Thèmes et Couleurs

Le site supporte automatiquement les **modes sombre et clair**. Personnalisez les couleurs dans `tailwind.config.ts` :

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

---

## 📁 Structure du Projet

```
portfolio/
├── 📁 app/                 # Pages et layouts Next.js
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── projects/         # Pages des projets
├── 📁 components/          # Composants React
│   ├── ui/               # Composants UI réutilisables
│   ├── contact-form.tsx  # Formulaire de contact
│   ├── portfolio-header.tsx
│   └── ...
├── 📁 contexts/           # Contexts React
├── 📁 data/              # Données JSON
│   └── portfolio-data.json
├── 📁 hooks/             # Hooks personnalisés
├── 📁 lib/               # Utilitaires et helpers
├── 📁 public/            # Assets statiques
└── 📁 styles/            # Fichiers de style
```

---

## 🔧 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `pnpm dev` | 🚀 Lance le serveur de développement |
| `pnpm build` | 📦 Compile l'application pour la production |
| `pnpm start` | ▶️ Lance l'application compilée |
| `pnpm lint` | 🔍 Vérifie la qualité du code |

---

## 🌙 Thèmes

Le portfolio inclut un **système de thèmes automatique** :

- 🌅 **Mode clair** - Design épuré et moderne
- 🌙 **Mode sombre** - Confort visuel pour les sessions prolongées
- 🔄 **Détection automatique** du préférence système
- 💾 **Sauvegarde** des préférences utilisateur

---

## 📱 Responsive Design

### 📐 Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|---------|
| 📱 Mobile | `< 768px` | Navigation mobile, colonnes simples |
| 💻 Tablet | `768px - 1024px` | Grille adaptée, navigation hybride |
| 🖥️ Desktop | `> 1024px` | Grille complète, tous les éléments |

### ✨ Fonctionnalités Mobile

- **Navigation drawer** coulissante
- **Touch gestures** optimisées  
- **Images optimisées** avec lazy loading
- **Performance** optimisée pour 3G/4G

---

## 🤝 Contribution

Nous accueillons les contributions ! 🎉

### 📝 Comment Contribuer

1. **Fork** le projet
2. **Créez** une branche feature (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** sur la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

### 💖 Fait avec passion

**Si ce projet vous a aidé, n'hésitez pas à lui donner une ⭐ !**

[⬆ Retour au début](#-portfolio-website)

---

*© 2024 - Portfolio Website. Tous droits réservés.*

</div>
EOF
