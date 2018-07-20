import Vue from 'vue';
//import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import VueHead from 'vue-head';

import BootstrapVue from 'bootstrap-vue';

//импортируем компоненты
import App from './App.vue';

//импортируем компонент авторизации
import auth from './auth.js';
//импортируем роутер
import router from './router';
//импортируем стили бутстрап
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueHead);
//говорим вью, что нужно использовать ресурсы
Vue.use(VueResource);
//используем бутстрап
Vue.use(BootstrapVue);

//Экспортировать Vue иначе в других компонентах не получить к нему доступ
export default Vue;

//Устанавливаем заголовок авторизации
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
Vue.http.options.root = 'http://shortlink.loc/';

const extLinks = null;

//создаем экземрляр Vue
new Vue({
    el: '#app',
    router,
    data: {
        extLinks: ''
    },
    mounted: function () {
        auth
    },
    render: h => h(App),
});