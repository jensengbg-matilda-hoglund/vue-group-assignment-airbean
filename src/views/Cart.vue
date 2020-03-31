<template>
  <div class="main">
<<<<<<< HEAD
      <section class="upp">
=======
    <section class="upp">
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
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
<<<<<<< HEAD
      <div class="wrapper">
        <h1>Din beställning</h1>
   <li class="order" v-for="product in menu" :key="product.id">
=======
    <div class="wrapper">
      <h1>Din beställning</h1>
      <li class="order" v-for="product in cart" :key="product.id">
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
        <div class="product-title">
          <h2>
            {{ product.title }}
            <!-- <span></span> -->
          </h2>
<<<<<<< HEAD
          <span class="dot-span"></span>
        </div>
        <br>
        <div class="product-price">
          <p>{{ product.price * product.quantity }}kr</p>
        </div>
            <img @click="addOneProduct" class="arrow" src="@/assets/graphics/arrow-up.svg">
            <strong class="arrow"> {{ $store.state.order.cart_counter }}</strong>
            <img @click="removeOneProduct" class="arrow" src="@/assets/graphics/arrow-down.svg">
      </li>
    <br>
   </div>
=======
        </div>
        <br />
        <div class="product-price">
          <p>{{ product.price * product.quantity }}kr</p>
        </div>
        <img @click="addOneProduct" class="arrow" src="@/assets/graphics/arrow-up.svg" />
        <strong class="arrow">{{ product.quantity }}</strong>
        <img @click="removeOneProduct" class="arrow" src="@/assets/graphics/arrow-down.svg" />
      </li>
      <br />
    </div>
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
  </div>
</template>

<script>
<<<<<<< HEAD
import getMenu from "../store/modules/getMenu"
import getOrderHistory from "../store/modules/getOrderHistory"
import getUuid from "../store/modules/getUuid"
import postOrder from "../store/modules/postOrder"
import postUser from "../store/modules/postUser"
import Nav from "../components/nav";

import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    name: 'Cart',
    components: {Nav
    },
    data() {
        return {
            
        };
        
    },
    created() {
    this.$store.dispatch("getOrderHistory");
    },
    computed: {
         ...mapState(["menu", "cart", "orderStatus"]),
        appCounter: function() {
            return this.$store.getters.getCounter
        },
        ...mapGetters({
          cart: state => state.cart,
          order: state => state.orders,
          user: state => state.uuid
        }), 
        cart() {
          return this.$store.state.menu.cart;
        }
    },
    methods: {
      nav() {
=======
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
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    },
<<<<<<< HEAD
  openCart() {
      this.$router.push("/menu");
    },
  addOneProduct(product) {
    if (this.state.order.cart_counter == Number) {
    this.$store.commit("addOneProduct", state);
    }else {
      console.log("error");
    }
    },
    removeOneProduct(product) {
      if (this.state.order.cart_counter == Number) {
      this.$store.commit("removeOneProduct", state);
      }else {
        console.log("error");
      }
    }
  }
}
=======
    openCart() {
      this.$router.push("/menu");
    },
    addOneProduct(product) {
      this.$store.commit("addOneProduct", product);
    },
    removeOneProduct(product) {
      this.$store.commit("removeOneProduct", product);
    }
  }
};
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

<<<<<<< HEAD
.main{
  width: 37.5rem;
  height: 83.9rem;
  border-radius: 3px;
background: rgba(0, 0, 0, 0.7);
}
.wrapper{
position: absolute;
left: 38.53%;
right: 38.53%;
top: 20.03%;
bottom: -48.1%;
background: #FFFFFF;
border-radius: 3px;
}
.upp{
=======
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
.upp {
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
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
<<<<<<< HEAD
        height: 4.8rem;
        width: 4.8rem;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }
=======
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 100%;
  border: none;
  cursor: pointer;
}
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
.cart-btn img {
  width: 1.6rem;
  height: 2.1rem;
}
<<<<<<< HEAD
.arrow{
=======
.arrow {
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
  display: flex;
  position: relative;
  left: 89%;
  top: 10%;
}
<<<<<<< HEAD
.product-title {
  grid-area: product-title;
  display: flex;
  flex-direction: column;
  width: 20rem;
  .dot-span {
    align-self: flex-end;
    width: 12rem;
    margin-right: 1rem;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
  }
}
=======
>>>>>>> ab07508512b3dcd17378ff9114a8bf03328a8646
</style>