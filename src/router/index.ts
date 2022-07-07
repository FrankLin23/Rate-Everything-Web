import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
    redirect: "/moment",
    children: [
      {
        path: "/user",
        component: () => import("@/views/User/index.vue"),
      },
      {
        path: "/404",
        component: () => import("@/views/Error/404.vue"),
      },
      {
        path: "/moment",
        component: () => import("@/views/Moment/index.vue"),
      },
      {
        path: "/entertainment",
        component: () => import("@/views/Pages/Entertainment/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
