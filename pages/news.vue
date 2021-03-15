<template>
  <div>
    <h1>{{ page.title }}</h1>
    <latest-posts :posts="posts.edges" />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import PostsQuery from '~/graphql/Posts.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdNews } from '~/data/pages'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pageIdNews,
      },
    })
    const posts = await app.apolloProvider.defaultClient.query({
      query: PostsQuery,
    })
    return {
      page: page.data.page,
      posts: posts.data.posts,
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
  nuxtI18n: {
    paths: {
      nl: '/nieuws',
    },
  },
}
</script>
