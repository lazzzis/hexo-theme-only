<template lang="html">
  <only-container v-if="page">
    <only-loading
      :loading="loading"
    >
      <only-article
        :article="page"
        :config="config"
      >
      </only-article>
    </only-loading>
  </only-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArticleItem from '@/components/ArticleItem'
import Container from '@/components/Container'
import Loading from '@/components/Loading'

export default {
  props: [ 'title' ],
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.fetchPage({ title: this.title })
    .then(() => {
      this.loading = false
    })
    document.title = `${this.title} | ${this.siteCfg.title}`
  },
  components: {
    'only-article': ArticleItem,
    'only-container': Container,
    'only-loading': Loading
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
      this.loading = true
      this.fetchPage({ title: to })
        .then(() => {
          this.loading = false
        })
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
