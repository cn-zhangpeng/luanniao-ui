import { createRouter, createWebHashHistory } from 'vue-router'

import DashboardIndex from '../views/dashboard/Index'
import Dashboard from '../views/dashboard/Dashboard'

import ScheduleList from '../views/schdulelist/Index'

const routes = [
  {
    path: '/dashboard',
    component: DashboardIndex,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/',
    component: ScheduleList,
    name: 'schedule-list'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
