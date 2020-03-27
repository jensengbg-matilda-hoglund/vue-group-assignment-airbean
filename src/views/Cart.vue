<template>
  <div class="main">
      <section class="upp">
      <!-- <nav class="nav"/> -->
      <button @click="openMenu" class="menu-btn">
        <img src="../assets/graphics/navicon.svg" />
      </button>

      <!-- <cart /> -->
      <button @click="openCart" class="cart-btn">
        <img src="../assets/graphics/bag.svg" />
      </button>
    </section>
      <div class="wrapper">
        <h1>Din beställning</h1>
      <strong class="counter">{{ $store.state.order.cart_counter }}</strong>
    <img @click="addOneProduct" class="arrow" src="@/assets/graphics/arrow-up.svg">
    <br>
    <img class="arrow" src="@/assets/graphics/arrow-down.svg">
      </div>
  </div>
</template>

<script>
import getMenu from "../store/modules/getMenu"
import getOrderHistory from "../store/modules/getOrderHistory"
import getUuid from "../store/modules/getUuid"
import postOrder from "../store/modules/postOrder"
import postUser from "../store/modules/postUser"
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
    name: 'Cart',
    data() {
        return {
            
        };
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
        })
    },
    methods: {
  openCart() {
      this.$router.push("/menu");
    },
  addOneProduct() {
    this.$store.state.cart_counter.commit("addOneProduct");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

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
.cart-btn img {
  width: 1.6rem;
  height: 2.1rem;
}
.arrow{
  display: flex;
  position: relative;
  left: 89%;
  top: 10%;
}
</style>