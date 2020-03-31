<template>
  <div class="order-status">
    <div class="order">
      <p>Ordernummer</p>
      <p class="order-nr">#{{order.orderNr}}</p>
    </div>
    <img src="../assets/graphics/drone.svg" alt="drone" class="drone" />
    <template v-if="order.orderNr == ''">
      <h1>Du har ingen order</h1>
      <button @click="redirect" class="btn pop">Beställ här</button>
    </template>
    <template v-else>
      <h1 v-if="this.$store.state.order.activeOrder">Din beställning är på väg!</h1>
      <h1 v-else>Din beställning är framme!</h1>
      <div class="eta">
        <p class="eta-minutes">{{order.eta}}</p>
        <p>minuter</p>
      </div>
      <button @click="redirect" class="btn pop">Ok, cool!</button>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.state.order.orderStatus;
    }
  },
  methods: {
    redirect() {
      this.$router.push("/menu");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/transitions.scss";

.order-status {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 66.7rem;
  padding: 4.8rem;
  background: $red;
  color: $white;

  h1 {
    font-size: 3.6rem;
    font-family: $PT;
    color: $white;
    font-weight: 600;
  }

  .order {
    display: flex;
    p {
      font-size: 1.6rem;
      font-family: $worksans;
      opacity: 0.7;
      margin-right: 0.5rem;
    }

    .order-nr {
      font-weight: 600;
    }
  }

  .eta {
    display: flex;
    p {
      font-size: 2.2rem;
      font-family: $worksans;

      margin-left: 0.5rem;
    }

    .eta-minutes {
      font-weight: 600;
    }
  }
}

.btn {
  background: $white;
  color: $black;
  font-size: 2.4rem;
  font-family: $PT;
  font-weight: 600;
  padding: 10px 28px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

.drone {
  animation-name: flying;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}

@keyframes flying {
  from {
    transform: translateX(0) translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>