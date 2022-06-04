export let BASE_URL = ''
export const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
}
