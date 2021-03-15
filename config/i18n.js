export default {
  defaultLocale: 'nl',
  lazy: true,
  seo: false,
  langDir: 'locales/',
  baseUrl: 'https://cancelqatar.netlify.app',
  locales: [
    {
      name: 'Nederlands',
      code: 'nl',
      iso: 'nl-NL',
      file: 'nl.json',
    },
  ],
  vueI18nLoader: true,
  vueI18n: {
    dateTimeFormats: {
      nl: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      },
    },
  },
}
