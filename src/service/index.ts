import CMSRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const cmsRequest = new CMSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求成功拦截')
      const token = localCache.getCache('token') ?? ''
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败拦截')
      return Promise.reject(error)
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败拦截')
      // console.log(error)
      // return error
      return Promise.reject(error)
    }
  }
})

export default cmsRequest
