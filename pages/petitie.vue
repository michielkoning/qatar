<template>
  <div class="container">
    <form-fieldset title="Petitie">
      <form-input-text id="name" v-model="name" title="Naam" />
      <form-input-text id="email" v-model="email" title="E-mailadres" />
    </form-fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
}
</script>
