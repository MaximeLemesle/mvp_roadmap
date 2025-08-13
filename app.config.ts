export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "mvp_roadmap",
      description:
        "A Flutter roadmap to help you build your MVP with the best practices and tools available in the Flutter ecosystem.",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5,
    },
    banner: {
      enable: true,
      showClose: false,
      content:
        "For Tailwind CSS v3 docs, [**click here**](https://v1.inspira-ui.com).",
      to: "https://v1.inspira-ui.com",
      target: "_blank",
      border: true,
    },
    header: {
      title: "Inspira UI",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "https://cdn.inspira-ui.com/logo.svg",
        dark: "https://cdn.inspira-ui.com/logo-dark.svg",
      },
      nav: [
        {
          title: "nav.Docs",
          links: [
            {
              title: "nav.GettingStarted",
              to: "/getting-started/introduction",
              description: "nav.GettingStartedDescription",
            },
            {
              title: "nav.Installation",
              to: "/getting-started/installation",
              description: "nav.InstallationDescription",
            },
            {
              title: "nav.Components",
              to: "/components",
              description: "nav.ComponentsDescription",
              target: "_self",
            },
            {
              title: "Inspira UI v1",
              to: "https://v1.inspira-ui.com",
              description: "nav.V1DocsDescription",
              target: "_blank",
            },
          ],
        },
        {
          title: "Credits",
          links: [
            {
              title: "Aceternity UI",
              to: "https://ui.aceternity.com/",
              description:
                "For providing the inspiration and permission to adapt the original designs.",
              target: "_blank",
            },
            {
              title: "Magic UI",
              to: "https://magicui.design/",
              description: "For providing the inspiration for designs.",
              target: "_blank",
            },
            {
              title: "shadcn-vue",
              to: "https://www.shadcn-vue.com/",
              description:
                "For the Vue port of shadcn-ui and contributions to some components",
              target: "_blank",
            },
            {
              title: "shadcn-docs-nuxt",
              to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
              description:
                "For the beautifully crafted Nuxt documentation site.",
              target: "_blank",
            },
          ],
        },
        {
          title: "nav.Community",
          links: [
            {
              title: "GitHub",
              to: "https://github.com/unovue/inspira-ui",
              description: "nav.GitHubDescription",
              target: "_blank",
            },
            {
              title: "Discord",
              to: "https://discord.gg/Xbh5DwJRc9",
              description: "nav.DiscordDescription",
              target: "_blank",
            },
            {
              title: "nav.Forum",
              to: "https://github.com/unovue/inspira-ui/discussions",
              target: "_blank",
              description: "nav.ForumDiscord",
            },
          ],
        },
      ],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      folderStyle: "tree",
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      padded: true,
      codeCopyToast: true,
    },
    footer: {
      credits: "Copyright © 2024 - 2025",
      links: [
        {
          icon: "lucide:globe",
          to: "https://rahulv.dev",
          title: "Maintained by rahulv.dev",
          target: "_blank",
        },
        {
          icon: "lucide:github",
          title: "Github",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "toc.title",
      enableInHomepage: true,
      carbonAds: {
        enable: true,
        code: "CW7DEK37",
        placement: "inspira-uicom",
      },
      links: [
        {
          title: "toc.StarOnGitHub",
          icon: "lucide:star",
          to: "https://github.com/unovue/inspira-ui",
          target: "_blank",
        },
        {
          title: "toc.CreateIssues",
          icon: "lucide:circle-dot",
          to: "https://github.com/unovue/inspira-ui/issues",
          target: "_blank",
        },
        {
          title: "toc.Forum",
          icon: "lucide:newspaper",
          to: "https://github.com/unovue/inspira-ui/discussions",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
    },
  },
});
