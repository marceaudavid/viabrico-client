<template>
  <div class="container">
    <h1 class="title">{{ name }}</h1>
    <Popup v-for="(error, index) in errors" :key="index" v-bind:error="error"/>
    <form class="form" @submit="request">
      <input class="input" type="email" v-model="email" name="email" placeholder="Email" required>
      <input
        class="input"
        type="password"
        v-model="password"
        name="password"
        placeholder="Password"
        required
      >
      <Submit v-bind:loading="loading"/>
    </form>
  </div>
</template>

<script>
import router from "@/router.js";
import Popup from "@/components/Popup.vue";
import Submit from "@/components/Submit.vue";

export default {
  name: "Form",
  props: {
    name: String
  },
  components: {
    Popup,
    Submit
  },
  data: function() {
    return {
      loading: false,
      email: null,
      password: null,
      response: null,
      errors: []
    };
  },
  methods: {
    request(e) {
      e.preventDefault();
      this.loading = true;
      fetch(`https://viabrico.herokuapp.com/${this.name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
        .then(body => {
          if (body.status === 403) {
            this.errors.push(`Wrong password`);
          } else if (body.status === 404) {
            this.errors.push(`This user doesn't exist`);
          } else {
            if (this.name === "register") {
              router.push({ name: "login" });
            } else {
              return body.json();
            }
          }
        })
        .then(res => {
          console.log(res);
          this.loading = false;
          if (this.name === "login") {
            router.push({ name: "dashboard", params: { token: res } });
          }
        })
        .catch(() => {
          this.loading = false;
          this.errors.push(`Network error, please retry later`);
        });
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(254, 253, 253, 0.3),
      rgba(254, 253, 253, 0.3)
    ),
    url(../assets/img/city-background-3.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.title {
  margin: 20px 0px;
  text-transform: uppercase;
  font-family: "Montserrat", Courier, monospace;
  font-size: 1.5em;
  color: #2c3e50;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.input {
  width: 250px;
  height: 25px;
  margin: 5px 0px;
  padding: 0px 5px;
  font-family: "Lato", Courier, monospace;
  font-size: 1em;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  color: #2c3e50;
}

.input::placeholder {
  font-family: "Lato", Courier, monospace;
  color: #2c3e50;
}
</style>
