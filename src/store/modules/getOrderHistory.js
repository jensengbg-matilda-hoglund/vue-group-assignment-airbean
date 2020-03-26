const getOrderHistory = {
  state: { orders: [] },
  mutations: {
    setOrderHistory(state, newOrderHistory) {
      state.orders = newOrderHistory;
    }
  },
  actions: {
    async getOrderHistory(ctx) {
      const user = JSON.parse(localStorage.getItem("user"));
      const uuid = user.uuid;
      const url = `http://localhost:5000/api/beans/profile/${uuid}`;
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setOrderHistory", data["orders"]);
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};
export default getOrderHistory;
