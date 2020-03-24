<template>
  <div class="order-status">
    <div class="order">
      <p>Ordernummer</p>
      <p class="order-nr">#{{orderStatus.orderNr}}</p>
    </div>
    <img src="../assets/graphics/drone.svg" alt="drone" />
    <h1>Din beställning är på väg!</h1>
    <div class="eta">
      <p class="eta-minutes">{{orderStatus.eta}}</p>
      <p>minuter</p>
    </div>
    <button @click="redirect" class="btn">Ok, cool!</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    orderStatus() {
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
}
</style>