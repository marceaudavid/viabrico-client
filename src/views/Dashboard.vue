<template>
  <div>
    <Nav/>
    <SearchBar/>
    <button>
      <a href="/add">Add</a>
    </button>
    <p class="resultat">{{ suppliers.length }} Résultats</p>
    <div v-for="supplier in suppliers" v-bind:key="supplier.id">
      <div class="card">
        <Card
          v-bind:id="supplier.id"
          v-bind:name="supplier.name"
          v-bind:address="supplier.address"
          v-bind:mail="supplier.mail"
          v-bind:phone="supplier.phone"
          v-bind:description="supplier.description"
        />
      </div>
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
  },
  data() {
    return {
      suppliers: []
    };
  },
  created() {
    const token = localStorage.getItem("token");
    fetch(`https://viabrico.herokuapp.com/suppliers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(body => {
        return body.json();
      })
      .then(res => {
        this.suppliers = res;
      });
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