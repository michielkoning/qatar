<template>
  <app-page v-if="page" :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdBackground } from '~/data/pages'

export default {
  async asyncData({ app }) {
    const language = app.i18n.locale

    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pageIdBackground[language],
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
  nuxtI18n: {
    paths: {
      nl: '/achtergrond',
      en: '/background',
    },
  },
}
</script>
