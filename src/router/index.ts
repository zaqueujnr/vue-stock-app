import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/provider",
      name: "provider",
      component: () => import("../views/ProviderView.vue"),
    },
    {
      path: "/entry",
      name: "entry",
      component: () => import("../views/EntryView.vue"),
    },
    {
      path: "/exit",
      name: "exit",
      component: () => import("../views/ExitView.vue"),
    },
    {
      path: "/stock",
      name: "stock",
      component: () => import("../views/StockView.vue"),
    },
    {
      path: "/createProduct",
      name: "createProduct",
      component: () => import("../views/CreateProductView.vue"),
    },
    {
      path: "/createProvider",
      name: "createProvider",
      component: () => import("../views/CreateProviderView.vue"),
    },
                {
      path: "/createEntry",
      name: "createEntry",
      component: () => import("../views/CreateEntryView.vue"),
    },
                    {
      path: "/createExit",
      name: "createExit",
      component: () => import("../views/CreateExitView.vue"),
    },
                    {
      path: "/createStock",
      name: "createStock",
      component: () => import("../views/CreateStockView.vue"),
    },
  ],
});

export default routes;
