/**
 * @todo переписать всё на axios, вмсесто VueResources
 */
import Vue from './main.js';
import router from './router';
console.log('authjs');

export default {
    user: {
        authenticated: false,
        profile: null
    },
    check() {
        console.log('check auth');
        if (localStorage.getItem('token') !== null) {
            Vue.http.get(
                'api/user',
            ).then(response => {
                this.user.authenticated = true;
                this.user.profile = response.data.data;
                this.extLinks = response.data.links;
            })
        }else {
            console.log('not auth');
        }
    },
    register(context, name, email, password) {
        Vue.http.post(
            'api/user/signup',
            {
                name: name,
                email: email,
                password: password
            }
        ).then(response => {
            context.success = true
        }, response => {
            context.response = response.data
            context.error = true
        })
    },
    signin(context, username, password) {
        Vue.http.post(
            'api/user/login',
            {
                username: username,
                password: password
            }
        ).then(response => {
            context.error = false
            localStorage.setItem('token', response.data.meta.token)
            Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

            this.user.authenticated = true
            this.user.profile = response.data.data

            router.push('/profile');

        }, response => {
            context.error = true
        })
    },
    signout() {
        localStorage.removeItem('token')
        this.user.authenticated = false
        this.user.profile = null

        router.push('/');
    }
}