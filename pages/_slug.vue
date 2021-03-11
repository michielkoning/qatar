<template>
  <div>
    <app-page :page="post" />
    <section id="posts-title">
      <h1 id="posts-title" class="posts-title-wrapper">Meer berichten</h1>
      <latest-posts :not-in="post.databaseId" />
    </section>
  </div>
</template>

<script>
import PostQuery from '~/graphql/Post.gql'

export default {
  async asyncData({ app, params }) {
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.slug,
      },
    })

    return {
      post: post.data.post,
    }
  },
}
</script>
