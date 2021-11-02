import { baseUrl } from './../data/details'

const dateTimeFormats = {
  short: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  day: {
    weekday: 'short',
  },
}

export default {
  defaultLocale: 'nl',
  fallbackLocale: 'nl',
  rootRedirect: 'nl',
  baseUrl,
  seo: false,
  lazy: true,
  strategy: 'prefix',
  langDir: 'locales/',
  locales: [
    {
      name: 'Nederlands',
      code: 'nl',
      iso: 'nl',
      file: 'nl.json',
    },
    {
      name: 'English',
      code: 'en',
      iso: 'en',
      file: 'en.json',
    },
  ],
  vueI18nLoader: true,
  vueI18n: {
    silentFallbackWarn: true,
    dateTimeFormats: {
      nl: {
        short: dateTimeFormats.short,
        day: dateTimeFormats.day,
      },
      en: {
        short: dateTimeFormats.short,
        day: dateTimeFormats.day,
      },
    },
  },
}
