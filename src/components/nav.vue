<template>
  <div class="nav-overlay">
    <section class="content">
      <div class="header">
        <button @click="closeNav" class="nav-btn">
          <img src="../assets/graphics/close.svg" alt />
        </button>
      </div>
      <section class="nav">
        <p @click="menu" class="pop">Meny</p>
        <span class="divider"></span>
        <p @click="about" class="pop">Vårt Kaffe</p>
        <span class="divider"></span>
        <p @click="orderStatus" class="pop">Orderstatus</p>
        <span class="divider"></span>
        <p @click="myProfile" class="pop">Min profil</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      this.$emit("closeNav");
    },
    menu() {
      if (this.$route.path !== "/menu") {
        this.$router.push("/menu");
      } else {
        this.closeNav();
      }
    },
    about() {
      if (this.$route.path !== "/about") {
        this.$router.push("/about");
      } else {
        this.closeNav();
      }
    },
    orderStatus() {
      this.$router.push("/order-status");

      // if (this.$store.state.order.activeOrder === true) {
      //   if (this.$route.path !== "/order-status") {
      //     this.$router.push("/order-status");
      //   } else {
      //     this.closeNav();
      //   }
      // }
    },
    myProfile() {
      if (localStorage.getItem("uuid")) {
        if (this.$route.path !== "/profile") {
          this.$router.push("/profile");
        } else {
          this.closeNav();
        }
      } else {
        if (this.$route.path !== "/profile") {
          this.$store.dispatch("getUuid");
          this.$router.push("/profile");
        } else {
          this.$store.dispatch("getUuid");
          this.closeNav();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/transitions.scss";

.nav-overlay {
  width: 37.5rem;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $black;

  .header {
    display: flex;
    align-self: flex-start;
    .nav-btn {
      height: 4.8rem;
      width: 4.8rem;
      border-radius: 100%;
      border: none;
      cursor: pointer;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;
    height: 60rem;
    p {
      font-size: 3.2rem;
      font-weight: 600;
      font-family: $PT;
      cursor: pointer;
      margin: 2rem;
    }

    .divider {
      width: 5rem;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    }
  }
}
</style>