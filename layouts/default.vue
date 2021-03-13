<template>
  <center-wrapper>
    <vue-announcer />
    <the-header />
    <main id="content" class="main">
      <nuxt />
    </main>
  </center-wrapper>
</template>

<style scoped lang="postcss">
.main {
  padding: 5em var(--gutter) 0;

  @media (--navigation-position-left) {
    margin-left: var(--width-navigation-left);
    padding-top: var(--gutter);
  }

  @media (--viewport-md) {
    --triangle-size: 25vw;
  }
}
</style>
