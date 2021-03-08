<template>
  <p v-if="submitted">
    Het formulier is verzonden. We nemen zo spoedig mogelijk contact met u op.
  </p>
  <form
    v-else
    action
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="post"
    name="petition"
    @submit.prevent="submit"
  >
    <input type="hidden" name="form-name" value="petition" />
    <form-fieldset title="Petitie">
      <form-input-text id="name" v-model="form.name" title="Naam" />
      <form-input-text
        id="email"
        v-model="form.email"
        type="email"
        title="E-mailadres"
      />
    </form-fieldset>
    <form-input-text
      id="bot-field"
      v-model="form.botField"
      title="Vul dit niet in als je mens bent"
      :class="$style['bot-field']"
      name="bot-field"
    />
    <app-button type="submit">Verzenden</app-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        botField: '',
      },
    }
  },
  methods: {
    async submit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      try {
        await this.$axios.$post(
          '/',
          this.encodeFormData({
            'form-name': 'petition',
            ...this.form,
          }),
          axiosConfig
        )
        this.submitted = true
      } catch (error) {}
    },
  },
}
</script>

<style lang="postcss" module>
.bot-field {
  display: none;
}
</style>
