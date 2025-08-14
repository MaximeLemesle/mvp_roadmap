---
title: Intégrer Firebase (Flutter)
icon: logos:firebase
toc: true
prevNext: true
---

# Intégrer Firebase (Flutter)

## 1) Console
- Créer un projet Firebase.
- Ajouter **Android** & **iOS**.

## 2) Fichiers de config
- iOS : `GoogleService-Info.plist` → `ios/Runner/` (via Xcode).
- Android : `google-services.json` → `android/app/`.

## 3) Dépendances
```bash
flutter pub add firebase_core
flutter pub add firebase_auth
flutter pub add cloud_firestore
```

## 4) Initialisation
```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}
```

## 5) Gradle (Android)
```gradle
// android/build.gradle
buildscript {
  dependencies {
    classpath 'com.google.gms:google-services:4.3.15'
  }
}
// android/app/build.gradle (fin de fichier)
apply plugin: 'com.google.gms.google-services'
````

