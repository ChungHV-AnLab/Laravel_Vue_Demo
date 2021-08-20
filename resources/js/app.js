require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App},
    router,
});
