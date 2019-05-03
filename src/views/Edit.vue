<template>
  <div>
    <Nav/>
    <div class="container-form-parent">
      <div class="container-form">
        <form class="form" @submit="update">
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
      id: null,
      name: null,
      description: null,
      address: null,
      phone: null,
      email: null,
      errors: [],
      token: null,
      loading: false
    };
  },
  methods: {
    update(e) {
      e.preventDefault();
      this.loading = true;
      this.token = localStorage.getItem("token");
      fetch(
        `https://viabrico.herokuapp.com/suppliers/${this.$route.params.id}`,
        {
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
            email: this.email
          })
        }
      )
        .then(body => {
          return body.json();
        })
        .then(res => {
          this.loading = false;
          this.response = res;
        })
        .catch(() => {
          this.loading = false;
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
        this.id = res.id;
        this.name = res.name;
        this.description = res.description;
        this.address = res.address;
        this.phone = res.phone;
        this.email = res.email;
      });
  }
};
</script>

<style>
.container-form-parent {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-form {
  width: 675px;
  height: 720px;
  margin: 10% 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  background-color: #1bbc9b;
  color: #fff;
  margin: 0;
}
</style>