<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only">
      {{ $t('mainNavigation') }}
    </h2>
    <ul ref="menu">
      <li>
        <nuxt-link
          id="menu"
          :to="localePath('home')"
          @click.native="changePage"
        >
          <span class="title">{{ $t('menuItems.home') }}</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('petition')" @click.native="changePage">
          <span class="title">{{ $t('menuItems.petition') }}</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          v-if="$i18n.locale === 'nl'"
          :to="localePath('articles')"
          @click.native="changePage"
        >
          <span class="title">{{ $t('menuItems.articles') }}</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('background')" @click.native="changePage">
          <span class="title">{{ $t('menuItems.background') }}</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('aboutUs')" @click.native="changePage">
          <span class="title">{{ $t('menuItems.aboutUs') }}</span>
        </nuxt-link>
      </li>
      <li v-for="locale in availableLocales" :key="locale.code">
        <nuxt-link
          :to="switchLocalePath(locale.code)"
          class="language-link"
          @click.native="changePage"
        >
          {{ locale.name }}
          <app-icon :icon="`flag-${locale.code}`" class="flag" />
        </nuxt-link>
      </li>
    </ul>
    <div
      :style="{ '-webkit-transform': arrowPosition, transform: arrowPosition }"
      class="arrow"
    />
  </nav>
</template>

<script>
import EventBusUtil from '~/utils/eventBusUtil'

export default {
  data() {
    return {
      arrowPosition: 0,
    }
  },
  computed: {
    step() {
      return this.$store.state.step
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.setArrowPosition()
      })
    },
  },
  mounted() {
    this.setArrowPosition()
    setTimeout(() => {
      this.mounted = true
    }, 0)
  },
  methods: {
    setArrowPosition() {
      const { menu } = this.$refs
      const activeLink = menu.querySelector('.nuxt-link-exact-active')
      if (activeLink) {
        const { parentElement } = activeLink
        this.arrowPosition = `translateY(${parentElement.offsetTop}px)`
        this.arrowWidth = `${activeLink.offsetWidth}px`
      }
    },
    changePage() {
      EventBusUtil.$emit('header-close-mobile-menu')
    },
  },
}
</script>

<style lang="postcss" scoped>
nav {
  position: relative;
}

ul {
  @mixin list-reset;

  margin-bottom: var(--spacing-m);
  border-top: 1px dashed var(--color-black);

  @media (--navigation-position-left) {
    border-top: 0;
  }
}

.title {
  transition: box-shadow 0.1s ease-out;

  &.link-active {
    box-shadow: 0 2px 0 0 var(--color-primary);
  }
}

a {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  font-size: var(--font-size-lg);
  line-height: 1.1;
  padding: 0.45em 0;
  border-bottom: 1px dashed var(--color-black);

  &.nuxt-link-exact-active .title {
    box-shadow: 0 3px 0 0 var(--color-primary);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    & .title {
      box-shadow: 0 2px 0 0 var(--color-primary);
    }
  }

  @media (--navigation-position-left) {
    border-bottom: 0;
    padding: var(--spacing-xxs) 0;
  }
}

.arrow {
  @media (--navigation-position-left) {
    display: block;
    position: absolute;
    top: 0;
    right: calc(var(--spacing-l) * -1);
    transition: transform 0.2s ease-out;

    &::after {
      position: absolute;
      display: block;
      content: '';
      border-top: var(--spacing-s) solid transparent;
      border-bottom: var(--spacing-s) solid transparent;
      border-left: var(--spacing-m) solid var(--color-secondary);
    }

    &::before {
      position: absolute;
      display: block;
      content: '';
      margin-top: -2px;
      border-top: calc(var(--spacing-s) + 2px) solid transparent;
      border-bottom: calc(var(--spacing-s) + 2px) solid transparent;
      border-left: calc(var(--spacing-m) + 4px) solid var(--color-black);
    }
  }
}

.language-link {
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.25em;
}

.flag {
  transform: translateY(0.1em);
}
</style>
