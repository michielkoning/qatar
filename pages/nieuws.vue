<template>
  <div>
    <h1>{{ page.title }}</h1>
    <latest-posts />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: 18,
      },
    })
    return {
      page: page.data.page,
    }
  },
}
</script>
