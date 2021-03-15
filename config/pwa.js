import { title, categories, twitter, themeColor } from './../data/details'

// PWA module configuration: https://go.nuxtjs.dev/pwa
export default {
  manifest: {
    background_color: themeColor,
    categories,
    lang: 'nl',
    name: title,
    orientation: 'portrait-primary',
    short_name: title,
  },
  meta: {
    appleStatusBarStyle: 'black-translucent',
    mobileApp: true,
    mobileAppIOS: true,
    theme_color: themeColor,
    twitterCard: 'summary_large_image',
    twitterCreator: twitter,
    twitterSite: twitter,
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
}
