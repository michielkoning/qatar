<template>
  <header>
    <nav>
      <ol class="list">
        <li>Home</li>
        <li>Petitie</li>
        <li>Nieuws</li>
        <li>Achtergrond</li>
        <li>Over ons</li>
      </ol>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.list {
  @mixin list-reset;

  display: flex;
  justify-content: space-around;
}
</style>
