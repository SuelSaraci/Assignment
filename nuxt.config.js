export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'assignment',

    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      { src: '//googletagmanager.com/gtag/js?id=G-41DBW5E8M1' },
      { src: 'https://www.googleoptimize.com/optimize.js?id=OPT-THPHV8G' },
      {
        innerHTML: `
        window.dataLayer = window.dataLayer || []
        function gtag(){ dataLayer.push(arguments) }
        gtag('js', new Date())
        gtag('config', 'G-41DBW5E8M1')
        `,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gtm'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ['@nuxtjs/axios', '@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-TN945TS',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
