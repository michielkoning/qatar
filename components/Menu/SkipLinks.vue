<template>
  <div class="skip-links">
    <a href="#content" class="btn">{{ $t('skipLinks.content') }}</a>
    <a href="#menu" class="btn">{{ $t('skipLinks.menu') }}</a>
  </div>
</template>

<style lang="postcss" scoped>
a {
  @mixin link-reset;

  background: var(--color-secondary);

  &:not(:focus) {
    @mixin sr-only;
  }

  &:focus,
  &:active {
    position: fixed;
    z-index: 100;
    top: var(--spacing-m);
    left: var(--spacing-m);
  }
}
</style>
