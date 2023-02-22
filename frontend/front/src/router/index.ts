import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    /*
  {
    path: '/',
    name: '',
    component: () => import('../views/AboutView.vue')
  }
     */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
