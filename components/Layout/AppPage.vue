<template>
  <center-wrapper v-if="page">
    <article class="article">
      <h1>{{ page.title }}</h1>
      <div v-html="page.content" />
    </article>
  </center-wrapper>
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
