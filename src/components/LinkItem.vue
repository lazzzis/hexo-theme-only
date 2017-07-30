<template lang="html">
  <a
  v-if="item.type === 'permalink'"
  :href="item.link"
  :target="item._blank ? '_blank' : ''"
  >{{ item.title }}</a>
  <router-link
  v-else
  :to="item.link"
  >{{ item.title }}</router-link>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="css">
</style>
