import Vue from 'vue';
//import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//импортируем компоненты
import App from './App.vue';

//импортируем компонент авторизации
import auth from './auth.js';
//импортируем роутер
import router from './router';

//говорим вью, что нужно использовать ресурсы
Vue.use(VueResource);

//Экспортировать Vue иначе в других компонентах не получить к нему доступ
export default Vue;

//Устанавливаем заголовок авторизации
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
Vue.http.options.root = 'http://shortlink.loc/';

//создаем экземрляр Vue
new Vue({
    el: '#app',
    router,
    mounted: function () {
        auth
    },
    render: h => h(App),
});