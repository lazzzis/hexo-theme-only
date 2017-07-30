<template lang="html">
  <only-container v-if="page">
    <only-article
      :article="page"
      :config="config"
    >
    </only-article>
  </only-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArticleItem from '@/components/ArticleItem'
import Container from '@/components/Container'

export default {
  props: [ 'title' ],
  created () {
    this.fetchPage({ title: this.title })
    document.title = `${this.title} | ${this.siteCfg.title}`
  },
  components: {
    'only-article': ArticleItem,
    'only-container': Container
  },
  computed: {
    ...mapGetters([ 'page', 'themeCfg', 'siteCfg' ]),
    config () {
      return {
        shortname: this.themeCfg.disqus_shortname,
        url: window.location.href,
        title: document.title,
        identifier: window.location.href
      }
    }
  },
  methods: {
    ...mapActions([ 'fetchPage' ])
  },
  watch: {
    'title' (to, from) {
      this.fetchPage({ title: to })
      document.title = `${this.title} | ${this.siteCfg.title}`
      window.DISQUS.reset({
        reload: true,
        config () {
          this.page.identifier = window.href
          this.page.url = window.location.href
          this.page.title = document.title
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
