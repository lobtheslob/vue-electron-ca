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
  },
   methods: {
      test(){
        window.ipcRenderer.send('hello') // or any other ipcRenderer method you want to invoke
    },

    //   mounted() {
    //     ipc.on('chanel', (event, message) => {
    //       console.log(message);
    //       console.log(event);
    // });
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