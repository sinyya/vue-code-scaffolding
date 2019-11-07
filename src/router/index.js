import Vue from 'vue'
import VueRouter from 'vue-router'

// components
const Home = () => import('@/views/pages/main/Home.vue');
const Main = () => import('@/views/pages/main/Main.vue');
const Foo = () => import('@/views/pages/main/Foo.vue');
const Foo2 = () => import('@/views/pages/main/Foo2.vue');
const Login = () => import('@/views/Login.vue');
const Page404 = () => import('@/views/Page404.vue');

Vue.use(VueRouter); // 미들웨어 추가

export const router = new VueRouter({
        mode: 'history',
        linkActiveClass: 'open active',
        routes: [
            {
                path: '/',
                component: Home,
                children: [
                    {
                        path: 'foo',
                        component: Foo
                    }
                ]
            },
            {
                path: '/main',
                component: Main,
                children: [
                    {
                        path: 'foo',
                        component: Foo
                    },
                    {
                        path: 'foo2',
                        component: Foo2
                    }
                ]
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
);
