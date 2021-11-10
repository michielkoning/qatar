<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="$style.link"
      :to="switchLocalePath(locale.code)"
      @click.native="changePage"
    >
      <app-icon :icon="`flag-${locale.code}`" />
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
import EventBusUtil from '~/utils/eventBusUtil'

export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    changePage() {
      if (!this.isSmallScreen) return
      EventBusUtil.$emit('header-close-mobile-menu')
    },
    isSmallScreen() {
      return window.innerWidth < 768
    },
  },
}
</script>

<style lang="postcss" module>
.link {
  @mixin link-reset;

  margin-bottom: var(--spacing-xxs);
  display: flex;
  gap: 0.5em;
  align-items: center;
}
</style>
