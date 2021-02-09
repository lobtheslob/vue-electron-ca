<template>
  <v-app>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import { displayCerts } from './certs.js';

export default {
  name: 'App',
  mounted() {
    displayCerts();
  }
};
</script>
