import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

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

new Vue({
  el: '#app',
  router,
  render : h => h({template: '<router-view></router-view>'})
})
