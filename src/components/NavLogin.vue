<template>
  <div class="navBar">
    <a href="#">
      <img class="logo" src="../assets/img/viabricologo.png" alt="logo">
    </a>
  </div>
</template>

<script>
export default {
  name: "NavLogin",
  props: {
    title: String
  }
};
</script>

<style scoped>
.navBar {
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  height: 80px;
}
</style>