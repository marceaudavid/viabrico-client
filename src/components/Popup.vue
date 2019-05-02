<template>
  <div v-if="display" class="popup">
    <p class="popup-text">{{error}}</p>
    <img
      v-on:click="togglePopup"
      class="popup-icon"
      src="@/assets/icons/close.svg"
      alt="close popup"
    >
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    error: String
  },
  data() {
    return {
      display: true
    };
  },
  methods: {
    togglePopup() {
      this.display = !this.display;
    }
  }
};
</script>

<style>
.popup {
  width: 250px;
  min-height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px auto auto auto;
  padding: 0px 5px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  background-color: #e74c3c;
}
.popup-text {
  margin: 0px;
  font-family: "Montserrat", Courier, monospace;
  font-size: 1em;
  color: #2c3e50;
}
.popup-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
