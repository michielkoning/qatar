<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="$style.link"
      :to="switchLocalePath(locale.code)"
      @click.native="changePage"
    >
      <app-icon :icon="`flag-${locale.code}`" :title="locale.name" />
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
  align-items: center;

  @media (--navigation-md) {
    display: inline-block;
    margin: 0 var(--spacing-xxs);
  }
}

.title {
  box-shadow: 0 1px 0 0 currentColor;
  margin-left: var(--spacing-xs);

  @nest .link:hover &, .link:focus & {
    box-shadow: 0 2px 0 0 currentColor;
  }

  @media (--navigation-md) {
    @mixin sr-only;
  }
}
</style>
