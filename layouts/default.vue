<template>
  <div class="page">
    <the-header />
    <main class="main">
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<style scoped lang="postcss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 0 auto;
  padding-bottom: 2em;
}
</style>
