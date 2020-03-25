const postUser = {
  state: {
    uuid: ""
  },
  mutations: {
    // response from GET-request goes here
  },
  actions: {
    async registerUser(ctx, user) {
      const uuid = JSON.parse(localStorage.getItem("uuid"));
      user.uuid = JSON.parse(localStorage.getItem("uuid"));
      console.log(user);

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
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default postUser;
