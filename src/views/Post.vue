<template lang="html">
  <only-container v-if="post">
    <only-loading
    :loading="loading">
      <only-article
        :article="post"
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
  props: [ 'slug' ],
  created () {
    this.fetchPost({ slug: this.slug })
      .then(() => {
        document.title = `${this.post.title} | ${this.siteCfg.title}`
        this.loading = false
      })
  },
  components: {
    'only-article': ArticleItem,
    'only-container': Container,
    'only-loading': Loading
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters([ 'post', 'themeCfg', 'siteCfg' ]),
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
    ...mapActions([ 'fetchPost' ])
  }
}
</script>

<style lang="css">
</style>
