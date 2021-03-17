<template>
  <ul v-if="articles.length">
    <articles-list-item
      v-for="article in articles"
      :key="article.node.id"
      :article="article.node"
    />
  </ul>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;

  margin-bottom: 3em;
}
</style>
