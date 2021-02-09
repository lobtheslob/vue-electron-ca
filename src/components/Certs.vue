<template>
  <div>
    <div id="certs">
      {{data}}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ca } from 'win-ca/api'
import withOut from 'without'

export default {
  name: 'Certs',
   data() {
    return {
      data: {}
    }
},
  beforeMount(){
    this.getCerts();
  },
  methods: {
    async getCerts(){
    
    await fetch().then(render)
      function fetch() {
          var list = []
          return new Promise(resolve => {
                  ca({
                      store: 'My',
                      async: true,
                      // format: ca.der2.txt,
                      format: ca.der2.pem,
                      ondata: list,
                      onend: resolve
                  })
              })
              .then(_ => list)
      }
      function render(list) {
           for (let pem of roots) {
              button(pem)
          }
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  text-align: center;
}
textarea {
  width: 100%;
  height: 12em;
}

</style>
