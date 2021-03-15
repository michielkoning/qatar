<template>
  <app-page :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdAboutUs } from '~/data/pages'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pageIdAboutUs,
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
      nl: '/over-ons',
    },
  },
}
</script>
