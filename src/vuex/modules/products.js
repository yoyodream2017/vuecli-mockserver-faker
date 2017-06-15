import { services } from '../api'

const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const state = {
  products: []
}

const actions = {
  fetchProducts: ({ commit }, req) => {
  // API request
    return services.products.getProducts(req)
    .then((response) => {
      console.log(response)
      commit(FETCH_PRODUCTS, response.data)
      return response
    })
    .catch((error) => {
      console.error(error)
      return error
    })
  }
}
const getters = {
  totalProducts: state => state.products
}

const mutations = {
  [FETCH_PRODUCTS] (state, data) {
    state.products = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
