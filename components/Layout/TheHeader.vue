<template>
  <header>
    <center-wrapper>
      <nav>
        <ol class="list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/petitie">Petitie</nuxt-link></li>
          <li><nuxt-link to="/nieuws">Nieuws</nuxt-link></li>
          <li><nuxt-link to="/achtergrond">Achtergrond</nuxt-link></li>
          <li><nuxt-link to="/over-ons">Over ons</nuxt-link></li>
        </ol>
      </nav>
    </center-wrapper>
  </header>
</template>

<style scoped lang="postcss">
.list {
  @mixin list-reset;

  padding: 1em 0;
}
</style>
