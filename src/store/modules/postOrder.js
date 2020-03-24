const postOrder = {
  state: {
    orderStatus: { orderNr: "", eta: "" },
    cart: []
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
    }
  },
  actions: {
    async sendOrder(ctx) {
      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      const date = year + "/" + month + "/" + day;

      const cart = JSON.parse(localStorage.getItem("cart"));

      let sum = 0;
      this.state.cart.forEach(obj => {
        sum += obj.totPrice;
      });

      // model for saving data with uuid in database
      let order = {
        orderNr: "set this in database",
        timeStamp: date,
        cart: cart,
        totalValue: sum
      };

      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(order),
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
  }
};

export default postOrder;
