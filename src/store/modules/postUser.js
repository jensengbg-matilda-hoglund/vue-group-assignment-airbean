const postUser = {
  state: {
    uuid: ""
  },
  mutations: {
    saveUser(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  actions: {
    async registerUser(ctx, user) {
      user.uuid = JSON.parse(localStorage.getItem("uuid"));

      const url = "http://localhost:5000/api/beans/user";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            console.log(data);
            ctx.commit("saveUser", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default postUser;
