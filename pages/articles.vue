<template>
  <app-page :page="page">
    <articles-list :articles="articles.edges" />
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import ArticlesQuery from '~/graphql/Articles.gql'
import getSeoMetaData from '~/utils/seo'
import { pageIdArticles } from '~/data/pages'

export default {
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pageIdArticles,
      },
    })
    const articles = await app.apolloProvider.defaultClient.query({
      query: ArticlesQuery,
    })
    return {
      page: page.data.page,
      articles: articles.data.articles,
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
  nuxtI18n: {
    paths: {
      nl: '/artikelen',
    },
  },
}
</script>
