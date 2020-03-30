const getMenu = {
  state: { menu: [] },
  mutations: {
    setMenu(state, newMenu) {
      state.menu = newMenu;
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
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default getMenu;
