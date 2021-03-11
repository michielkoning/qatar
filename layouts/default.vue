<template>
  <div class="page">
    <the-header class="header" />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<style scoped lang="postcss">
.page {
  display: grid;
  grid-gap: 1em;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  z-index: var(--main-navigation);
}

.main {
  margin-left: var(--width-navigation-left);
  padding-top: var(--gutter);
}
</style>
