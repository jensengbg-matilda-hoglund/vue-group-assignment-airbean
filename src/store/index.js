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
    setMenu(state, newMenu) {
      state.menu = newMenu;
    },
    orderStatus(state, data) {
      // This function counts down the ETA every 60sec
      state.orderStatus = data;
      setInterval(() => {
        state.orderStatus.eta -= 1;
        console.log(state.orderStatus);
      }, 60000);
    },
    addToCart(state, product) {
      const productObj = Object.assign({}, product);
      // check if product is in cart, if it is in cart, add +1 to quantity and set new total price.
      if (state.cart.includes(product)) {
        const objIndex = state.cart.findIndex(obj => obj.id === productObj.id);

        const quantity = state.cart[objIndex].quantity;
        const price = state.cart[objIndex].price;

        state.cart[objIndex].quantity = quantity + 1;
        state.cart[objIndex].totPrice += price;
      } else {
        productObj.quantity = 1;
        productObj.totPrice = productObj.price;
        state.cart.push(productObj);
      }
      console.log(state.cart);
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
            ctx.commit("setMenu", data["menu"]);
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
