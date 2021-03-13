import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'

export default ({ app }) => {
  console.log(app)
  Vue.use(
    VueAnnouncer,
    {
      complementRoute: 'is geladen',
    },
    app.router
  )
}
