// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import '@/assets/js/rem.js'
import App from './App'
import router from './router'
import './assets/css/myIndex.css'
Vue.config.productionTip = false
window.Vue = Vue;

let user;
if(localStorage.user){
    user=JSON.parse(localStorage.user);
}else{
    user = {
        avatar_url: '',
        loginname: '',
        success: false,
        id: '',
    };
}
user.AccessToken='2b0c75de-81c7-4bcd-ac87-533edcf32adc';

Vue.prototype.axios = axios;
Vue.prototype.user = user;
Vue.prototype.college = [];
Vue.prototype.url='https://cnodejs.org/api/v1/';
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>',
    data: {
        user,
    },
    watch: {
        'user.success': function(newValue) {
            let vm = this;
            if(newValue) {
                this.axios.get(this.url+"topic_collect/" + this.user.loginname)
                .then(function(respones) {
                    Vue.prototype.college = respones.data.data;
                    vm.$router.go(-1);
                }).catch(function(respones) {
                    console.log(respones)
                });
            }
        }
    }
});