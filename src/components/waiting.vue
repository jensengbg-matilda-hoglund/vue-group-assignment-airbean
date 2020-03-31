<template>
  <div class="waitOrder">
    <title>You have an order already</title>
    <h1>Du har redan en order, vänta en leverans</h1>
<<<<<<< HEAD
    <button @click="myOrder" class="myOrder">Ok, cool!</button>
=======
    <button @click="myOrder" class="myOrder pop">Ok, cool!</button>
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
  </div>
</template>

<script>
export default {
  methods: {
    myOrder() {
      this.$router.push("/order-status");
    }
  }
};
</script>

<style lang="scss" scooped>
@import "../assets/scss/variables.scss";
<<<<<<< HEAD
=======
@import "../assets/scss/transitions.scss";

>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
.waitOrder {
  height: 83.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-family: $worksans;
    font-weight: normal;
    font-size: 38px;
  }

  .myOrder {
    background: $black;
    color: $white;
    font-size: 2.4rem;
    font-family: $PT;
    font-weight: 600;
    padding: 10px 28px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
}
</style>