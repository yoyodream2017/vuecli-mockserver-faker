const FETCH_LOADING = 'FETCH_LOADING'

const state = {
  isLoading: false
}

const getters = {
  isLoading: state => state.isLoading
}

const mutations = {
  [FETCH_LOADING] (state, data) {
    state.isLoading = data
  }
}

export default {
  state,
  getters,
  mutations
}
