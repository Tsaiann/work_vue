import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    redirect:'top',  //預設的基本頁面
    children:[
      {
        path: 'top',
        name: 'top',
        component: () => import(/* webpackChunkName: "top" */ '../components/top.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import(/* webpackChunkName: "products" */ '../components/products.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../components/about.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../components/contact.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
