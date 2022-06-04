import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  modules: {
    login
  },
  state: {},
  mutations: {},
  actions: {}
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export const useStore = (): Store<IStoreType> => {
  return useVuexStore()
}

export default store
