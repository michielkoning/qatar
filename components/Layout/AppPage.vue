<template>
  <center-wrapper v-if="page">
    <h1>{{ page.title }}</h1>
    <div v-html="page.content" />
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
