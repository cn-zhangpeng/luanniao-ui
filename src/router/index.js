import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../layout/Index'
import Dashboard from '../views/dashboard/Dashboard'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
