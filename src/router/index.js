/*
 * @Date: 2021-05-27
 * @Description:
 */

import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App,
    redirect: "/home",
  },
  {
    name: "主页",
    path: "/home",
    component: () => import("@/views/home/index.vue"),
  },

  {
    name: "更多",
    path: "/more",
    component: () => import("@/views/more"),
  },
  {
    name: "隐私政策",
    path: "/privacy",
    component: () => import("@/views/privacy"),
  },
  {
    name: "法律条款",
    path: "/terms",
    component: () => import("@/views/terms"),
  },
  {
    name: "关于我们",
    path: "/about",
    component: () => import("@/views/about"),
  },
];

const router = new VueRouter({
  scrollBehavior(to, from) {
    // 异步

    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
