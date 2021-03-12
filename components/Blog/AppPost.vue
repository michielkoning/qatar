<template>
  <li @mousedown.left="mouseDown" @mouseup.left="mouseUp">
    <!-- eslint-disable-next-line -->
    <h2><router-link :to="post.uri" v-html="post.title" /></h2>
    <app-date :date="post.date" />
    <!-- eslint-disable-next-line -->
    <div class="text" v-html="post.excerpt"/>
    <div class="link-wrapper">
      <span class="read-more">
        {{ $t('readMore') }}
        <app-icon icon="chevron-right" />
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      down: null,
    }
  },
  methods: {
    mouseUp() {
      const up = +new Date()
      if (up - this.down < 200) {
        this.goToPost()
      }
    },
    mouseDown() {
      this.down = +new Date()
    },
    goToPost() {
      this.$router.push(this.post.uri)
    },
  },
}
</script>

<style lang="postcss" scoped>
li {
  display: flex;
  flex-direction: column;
  padding-bottom: var(--spacing-m);
  border-bottom: 2px dashed var(--color-black);
  cursor: pointer;

  &:hover .read-more,
  &:focus-within .read-more {
    box-shadow: 0 3px 0 0 var(--color-primary);

    & svg {
      margin-left: var(--spacing-xxs);
    }
  }
}

a {
  @mixin link-reset;
}

.image {
  width: 100%;
  height: 8em;
  object-fit: cover;
  order: -2;
  margin-bottom: var(--spacing-xs);
}

time {
  order: -1;
  font-size: var(--font-size-sm);
}

.text {
  @mixin text-overflow;
}

.link-wrapper {
  margin-top: auto;
}
</style>
