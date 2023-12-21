import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('@/views/EmotionSlider.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
