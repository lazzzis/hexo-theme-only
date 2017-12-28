import axios from 'axios'

const instance = axios.create({
  baseURL: window.root
})

const lastModified = window.lastModified || 0

export default {
  get (url) {
    return instance.get(url, {
      params: {
        v: lastModified
      }
    })
  }
}
