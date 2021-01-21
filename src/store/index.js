import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: {
      items: 0,
      total: 0
    },
    url: 'http://192.168.10.10/api/knowledgebase/'
  },
  mutations: {
    updateCart(state, cart) {
      state.shoppingCart = Object.assign({}, cart)
    }
  },
  actions: {},
  modules: {}
});
