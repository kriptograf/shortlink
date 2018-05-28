import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Profile from './components/Profile.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

export default Vue;

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
Vue.http.options.root = 'http://shortlink.loc/';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/login', component: Login},
        {path: '/signup', component: Signup},
        {path: '/profile', component: Profile}
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});