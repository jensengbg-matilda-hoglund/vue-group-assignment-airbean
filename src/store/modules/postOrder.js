const postOrder = {
  state: {
    orderStatus: { orderNr: "", eta: "" },
    cart: [],
<<<<<<< HEAD
<<<<<<< Updated upstream
    cart_counter: 0
=======
    cart_counter: 0,
    intervalID: "",
    activeOrder: false
>>>>>>> Stashed changes
=======
    cart_counter: 0,
    intervalID: "",
    activeOrder: false
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
  },
  mutations: {
    orderStatus(state, order) {
      state.cart = [];
      state.cart_counter = 0;
      state.orderStatus.orderNr = order.orderNr;
      state.activeOrder = true;
      this.commit("countdown", order.eta);
    },
    countdown(state, eta) {
      const duration = eta * 60;
      let timer = duration,
        minutes,
        seconds;
      const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        state.orderStatus.eta = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = 0;
          state.orderStatus.eta = 0;
          state.activeOrder = false;
          clearInterval(interval);
        }
      }, 1000);
      state.intervalID = interval;
    },
    // addToCart from MENU-view
    addToCart(state, product) {
      const productObj = Object.assign({}, product);
      const index = state.cart.findIndex(obj => obj.id === productObj.id);
      if (index != -1) {
        const price = state.cart[index].price;

        state.cart[index].quantity += 1;
        state.cart[index].totPrice += price;
      } else {
        productObj.quantity = 1;
        productObj.totPrice = productObj.price;

        state.cart.push(productObj);
      }

      state.cart_counter++;
    },
    // remove/add from CART-component
    removeOneProduct(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);

      if (state.cart[index].quantity === 1) {
        state.cart[index].splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
      }
      state.cart_counter--;
    },
    addOneProduct(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);
      state.cart[index].quantity += 1;
      state.cart_counter++;
    }
  },
  actions: {
    async sendOrder({ commit, state }, url) {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      const date = year + "/" + month + "/" + day;
      console.log(state.cart);

      let sum = 0;
      state.cart.forEach(obj => {
        sum += obj.totPrice;
      });

      const userUuid = localStorage.getItem("uuid");

      let order = {
        created: date,
        cart: state.cart,
        totalValue: sum,
        userUuid: userUuid
      };

      fetch("http://localhost:5000/api/orders", {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            commit("orderStatus", data);

            // save orders of unregistered users
            if (data.userUuid == null) {
              let localOrders = JSON.parse(localStorage.getItem("orders"));
              if (localOrders == null) {
                localOrders = [];
              }
              localOrders.push(data.uuid);
              localStorage.setItem("orders", JSON.stringify(localOrders));
            }
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default postOrder;
