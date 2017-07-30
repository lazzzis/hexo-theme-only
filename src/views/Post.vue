<template lang="html">
  <only-container v-if="post">
    <only-article
      :article="post"
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
  props: [ 'slug' ],
  created () {
    this.fetchPost({ slug: this.slug })
      .then(() => {
        document.title = `${this.post.title} | ${this.siteCfg.title}`
      })
  },
  components: {
    'only-article': ArticleItem,
    'only-container': Container
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
