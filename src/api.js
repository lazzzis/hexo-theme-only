import axios from 'axios'

const instance = axios.create({
  baseURL: window.root
})

export default instance
