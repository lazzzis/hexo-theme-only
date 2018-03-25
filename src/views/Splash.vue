<template lang="html">
  <section class="splash">
    <section
      class="body"
      :style="style">
      <section class="shadow">
        <section class="content">
          <h1 class="title">{{ siteCfg.title }}</h1>
          <nav>
            <only-link
              v-for="item in themeCfg.Splash"
              :item="item"
              :key="item.title"
            ></only-link>
          </nav>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkItem from '@/components/LinkItem'

export default {
  components: {
    'only-link': LinkItem
  },
  created () {
    document.title = `Home | ${this.siteCfg.title}`
  },
  computed: {
    ...mapGetters([
      'themeCfg',
      'siteCfg'
    ]),
    style () {
      if (process.env.NODE_ENV === 'production') {
        return {
          'backgroundImage': `url(${window.root}img/background.jpg)`
        }
      }
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/base.sass"
  section.splash
    width: 100vw
    height: 100vh
    .shadow
      background-color: rgba(0, 0, 0, 0.7)
      width: 100%
      height: 100%
    .body
      background-image: url(../assets/background.jpg)
      background-size: cover
      background-position: center
      width: 100%
      height: 100%
    .content
      font-family: $cursive-font
      width: 100%
      height: 100%
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      .title
        margin-bottom: 1.4rem
        color: rgba(255, 255, 255, 0.8)
        font-size: 6rem
      .subtitle
        margin-bottom: 1rem
        color: rgba(255, 255, 255, 0.7)
      nav
        display: flex
        @media only screen and (max-width: 600px)
          flex-direction: column
        a
          color: white
          font-size: 1.8em
          padding: 0 0.6em 1em
          color: rgba(255, 255, 255, 0.65)
          transition: all 0.6s
          cursor: pointer

          display: inline-flex
          justify-content: center

          &:hover
            color: white
            text-shadow: 0 0 2px #fff
</style>
