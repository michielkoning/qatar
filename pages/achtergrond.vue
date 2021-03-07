<template>
  <app-page v-if="page" :page="page" />
</template>

<script>
import PageQuery from '~/graphql/Page.gql'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: 2298,
      },
    })
    return {
      page: page.data.page,
    }
  },
}
</script>
