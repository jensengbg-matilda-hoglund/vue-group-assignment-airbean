<template>
  <div class="register">
    <img src="../assets/graphics/logo.svg" alt />
    <h1 class="headline">Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
    <label for="name">Namn</label>
    <input v-model="name" type="text" id="name" />
    <label for="email">Epost</label>
    <input v-model="email" type="text" id="email" />
    <div class="gdpr">
      <input type="radio" />
      <p class="gdpr-text">GDPR Ok!</p>
    </div>
    <button @click="registerUser" class="btn">Brew me a cup!</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    registerUser() {
      const user = { name: this.name, email: this.email };

      this.$store.dispatch("registerUser", user);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.register {
  display: flex;
  flex-direction: column;
  align-self: center;
  color: $black;
  background: $latte;
  width: 34rem;
  height: 57rem;
  border-radius: 3px;
}
</style>