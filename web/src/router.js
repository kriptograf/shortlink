/**
 * @todo добавить имена в роуты, что бы в дальнейшем обращаться к роутам по имени
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Profile from './components/Profile.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/login', component: Login},
        {path: '/signup', component: Signup},
        {path: '/profile', component: Profile}
    ]
});