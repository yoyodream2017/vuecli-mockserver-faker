import { services } from '../api'

const FETCH_VIPUSER = 'FETCH_VIPUSER'

const state = {
  vipuser: []
}

const actions = {
  fetchVIPUser: ({ commit }) => {
  // API request
    return services.vipuser.getVIPUser()
    .then((response) => {
      console.log(response)
      commit(FETCH_VIPUSER, response.data)
      return response
    })
    .catch((error) => {
      console.error(error)
      return error
    })
  }
}
const getters = {
  totalVIPUser: state => state.vipuser
}

const mutations = {
  [FETCH_VIPUSER] (state, data) {
    state.vipuser = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
