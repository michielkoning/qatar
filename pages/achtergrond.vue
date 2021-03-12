<template>
  <app-page v-if="page" :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import getSeoMetaData from '~/utils/seo'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: 9,
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return getSeoMetaData(this.page, this.$nuxt.$route)
  },
}
</script>
