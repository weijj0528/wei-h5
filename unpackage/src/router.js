/**
 * Created by aresn on 16/8/22.
 */
import VueRouter from 'vue-router';
import Test from './views/test.vue';
import Main from './views/main.vue';
import Login from './views/login.vue';
import home from './views/biz/home.vue';
import user from './views/biz/user.vue';
import message from './views/biz/message.vue';
import order from './views/biz/order.vue';


const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: Login},
        {path: '/test', component: Test},
        {path: '/login', component: Login},
        {path: '/main', component: Main,children:[
            {path: 'home', component: home},
            {path: 'order', component: order},
            {path: 'message', component: message},
            {path: 'user', component: user},
        ]}
    ]
})
export default router;
