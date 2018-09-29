<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Home from "./components/home/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5px;
}

.defaut-button {
  width: 100px;
}
</style>
