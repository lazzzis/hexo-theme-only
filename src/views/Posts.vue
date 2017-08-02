<template lang="html">
    <only-container>
      <only-post
        v-for="post in posts"
        :post="post"
        :key="post.title"
        class="animated"
        :class="themeCfg.animated && themeCfg.animated.posts"
        ></only-post>
    </only-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Container from '@/components/Container'
import PostItem from '@/components/PostItem'

export default {
  created () {
    this.fetchPosts()
      .then(() => {
        document.title = `Posts | ${this.siteCfg.title}`
      })
  },
  components: {
    'only-container': Container,
    'only-post': PostItem
  },
  computed: {
    ...mapGetters([ 'posts', 'siteCfg', 'themeCfg' ])
  },
  methods: {
    ...mapActions([ 'fetchPosts' ])
  }
}
</script>

<style lang="css">
</style>
