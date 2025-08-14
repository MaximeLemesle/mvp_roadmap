---
title: Build iOS (TestFlight & App Store)
icon: logos:apple
toc: true
prevNext: true
---

# Build iOS

## Pré-requis
- Compte **Apple Developer**
- App créée dans **App Store Connect**

## Build/Archive
- Cible « Any iOS Device », puis **Product → Archive** (Xcode).
- **Distribute** → App Store Connect → Upload (TestFlight).

## Ligne de commande (option)
```bash
flutter build ipa --release
```

## Soumission
- Dans App Store Connect : captures, metadata, puis Submit for Review.
