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

<i18n>
{
  "nl": {
    "email": "test"
  }
}
</i18n>
