<template>
  <div class="wrapper">
    <div v-if="image" class="image-wrapper">
      <image-archive :image="image" />
    </div>

    <div class="text">
      <h2 class="title">
        <slot name="title" />
      </h2>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  margin-bottom: 2em;
  @media (--viewport-sm) {
    display: flex;
  }
}

.title {
  flex: 0 0 100%;
}

.image-wrapper {
  flex: 0 0 33%;
  margin-bottom: var(--spacing-m);
  max-width: 20em;

  @media (--viewport-sm) {
    max-width: none;
    padding-right: var(--gutter);
  }
}

.text {
  flex: 0 0 66%;
}

.image {
  display: block;
  width: 100%;
  border: 5px var(--color-white) solid;
  box-shadow: 0 0 3px #999;
  @media (--viewport-sm) {
    margin: 0 auto;
  }
}
</style>
