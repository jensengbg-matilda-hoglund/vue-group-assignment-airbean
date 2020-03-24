<template>
  <div class="register">
    <img src="../assets/graphics/logo.svg" alt />
    <h1 class="headline">Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
    <label for="name">Namn</label>
    <input type="text" id="name" />
    <label for="email">Epost</label>
    <input type="text" id="email" />
    <button class="radio" type="radio">GDPR Ok!</button>
    <button class="btn">Brew me a cup!</button>
  </div>
</template>

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