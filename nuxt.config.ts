// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  alias: {
    "@": "/<srcDir>",
  },
  app: {
    head: {
      title: "learn-Nuxt",
      htmlAttrs: {
        lang: "zh-CN",
      },

      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "author",
          content: "Nuxt 3",
        },
        {
          name: "description",
          content: "Nuxt 3",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
});
