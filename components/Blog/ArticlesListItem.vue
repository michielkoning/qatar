<template>
  <li>
    <!-- eslint-disable-next-line -->
    <a :href="article.articleSourceGroup.url" rel="noopener" target="_blank">
      {{ article.title }}
    </a>
    <div class="meta"><app-date :date="article.date" />, {{ source }}</div>
  </li>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    source() {
      if (!this.article.articleSourceGroup.url) return ''
      const { hostname } = new URL(this.article.articleSourceGroup.url)
      return hostname.replace('www.', '')
    },
  },
}
</script>

<style lang="postcss" scoped>
li {
  padding: 0 0 0.5em;
}

.meta {
  font-size: var(--font-size-sm);
}
</style>
