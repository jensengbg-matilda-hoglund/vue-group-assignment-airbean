<template>
  <div class="order-history">
    <h1>Order History goes here</h1>
    <button @click="send">send order</button>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      this.$store.dispatch("sendOrder");
    }
  }
};
</script>