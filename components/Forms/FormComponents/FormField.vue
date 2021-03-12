<template>
  <div class="field">
    <label :for="id" class="label">{{ title }}</label>
    <slot />
    <error-message :error-message="errorMessage" />
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
    errorMessage: {
      type: String,
      default: '',
    },
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
