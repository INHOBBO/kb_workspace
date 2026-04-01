// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ElectronicsPage from '../pages/ElectronicsPage.vue';
import JeweleryPage from '../pages/JeweleryPage.vue';
import MensClothingPage from '../pages/MensClothingPage.vue';
import WomensClothingPage from '../pages/WomensClothingPage.vue';

const routes = [
  // 1. 홈
  { path: '/', name: 'home', component: HomePage },
  // 2. 가전
  { path: '/electronics', name: 'electronics', component: ElectronicsPage },
  // 3. 주얼리
  { path: '/jewelery', name: 'jewelery', component: JeweleryPage },
  // 4. 남성의류
  {
    path: '/mensclothing',
    name: "men's clothing",
    component: MensClothingPage,
  },
  // 5. 여성의류
  {
    path: '/womensclothing',
    name: "women's clothing",
    component: WomensClothingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
