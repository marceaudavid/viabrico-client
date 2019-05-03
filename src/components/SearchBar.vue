<template>
  <div class="searchbar">
    <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"
      ></path>
    </svg>
    <input
      @keyup.enter="search"
      class="search"
      type="text"
      v-model="keyword"
      name="search"
      placeholder="Rechercher un fournisseur"
    >
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: null
    };
  },
  methods: {
    search() {
      this.$emit("search", this.keyword);
    }
  }
};
</script>
<style scoped>
.searchbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 50px;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50px;
}

.search {
  width: 95%;
  height: 100%;
  border: none;
  padding: 0px;
  font-size: 20px;
  font-family: "Lato";
  border-radius: 50px;
}

.icon-search {
  height: 25px;
  width: 25px;
  margin: 10px;
}
</style>