import axios, { AxiosInstance } from 'axios'
import { CMSRequestInterceptors, CMSRequestConfig } from './types'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import 'element-plus/es/components/loading/style/css'

class CMSRequest {
  instance: AxiosInstance
  interceptors?: CMSRequestInterceptors
  showLoading?: boolean
  loading?: LoadingInstance

  constructor(config: CMSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? false

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use((config) => {
      if (this.showLoading) {
        this.loading = ElLoading.service({
          text: '正在发送请求...',
          background: 'rgba(0, 0, 0, 0.5)'
        })
      }
      return config
    })

    this.instance.interceptors.response.use(
      (res) => {
        // return new Promise((resolve) => {
        //   setTimeout(() => {
        //     this.loading?.close()
        //     resolve(res)
        //     // console.log(res)
        //   }, 2000)
        // }).then((res: any) => {
        //   return res.data
        // })
        // const result = await new Promise((resolve) => {
        //   setTimeout(() => {
        //     this.loading?.close()
        //     resolve(res)
        //     // console.log(res)
        //   }, 2000)
        // })
        // return Promise.resolve(result)

        this.loading?.close()
        this.showLoading = false
        return res.data
      },
      (error) => {
        this.loading?.close()
        this.showLoading = false
        return Promise.reject(error)
      }
    )
  }

  request<T>(config: CMSRequestConfig): Promise<T> {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    if (config.showLoading) {
      this.showLoading = config.showLoading
    }
    return this.instance.request(config)
  }

  get<T>(config: CMSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: CMSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export default CMSRequest
