<template>
  <div class="container">
    <Nav/>
    <div class="container-form-parent">
      <div class="container-form">
        <form class="form" @submit="request">
          <div class="title">
            <h1 class="title-edit">NEW SUPPLIER</h1>
            <hr>
          </div>
          <label class="label-edit" for>Name :</label>
          <input class="input-edit" type="text" v-model="name" name="name" required>
          <label class="label-edit" for>Address :</label>
          <input class="input-edit" type="text" v-model="address" name="address" required>
          <label class="label-edit" for>Phone-Number :</label>
          <input class="input-edit" type="number" v-model="phone" name="phone" required>
          <label class="label-edit" for>Email :</label>
          <input class="input-edit" type="email" v-model="email" name="email" required>
          <label class="label-edit" for>Description :</label>
          <textarea class="description" v-model="description" name="description" required></textarea>
          <Submit class="button" v-bind:loading="loading"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Submit from "@/components/Submit.vue";
export default {
  name: "Edit",
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

<style>
.container {
  width: 100%;
  height: 100%;
}
.container-form-parent {
  height: 89.4%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5ded8;
}
.container-form {
  width: 675px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f8;
  border-radius: 15px;
}
@media screen and (max-width: 700px) {
  .container-form {
    width: 85%;
  }
}
.form {
  height: 680px;
  width: 535px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
@media screen and (max-width: 700px) {
  .form {
    width: 85%;
  }
}
.title {
  width: 85%;
  text-align: center;
  margin: 0px auto;
}
.title-edit {
  margin-bottom: 20px;
  font-size: 1.5em;
}
hr {
  border: solid 1px #707070;
}
.label-edit {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.input-edit {
  background-color: #e8eeee;
  border: none;
  height: 30px;
}
.description {
  background-color: #e8eeee;
  border: none;
  height: 200px;
}
.button {
  height: 50px;
  border: none;
  background-color: #4cc96e;
  margin: 0;
}
</style>