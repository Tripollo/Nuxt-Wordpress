// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  image: {
    domains: ['drevio.local']
  },

  runtimeConfig: {
    // Private (server only)
    wordpressBaseUrl: process.env.WORDPRESS_BASE_URL || 'http://drevio.local/',
    // Public (server and client)
    public: {
      wordpressBaseUrl: process.env.NUXT_PUBLIC_WORDPRESS_BASE_URL || '',
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
