<template>
  <button v-if="!loading" class="submit" type="submit">Submit</button>
  <button v-else class="submit" type="submit">
    <div class="loader"></div>
  </button>
</template>

<script>
export default {
  name: "Submit",
  props: {
    loading: Boolean
  },
  methods: {
    isLoading() {}
  }
};
</script>

<style>
.submit {
  margin: 20px 0px;
  cursor: pointer;
  font-family: "Lato", Courier, monospace;
  font-size: 1em;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #2c3e50;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
