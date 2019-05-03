<template>
  <div class="container">
    <div class="container-card">
      <div class="container-title">
        <h1 class="title">Register</h1>
      </div>
      <div class="container-center">
        <Popup v-for="(error, index) in errors" :key="index" v-bind:error="error"/>
        <form class="form" @submit="request">
          <div class="container-input-parent">
            <div class="container-input">
              <input
                class="input"
                type="email"
                v-model="email"
                name="email"
                placeholder="Email"
                required
              >
              <input
                class="input"
                type="password"
                v-model="password"
                name="password"
                placeholder="Password"
                required
              >
              <p>
                No account ?
                <a href="login">Login</a>
              </p>
            </div>
          </div>
          <Submit v-bind:loading="loading"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
import Popup from "@/components/Popup.vue";
import Submit from "@/components/Submit.vue";

export default {
  name: "Register",
  components: {
    Popup,
    Submit
  },
  data() {
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
      fetch(`https://viabrico.herokuapp.com/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
        .then(body => {
          if (body.status === 400) {
            this.errors.push(`User already exists`);
          } else if (body.status === 500) {
            this.errors.push(
              `Your account can't be created pleaser retry later`
            );
          } else {
            router.push({ name: "login" });
            return body.json();
          }
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
.container-card {
  height: 60%;
  width: 40%;
  font-family: Segoe UI;
}
@media screen and (max-width: 640px) {
  .container-card {
    height: 50%;
    width: 75%;
  }
}
.container-title {
  display: flex;
  justify-content: center;
  height: 14%;
  align-items: center;
  background: linear-gradient(#3c3d4b, #675558);
  border-radius: 25px 25px 0 0;
}

.title {
  margin: 0;
  color: #ff5d00;
  text-transform: uppercase;
  font-size: 2em;
}
@media screen and (max-width: 640px) {
  .title {
    font-size: 1.5em;
  }
}
.container-center {
  background-color: white;
  border-radius: 0 0 25px 25px;
  height: 86%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
}
.container-input-parent {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-input {
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-around;
  width: 85%;
}
.input {
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-family: "Lato", Courier, monospace;
  font-size: 1.5em;
  border-bottom: 1px solid;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #2c3e50;
  padding-bottom: 10px;
}
@media screen and (max-width: 640px) {
  .input {
    font-size: 1em;
  }
}

.input::placeholder {
  font-family: "Lato", Courier, monospace;
  color: #2c3e50;
}
p {
  color: #707070;
}
a {
  text-decoration: none;
  color: #ff5d00;
}
.submit {
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 0;
  height: 19%;
  border-radius: 0 0 25px 25px;
  background: linear-gradient(#675558, #3c3d4b);
  color: #ff5d00;
  text-transform: uppercase;
  font-size: 2em;
  margin: 0;
}
@media screen and (max-width: 640px) {
  .submit {
    font-size: 1.5em;
  }
}
</style>