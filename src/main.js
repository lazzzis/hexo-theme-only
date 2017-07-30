// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'
import Page from '@/views/Page'

Vue.config.productionTip = false

Vue.filter('timePretty', function (date) {
  return moment(date).format('YYYY - MM - DD')
})

Promise.all([
  store.dispatch('fetchSiteCfg'),
  store.dispatch('fetchThemeCfg')
]).then(() => {
  store.state.themeCfg.Splash.forEach((item) => {
    item.link =
      window.root + (item.link.startsWith('/') ? item.link.slice(1) : item.link)
  })
  store.state.themeCfg.Drawer.forEach((item) => {
    item.link =
      window.root + (item.link.startsWith('/') ? item.link.slice(1) : item.link)
  })
  router.addRoutes(store.state.themeCfg.Splash
    .filter((item) => item.type === 'page')
    .map((item) => ({
      path: item.link,
      component: Page,
      props: {
        title: item.title
      }
    })))
  router.addRoutes(store.state.themeCfg.Drawer
    .filter((item) => item.type === 'page')
    .map((item) => ({
      path: item.link,
      component: Page,
      props: {
        title: item.title
      }
    })))
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})
