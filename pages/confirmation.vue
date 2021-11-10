<template>
  <app-page v-if="page" :page="page">
    <h2>{{ $t('sharePetition.title') }}</h2>
    <div class="quote">{{ text }}</div>
    <social-media-links :twitter="twitterUrl" :facebook="facebookUrl" />
  </app-page>
</template>

<script>
import SocialMediaLinks from '../components/Menu/SocialMediaLinks.vue'
import PageQuery from '~/graphql/Page.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdSubscribeConfirmation } from '~/data/pages'
import { baseUrl } from '~/data/details'
export default {
  components: { SocialMediaLinks },
  async asyncData({ app }) {
    const language = app.i18n.locale

    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pageIdSubscribeConfirmation[language],
      },
    })
    return {
      page: page.data.page,
    }
  },
  data() {
    return {
      text: this.$t('sharePetition.text'),
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },

  computed: {
    link() {
      return `${baseUrl}${this.localePath('petition')}`
    },
    twitterUrl() {
      return `https://twitter.com/share?text=${encodeURIComponent(
        this.text
      )}&url=${encodeURIComponent(this.link)}`
    },
    facebookUrl() {
      return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
        this.link
      )}&p=${encodeURIComponent(this.text)}`
    },
  },
  nuxtI18n: {
    paths: {
      nl: '/bevestiging-inschrijving',
      en: '/registration-confirmation',
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
