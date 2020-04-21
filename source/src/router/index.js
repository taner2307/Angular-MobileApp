import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../pages/login'
import HomeComponent from '../pages/home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    }
  ]
})
