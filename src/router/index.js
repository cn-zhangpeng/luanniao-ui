import { createRouter, createWebHashHistory } from 'vue-router';

const Layout = () => import('../layout/Index');

const Software = () => import('../views/software/Software');
const SoftwareUseTime = () => import('../views/software/UseTime');

const Dashboard = () => import('../views/dashboard/Dashboard');

const routes = [
  {
    path: '/software',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'software',
        component: Software
      },
      {
        path: 'time',
        name: 'software-use-time',
        component: SoftwareUseTime
      }
    ]
  },
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
