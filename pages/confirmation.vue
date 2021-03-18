<template>
  <app-page v-if="page" :page="page">
    <h2>Deel de petitie</h2>
    <div class="quote">{{ text }}</div>
    <social-media-links :twitter="twitterUrl" :facebook="facebookUrl" />
  </app-page>
</template>

<script>
import SocialMediaLinks from '../components/Menu/SocialMediaLinks.vue'
import PageQuery from '~/graphql/Page.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdSubscribeConfirmation } from '~/data/pages'

export default {
  components: { SocialMediaLinks },
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pageIdSubscribeConfirmation,
      },
    })
    return {
      page: page.data.page,
    }
  },
  data() {
    return {
      text: `Ik doe niet mee #nietbeschikaar`,
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },

  computed: {
    link() {
      return this.localePath('petition')
    },
    twitterUrl() {
      return `https://twitter.com/share?text=${this.text}&url=${this.link}`
    },
    facebookUrl() {
      return `https://www.facebook.com/sharer.php?u=${this.link}&p=${this.text}`
    },
  },
  nuxtI18n: {
    paths: {
      nl: '/bevestiging-inschrijving',
    },
  },
}
</script>

<style scoped lang="postcss">
.quote {
  padding: 0.25em 0.75em;
  border-left: 2px solid var(--color-gray-dark);
  margin: 0 0 0.5em;
  font-style: italic;
}
</style>
