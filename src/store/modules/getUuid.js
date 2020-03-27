const getUuid = {
  state: {},
  mutations: {
    saveUuid(state, data) {
      localStorage.setItem("uuid", data.key);
    }
  },
  actions: {
    async getUuid(ctx) {
      const url = "http://localhost:5000/api/beans/key";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            console.log(data);
            ctx.commit("saveUuid", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default getUuid;
