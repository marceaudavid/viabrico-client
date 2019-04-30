import Vue from "vue";
import Router from "vue-router";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Supplier from "./views/Supplier.vue";
import Edit from "./views/Edit.vue";
import Add from "./views/Add.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/register"
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: ":id",
          name: "supplier",
          component: Supplier,
          children: [
            {
              path: "edit",
              name: "edit",
              component: Edit
            }
          ]
        },
        {
          path: "add",
          name: "add",
          component: Add
        }
      ]
      // beforeEnter: (to, from, next) => {
      //   if (to.params.token === null || to.params.token === undefined) {
      //     next("/login");
      //   } else {
      //     next();
      //   }
      // }
    }
  ]
});
