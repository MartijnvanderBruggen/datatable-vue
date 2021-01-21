<template>
  <v-app>
    <v-app-bar app dark>
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
       <v-toolbar-title>
         <v-btn to="/">Home</v-btn>
         <v-btn to="/datatable">Datatable</v-btn>
         <v-btn to="/kb">Knowledge Base</v-btn>
       </v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
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
