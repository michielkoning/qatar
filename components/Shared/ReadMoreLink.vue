<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component :is="tag" :to="to" class="read-more">
    {{ $t('readMore') }}
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  computed: {
    tag() {
      if (this.to) {
        return 'nuxt-link'
      }
      return 'span'
    },
  },
}
</script>
