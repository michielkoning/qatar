<template>
  <ul v-if="posts.length">
    <app-post v-for="post in posts" :key="post.node.id" :post="post.node" />
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;

  display: grid;
  grid-gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
}
</style>
