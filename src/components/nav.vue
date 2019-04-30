<template>
  <div class="nav">
    <img class="logo" src="../assets/icons/close.svg" alt="logo">
  </div>
</template>


<script>
export default {
  name: "Nav",
  data() {
    return {
      display: true
    };
  },
  methods: {}
};
</script>

<style scoped>
.nav {
  width: 100%;
  background-color: black;
}
.logo {
}
</style>
