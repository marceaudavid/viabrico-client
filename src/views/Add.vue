<template>
  <div>
    <Nav/>
    <form class="form" @submit="request">
      <input type="text" v-model="name" name="name" placeholder="Name" required>
      <textarea v-model="description" name="description" placeholder="Description" required></textarea>
      <input type="text" v-model="address" name="address" placeholder="Address" required>
      <input type="number" v-model="phone" name="phone" placeholder="Phone" required>
      <input type="email" v-model="email" name="email" placeholder="Email" required>
      <Submit v-bind:loading="loading"/>
    </form>
  </div>
</template>

<script>
import router from "@/router.js";
import Nav from "@/components/Nav.vue";
import Submit from "@/components/Submit.vue";
export default {
  name: "Add",
  components: {
    Nav,
    Submit
  },
  data() {
    return {
      name: null,
      description: null,
      address: null,
      phone: null,
      email: null,
      errors: [],
      token: null,
      loading: false,
      response: null
    };
  },
  methods: {
    request(e) {
      e.preventDefault();
      this.loading = true;
      this.token = localStorage.getItem("token");
      fetch(`https://viabrico.herokuapp.com/suppliers`, {
        method: "POST",
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
          address: this.address,
          phone: this.phone,
          email: this.email
        })
      })
        .then(body => {
          return body.json();
        })
        .then(res => {
          this.loading = false;
          router.push({ name: "dashboard" });
          this.response = res;
        })
        .catch(() => {
          this.loading = false;
          this.errors.push(`Network error, please retry later`);
        });
    }
  }
};
</script>

<style>
</style>