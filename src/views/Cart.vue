<template>
  <div class="main">
    <section class="upp">
      <!-- <nav class="nav"/> -->
      <button @click="nav" class="nav-btn">
        <img src="../assets/graphics/navicon.svg" />
      </button>
      <!-- <cart /> -->
      <button @click="openCart" class="cart-btn">
        <img src="../assets/graphics/bag.svg" />
      </button>
    </section>
    <div class="wrapper">
      <h1>Din beställning</h1>
      <li class="order" v-for="product in cart" :key="product.id">
        <div class="product-title">
          <h2>
            {{ product.title }}
            <!-- <span></span> -->
          </h2>
        </div>
        <br />
        <div class="product-price">
          <p>{{ product.price * product.quantity }}kr</p>
        </div>
        <img @click="addOneProduct" class="arrow" src="@/assets/graphics/arrow-up.svg" />
        <strong class="arrow">{{ product.quantity }}</strong>
        <img class="arrow" src="@/assets/graphics/arrow-down.svg" />
      </li>
      <br />
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav";
export default {
  name: "Cart",
  components: { Nav },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.order.cart;
    }
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    },
    openCart() {
      this.$router.push("/menu");
    },
    addOneProduct(state) {
      this.$store.commit("addOneProduct", state);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.main {
  width: 37.5rem;
  height: 83.9rem;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.7);
}
.wrapper {
  position: absolute;
  left: 38.53%;
  right: 38.53%;
  top: 20.03%;
  bottom: -48.1%;
  background: #ffffff;
  border-radius: 3px;
}
.upp {
  width: 37.5rem;
  height: 11.3rem;
  background-image: url("../assets/graphics/graphics-header.svg");
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cart-btn {
  width: 6rem;
  height: 6rem;
  background-color: $black;
  border-color: $black;
}
.nav-overlay {
  position: absolute;
}
.nav-btn {
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 100%;
  border: none;
  cursor: pointer;
}
.cart-btn img {
  width: 1.6rem;
  height: 2.1rem;
}
.arrow {
  display: flex;
  position: relative;
  left: 89%;
  top: 10%;
}
</style>