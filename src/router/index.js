import Vue from 'vue'
import VueRouter from 'vue-router'

// components
const Home = () => import('@/views/Home.vue');
const Login = () => import('@/views/Login.vue');
const Page404 = () => import('@/views/Page404.vue');

Vue.use(VueRouter); // 미들웨어 추가

export const router =  new VueRouter({
    mode: 'history',
    linkActiveClass: 'open active',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '*',
        component: Page404
      }
    ]
  }
)
