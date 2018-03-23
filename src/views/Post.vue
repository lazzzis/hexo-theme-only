<template lang="html">
  <only-container>
    <only-loading
    :loading="loading">
      <only-article
        v-if="!notExisted && post"
        :article="post"
        :config="config"
        class="animated"
        :class="themeCfg.animated && themeCfg.animated.post"
      >
      </only-article>
      <h1 v-else>This Post is Not Existed</h1>
    </only-loading>
  </only-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArticleItem from '@/components/ArticleItem'
import Container from '@/components/Container'
import Loading from '@/components/Loading'
import { disqusUrl } from '@/helper'

export default {
  props: [ 'slug' ],
  created () {
    this.fetchPost({ slug: this.slug })
      .then(() => {
        document.title = `${this.post.title} | ${this.siteCfg.title}`
        this.loading = false
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          this.notExisted = true
          this.$store.commit('updateStatus', 404)
        }
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
      loading: true,
      notExisted: false
    }
  },
  computed: {
    ...mapGetters([ 'post', 'themeCfg', 'siteCfg' ]),
    config () {
      return this.themeCfg.disqus_shortname ? {
        shortname: this.themeCfg.disqus_shortname,
        url: disqusUrl(),
        title: document.title,
        identifier: disqusUrl()
      } : { livere_uid: this.themeCfg.livere_uid }
    }
  },
  methods: {
    ...mapActions([ 'fetchPost' ])
  }
}
</script>

<style lang="css">
</style>
