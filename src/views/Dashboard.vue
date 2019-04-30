<template>
  <div>
    <Nav/>
    <SearchBar/>
    <p class="resultat">3 Résultats</p>
    <div class="card">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Dashboard",
  components: {
    Nav,
    SearchBar,
    Card
  }
};
</script>

<style>
* {
  font-family: Segoe UI;
}
body {
  background-color: white;
}
.resultat {
  margin: 10px auto 50px auto;
  text-align: center;
  font-family: Segoe UI;
  color: #707070;
}
.card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 95%;
}
</style>