// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Flex from '@/assets/js/flex.js';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/vuex/store';
import axios from 'axios';
import {baseUrl} from '@/common/env.js';


//Vue.config.productionTip = false;
axios.interceptors.request.use(function (config) {
    console.log(baseUrl);
    config.url = baseUrl + config.url;
    console.log(config.url);
    //console.log(config);
    return config;
}, function (error) {
    console.log(err);
    return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});
