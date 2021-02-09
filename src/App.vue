<template>
  <div>
    <div id="app">
      <Certs />
    </div>
  </div>
</template>

<script>
import Certs from './components/Certs.vue'

export default {
  name: 'App',
  components: {
    Certs
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
