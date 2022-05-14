import { defineNuxtConfig } from "nuxt";

const SITE_NAME = "SSSAPI Webhook Example(GitHub Actions)";
const SITE_URL = "https://sssapi.github.io/example-webhook-github-nuxt3";
const COPYRIGHT = "Memory Lovers, LLC.";
const TWITTER_ID = "@sssapi_app";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",

  modules: [
    // Doc: https://tailwindcss.nuxtjs.org
    "@nuxtjs/tailwindcss",
  ],

  build: {
    transpile: ["mdi-vue"],
  },

  app: {
    // baseURL: "/example-webhook-github-nuxt3",
    cdnURL: SITE_URL,
    head: {
      title: SITE_NAME,
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: COPYRIGHT },
        { name: "copyright", content: COPYRIGHT },
        {
          name: "format-detection",
          content: "telephone=no,email=no,address=no",
        },

        // For SEO
        {
          hid: "description",
          name: "description",
          content: SITE_NAME,
        },
        {
          name: "application-name",
          content: SITE_NAME,
        },

        // For Android Chrome: Tab Color
        { name: "theme-color", content: "#FFFFFF" },
        // For Window8/10: Shortcut Icon
        { name: "msapplication-config", content: "/browserconfig.xml" },
        { name: "msapplication-TileColor", content: "#FFFFFF" },

        // Twitter Card
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:site", name: "twitter:site", content: TWITTER_ID },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: TWITTER_ID,
        },

        // For OGP / Social Meta Tag
        {
          hid: "og:type",
          property: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          property: "og:title",
          name: "og:title",
          content: SITE_NAME,
        },
        {
          hid: "og:description",
          property: "og:description",
          name: "og:description",
          content: SITE_NAME,
        },
        {
          hid: "og:url",
          property: "og:url",
          name: "og:url",
          content: SITE_URL,
        },
        {
          hid: "og:image",
          property: "og:image",
          name: "og:image",
          content: `${SITE_URL}/ogp.png`,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          name: "og:site_name",
          content: SITE_NAME,
        },
      ],
      link: [
        // Favicon
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${SITE_URL}/favicon-32x32.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${SITE_URL}/favicon-16x16.png`,
        },
        // Favicon: iPhone/iPad
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: `${SITE_URL}/apple-touch-icon.png`,
        },
        // Favicon: Safari
        {
          rel: "mask-icon",
          href: `${SITE_URL}/safari-pinned-tab.svg`,
          color: "#cb9ed9",
        },
      ],
    },
  },
});
