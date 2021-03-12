<template>
  <fieldset class="fieldset">
    <legend class="sr-only">{{ title }}</legend>
    <div class="fields">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.fields {
  margin: 0;
  border: 0;
  display: grid;
  grid-gap: 1em;
  margin-bottom: 1.5em;
}

.fieldset {
  border: 0;
  padding: 0;
}
</style>
