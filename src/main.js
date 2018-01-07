import Vue from 'vue'

import axios from 'axios'
// 将 axios 添加到 Vue.prototype 中
Vue.prototype.$axios = axios

import VueResource from "vue-resource"
Vue.use(VueResource);
import router from "./router"

import "./lib/mui/css/mui.min.css"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
import App from './App.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "../src/filters/index"

import { Indicator } from 'mint-ui'
Vue.use(MintUI);
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import config from "./config/index"
Vue.http.options.root = config.API_SERVER_URL;
axios.defaults.baseURL = config.API_SERVER_URL;



Vue.http.interceptors.push(function(request, next) {

    if (request.method === 'GET') {

        Indicator.open({
            text: '数据加载中...',
            spinnerType: 'fading-circle'
        })
    }
    next(function(response) {
        if (request.method === 'GET') {

            Indicator.close()
        }
    });
});

// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)


const vm = new Vue({
    el: '#app',
    router,
    // render: c => c(App)
    render: function(c) {
        return c(App)
    }
});
