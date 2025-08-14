---
title: Installation
description: Pré-requis et mise en route du projet docs (Nuxt) et du projet Flutter.
icon: lucide:download
toc: true
aside: true
prevNext: true
breadcrumb: true
---

# Installation

## Pré-requis

- **Node LTS** (≥ 18) • **pnpm / npm / yarn**
- **Flutter** (canal stable) • **Xcode** (iOS) • **Android SDK**
- **Firebase CLI** (pour l’intégration)

## Lancer la doc (Nuxt + shadcn-docs)

```bash
npm i
npm run dev
```
> shadcn-docs-nuxt s’appuie sur Nuxt Content ; les pages sont servies depuis content/. Consulte Getting started / Installation et API / Configuration pour les options de thème (header/aside/main).  ￼

## Projet Flutter (squelette)

```bash
flutter create mvp_app
cd mvp_app
git init
```

Ensuite, voir Docs → Firebase pour la configuration backend minimale.
