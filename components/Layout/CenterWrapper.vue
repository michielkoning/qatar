<template>
  <div :class="$style.notch">
    <div :class="[$style['wrapper'], $style['wrapper-' + size]]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'xlg',
    },
  },
}
</script>

<style lang="postcss" module>
.notch {
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
}

.wrapper {
  width: 100%;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  margin: 0 auto;
}

.wrapper-xlg {
  max-width: var(--container-width-xlg);
}

.wrapper-lg {
  max-width: var(--container-width-lg);
}

.wrapper-md {
  max-width: var(--container-width-md);
}
</style>
