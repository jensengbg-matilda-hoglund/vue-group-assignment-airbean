<template>
  <div class="menu">
    <title>This is MENU page</title>
    <section class="upp">
      <Nav v-if="openNav" @closeNav="nav" class="nav-overlay" />
      <template v-else>
        <button @click="nav" class="nav-btn">
          <img src="../assets/graphics/navicon.svg" />
        </button>
        <!-- <cart /> -->
        <div class="ellipce">
          <h3 class="quantity-ellipse">{{ $store.state.order.cart_counter }}</h3>
        </div>
        <button @click="openCart" class="cart-btn">
          <img src="../assets/graphics/bag.svg" />
        </button>
      </template>
    </section>
    <h1>Meny</h1>
    <section class="products">
      <div class="prod" v-for="product in menu" :key="product.id">
        <button @click="addToCart(product)" class="add-btn">
          <img src="../assets/graphics/add.svg" />
        </button>
        <div class="product-title">
          <h2>{{ product.title }}</h2>
          <span class="dot-span"></span>
        </div>
        <div class="product-desc">
          <p class="p-prod-desc">{{ product.desc }}</p>
        </div>
        <div class="product-price">
          <h2>{{ product.price }}kr</h2>
        </div>
      </div>
    </section>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
// import cart from "@/components/cart.vue"

export default {
  name: "Menu",
  components: { Nav },
  data: () => {
    return {
      openNav: false
    };
  },
  created() {
    this.$store.dispatch("getMenu");
  },
  computed: {
    menu() {
      return this.$store.state.menu.menu;
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
      // send order here until cart is done
      // added this so we can change send order btn until responds comes back
      // due to the added delay of 2seconds in backend.
      let promise = new Promise(resolve => {
        if (localStorage.getItem("user")) {
          const url = "http://localhost:5000/api/beans/userOrder";
          resolve(this.$store.dispatch("sendOrder", url));
        } else {
          const url = "http://localhost:5000/api/beans/unregOrder";
          resolve(this.$store.dispatch("sendOrder", url));
        }
      });
      promise.then(() => {
        this.$router.push("/order-status");
      });
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
    }
  }
};
</script>

<style lang="scss" scooped>
@import "../assets/scss/variables.scss";

.menu {
  width: 37.5rem;
  height: 83.9rem;
  background: $latte;
  display: flex;
  flex-direction: column;
}
.upp {
  width: 37.5rem;
  height: 11.3rem;
  background-image: url("../assets/graphics/graphics-header.svg");
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-overlay {
  position: absolute;
  height: 83.9rem;
  background-color: $black;
}
.nav-btn,
.cart-btn {
  border-radius: 50%;
  margin: 2rem;
}
.nav-btn {
  width: 4.8rem;
  height: 4.8rem;
  border-color: $white;
  margin: 2rem;
  border: none;
}
.nav-btn img {
  width: 2.6rem;
  height: 2rem;
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
.ellipce {
  height: 2.6rem;
  width: 2.6rem;
  background: #e5674e;
  border-radius: 50%;
  position: relative;
  left: 43%;
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

.products {
  flex: 1 0 auto;

  width: 31.1rem;
  height: 47.4rem;
  margin: 2rem;
}

.add-btn {
  grid-area: add-btn;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border-color: $black;
  background-color: $black;
  cursor: pointer;
}
.add-btn img {
  width: 1.2rem;
  height: 1.2rem;
}
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
.product-desc {
  grid-area: product-desc;
}
.product-price {
  grid-area: product-price;
}

.prod {
  display: grid;
  grid-template-columns: 2fr 9fr 2fr;
  grid-template-areas:
    "add-btn product-title product-price"
    "add-btn product-desc product-price";
  padding: 1.1rem;
  justify-items: flex-start;
  align-items: baseline;
}

.footer {
  width: 37.5rem;
  height: 7.3rem;
  background-image: url("../assets/graphics/graphics-footer.svg");

  flex-shrink: 0;
}

.p-prod-desc,
h1,
h2,
h3 {
  text-align: center;
  color: $black;
  font-family: $PT;
  font-style: normal;
  font-weight: bold;
}
h1 {
  font-size: 42px;
  line-height: 120%;
  margin: 1.5rem;
}
h2 {
  font-size: 23px;
  line-height: 120%;
  align-self: flex-start;
  margin-bottom: -0.5rem;
}

.p-prod-desc {
  font-family: $worksans;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
  color: #2f2926;
  margin-top: 0.5rem;
}
</style>
