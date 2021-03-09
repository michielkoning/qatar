<template>
  <div class="field">
    <label :for="id" class="label">{{ title }}</label>
    <slot />
    <span aria-live="assertive">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { errorMessage: '' }
  },
}
</script>

<style scoped lang="postcss">
.label {
  display: block;
  margin-bottom: var(--spacing-xxs);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
</style>
