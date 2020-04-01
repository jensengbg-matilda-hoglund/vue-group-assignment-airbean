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
      <div class="ellipce">
          <h3 class="quantity-ellipse">{{ $store.state.order.cart_counter }}</h3>
        </div>
    </section>
    <div class="wrapper">
      <h1>Din beställning</h1>
      <li class="order" v-for="product in cart" :key="product.id">
        <div class="product-title">
          <h2>
            {{ product.title }}
            <!-- <span></span> -->
          </h2>
          <span class="dot-span"></span>
        </div>
        <br />
        <div class="product-price">
          <p>{{ product.price * product.quantity }}kr</p>
        </div>
        <img @click="addOneProduct" class="arrow" src="@/assets/graphics/arrow-up.svg" />
        <br>
        <strong class="arrow">{{ product.quantity }}</strong>
        <br>
        <img @click="removeOneProduct" class="arrow" src="@/assets/graphics/arrow-down.svg" />
      </li>
      <br />
      <div class="total">
        <h2 class="total-text">Total</h2>
        <h2 class="total-price"></h2>
        <p>inkl moms + drönarleverans</p>
        <button @click="sendOrder" class="checkout-btn">Take my money!</button>
      </div>
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
  /*created() {
    this.$store.dispatch("getMenu");
    this.$store.dispatch("orderStatus");
  },*/
  computed: {
    cart() {
      console.log(this.$store.state.order.cart);
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
    addOneProduct(state, product) {
      this.$store.commit("addOneProduct", product);
    },
    removeOneProduct(state, product) {
      this.$store.commit("removeOneProduct", product);
    },
    sendOrder() {
      this.$store.dispatch("sendOrder")
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
.order{
  list-style-type: none;
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
  cursor: pointer;
}
.total-text {
  display: flex;
  justify-content: left;
}
.checkout-btn {
  font-size: 1.9rem;
  padding: 0.8rem 2rem;
  border: solid;
  border-radius: 2.5rem;
  color: white;
  background: $black;
  margin-top: 8rem;
  margin-left: 15%;
}
</style>