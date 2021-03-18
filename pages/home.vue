<template>
  <app-page :page="page">
    <ol v-if="page.argumentsGroup.arguments.length" class="list">
      <li
        v-for="argument in page.argumentsGroup.arguments"
        :key="argument.title"
      >
        <h2>{{ argument.title }}</h2>
        <p>{{ argument.text }}</p>
      </li>
    </ol>
    <app-button to="/petitie">Teken de petitie</app-button>
  </app-page>
</template>

<script>
import HomeQuery from '~/graphql/Home.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdHome } from '~/data/pages'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: HomeQuery,
      variables: {
        pageId: pageIdHome,
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
      nl: '/',
    },
  },
}
</script>

<style scoped lang="postcss">
li {
  padding: 0 0 2em 2em;
  position: relative;

  &::before {
    position: absolute;
    font-size: 2em;
    left: 0;
    font-weight: 300;
    font-family: Georgia, Times, Times New Roman, serif;
    top: 0;
    line-height: 1;
    counter-increment: list;
    opacity: 0.5;
    content: counter(list) '.';
  }
}

.list {
  @mixin list-reset;

  counter-reset: list;
  margin: 0 0 2em;
}
</style>
