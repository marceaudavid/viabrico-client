<template>
  <div class="container">
    <Nav/>
    <div class="container-card">
      <Info
        v-bind:id="id"
        v-bind:name="name"
        v-bind:address="address"
        v-bind:email="email"
        v-bind:phone="phone"
        v-bind:description="description"
      />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Info from "@/components/Info.vue";
export default {
  name: "Supplier",
  components: {
    Nav,
    Info
  },
  data() {
    return {
      name: null,
      description: null,
      address: null,
      phone: null,
      email: null
    };
  },
  created() {
    const token = localStorage.getItem("token");
    fetch(`https://viabrico.herokuapp.com/suppliers/${this.$route.params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(body => {
        return body.json();
      })
      .then(res => {
        this.name = res.name;
        this.description = res.description;
        this.address = res.address;
        this.phone = res.phone;
        this.email = res.email;
      });
  }
};
</script>

<style scoped>
.container-card {
  width: 100%;
  height: 89.3%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>