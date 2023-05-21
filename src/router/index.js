import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      alias: '/',
      name: 'login',
      component: () => import('../views/LoginPage/LoginPage.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/WelcomePage/WelcomePage.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/Details/DetailsPage.vue')
    }
  ]
})

export default router
