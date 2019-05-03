<template>
  <div class="navbar">
    <img v-on:click="home" class="logo" src="../assets/img/viabricologo.png" alt="logo">
    <button class="btn-logout" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import router from "@/router.js";
export default {
  name: "Nav",
  methods: {
    home() {
      router.push({ name: "dashboard" });
    },
    logout() {
      localStorage.removeItem("token");
      router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 50px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  height: 25px;
  margin: 10px;
}

.btn-logout {
  height: 30px;
  border: none;
  background-color: #1bbc9b;
  color: #fff;
  margin: 2em;
}
</style>