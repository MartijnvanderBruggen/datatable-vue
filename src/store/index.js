import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: {
      items: 0,
      total: 0
    }
  },
  mutations: {
    updateCart(state, cart) {
      state.shoppingCart = Object.assign({}, cart)
    }
  },
  actions: {},
  modules: {}
});
