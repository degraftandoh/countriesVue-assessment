
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';
import TheNavbarComponent from '../components/TheNavbarComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/detail/:name',
    name: 'detail',
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
