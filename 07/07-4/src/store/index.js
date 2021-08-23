import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: ''
  },
  mutations: {
    setData: (state, payload) => {
      return (state.title = payload)
    }
  },
  getters: {
    getData(state) {
      return state.title
    }
  },
  actions: {},
  modules: {}
})
