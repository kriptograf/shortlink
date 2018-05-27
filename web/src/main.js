import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//import auth from './auth.js'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'


/*function requireAuth (to, from, next) {
    if (!auth.loggedIn()) {
        console.log('not logged');
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
}*/



/*const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/profile', component: Profile, beforeEnter: requireAuth },
        { path: '/login', component: Login },
        { path: '/logout',
            beforeEnter (to, from, next) {
                auth.logout()
                next('/')
            }
        }
    ]
});*/

// Router
Vue.router = new VueRouter({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name: 'default',
        component: require('./components/Home.vue')
    }, {
        path: '/about',
        name: 'about',
        component: require('./components/About.vue'),
        meta: {auth: false}
    },{
        path: '/login',
        name: 'login',
        component: require('./components/Login.vue'),
        meta: {auth: false}
    }, {
        path: '/register',
        name: 'register',
        component: require('./components/Signup.vue'),
        meta: {auth: false}
    }, {
        path: '/profile',
        name: 'profile',
        component: require('./components/Profile.vue'),
        meta: {auth: true}
    }, {
        path: '/async',
        name: 'async',
        component: function(resolve) { require(['./components/Async.vue'], resolve); }
    }, {
        path: '/404',
        name: 'error-404',
        component: require('./components/404.vue')
    },
    ]
});

// Http
//console.log(Vue.axios.defaults.baseURL);
Vue.axios.defaults.baseURL = 'http://shortlink.loc/api/v1';
//Vue.http.options.root = 'https://api-demo.websanova.com/api/v1';


// Vue Auth
Vue.use(require('./src/index.js'), {
    auth: require('./drivers/bearer.js'),
    //http: require('./drivers/vue-resource.1.x.js'),
    http: require('./drivers/axios.1.x.js'),
    router: require('./drivers/vue-router.2.x.js'),
    rolesVar: 'role',
    facebookOauth2Data: {
        clientId: '196729390739201'
    },
    googleOauth2Data: {
        clientId: '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com'
    }
});

// Start
var component = require('./App.vue');

component.router = Vue.router;

new Vue({
    el: '#app',
    created: function () {
        axios.get(this.baseURL).then(response => {
            console.log(response);
        })
    },
    components: {
        component
    },
    render: h => h(App)
});



//new Vue(component).$mount('#app');
