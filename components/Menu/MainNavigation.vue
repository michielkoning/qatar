<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only">
      {{ $t('mainNavigation') }}
    </h2>
    <ul ref="menu">
      <li>
        <nuxt-link id="menu" to="/" @click.native="changePage">
          <span class="title">Home</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/petitie" @click.native="changePage">
          <span class="title">Petitie</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/nieuws" @click.native="changePage">
          <span class="title">Nieuws</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/achtergrond" @click.native="changePage">
          <span class="title"> Achtergrond</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/over-ons" @click.native="changePage">
          <span class="title">Over ons</span>
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
  border-top: 1px dashed var(--color-gray);

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
</style>
