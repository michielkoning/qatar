<template>
  <app-page :page="page" />
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.title,
    }
  },

  computed: {
    title() {
      if (this.error.statusCode === 404) {
        return this.$t('title404')
      }
      return this.$t('title500')
    },
    page() {
      return {
        title: this.title,
        content: this.error.message,
      }
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title404": "Pagina niet gevonden",
    "title500": "Er is een fout opgetreden"
  }
}
</i18n>
