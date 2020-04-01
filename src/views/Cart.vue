<template>
  <div class="main">
    <section class="upp">
      <!-- <nav class="nav"/> -->
      <transition name="fade">
        <Nav v-if="openNav" @closeNav="nav" class="nav-overlay" />
      </transition>
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
      <h2 class="order-title">Din beställning</h2>
      <br />
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
        <img @click="addOneProduct(product)" class="arrow" src="@/assets/graphics/arrow-up.svg" />
        <br />
        <strong class="arrow">{{ product.quantity }}</strong>
        <br />
        <img
          @click="removeOneProduct(product)"
          class="arrow"
          src="@/assets/graphics/arrow-down.svg"
        />
      </li>
      <br />
      <div class="total">
        <h2 class="total-text">Total</h2>
        <span class="dot-span"></span>
        <h2 class="total-price">{{ sum }}kr</h2>
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
    return {
      openNav: false
    };
  },
  computed: {
    cart() {
      console.log(this.$store.state.order.cart);
      return this.$store.state.order.cart;
    },
    sum() {
      let sum = 0;
      this.cart.forEach(order => (sum += order.totPrice));
      return sum;
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
    addOneProduct(product) {
      this.$store.commit("addOneProduct", product);
    },
    removeOneProduct(product) {
      this.$store.commit("removeOneProduct", product);
    },
    sendOrder() {
      clearInterval(this.$store.state.order.intervalID);
      this.$store.dispatch("getOrderHistory");
      this.$router.push("/order-status");
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
  margin: 2rem;
  padding: 2rem;
  background: #ffffff;
  border-radius: 3px;
}
.order-title {
  margin-top: 3%;
  margin-bottom: 2%;
}
.order {
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
  position: relative;
  width: 6rem;
  height: 6rem;
  background-color: $black;
  border-color: $black;
  left: 25%;
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
.ellipce {
  height: 2.6rem;
  width: 2.6rem;
  background: #e5674e;
  border-radius: 50%;
  position: relative;
  left: -8%;
  top: 12%;
}
.quantity-ellipse {
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 20%;
  font-size: 12px;
  line-height: 120%;
  color: #ffffff;
}
.cart-btn img {
  width: 1.6rem;
  height: 2.1rem;
}
.product-title {
  position: relative;
  top: 3.8rem;
}
.product-price {
  position: relative;
  top: 3.5rem;
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
.total-price {
  display: flex;
  position: relative;
  left: 75%;
}
.checkout-btn {
  font-size: 1.9rem;
  padding: 1rem 2rem;
  border: solid;
  border-radius: 2.5rem;
  color: white;
  background: $black;
  margin-top: 8rem;
  margin-left: 15%;
  font-family: $PT;
  cursor: pointer;
}
</style>