<template>
  <footer class="footer">
    <center-wrapper>
      <div class="wrapper">
        <social-media-links
          title="Volg ons op"
          facebook="#"
          twitter="#"
          pinterest="#"
          instagram="#"
          linkedin="#"
        />
        <nav>
          <h2>Handige links</h2>
          <ol class="list">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/petitie">Petitie</nuxt-link></li>
            <li><nuxt-link to="/nieuws">Nieuws</nuxt-link></li>
            <li><nuxt-link to="/achtergrond">Achtergrond</nuxt-link></li>
            <li><nuxt-link to="/over-ons">Over ons</nuxt-link></li>
          </ol>
        </nav>
      </div>
    </center-wrapper>
  </footer>
</template>

<style scoped lang="postcss">
.footer {
  background: var(--color-primary);
  color: var(--color-white);

  & a {
    color: currentColor;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-gap: var(--gutter);
}

.list {
  @mixin list-reset;
}
</style>
