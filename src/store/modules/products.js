import shop from '../../api'

const state = {
  products: [],
};

const getters = {
    getProducts: (state) => state.products
};


const actions = {
    fetchProducts({ commit }) {
        commit('fetchProducts', shop)
    }
};


const mutations = {
    fetchProducts (state, products) {
        state.products = products;
    },
};

export default {
  state,
  getters,
  actions,
  mutations
}
