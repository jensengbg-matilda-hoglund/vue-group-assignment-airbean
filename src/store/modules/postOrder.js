const postOrder = {
  state: {
    orderStatus: { orderNr: "", eta: "" },
    cart: [],
    cart_counter: 0
  },
  mutations: {
    orderStatus(state, order) {
      state.orderStatus = order;
      this.commit("countdown", order.eta);
    },
    countdown(state, eta) {
      console.log(state.orderStatus);
      const duration = eta * 60;
      let timer = duration,
        minutes,
        seconds;
      setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        state.orderStatus.eta = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = duration;
        }
        localStorage.setItem("orderStatus", JSON.stringify(state.orderStatus));
      }, 1000);
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
      console.log(state.cart);
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
    async sendOrder({ commit, state }) {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      const date = year + "/" + month + "/" + day;

      let sum = 0;
      state.cart.forEach(obj => {
        sum += obj.totPrice;
      });

      // model for saving data with uuid in database
      let order = {
        orderNr: "set this in database",
        timeStamp: date,
        cart: state.cart,
        totalValue: sum
      };
      console.log(order);
      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            commit("orderStatus", data);
            state.cart_counter = 0;
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default postOrder;
