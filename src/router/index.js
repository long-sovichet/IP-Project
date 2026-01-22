import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Brand1 from '../views/Brand1.vue'
import Brand2 from '../views/Brand2.vue'
import Brand3 from '../views/Brand3.vue'
import Brand4 from '../views/Brand4.vue'
import Brand5 from '../views/Brand5.vue'
import Brand6 from '../views/Brand6.vue'
import Brand7 from '../views/Brand7.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/brand1',
      name: 'Brand1',
      component: Brand1,
      meta: { requiresAuth: true }
    },
    {
      path: '/brand2',
      name: 'Brand2',
      component: Brand2,
      meta: { requiresAuth: true }
    },
    {
      path: '/brand3',
      name: 'Brand3',
      component: Brand3,
      meta: { requiresAuth: true }
    },
    {
      path: '/brand4',
      name: 'Brand4',
      component: Brand4,
      meta: { requiresAuth: true }
    },
    {
      path: '/brand5',
      name: 'Brand5',
      component: Brand5,
      meta: { requiresAuth: true }
    },
    {
      path: '/brand6',
      name: 'Brand6',
      component: Brand6,
      meta: { requiresAuth: true }
    },
    {
      path: '/brand7',
      name: 'Brand7',
      component: Brand7,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
