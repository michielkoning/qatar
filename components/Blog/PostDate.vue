<template>
  <time :datetime="date | datetime">{{ date }}</time>
</template>

<script>
export default {
  filters: {
    datetime(value) {
      const date = new Date(value)
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
  },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
}
</script>
