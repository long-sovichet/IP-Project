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
      path: '/brand1',
      name: 'Brand1',
      component: Brand1
    },
    {
      path: '/brand2',
      name: 'Brand2',
      component: Brand2
    },
    {
      path: '/brand3',
      name: 'Brand3',
      component: Brand3
    },
    {
      path: '/brand4',
      name: 'Brand4',
      component: Brand4
    },
    {
      path: '/brand5',
      name: 'Brand5',
      component: Brand5
    },
    {
      path: '/brand6',
      name: 'Brand6',
      component: Brand6
    },
    {
      path: '/brand7',
      name: 'Brand7',
      component: Brand7
    }
  ]
})

export default router
