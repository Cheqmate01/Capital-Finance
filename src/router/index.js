import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isAuthenticated, checkAuthOnLoad } from '@/auth'

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
      meta: { guestOnly: true }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { guestOnly: true }
    },
    {
      path: '/auth/reset-password',
      name: 'reset-password',
      // component: () => import('../views/ForgotPasswordView.vue'),
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: 'profile', component: () => import('../views/dashboard/UserProfileView.vue') },
        { path: 'settings', component: () => import('../views/dashboard/UserSettingsView.vue') }
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

router.beforeEach((to, from, next) => {
  checkAuthOnLoad(); // Ensure auth state is fresh on every navigation
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const guestOnly = to.matched.some(record => record.meta.guestOnly);

  if (requiresAuth && !isAuthenticated.value) {
    // If route requires auth and user is not authenticated, redirect to login
    next({ name: 'login' });
  } else if (guestOnly && isAuthenticated.value) {
    // If route is for guests only and user is authenticated, redirect to dashboard
    next({ name: 'dashboard' });
  } else {
    // Otherwise, allow navigation
    next();
  }
});

export default router