<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Datatable />
  </div>
</template>

<script>
// @ is an alias to /src
import Datatable from "@/components/Datatable.vue";

export default {
  name: "Home",
  components: {
    Datatable
  }
};
</script>
