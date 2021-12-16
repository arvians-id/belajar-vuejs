import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Posts from "../views/Post.vue";
import PostCreate from "../views/Post-create.vue";
import PostDetail from "../views/Post-detail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/posts",
    name: "post.index",
    component: Posts,
  },
  {
    path: "/posts/create",
    name: "post.create",
    component: PostCreate,
  },
  {
    path: "/posts/:id",
    name: "post.show",
    component: PostDetail,
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
