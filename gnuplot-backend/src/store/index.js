import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      function: '',
      Range1: '',
      Range2: '',
      Point: '',
      Code: '',
    },
  },

  getters: {
    settings: state => {
      return state.settings
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
