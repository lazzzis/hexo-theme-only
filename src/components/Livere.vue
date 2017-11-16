<template lang="html">
  <!-- LiveRe City install code -->
  <div id="lv-container" data-id="city" :data-uid="config.livere_uid">
  </div>
  <!-- completed City install code -->
</template>

<script>
export default {
  props: {
    config: {
      required: true,
      type: Object
    }
  },
  mounted () {
    (function (d, s) {
      let j
      let e = d.getElementsByTagName(s)[0]

      if (typeof LivereTower === 'function') { return }

      j = d.createElement(s)
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      j.async = true

      e.parentNode.insertBefore(j, e)
    })(document, 'script')
  }
}
</script>

<style lang="css">
</style>
