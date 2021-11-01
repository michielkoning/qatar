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
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: HomeQuery,
      variables: {
        pageId: pageIdHome[language],
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
      en: '/',
    },
  },
}
</script>

<style scoped lang="postcss">
li {
  padding: 0 0 1em 2.5em;
  position: relative;

  &::before {
    position: absolute;
    font-size: 3em;
    left: 0;
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family-headings);
    top: 0;
    line-height: 1;
    counter-increment: list;
    opacity: 0.2;
    content: counter(list);
  }
}

.list {
  @mixin list-reset;

  margin-top: 2em;
  counter-reset: list;
}
</style>
