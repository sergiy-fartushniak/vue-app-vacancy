import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AuthPage from '../views/Auth.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    component: () => import('../views/Vacancies.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
