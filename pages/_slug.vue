<template>
  <div>
    <archive-wrapper :image="post.featuredImage">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <post-date :date="post.date" />
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="post.content" />
    </archive-wrapper>
    <section id="posts-title">
      <center-wrapper>
        <h1 id="posts-title" class="posts-title-wrapper">Meer berichten</h1>
      </center-wrapper>
      <posts :not-in="post.databaseId" />
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
        uri: `/wie-zijn-wij/blog/${params.slug}`,
      },
    })

    return {
      post: post.data.post,
    }
  },
}
</script>
