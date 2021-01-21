import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DataTable from "../views/DataTable.vue";
import KnowledgeBase from "../components/KnowledgeBase.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/datatable",
    name: "datatable",
    component: DataTable
  },
  {
    path: "/kb",
    name: "kb",
    component: KnowledgeBase
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
