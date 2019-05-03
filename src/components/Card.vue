<template>
  <div class="container">
    <div class="container-top">
      <div class="option">
        <img class="icon-option" src="../assets/svg/_ionicons_svg_md-more.svg" alt="image-option">
        <img
          class="icon-option"
          v-on:click="editSupplier"
          src="../assets/svg/edit.svg"
          alt="image-edit"
        >
        <img
          class="icon-option"
          v-on:click="deleteSupplier"
          src="../assets/svg/delete.svg"
          alt="image-delete"
        >
      </div>
      <div class="profil">
        <img class="icon-profil" src="../assets/svg/icons8-administrator-male-filled.svg" alt>
      </div>
    </div>

    <div class="container-bot">
      <h1>{{ this.name }}</h1>
      <p>{{ this.address }}</p>
      <p>{{ this.phone }}</p>
      <p>{{ this.mail }}</p>
      <div class="read">
        <a class="link-read" href="#">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
export default {
  name: "Card",
  props: {
    id: Number,
    name: String,
    address: String,
    mail: String,
    phone: Number,
    description: String
  },
  data() {
    return {
      token: null,
      response: null,
      errors: []
    };
  },
  methods: {
    editSupplier() {
      router.push({
        path: `/supplier/${this.id}/edit`
      });
    },
    deleteSupplier() {
      this.$emit("delete", this.id);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 25px 25px 50px 25px;
  border-radius: 30px;
  width: 350px;
  height: 500px;
  background-image: url("../assets/img/img_mountains.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Segoe UI;
  box-shadow: 2px 2px 50px 5px rgba(0, 0, 0, 0.1);
}
.container-top {
  display: flex;
  flex-direction: column;
  height: 35%;
  border-radius: 25px 25px 0 0;
}
.option {
  width: 35px;
  margin: 10px 10px 0 auto;
}
.profil {
  margin: 0 auto;
}
.icon-profil {
  width: 100px;
}
.container-bot {
  background-color: white;
  height: 65%;
  border-radius: 0 0 25px 25px;
}
h1 {
  text-align: center;
  padding-top: 25px;
  font-size: 35px;
  margin-bottom: 25px;
}
.info {
  margin-bottom: 40px;
}
.read {
  margin-top: 40px;
}
.link-read {
  text-decoration: none;
  color: #0081f2;
}
p {
  text-align: center;
  margin: 10px 0 10px 0;
}
a {
  margin-left: 20px;
}
</style>
