<template>
  <span>
    <v-chip v-model="this.$store.state.shoppingCart.items">{{this.$store.state.shoppingCart.items}}</v-chip>
    <v-button>
      <v-icon>mdi-cart-variant</v-icon>
    </v-button>
  </span>
</template>

<script>
export default {
  data:() => ({

  }),
  methods: {

  }

}
</script>
