<template lang="html">
  <section class="blog-item">
    <router-link
      tag="h2"
      class="title"
      :to="{name: 'Post', params: {slug: post.slug}}"
    >
      {{ post.title }}
    </router-link>
    <span class="time">{{ post.date | timePretty }}</span>
    <span
      class="tag"
      v-for="tag in post.tags"
      @click="fetchTag(tag.name)"
    >#{{tag.name}}</span>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['post'],
  methods: {
    fetchTag (tag) {
      this.$router.push({
        name: 'Tag',
        params: {
          tag
        }
      })
      this.$store.dispatch('fetchPostsByTag', {
        tag
      }).then(() => {
        document.title = `${tag} | ${this.siteCfg.title}`
      })
    }
  },
  computed: {
    ...mapGetters([ 'siteCfg' ])
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  .blog-item
    margin-bottom: 2em

    .title
      margin-bottom: 0.5rem
      color: $color-primary
      cursor: pointer

      @extend .hover-highlight

    .time
      color: $color-secondary

    .tag
      color: $color-secondary
      cursor: pointer

      // border-left: 1px solid transparentize($color-secondary, 0.4)
      // border-radius: 290000px
      padding-left: 0.4em

      @extend .hover-highlight
</style>
