import { type } from "os";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const modules = import.meta.globEager('./home/*.ts')
export const routerList = Object.values(modules).map((item:any)=>item.default).sort((a,b)=>a.sort-b.sort);
export type List =typeof routerList;

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect:"/main",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/Layout/index.vue"),
    children:routerList
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录页",
      keepAlive: true
    },
    component: () => import("../views/Login/index"),
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;