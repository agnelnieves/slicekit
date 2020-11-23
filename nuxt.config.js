import smConfig from './sm.json'

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)"
  )
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: 'Slicekit, slices library for prismic',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Slicekit is a Simple, Useful & modular Prismic slices to get your project started. Learn more at slicekit.dev',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://slicekit.dev/',
      },
      {
        property: 'twitter:title',
        content: 'Slicekit, slices library for prismic',
      },
      {
        property: 'twitter:description',
        content:
          'Slicekit is a Simple, Useful & modular Prismic slices to get your project started. Learn more at slicekit.dev',
      },
      {
        property: 'twitter:image',
        content:
          'https://images.prismic.io/slicekit/39c554eb-b5a0-4110-b767-544a44c49158_github+repo+image.png?auto=compress,format',
      },
      {
        name: 'title',
        content: 'Slicekit, slices library for prismic',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://slicekit.dev/',
      },
      {
        property: 'og:title',
        content: 'Slicekit, slices library for prismic',
      },
      {
        property: 'og:description',
        content:
          'Slicekit is a Simple, Useful & modular Prismic slices to get your project started. Learn more at slicekit.dev',
      },
      {
        property: 'og:image',
        content:
          'https://images.prismic.io/slicekit/39c554eb-b5a0-4110-b767-544a44c49158_github+repo+image.png?auto=compress,format',
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
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  tailwindcss: {
    config: {
      purge: {
        content: ['slices/**/**.vue'],
      },
    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/prismic',
      {
        endpoint: smConfig.apiEndpoint || '',
        apiOptions: {
          routes: [
            {
              type: 'page',
              path: '/:uid',
            },
          ],
        },
      },
    ],
    ['nuxt-sm'],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },
  storybook: {
    stories: ['~/slices/**/*.stories.js'],
    addons: [
      'storybook-dark-mode/register',
      {
        name: '@storybook/addon-essentials',
        options: {
          actions: false,
        },
      },
    ],
  },
  ignore: ['**/*.stories.js'],
}
