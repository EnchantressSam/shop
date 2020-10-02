import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCRS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return Axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCRS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
});

export default store;
