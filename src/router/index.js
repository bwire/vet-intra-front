import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import Signin from '../components/auth/Signin.vue';
import Signup from '../components/auth/Signup.vue';
import Orders from '../components/Orders.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/signin', name: 'signin', component: Signin },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/orders', name: 'orders', component: Orders },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
