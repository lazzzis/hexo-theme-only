<template>
  <div id="app">
    <!-- display it only after config is fetched -->
    <only-nav v-if="$route.name !== 'Splash'"></only-nav>
    <router-view
    ></router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    'only-nav': Nav
  }
}
</script>

<style lang="sass">
  @import "./assets/sass/base.sass"
  a
    color: $color-primary
    &:hover
      color: $color-highlight
  pre
    border-left-color: $color-primary

  pre, code
    font-family: $monospace
  h1, h2, h3, h4, h5, h6
    font-weight: 400
  body
    font-weight: 400
    padding: 0
    margin: 0
    text-rendering: optimizeLegibility
    -webkit-font-smoothing: antialiased
    font-family: $base-font
</style>
