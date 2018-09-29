<template>
  <div id="app">
<<<<<<< HEAD
    <img src="./assets/logo.png">
    <HelloWorld/>
=======
    <Home />
>>>>>>> f9c8abda40a2697a3601524843bb50b7f38b6262
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
