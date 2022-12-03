import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import Home from "../views/Home.vue";
import Favorite from "../views/Favorite.vue";
import NewPost from "../views/NewPost.vue";
import User from "../views/User.vue";
import Notification from "../views/Notification.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "about",
    component: LoginView,
  },
  {
    path: "/NewPost",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/Favorite",
    name: "Favorite",
    component: Favorite,
  },
  {
    path: "/User",
    name: "User",
    component: User,
  },
  {
    path: "/Notification",
    name: "Notification",
    component: Notification,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
