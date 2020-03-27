const postUser = {
  state: {
    user: ""
  },
  mutations: {
    saveUser(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    }
  },
  actions: {
    async registerUser(ctx, user) {
      user.uuid = localStorage.getItem("uuid");
      console.log(user)

      const url = "http://localhost:5000/api/users";
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
