import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/new_page',
    name: 'NewPage',
    component: () => import(/* webpackChunkName: "newPage" */ '../views/NewPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
