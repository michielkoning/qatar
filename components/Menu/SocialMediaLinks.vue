<template>
  <nav aria-labelledby="social-links-title">
    <h2 id="social-links-title" class="sr-only">
      {{ $t('socialMediaLinks') }}
    </h2>
    <ul class="social-links">
      <li>
        <a
          :href="`https://twitter.com/${twitter}`"
          rel="noopener"
          target="_blank"
        >
          <app-icon icon="twitter" />
          <span class="sr-only">
            {{ $t('viewOn', { title, network: 'Twitter' }) }}
          </span>
        </a>
      </li>
      <li>
        <a :href="facebook" rel="noopener" target="_blank">
          <app-icon icon="facebook" />
          <span class="sr-only">
            {{ $t('viewOn', { title, network: 'Facebook' }) }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { twitter, facebook, title } from '~/data/details'
export default {
  data() {
    return {
      title,
      facebook,
      twitter,
    }
  },
}
</script>

<style lang="postcss" scoped>
ul {
  @mixin list-reset;

  display: flex;
  margin-bottom: var(--spacing-m);
}

a {
  @mixin link-reset;

  display: block;
  font-size: 1.5em;
  margin-right: 0.75em;
}
</style>
