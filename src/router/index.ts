import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home2.vue';
import InsuranceSucks from '../page-content/insurance-sucks.vue';
import HeyDavid from '../page-content/hey-david.vue';
import TheProblem from '../page-content/the-problem.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home-vue-route',
    component: Home,
  },
  {
    path: '/insurance-sucks',
    name: 'InsuranceSucks-vue-route',
    component: InsuranceSucks,
  },
  {
    path: '/hey-david',
    name: 'HeyDavid-vue-route',
    component: HeyDavid,
  },
  {
    path: '/the-problem',
    name: 'TheProblem-vue-route',
    component: TheProblem,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
