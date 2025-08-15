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
        light: "/roadmap-icon.svg",
        dark: "/roadmap-icon-light.svg",
      },
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
    search: {
      enabled: false,
    },
  },
});
