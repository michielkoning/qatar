<template>
  <li class="list-item" @mousedown.left="mouseDown" @mouseup.left="mouseUp">
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      down: null,
    }
  },
  methods: {
    mouseUp(event) {
      if (event.target.tagName === 'A') return
      const up = +new Date()
      if (up - this.down < 200) {
        this.goToItem()
      }
    },
    mouseDown() {
      this.down = +new Date()
    },
    goToItem() {
      if (this.external) {
        window.open(this.url)
      } else {
        this.$router.push(this.url)
      }
    },
  },
}
</script>
