import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    orderStatus: ""
  },
  mutations: {
    menu(state, data) {
      state.menu = data;
    },
    // When sending order this will recieve the data from server.
    // Use this to get data to OrderStatus view
    orderStatus(state, data) {
      state.orderStatus = data;
    },
    cart(state, data) {
      state.cart.push(data);
    }
  },
  actions: {
    async getMenu(ctx) {
      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("menu", data);
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    async sendOrder(ctx) {
      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("orderStatus", data);
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  modules: {}
});
