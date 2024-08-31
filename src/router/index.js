import { createRouter, createWebHistory } from 'vue-router'

// Auth
import Login from '@/views/Auth/LoginView.vue'
import Register from '@/views/Auth/RegisterView.vue'
import NotFoundError from '@/views/Auth/NotFoundError.vue'
import PasswordResetRequestView from '@/views/Auth/PasswordResetRequestView.vue'

// Pages
import Dashboard from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/404-not-found',
      name: '404-not-found',
      component: NotFoundError
    },
    {
      path: '/password-reset-request',
      name: 'password-reset-request',
      component: PasswordResetRequestView
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})

export default router
