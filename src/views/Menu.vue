<template>
  <div class="menu">
    <title>This is MENU page</title>
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
    <h1>Meny</h1>
    <section class="products">
      <ul>
        <li v-for="product in menu" :key="product.id">
          <button @click="addProductToCart(product)" class="add-btn">
            <img src="../assets/graphics/add.svg" />
          </button>
          {{ product.title }}
          <!-- <span>...............</span>  -->
          {{ product.price }}
          <br />
          <span>{{ product.desc }}</span>
        </li>
      </ul>
    </section>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import nav from "@/components/nav.vue";
// import cart from '@/components/cart.vue'

export default {
  name: "Menu",
  components: { nav },
  created() {
    this.$store.dispatch("getMenu");
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    openMenu() {},
    openCart() {
      this.$router.push("/cart");
    },
    addProductToCart(product) {
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
.menu-btn,
.cart-btn {
  border-radius: 50%;
  margin: 2rem;
}
.menu-btn {
  width: 4.8rem;
  height: 4.8rem;
  border-color: $white;
  margin: 2rem;
}
.menu-btn img {
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

h1 {
  font-size: 42px;
  line-height: 120%;
  margin: 1.5rem;
}

.products {
  flex: 1 0 auto;

  width: 31.1rem;
  height: 47.4rem;
  margin: 1rem;
}
.products ul {
  margin: 0.5rem;
  list-style-type: none;
  text-decoration: none;
}
.products li {
  text-align: start;
  font-size: 23px;
  line-height: 120%;
}
.add-btn img {
  width: 1.2rem;
  height: 1.2rem;
}
.add-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border-color: $black;
  background-color: $black;
}
.footer {
  width: 37.5rem;
  height: 7.3rem;
  background-image: url("../assets/graphics/graphics-footer.svg");

  flex-shrink: 0;
}

h1,
li {
  text-align: center;
  color: $black;
  font-family: $PT;
  font-style: normal;
  font-weight: bold;
}
</style>
