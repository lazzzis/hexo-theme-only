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
      <div v-if="notExisted">
        <h2>这篇文章 。。 居然不存在</h2>
        <p>要不。。看看<router-link
            :to="{name: 'Posts'}"
          >其它文章</router-link></p>
        <img src="https://as.bitinn.net/upload/ciodybere00a528s5yot7bffd.1200.jpg" alt="">
      </div>
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
      return {
        shortname: this.themeCfg.disqus_shortname,
        url: disqusUrl(),
        title: document.title,
        identifier: disqusUrl()
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
