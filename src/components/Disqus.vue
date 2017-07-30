<template lang="html">
  <div id="disqus_thread">

  </div>
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
    this.loadDisqus()
  },
  methods: {
    addDisqusScript () {
      if (typeof DISQUS !== 'undefined') {
        return
      }

      let disqusEmbed = document.getElementById('disqus_embed')
      if (disqusEmbed) {
        disqusEmbed.parent.remove(disqusEmbed)
      }

      const child = this.disqus = document.createElement('script')
      const parent = document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]

      child.async = true
      child.type = 'text/javascript'
      child.src = 'https://' + this.config.shortname + '.disqus.com/embed.js'
      child.id = 'disqus_embed'
      parent.appendChild(child)
      // __disqusAdded = true
    },
    loadDisqus () {
      let props = this.config

      // If Disqus has already been added, reset it
      if (typeof window.DISQUS !== 'undefined') {
        window.DISQUS.reset({
          reload: true,
          config: function config () {
            this.page.title = props.title
            this.page.url = props.url
            this.page.identifier = props.identifier
          }
        })
      } else { // Otherwise add Disqus to the page
        window.disqus_config = function config () {
          this.page.title = props.title
          this.page.url = props.url
          this.page.identifier = props.identifier
        }
        this.addDisqusScript()
      }
    }
  }
}
</script>

<style lang="css">
</style>
