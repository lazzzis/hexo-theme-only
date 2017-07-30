<template lang="html">
  <only-container>
    <div v-if="noTags">
      <h2>那个 ... 那个 ... 好像什么标签也没有</h2>
      <img src="https://as.bitinn.net/upload/ciruktvs4001u085nt3tqw7vz.1200.jpg">
    </div>
    <div v-else-if="notExisted">
      <h2>嗯，这个标签并不存在</h2>
      <img src="https://as.bitinn.net/upload/cj2l8o36f00ofbo5nj7spml66.1200.jpg">
    </div>
    <div v-else>
      <div class="tags-container" v-if="tags">
        <span
          v-for="item in tags"
          class="tag"
          :class="{'active': tag === item.name}"
          @click="fetchTag(item.name)"
        > {{ item.name }} </span>
      </div>
      <hr>
      <only-post
        v-for="post in posts"
        :key="post.title"
        :post="post"
      ></only-post>
    </div>
  </only-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Container from '@/components/Container'
import PostItem from '@/components/PostItem'

export default {
  props: [ 'tag' ],
  data () {
    return {
      noTags: false,
      notExisted: false
    }
  },
  components: {
    'only-container': Container,
    'only-post': PostItem
  },
  created () {
    let p = Promise.resolve()
    if (this.tags == null) {
      p = this.fetchTags()
        .then(() => {
          if (this.tag == null) {
            this.$router.push({
              name: 'Tag',
              params: {
                tag: this.tags[0].name
              }
            })
          }
        }).catch((err) => {
          if (err.response && err.response.status === 404) {
            this.noTags = true
          }
        })
    }
    p.then(() => {
      if (!this.noTags && this.tag != null) {
        return this.fetchPostsByTag({ tag: this.tag })
      }
    }).catch((err) => {
      if (err.response && err.response.status === 404) {
        this.notExisted = true
      }
    }).then(() => {
      document.title = `${this.tag} | ${this.siteCfg.title}`
    })
  },
  computed: {
    ...mapGetters([ 'tags', 'posts', 'siteCfg' ])
  },
  methods: {
    ...mapActions([ 'fetchTags', 'fetchPostsByTag' ]),
    fetchTag (tag) {
      this.$router.push({
        name: 'Tag',
        params: {
          tag
        }
      })
      this.fetchPostsByTag({ tag })
      document.title = `${tag} | ${this.siteCfg.title}`
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  .tags-container

    display: flex
    flex-wrap: wrap
    // justify-content: center

    .tag
      border: 1px solid $color-primary
      box-shadow: 0px 0px 0.2em $color-primary
      border-radius: 2em
      padding: 0 1em
      margin-top: 0.5em
      margin-right: 0.5em
      cursor: pointer

      transition: 0.2s ease
      display: inline-block

      &:last-child
        margin-right: 0

      &:hover, &.active
        border: 1px solid $color-highlight
        box-shadow: 0px 0px 0.2em $color-highlight

      &.active
        color: $color-highlight
</style>
