<template>
  <div class="wrapper">
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
        <form-field
          id="name"
          :error-message="errorMessageName"
          :title="$t('form.name')"
        >
          <input
            id="name"
            v-model.trim.lazy="$v.form.name.$model"
            name="name"
            type="text"
            maxlength="255"
          />
        </form-field>
        <form-field
          id="email"
          :error-message="errorMessageEmail"
          :title="$t('form.email')"
        >
          <input
            id="email"
            v-model.trim.lazy="$v.form.email.$model"
            name="email"
            type="email"
            maxlength="255"
          />
        </form-field>
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
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
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
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    errorMessageName() {
      if (this.$v.form.name.$anyError) {
        if (!this.$v.form.name.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.name').toLowerCase(),
          })
        }
      }
      return null
    },
    errorMessageEmail() {
      if (this.$v.form.email.$anyError) {
        if (!this.$v.form.email.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.email').toLowerCase(),
          })
        }

        if (!this.$v.form.email.email) return this.$t('form.error.email.email')
      }
      return null
    },
  },
  methods: {
    encodeFormData(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    validate() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    async submit() {
      this.errorMessageForm = ''
      if (this.validate()) {
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        try {
          await this.$axios.$post(
            '/',
            this.encodeFormData({
              'form-name': 'contact',
              ...this.form,
            }),
            axiosConfig
          )
          this.submitted = true
        } catch (error) {}
      }
    },
  },
}
</script>

<style lang="postcss" module>
.bot-field {
  display: none;
}
</style>
