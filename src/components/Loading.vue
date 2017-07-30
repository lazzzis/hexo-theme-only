<template lang="html">
  <div>
    <div class="loading" v-if="loading">
      <div>
        <h1>Loading</h1>
        <div class="pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <slot v-else></slot>
  </div>

</template>

<script>
export default {
  props: {
    loading: {
      default: false
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  .loading
    width: 100%
    padding: 1em
    display: inline-flex
    justify-content: center
    align-items: center
    .pacman > div:first-of-type, .pacman > div:nth-child(2)
      border-top-color: $color-primary
      border-left-color: $color-primary
      border-bottom-color: $color-primary
    .pacman>div:nth-child(3), .pacman>div:nth-child(4), .pacman>div:nth-child(5), .pacman>div:nth-child(6)
      background-color: $color-primary
</style>
