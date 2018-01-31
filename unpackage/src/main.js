/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import './styles/iconfont.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// import {Icons} from 'vue-ydui/dist/lib.rem/icons';
/* 使用px：import {Icons} from 'vue-ydui/dist/lib.px/icons'; */
import router from './router'
import index from './views/index.vue'
import store from './vuex/store';
import * as filters from './filters/filters'



Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(VueRouter)
Vue.use(YDUI);
// Vue.component(Icons.name, Icons);

import loading from './common/loading/loading'
// import message  from './common/message/message'
// import showImg  from './common/showImg/showImg'
// import dialog from './common/dialog/dialog'
//原型扩展 全局方法
Vue.prototype.$loading = loading;
// Vue.prototype.$message = message;
// Vue.prototype.$showImg = showImg;
// Vue.prototype.$dialog = dialog;

const routerApp = new Vue({
    store,
    router,
    render: h => h(index)
}).$mount('#app')

document.addEventListener("plusready", function () {
    console.log(
        "所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
    );
    if (plus) {
        console.log("plus init success------------------");
        // 监听收到通知
        plus.push.addEventListener(
            "receive",
            function (msg) {
                console.log(msg);
                // 分析msg.payload处理业务逻辑
                let payload = eval("(" + msg.payload + ")");
                if (payload.link) {
                    routerApp.$router.push(payload.link);
                }
            },
            true
        );
        // 监听点击通知
        plus.push.addEventListener(
            "click",
            function (msg) {
                console.log(msg);
                // 分析msg.payload处理业务逻辑
                let payload = eval("(" + msg.payload + ")");
                if (payload.link) {
                    routerApp.$router.push(payload.link);
                }
            },
            true
        );
        console.log("plus addEventListener success------------------");
        // 扩展 plus 原型
        Vue.prototype.$plus = plus;
        console.log("plus push success------------------");
        // 封装原型通用方法
        Vue.prototype.$toast = function (message, options) {
            plus.nativeUI.toast(message, options);
        };
    }
    console.log(
        "plus110 init success. Now OS is " + plus.os.name + "------------------"
    );
});