import Vue from "vue";
import Vuex from "vuex";
import postOrder from "./modules/postOrder";
import getMenu from "./modules/getMenu";

import profile from "./modules/getMenu";
//import sendOrder from "./modules/sendOrder";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    setMenu(state, newMenu) {
      state.menu = newMenu;
    },

    // addToCart from MENU-view
    addToCart(state, product) {
      const productObj = Object.assign({}, product);
      // check if product is in cart, if it is in cart, add +1 to quantity and set new total price.
      if (state.cart.includes(product)) {
        const index = state.cart.findIndex(obj => obj.id === productObj.id);
        const price = state.cart[index].price;

        state.cart[index].quantity += 1;
        state.cart[index].totPrice += price;
      } else {
        productObj.quantity = 1;
        productObj.totPrice = productObj.price;

        state.cart.push(productObj);
      }
    },
    // remove/add from CART-component
    removeOneProduct(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);

      if (state.cart[index].quantity === 1) {
        state.cart[index].splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    addOneProduct(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);
      state.cart[index].quantity += 1;
    },
    orderComplete(state) {
      state.noOrder = true;
    }
  },
  actions: {
    async getUser(ctx, uuid) {
      const url = "http://localhost:5000/api/user";
      fetch(url, {
        method: "GET",
        body: uuid,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  modules: {
    menu: getMenu,
    order: postOrder,
    getProfile: profile
  }
});
