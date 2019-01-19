import Vue from 'vue'
import App from './App.vue'

const Login = { template: '<div>Login Page</div>'}
const Page404 = { template: '<div>404 Page not found</div>'}

const routes = {
  '/': App,
  '/login': Login
}

new Vue({
  el: '#app',
  computed:{
    VueComponent() {
      return routes[window.location.pathname] || Page404
    }
  },
  render(h) {
   return h(this.VueComponent)
  }
})
