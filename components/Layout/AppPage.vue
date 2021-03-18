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
  margin-bottom: 6em;
  @media (--navigation-position-left) {
    max-width: 40em;
  }
}
</style>
