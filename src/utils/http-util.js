import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true
})

// 请求拦截
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  console.log(response)
  return response.data
}, error => {
  return Promise.reject(error)
})

export default service
