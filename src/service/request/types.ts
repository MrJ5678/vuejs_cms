import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CMSRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface CMSRequestConfig extends AxiosRequestConfig {
  interceptors?: CMSRequestInterceptors
  showLoading?: boolean
}
