<template>
  <svg-icon :name="icon" :class="$style.icon" width="24" height="24" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style module lang="postcss">
.icon {
  display: inline-block;
  fill: currentColor;
  position: relative;
  width: 1em;
  height: 1em;
}
</style>
