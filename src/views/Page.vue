<template lang="html">
  <only-container v-if="page">
    <only-loading
      :loading="loading"
    >
      <only-article
        v-if="!notExisted"
        :article="page"
        :config="config"
        class="animated"
        :class="themeCfg.animated && themeCfg.animated.page"
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
import { disqusUrl } from '@/helper'
import Vue from 'vue'

export default {
  props: [ 'layout' ],
  data () {
    return {
      loading: true,
      notExisted: false
    }
  },
  created () {
    this.loading = true
    this.refresh(this.layout)
      .then(() => { this.loading = false })
  },
  components: {
    'only-article': ArticleItem,
    'only-container': Container,
    'only-loading': Loading
  },
  computed: {
    ...mapGetters([ 'page', 'themeCfg', 'siteCfg' ]),
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
    ...mapActions([ 'fetchPage' ]),
    refresh (layout) {
      this.notExisted = false
      return this.fetchPage({ layout })
        .then(() => {
          document.title = `${this.page.title} | ${this.siteCfg.title}`
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            this.notExisted = true
          }
        })
    }
  },
  watch: {
    'layout' (to, from) {
      this.loading = true
      this.refresh(to)
        .then(() => { this.loading = false })
        .then(() => {
          Vue.nextTick(() => {
            window.DISQUS.reset({
              reload: true,
              config () {
                this.page.identifier = disqusUrl()
                this.page.url = disqusUrl()
                this.page.title = document.title
                console.log(this.page.identifier, this.page.url)
              }
            })
          })
        })
    }
  }
}
</script>

<style lang="css">
</style>
