<template>
  <div class="card">
    <div class="card-head">
      <h1 id="name">{{ this.name }}</h1>
    </div>
    <div class="card-body">
      <p id="address">{{ this.address }}</p>
      <p id="phone">{{ this.phone }}</p>
      <p id="email">{{ this.email }}</p>
    </div>
    <div class="card-action">
      <svg v-on:click="more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
        ></path>
      </svg>
      <svg v-on:click="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"
        ></path>
      </svg>
      <svg v-on:click="remove" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"
        ></path>
      </svg>
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
    email: String,
    phone: Number,
    description: String
  },
  methods: {
    more() {
      router.push({
        path: `/supplier/${this.id}`
      });
    },
    edit() {
      router.push({
        path: `/supplier/${this.id}/edit`
      });
    },
    remove() {
      this.$emit("remove", this.id);
    }
  }
};
</script>

<style scoped>
.card {
  flex: 1 0 250px;
  height: 250px;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Lato";
  font-weight: lighter;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

@media screen and (min-width: 1047px) {
  .card {
    max-width: 250px;
  }
}

.card-head {
  padding: 20px 0px;
  border-bottom: 0.5px solid #1bbc9b;
}

#name {
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-weight: bold;
}

.card-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 20px;
}

.card-action {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 0.5px solid #1bbc9b;
}

.card-action svg {
  width: 25px;
  height: 25px;
  padding: 10px 20px;
  color: #1bbc9b;
}

.card-action svg path {
  transition: all 0.5s;
}

.card-action svg:hover {
  cursor: pointer;
}

.card-action svg:hover path {
  fill: #1bbc9b;
}
</style>
