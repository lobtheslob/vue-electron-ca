<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NewComponent />
  </div>
</template>


<script>

import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    NewComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>