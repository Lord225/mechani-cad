import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/views/Home.vue'
import Old from './components/views/Old.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'default',
        component: Home
      },
      {
        path: '/predecessor',
        name: 'predecessor',
        component: Old
      }
    ],
    scrollBehavior(to) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
            top: 25,
          }
        }
      },
  })
  
  export default router