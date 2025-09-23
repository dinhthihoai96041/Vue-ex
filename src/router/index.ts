import { createRouter, createWebHashHistory } from "vue-router";
import TodoApp from "../views/TodoApp.vue";
import WeatherApp from "../views/WeatherApp.vue";

const routes = [
  { path: "/", component: TodoApp },
  { path: "/todo", component: TodoApp },
  { path: "/weather", component: WeatherApp },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
