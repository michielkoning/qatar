// Global page headers: https://go.nuxtjs.dev/config-head
import { title, facebook } from './../data/details'

export default {
  title,
  meta: [
    {
      hid: 'og:publisher',
      name: 'og:publisher',
      content: facebook,
    },
  ],
}
