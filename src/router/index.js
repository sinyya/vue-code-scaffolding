import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter); // 미들웨어 추가

// 컴포넌트 가지고오기
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Page404 from '../components/Page404.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', component: Home},
      {path: '/login', component: Login},
      {path: '*', component: Page404}
    ]
  }
)

export default router
