// Build Configuration: https://go.nuxtjs.dev/config-build
export default {
  postcss: {
    plugins: {
      'postcss-mixins': {
        mixinsDir: './assets/css/mixins/',
      },
      'postcss-preset-env': {
        importFrom: ['./assets/css/media-queries/media-queries.css'],

        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          'media-query-ranges': true,
        },
      },
    },
  },
}
