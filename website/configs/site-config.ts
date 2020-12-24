const baseUrl = "https://github.com/chakra-xui/chakra-xui"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Segun Adebayo. All Rights Reserved.`,
  algolia: {
    apiKey: "df1dcc41f7b8e5d68e73dd56d1e19701",
    indexName: "chakra-xui",
    inputSelector: "#algolia-search",
  },
  author: {
    name: "Segun Adebayo",
    github: "https://github.com/segunadebayo",
    twitter: "https://twitter.com/thesegunadebayo",
    linkedin: "https://linkedin.com/in/thesegunadebayo",
    email: "sage@adebayosegun.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`,
  },
  openCollective: {
    url: "https://opencollective.com/chakra-xui",
  },
  discord: {
    url: "https://discord.gg/dQHfcWF",
  },
  seo: {
    title: "Chakra xui",
    titleTemplate: "%s - Chakra xui",
    description:
      "Simple, Modular and Accessible UI Components for your React Applications.",
    siteUrl: "https://chakra-xui.com",
    twitter: {
      handle: "@chakra-xui",
      site: "@chakra-xui",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://chakra-xui.com",
      title: "Chakra xui",
      description:
        "Simple, Modular and Accessible UI Components for your React Applications.",
      site_name:
        "Chakra xui: Simple, Modular and Accessible UI Components for your React Applications.",
      images: [
        {
          url: "/og-image.png",
          width: 1240,
          height: 480,
          alt:
            "Chakra xui: Simple, Modular and Accessible UI Components for your React Applications.",
        },
        {
          url: "/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt:
            "Chakra xui: Simple, Modular and Accessible UI Components for your React Applications.",
        },
      ],
    },
  },
}

export default siteConfig
