import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter); // 미들웨어 추가

const Login = { template: '<div>Login Page</div>'}
const Page404 = { template: '<div>404 Page not found</div>'}

const router = new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', component: App},
      {path: '/login', component: Login},
      {path: '*', component: Page404}
    ]
  }
)

export default router
