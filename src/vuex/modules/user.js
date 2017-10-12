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
  sortName: ({ commit }, bool) => {
    return services.user.getUser()
    .then((response) => {
      if (response.data) {
        const data = response.data.data.sort((a, b) => {
          if (bool) {
            return a.name >= b.name
          } else {
            return a.name <= b.name
          }
        })
        // const data = null
        commit(FETCH_USER, { data })
        return response
      }
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
