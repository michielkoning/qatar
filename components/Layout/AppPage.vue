<template>
  <article class="article">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content" />
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.article {
  max-width: 30em;
  margin-bottom: 3em;
}
</style>
