<template>
  <app-page :page="page">
    <form-petition />
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: 15,
      },
    })
    return {
      page: page.data.page,
    }
  },
}
</script>
