<template>
  <app-page :page="page">
    <ul v-if="page.argumentsGroup.arguments.length" class="list">
      <li
        v-for="argument in page.argumentsGroup.arguments"
        :key="argument.title"
      >
        <h2>{{ argument.title }}</h2>
        <p>{{ argument.text }}</p>
      </li>
    </ul>
    <app-button to="/petitie">Teken de petitie</app-button>
  </app-page>
</template>

<script>
import HomeQuery from '~/graphql/Home.gql'
import getSeoMetaData from '~/utils/seo'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: HomeQuery,
      variables: {
        pageId: 13,
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

<style scoped lang="postcss">
li {
  margin-bottom: 2em;
}

.list {
  @mixin list-reset;

  margin-bottom: 4em;
}
</style>
