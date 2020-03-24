const getProfile = {
  state: {
    uuid: ""
  },
  mutations: {
    // response from GET-request goes here
  },
  actions: {
    // API: GET uuid goes here

    async getUser(ctx, uuid) {
      const url = "http://localhost:5000/api/user";
      fetch(url, {
        method: "GET",
        body: uuid,
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

export default getProfile;
