import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostContent from "../views/PostContent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/html",
    },
    {
      path: "/category/:category",
      component: PostList,
    },
    {
      path: "/post/:id",
      component: PostContent,
    },
  ],
});

export default router;
