import eslintFriendlyFormatter from 'eslint-friendly-formatter';

const fs = require('fs');

const envName = fs.existsSync('.env') ? '.env' : '.env.example';

require('dotenv').config({
  path: envName,
});

export default {
  mode: 'universal',

  server: {
    port: process.env.SERVER_PORT,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/fonts.scss',
    '@/assets/scss/global.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Doc: https://github.com/AlexandreBonaventure/vue-mq
    '@/plugins/device-detect',
    '@/plugins/generalComponents',
    // Doc: https://element.eleme.io/#/en-US/
    '@/plugins/element-ui',
    // Doc: https://github.com/jonathantneal/svg4everybody
    {
      src: '@/plugins/svg4everybody',
      ssr: false,
    },
    // Doc: https://github.com/aFarkas/lazysizes
    {
      src: '@/plugins/vue-lazysizes',
      ssr: false,
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: Дмитрий Куликов :)
    '~/modules/imageWebPConvert.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/fukuiretu/nuxt-user-agent#readme
    'nuxt-user-agent',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://www.npmjs.com/package/@nuxtjs/svg-sprite
    '@nuxtjs/svg-sprite',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/component-cache
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60,
    }],
  ],
  /*
   ** Styles for each component
   **
   ** Эти стили будут добавляться в каждый компонент
  */
  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/mixins.scss',
    ],
  },
  /*
  **  Конфигурация Dotenv
  */
  dotenv: {},
  /*
  ** Конфигурация PWA
  */
  pwa: {
    workbox: {},
    meta: {
      theme_color: '#000000',
      lang: 'ru',
      nativeUI: true,
    },
    icon: {},
    manifest: {
      name: 'name',
      lang: 'ru',
      display: 'standalone',
    },
  },
  /*
  ** Конфигурация SVG
  */
  svgSprite: {
    input: '~/assets/ico',
    output: '~/assets/ico/gen',
  },
  /*
  ** Ax  ios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.baseURL,
    proxy: true,
  },
  /*
  ** as proxy configuration
  */
  proxy: {
    '/api': {
      target: process.env.PROXY_API_TARGET,
      auth: process.env.PROXY_API_AUTH,
    },
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            formatter: eslintFriendlyFormatter,
          },
        });
      }
    },
  },
};
