<template>
  <div>
    <Nav/>
    <div class="dashboard">
      <div class="action">
        <SearchBar/>
        <AddButton/>
      </div>
      <p class="result">{{ suppliers.length }} résultats</p>
      <div class="feed">
        <Card
          v-for="supplier in suppliers"
          v-bind:key="supplier.id"
          v-on:remove="remove"
          v-bind:id="supplier.id"
          v-bind:name="supplier.name"
          v-bind:address="supplier.address"
          v-bind:email="supplier.email"
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
import AddButton from "@/components/AddButton.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Dashboard",
  components: {
    Nav,
    SearchBar,
    AddButton,
    Card
  },
  data() {
    return {
      suppliers: [],
      response: null
    };
  },
  methods: {
    remove(id) {
      this.token = localStorage.getItem("token");
      fetch(`https://viabrico.herokuapp.com/suppliers/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${this.token}`
        }
      })
        .then(body => {
          return body.json();
        })
        .then(res => {
          this.response = res.msg;
          this.suppliers = this.suppliers.filter(
            supplier => supplier.id !== id
          );
        })
        .catch(() => {
          this.errors.push(`Network error, please retry later`);
        });
    }
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
.dashboard {
  display: flex;
  flex-direction: column;
  margin: 5%;
}

.action {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.result {
  display: flex;
  justify-content: center;
}
.feed {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>