// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fecha from 'fecha'
import Page from '@/views/Page'
import NotFound from '@/views/NotFound'
import axios from 'axios'
import nprogress from 'nprogress'

import FastClick from 'fastclick'

FastClick.attach(window.document.body)

nprogress.configure({ speed: 400 })

axios.interceptors.request.use(function (config) {
  nprogress.start()
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  nprogress.done()
  return response
}, function (error) {
  return Promise.reject(error)
})

Vue.config.productionTip = false

Vue.filter('timePretty', function (date) {
  return fecha.format(new Date(date), 'YYYY - MM - DD')
})

Promise.all([
  store.dispatch('fetchSiteCfg'),
  store.dispatch('fetchThemeCfg')
]).then(() => {
  store.state.themeCfg.Splash.forEach((item) => {
    if (item.type === 'permalink') {
      return
    }
    item.link =
      window.root + (item.link.startsWith('/') ? item.link.slice(1) : item.link)
  })
  store.state.themeCfg.Drawer.forEach((item) => {
    if (item.type === 'permalink') {
      return
    }
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

  router.addRoutes([{
    name: 'NotFound',
    path: window.root + '*',
    component: NotFound
  }])
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})
