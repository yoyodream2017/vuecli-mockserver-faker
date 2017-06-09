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
    })
    .catch((error) => {
      console.error(error)
    })
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
