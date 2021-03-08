<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <Nuxt />
    </main>
    <TheFooter />
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
}
</style>
