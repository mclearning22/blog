import { createRouter, createWebHistory } from "vue-router";
import PostContent from "../views/PostContent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/html",
    },
    {
      path: "/:category",
      component: PostContent,
    },
  ],
});

export default router;
