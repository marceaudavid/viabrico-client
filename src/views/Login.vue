<template>
  <Nav name="nav"/>
  <Form name="login"/>
</template>

<script>
import Form from "@/components/Form.vue";
import Nav from "@/components/NavLogin.vue";

export default {
  name: "Login",
  props: {
    name: String
  },
  components: {
    Form,
    Nav
  }
};
</script>

<style>
</style>
