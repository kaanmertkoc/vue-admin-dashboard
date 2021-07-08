import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Request from "../views/SignInFlow/Request.vue";
import Recover from "../views/SignInFlow/Recover.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
