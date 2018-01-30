/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import './styles/iconfont.css';
/** 引入iview部分组件 */
import { Poptip } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Poptip', Poptip);
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

import loading  from './common/loading/loading'
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
