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
      path: "/add",
      name: "add",
      component: Add,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "/supplier/:id",
      name: "supplier",
      component: Supplier,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "/supplier/:id/edit",
      name: "edit",
      component: Edit,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});
