<template>
  <div class="register">
    <img src="../assets/graphics/logo.svg" alt />
    <h1 class="headline">Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
    <label class="text-label" for="name">Namn</label>
    <input class="text-input" v-model="name" type="text" id="name" />
    <label class="text-label" for="email">Epost</label>
    <input class="text-input" v-model="email" type="text" id="email" />
    <div class="gdpr">
      <input
        v-model="gdprChecked"
        id="radio"
        class="radio-input"
        type="radio"
        name="radio"
        value="gdpr"
      />
      <label class="radio-label pop" for="radio"></label>
      <p class="gdpr-text">GDPR Ok!</p>
    </div>
    <button @click="registerUser" class="btn pop">Brew me a cup!</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      email: "",
      gdprChecked: false
    };
  },
  methods: {
    registerUser() {
      if (
        this.name.length > 0 &&
        this.email.includes("@") &&
        this.gdprChecked
      ) {
        const user = { name: this.name, email: this.email };
        this.$store.dispatch("registerUser", user);

        // check if a new user had any orders
        const checkOrders = JSON.parse(localStorage.getItem("orders"));
        const userUuid = localStorage.getItem("uuid");
        if (checkOrders && checkOrders.length > 0) {
          for (const orderId of checkOrders) {
            const url = `http://localhost:5000/api/orders/${orderId}`;
            fetch(url, {
              method: "PUT",
              body: JSON.stringify({ userUuid: userUuid }),
              headers: { "Content-Type": "application/json" }
            })
              .then(response => response.json())
              .catch(error => {
                console.error("Error:", error);
              });
          }
        }
        this.$store.dispatch("getOrderHistory");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/transitions.scss";

.register {
  display: flex;
  flex-direction: column;
  align-self: center;
  color: $black;
  background: $latte;
  width: 34rem;
  height: 56rem;
  border-radius: 3px;

  .headline {
    font-size: 3.2rem;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    font-family: $worksans;
    text-align: center;
    margin-bottom: 3rem;
  }

  .text-label {
    font-size: 1.2rem;
    font-family: $worksans;
    color: $black;
  }

  .text-input {
    font-size: 1.6rem;
    font-family: $worksans;
    padding: 12px;
    background: none;
    border-radius: 6px;
    border: 1px solid $black;
    margin: 0.5rem 0 1.5rem 0;
  }

  .checkbox-input {
    height: 2rem;
    width: 2rem;
    border: 1px solid $black;
    border-radius: 100%;
    cursor: pointer;
  }

  .gdpr {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    height: 1rem;

    input[type="radio"] {
      visibility: hidden;
      height: 0;
      width: 0;
    }

    .radio-label {
      cursor: pointer;
      background-color: #b9aeab;
      padding: 7px 7px;
      border-radius: 100%;
    }

    input[type="radio"]:checked + label {
      background-color: #0e927d;
    }
    .gdpr-text {
      margin: 0 0.5rem;
    }
  }

  .btn {
    display: flex;
    align-self: center;
    background: $black;
    color: $white;
    font-size: 2.4rem;
    font-family: $PT;
    font-weight: 600;
    padding: 10px 45px;
    margin-top: 2rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
}
</style>