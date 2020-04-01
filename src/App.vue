<template>
  <div id="app">
    <transition name="welcome">
      <router-view />
    </transition>
  </div>
</template>


<style lang="scss">
// google fonts
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Rufina|Work+Sans&display=swap");
@import "./assets/scss/transitions.scss";
@import "./assets/scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
}

html {
  background: $white;
  max-width: 100vw;
  height: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 37.5rem;
  min-height: 66.7rem;
  background: $black;
}
</style>