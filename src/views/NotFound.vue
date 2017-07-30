<template lang="html">
  <only-container>
    <h3> 迷路了么？这里什么也不存在 </h3>
    <p> 回到 <router-link
      :to="{name: 'Splash'}"
    >最开始的地方吧</router-link> </p>
    <img src="https://as.bitinn.net/upload/cite0l5z200oiz35nbv8t5xox.1200.jpg" alt="">
  </only-container>
</template>

<script>
import Container from '@/components/Container'

export default {
  components: {
    'only-container': Container
  }
}
</script>

<style lang="css">
</style>
