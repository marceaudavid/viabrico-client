<template>
  <button class="btn">
    <router-link to="/add">
      <svg class="icon-add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="#1bbc9b"
          d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
        ></path>
      </svg>
    </router-link>
  </button>
</template>

<script>
export default {
  name: "AddButton"
};
</script>

<style>
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 2em;
  border: none;
  padding: none;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50px;
}

.link {
  width: 25px;
  height: 25px;
}

.icon-add {
  width: 100%;
  height: 100%;
}
</style>
