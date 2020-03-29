<template>
  <div class="profile">
    <Nav v-if="openNav" @closeNav="nav" class="nav-overlay" />

    <section class="content">
      <div class="header">
        <button @click="nav" class="nav-btn">
          <img src="../assets/graphics/navicon.svg" alt />
        </button>
      </div>
      <Register v-if="user === null" class="register" />
      <section class="main">
        <section class="user">
          <img src="../assets/graphics/profile.svg" alt class="profile-img" />
          <h2 v-if="user != null" class="user-name">{{user.name}}</h2>
          <p v-if="user != null" class="user-email">{{user.email}}</p>
        </section>
        <section class="history">
          <h1>Orderhistorik</h1>
          <ul>
          <li v-for="(order, index) in orders" :key="index" class="order-list">
            <div class="left">
              <p class="order-nr">#{{order.orderNr}}</p>
              <p class="total">total ordersumma</p>
            </div>
            <div class="right">
              <p class="date">{{order.created}}</p>
              <p class="totalsum">{{order.totalValue}} Kr</p>
            </div>
          </li>
          </ul>
          <span class="divider"></span>
          <div class="sum-order">
            <p class="total-spend">Totalt spenderat</p>
            <p class="sum">{{sum}}</p>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import Nav from "../components/nav";
import Register from "../components/register";

export default {
  components: {
    Nav,
    Register
  },
  data: () => {
    return {
      openNav: false,
    };
  },
  computed: {
    orders() {
      this.$store.dispatch("getOrderHistory");
      return this.$store.state.orders.orders;
    },
    profile() {
      return this.$store.state.profile.uuid;
    },
    user() {
      return this.$store.state.register.user;
    },
    sum() {
      let sum = 0;
      this.orders.forEach(order => sum += order.totalValue);
      return sum;
    },
    totalDelsumma() {
      let totalDelsumma = 0;
      this.orders.forEach(order => order.cart.totalPrice);
      return totalDelsumma;
    }
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    }
  },
  created() {
    // save user in store from ls
    this.$store.commit("saveUser", JSON.parse(localStorage.getItem("user")));
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.nav-overlay {
  position: absolute;
  z-index: 2;
  // height: 106rem;
  background-color: $black;
}

.register {
  position: absolute;
  z-index: 1;
  padding: 2rem;
  bottom: 29%;
}

li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
li:last-child {
  border-bottom: 0;
}

.profile {
  background: $latte;
  min-height: 66.7rem;
  background-color: $black;
  background: url("../assets/graphics/graphics-header.svg") top no-repeat;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;

    .header {
      display: flex;
      margin-bottom: 6rem;

      .nav-btn {
        height: 4.8rem;
        width: 4.8rem;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      margin-bottom: auto;
      font-family: $worksans;
      padding: 0 2rem;

      .user {
        display: flex;
        flex-direction: column;
        color: $white;
        align-items: center;
        margin-bottom: 6rem;

        .user-name {
          font-size: 2.4rem;
          font-weight: 600;
          font-family: $PT;
          margin: 2rem 0 0.5rem 0;
          color: $white;
        }

        .user-email {
          font-size: 1.4rem;
          opacity: 0.8;
        }
      }

      .history {
        display: flex;
        flex-direction: column;
        padding: 1rem;

        h1 {
          font-size: 2.2rem;
          font-weight: 600;
          font-family: $PT;
          color: $white;
          align-self: flex-start;
          margin: 1rem 0;
        }

        .order-list {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 1rem 0;

          .left,
          .right,
          p {
            display: flex;
            flex-direction: column;

            font-size: 1.4rem;
            font-family: $worksans;
            color: $white;
            font-weight: 500;
          }
          .left {
            align-items: flex-start;
            .order-nr {
              font-weight: 600;
              text-transform: uppercase;
              opacity: 0.7;
            }

            .total {
              opacity: 0.5;
            }
          }

          .right {
            align-items: flex-end;
            .date {
              opacity: 0.7;
            }

            .totalsum {
              opacity: 0.5;
            }
          }
        }

        .divider {
          border-bottom: 1px solid $white;
          opacity: 0.6;
          width: 100%;
        }

        .sum-order {
          display: flex;
          justify-content: space-between;
          margin: 1.5rem 0;

          .total-spend,
          .sum {
            font-size: 1.4rem;
            font-weight: 600;
            color: $white;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>