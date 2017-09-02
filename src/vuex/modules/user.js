import { services } from '../api'

const FETCH_USER = 'FETCH_USER'

const state = {
  user: []
}

const actions = {
  fetchUser: ({ commit }) => {
  // API request
    return services.user.getUser()
    .then((response) => {
      console.log(response)
      commit(FETCH_USER, response.data)
      return response
    })
    .catch((error) => {
      console.error(error)
      return error
    })
  },
  setUser: ({ commit }, data) => {
    commit(FETCH_USER, data)
  }
}
const getters = {
  totalUser: state => state.user
}

const mutations = {
  [FETCH_USER] (state, data) {
    state.user = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
