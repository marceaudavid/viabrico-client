<template>
  <div class="searchBar">
    <button type="submit" class="icon-search">
      <img class="iconSearch" src="../assets/svg/search.svg" alt>
    </button>
    <input
      class="inputText"
      type="text"
      name="firstname"
      placeholder="Veuillez entrer un fournisseur"
    >
    <button class="icon-addPeaple">
      <img class="iconAddPeaple" src="../assets/svg/user-plus.svg" alt>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    title: String
  }
};
</script>
<style scoped>
.searchBar {
  width: 75%;
  margin: 50px auto 0 auto;
  border: #707070 1px;
  border-radius: 50px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.icon-search {
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 10px;
  border: none;
  background-color: white;
  border-radius: 50px;
}
.iconSearch {
  width: 50px;
  height: 40px;
}
.inputText {
  border: none;
  width: 90%;
}
.icon-addPeaple {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 60px;
  margin-right: 10px;
  border: none;
  background-color: white;
  border-radius: 50px;
}
.iconAddPeaple {
  width: 50px;
  height: 40px;
}
</style>