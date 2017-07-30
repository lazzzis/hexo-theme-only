import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = window.root

const state = {
  themeCfg: null,
  siteCfg: null,
  article: {},
  page: {},
  post: null,
  posts: [],
  tags: null
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
  }
}

const actions = {
  fetchSiteCfg ({commit}) {
    return axios.get('api/site.json')
      .then(({data}) => {
        commit('updateSiteCfg', data)
      })
  },
  fetchThemeCfg ({commit}) {
    return axios.get('api/theme.json')
      .then(({data}) => {
        commit('updateThemeCfg', data)
      })
  },
  fetchPosts ({commit}) {
    return axios.get('api/posts.json')
      .then(({data}) => {
        commit('updatePosts', {
          posts: data
        })
      })
  },
  fetchPost ({commit}, {slug}) {
    return axios.get(`api/articles/${slug}.json`)
    .then(({data}) => {
      commit('updatePost', {
        post: data
      })
    })
  },
  fetchPage ({commit}, {title}) {
    return axios.get(`api/page/${title}.json`)
      .then(({data}) => {
        commit('updatePage', {
          page: data
        })
      })
  },
  fetchTags ({commit}) {
    return axios.get(`api/tags.json`)
      .then(({data}) => {
        commit('updateTags', {
          tags: data
        })
      })
  },
  fetchPostsByTag ({commit}, {tag}) {
    return axios.get(`api/tags/${tag}.json`)
      .then(({data}) => {
        commit('updatePosts', {
          posts: data.postlist
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
