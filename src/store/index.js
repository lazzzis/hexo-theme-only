import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/api'

Vue.use(Vuex)

const state = {
  themeCfg: null,
  siteCfg: null,
  article: {},
  page: {},
  post: null,
  posts: [],
  tags: null,
  status: 200 // http status code
}

const getters = {
  posts (state) {
    return state.posts
  },
  post (state) {
    return state.post
  },
  article (state) {
    return state.article
  },
  page (state) {
    return state.page
  },
  tags (state) {
    return state.tags
  },
  themeCfg (state) {
    return state.themeCfg
  },
  siteCfg (state) {
    return state.siteCfg
  },
  status (state) {
    return state.status
  }
}

const mutations = {
  updatePosts (state, {posts}) {
    state.posts = posts
  },
  updatePost (state, {post}) {
    state.post = post
  },
  updateArticle (state, {article}) {
    state.article = article
  },
  updatePage (state, {page}) {
    state.page = page
  },
  updateTags (state, {tags}) {
    state.tags = tags
  },
  updateThemeCfg (state, themeCfg) {
    state.themeCfg = themeCfg
  },
  updateSiteCfg (state, siteCfg) {
    state.siteCfg = siteCfg
  },
  updateStatus (state, status) {
    state.status = status
  }
}

const actions = {
  fetchSiteCfg ({commit}) {
    return http.get('api/site.json')
      .then(({data}) => {
        commit('updateSiteCfg', data)
      })
  },
  fetchThemeCfg ({commit}) {
    return http.get('api/theme.json')
      .then(({data}) => {
        commit('updateThemeCfg', data)
      })
  },
  fetchPosts ({commit}) {
    return http.get('api/posts.json')
      .then(({data}) => {
        commit('updatePosts', {
          posts: data.sort((x, y) => new Date(y.date).getTime() - new Date(x.date).getTime())
        })
      })
  },
  fetchPost ({commit}, {slug}) {
    return http.get(`api/articles/${slug}.json`)
    .then(({data}) => {
      commit('updatePost', {
        post: data
      })
    })
  },
  fetchPage ({commit}, {layout}) {
    return http.get(`api/page/${layout}.json`)
      .then(({data}) => {
        commit('updatePage', {
          page: data
        })
      })
  },
  fetchTags ({commit}) {
    return http.get(`api/tags.json`)
      .then(({data}) => {
        commit('updateTags', {
          tags: data
        })
      })
  },
  fetchPostsByTag ({commit}, {tag}) {
    return http.get(`api/tags/${tag}.json`)
      .then(({data}) => {
        commit('updatePosts', {
          posts: data.postlist.sort((x, y) => new Date(y.date).getTime() - new Date(x.date).getTime())
        })
      })
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
