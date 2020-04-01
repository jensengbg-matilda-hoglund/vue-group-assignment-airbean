const getOrderHistory = {
  state: { orders: [] },
  mutations: {
    setOrderHistory(state, newOrderHistory) {
      state.orders = newOrderHistory;
    }
  },
  actions: {
    async getOrderHistory(ctx) {
      const uuid = localStorage.getItem("uuid");
      const url = `http://localhost:5000/api/users/${uuid}/orders`;
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setOrderHistory", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};
export default getOrderHistory;
