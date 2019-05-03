<template>
  <div class="container">
    <Nav/>
    <div class="container-card">
      <InfoCard
        v-bind:id="id"
        v-bind:name="name"
        v-bind:address="address"
        v-bind:mail="mail"
        v-bind:phone="phone"
        v-bind:description="description"
      />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import InfoCard from "@/components/InfoCard.vue";
import Submit from "@/components/Submit.vue";
export default {
  name: "Edit",
  components: {
    Nav,
    InfoCard,
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
      response: null,
      loading: false
    };
  },
  methods: {
    request(e) {
      e.preventDefault();
      this.loading = true;
      this.token = localStorage.getItem("token");
      fetch(`https://viabrico.herokuapp.com/suppliers`, {
        method: "PUT",
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${this.token}`
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
          address: this.address,
          phone: this.phone,
          mail: this.email
        })
      })
        .then(body => {
          return body.json();
        })
        .then(res => {
          this.loading = false;
          this.response = res;
        })
        .catch(() => {
          this.loading = false;
          this.errors.push(`Network error, please retry later`);
        });
    }
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
        this.email = res.mail;
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
