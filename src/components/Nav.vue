<template>
  <div class="navBar">
    <a href="#">
      <img class="logo" src="../assets/img/viabricologo.png" alt="logo">
    </a>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import router from "@/router.js";
export default {
  name: "Nav",
  props: {
    title: String
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      router.push({ name: "login" });
    }
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