import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/views/Splash'
import Posts from '@/views/Posts'
import Post from '@/views/Post'
import Tags from '@/views/Tags'

if (!window.root || window.root === '') {
  window.root = '/'
} else if (!window.root.endsWith('/')) {
  window.root += '/'
}

const root = window.root

Vue.use(Router)

const routes = [
  {
    path: root,
    name: 'Splash',
    component: Splash
  }, {
    path: root + 'posts',
    name: 'Posts',
    component: Posts
  }, {
    path: root + 'post/:slug',
    props: (route) => route.params,
    name: 'Post',
    component: Post
  }, {
    path: root + 'tags',
    name: 'Tags',
    props: () => null,
    component: Tags
  }, {
    path: root + 'tags/:tag',
    name: 'Tag',
    component: Tags,
    props: (route) => route.params
  }
]

export default new Router({
  mode: 'history',
  routes
})
