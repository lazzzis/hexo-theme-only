<template lang="html">
  <only-container v-if="page">
    <only-loading
      :loading="loading"
    >
      <only-article
        v-if="!notExisted"
        :article="page"
        :config="config"
      >
      </only-article>
      <div v-else>
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

export default {
  props: [ 'title' ],
  data () {
    return {
      loading: true,
      notExisted: false
    }
  },
  created () {
    this.loading = true
    this.refresh(this.title)
      .then(() => {
        this.loading = false
      })
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
    ...mapActions([ 'fetchPage' ]),
    refresh (title) {
      this.notExisted = false
      document.title = `${title} | ${this.siteCfg.title}`
      return this.fetchPage({ title: title })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            this.notExisted = true
          }
        })
    }
  },
  watch: {
    'title' (to, from) {
      this.loading = true
      this.refresh(to)
        .then(() => {
          this.loading = false
        })
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
