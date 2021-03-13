<template>
  <div>
    <app-page :page="post" />
    <section id="posts-title">
      <h1 id="posts-title" class="posts-title-wrapper">Meer berichten</h1>
      <latest-posts :posts="posts.edges" />
    </section>
  </div>
</template>

<script>
import PostQuery from '~/graphql/Post.gql'
import PostsQuery from '~/graphql/Posts.gql'
import getSeoMetaData from '~/utils/seo'

export default {
  async asyncData({ app, params }) {
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.slug,
      },
    })
    const posts = await app.apolloProvider.defaultClient.query({
      query: PostsQuery,
      variables: {
        notIn: post.data.post.databaseId,
      },
    })

    return {
      post: post.data.post,
      posts: posts.data.posts,
    }
  },
  head() {
    return getSeoMetaData(this.post.seo)
  },
}
</script>
