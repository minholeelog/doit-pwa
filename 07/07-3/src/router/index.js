import Vue from 'vue'
import MainPage from '@/components/MainPage'
import SubPage from '@/components/SubPage'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/sub',
    name: 'SubPage',
    component: SubPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
