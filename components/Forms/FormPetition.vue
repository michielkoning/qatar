<template>
  <div class="wrapper">
    <h2>Onderteken deze petitie</h2>
    <p v-if="submitted">
      Het verzenden van het formulier is gelukt. Je ontvangt nu een e-mail om je
      e-mailadres te bevestigen.
    </p>
    <form
      v-else
      action
      method="post"
      novalidate
      class="form"
      @submit.prevent="submit"
    >
      <form-fieldset title="Petitie">
        <form-field
          id="firstName"
          :error-message="errorMessageFirstName"
          :title="$t('form.firstName')"
        >
          <input
            id="firstName"
            v-model.trim.lazy="$v.form.firstName.$model"
            name="firstName"
            type="text"
            maxlength="255"
          />
        </form-field>
        <form-field
          id="lastName"
          :error-message="errorMessageLastName"
          :title="$t('form.lastName')"
        >
          <input
            id="lastName"
            v-model.trim.lazy="$v.form.lastName.$model"
            name="lastName"
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
      <p v-if="errorMessageForm">{{ errorMessageForm }}</p>
      <app-button type="submit">Ik onderteken deze petitie</app-button>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      submitted: false,
      loading: false,
      errorMessageForm: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
      },
    }
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    errorMessageFirstName() {
      if (this.$v.form.firstName.$anyError) {
        if (!this.$v.form.firstName.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.firstName').toLowerCase(),
          })
        }
      }
      return null
    },
    errorMessageLastName() {
      if (this.$v.form.lastName.$anyError) {
        if (!this.$v.form.lastName.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.lastName').toLowerCase(),
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
    validate() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    async submit() {
      this.errorMessageForm = null

      if (!this.validate()) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      try {
        const response = await this.$axios.$post(
          'https://subscribe.cancelqatar.nl',
          {
            ...this.form,
          }
        )
        if (!response) {
          this.submitted = true
        } else {
          this.errorMessageForm = 'Er ging iets mis bij het aanmelden'
        }
      } catch (error) {
        this.errorMessageForm = error
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped lang="postcss">
.wrapper {
  margin-top: 2em;
}

.form {
  max-width: 30em;
}
</style>
