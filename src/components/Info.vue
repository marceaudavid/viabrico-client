<template>
  <div class="container">
    <div class="container-top">
      <div class="profil">
        <h1>{{ this.name }}</h1>
      </div>
    </div>

    <div class="container-bot">
      <div class="bot">
        <h2>Description</h2>
        <p>{{ this.description }}</p>
        <div class="coordon">
          <p>{{ this.address }}</p>
          <p>{{ this.phone }}</p>
          <p>{{ this.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    id: Number,
    name: String,
    address: String,
    email: String,
    phone: Number,
    description: String
  },
  data() {
    return {
      token: null,
      response: null,
      errors: []
    };
  }
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  border-radius: 30px;
  width: 970px;
  height: 700px;
  background-image: url("../assets/img/img_mountains.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Segoe UI;
  box-shadow: 2px 2px 50px 5px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 1000px) {
  .container {
    width: 85%;
    height: 85%;
  }
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
  margin: 15px 0 0 100px;
  display: flex;
}
.icon-profil {
  width: 100px;
}
.container-bot {
  background-color: white;
  height: 65%;
  border-radius: 0 0 25px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bot {
  height: 85%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.coordon {
  display: flex;
  justify-content: space-between;
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
  margin: 10px 0 10px 0;
}
a {
  margin-left: 20px;
}
</style>
