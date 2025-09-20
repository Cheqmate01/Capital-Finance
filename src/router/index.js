import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../views/dashboard/UserProfileView.vue'
import UserSettings from '../views/dashboard/UserSettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/auth/reset-password',
      name: 'reset-password',
      // component: () => import('../views/ForgotPasswordView.vue'),
    },
    {
      path: '/dashboard/',
      name: 'user-dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: 'profile', component: UserProfile },
        { path: 'settings', component: UserSettings }
      ],
    },
    {
      path: '/busboard/',
      name: 'business-dashboard',
      component: () => import('../views/BusboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/transactions',
      name: 'transactions',
      meta: { requiresAuth: true },
      children: [
        {path: 'deposit', component: () => import('../views/transactions/DepositView.vue')},
        {path: 'withdrawal', component: () => import('../views/transactions/WithdrawalView.vue')}
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
