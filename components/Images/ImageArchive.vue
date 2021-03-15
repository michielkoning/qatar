<template>
  <lazy-loading-image
    v-if="imageArchive"
    :src="imageArchive.archive"
    :alt="imageArchive.altText"
    :srcset="`${imageArchive.archive} 1x, ${imageArchive.archive2x} 2x`"
    class="image"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageArchive() {
      if (this.image.node) {
        return this.image.node
      }
      return this.image
    },
  },
}
</script>
