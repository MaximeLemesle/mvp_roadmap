export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "mvp_roadmap",
      description:
        "A Flutter roadmap to help you build your MVP with the best practices and tools available in the Flutter ecosystem.",
    },
    theme: {
      customizable: false,
      color: "zinc",
      radius: 0.5,
    },
    header: {
      title: "mvp_roadmap",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "https://cdn.inspira-ui.com/logo.svg",
        dark: "https://cdn.inspira-ui.com/logo-dark.svg",
      },
      nav: [
        {
          title: "Getting started",
          links: [
            {
              title: "Introduction",
              to: "/",
              description: "Présentation du projet et de la documentation.",
            },
            {
              title: "Installation",
              to: "/getting-started/installation",
              description: "Installe les dépendances et lance la doc.",
            },
            {
              title: "Planning & Scoping",
              to: "/getting-started/planning",
              description: "Définis le périmètre MVP et les objectifs.",
            },
          ],
        },
        {
          title: "Roadmap",
          links: [
            {
              title: "Semaine 1 — Cadrage & Design",
              to: "/roadmap/week-1",
              description:
                "J1–J6 : cadrage, setup Flutter/Firebase, design rapide.",
            },
            {
              title: "Semaine 2 — Feature principale",
              to: "/roadmap/week-2",
              description: "J7–J14 : UI + logique, Firestore, démo.",
            },
            {
              title: "Semaine 3 — 2e feature / Intégration",
              to: "/roadmap/week-3",
              description:
                "J15–J21 : petite 2e feature ou polish, intégration.",
            },
            {
              title: "Semaine 4 — QA & Publication",
              to: "/roadmap/week-4",
              description:
                "J22–J30 : QA, RC, builds Android/iOS, soumission stores.",
            },
          ],
        },
        {
          title: "Docs",
          links: [
            {
              title: "Intégrer Firebase",
              to: "/docs/firebase",
              description: "Guides Auth/Firestore + configuration iOS/Android.",
            },
            {
              title: "Build Android",
              to: "/docs/android-build",
              description: "APK test, signature, AAB release.",
            },
            {
              title: "Build iOS",
              to: "/docs/ios-build",
              description: "Archive Xcode, TestFlight, soumission App Store.",
            },
          ],
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: true,
      collapseLevel: 1,
      folderStyle: "default",
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      padded: true,
      codeCopyToast: true,
    },
  },
});
