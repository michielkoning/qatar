<template>
  <div class="wrapper">
    <center-wrapper>
      <div class="buttons">
        <button
          :aria-expanded="menuIsExpanded ? 'true' : 'false'"
          class="btn"
          @click="toggleMenu(!menuIsExpanded)"
        >
          <app-icon icon="bars" />
          {{ $t('menu') }}
        </button>
      </div>
    </center-wrapper>
  </div>
</template>

<script>
import EventBusUtil from '~/utils/eventBusUtil'

export default {
  data() {
    return {
      menuIsExpanded: false,
    }
  },
  mounted() {
    EventBusUtil.$on('header-close-mobile-menu', () => this.toggleMenu(false))
  },
  methods: {
    toggleMenu(status) {
      this.menuIsExpanded = status
      this.$emit('toggleMenu', status)
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-secondary);
  z-index: var(--mobile-navigation);
  border-bottom: 2px solid var(--color-white);

  @media (--navigation-position-left) {
    display: none;
  }
}

.buttons {
  padding: var(--spacing-s) var(--gutter);
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: var(--spacing-xs) var(--spacing-s) var(--spacing-xs)
    var(--spacing-xs);
  font-size: var(--font-size-sm);
  display: flex;
  align-items: center;

  &:hover {
    background: transparent;
    color: var(--text-color);
  }

  &[aria-expanded='true'] {
    background: var(--color-primary);
    color: var(--color-white);
  }
}

svg {
  margin-right: var(--spacing-xxs);
}
</style>
