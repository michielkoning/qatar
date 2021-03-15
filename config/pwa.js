import { title, categories, twitter, themeColor } from './../data/details'

// PWA module configuration: https://go.nuxtjs.dev/pwa
export default {
  manifest: {
    lang: 'nl',
    name: title,
    shortName: title,
    categories,
    orientation: 'portrait-primary',
  },
  meta: {
    twitterSite: twitter,
    twitterCreator: twitter,
    twitterCard: 'summary_large_image',
    theme_color: themeColor,
    mobileApp: true,
    mobileAppIOS: true,
    appleStatusBarStyle: 'black-translucent',
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
}
