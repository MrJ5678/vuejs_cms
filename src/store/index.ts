import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    setCount(state, payload) {
      state.count += payload
    }
  },
  actions: {}
})

export default store
