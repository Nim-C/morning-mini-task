import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setLoggedInUser(state, user) {
      state.user = user
    },
    setUserLoggedOut(state) {
      state.user = null
    }
  },
  actions: {
    async loginAttempt({ commit }, { email, password }) {
      try {
        const response = await axios.post('/api/v1/account/login', {
          email,
          password
        })
        commit('setLoggedInUser', response.data)
        console.log('response.data: ', response.data)
      } catch (err) {
        throw Error(err)
      }
    },
    logout({ commit }) {
      commit('setUserLoggedOut')
    }
  },
  getters: {
    loggedUser: (state) => state.user
  }
})

export default store
