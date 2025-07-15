import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/pages/Portfolio.vue'
import LogIn from '@/pages/LogIn.vue'
import Dashboard from '@/pages/Dashboard.vue'

const routes = [
  { path: '/', component: Portfolio },
  { path: '/login', component: LogIn },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
