<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-btn to="/">home</v-btn>
      <v-divider vertical></v-divider>
      <v-btn to="/datatable">datatable</v-btn>
      <v-spacer></v-spacer>
      <ShoppingCart></ShoppingCart>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: "App",
  components: { ShoppingCart},
  data: () => ({

  }),
  methods: {

  }
};
</script>
