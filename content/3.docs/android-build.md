---
title: Build Android (test & release)
icon: logos:android-icon
toc: true
prevNext: true
---

# Build Android

## Test local (APK)
```bash
flutter build apk --release
# build/app/outputs/flutter-apk/app-release.apk
```

## Signature release
```bash
keytool -genkey -v -keystore ~/my-release-key.jks \
  -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

## Publication (AAB)
```bash
flutter build appbundle --release
# Upload dans Play Console
```