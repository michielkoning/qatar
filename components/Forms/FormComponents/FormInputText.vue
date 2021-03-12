<template>
  <form-field :id="id" :errors="errors" :title="title" class="field">
    <input
      :id="id"
      v-bind="$attrs"
      :value="value"
      :type="type"
      class="input"
      :maxlength="maxlength"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
  </form-field>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      required: true,
    },
    maxlength: {
      type: Number,
      default: 250,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="postcss">
.input {
  appearance: none;
  color: var(--color-black);
  border: 2px solid var(--color-black);
  background: var(--color-secondary);
  width: 100%;
  height: auto;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.15s ease-out;
  transition: background-color 0.1s ease-out;

  &:disabled {
    background-color: var(--color-gray-lighterest);
    color: var(--color-gray-lighter);
  }

  &.has-error {
    border-color: var(--color-danger);
  }

  &:focus {
    /* border-color: var(--color-gray-light); */
    outline: none;
  }

  &:read-only {
    cursor: default;
    pointer-events: none;
  }

  &::placeholder {
    color: var(--color-gray-dark);
  }
}
</style>
