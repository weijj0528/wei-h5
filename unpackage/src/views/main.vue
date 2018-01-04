<!-- -->
<template>
    <yd-layout>
        <yd-navbar slot="navbar" :title="title"> 
            <yd-icon name="liebiaoshitucaidan" slot="left" size='.5rem' style="margin-right:.2rem"  @click.native="openMenus" custom></yd-icon>
            <yd-icon name="shangyiyehoutuifanhui" slot="left" size='.5rem'  @click.native="goBack" custom></yd-icon>
            <yd-icon name="shuaxin" slot="right" size='.5rem'  @click.native="refresh" custom></yd-icon>
        </yd-navbar>
        <!-- 路由页面 -->
        <router-view></router-view>
        <!-- 侧边菜单 -->
        <yd-popup v-model="showMenu" position="left" width="70%" >
            <menus @menu-select="menuSelect"></menus>
        </yd-popup>
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item title="首页" link="#" active>
                <yd-icon name="shouye" slot="icon" custom></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="#" custom>
                <yd-icon name="caigou" slot="icon" custom></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="消息" link="#" custom>
                <yd-icon name="lingdang" slot="icon" custom></yd-icon>
                <yd-badge slot="badge" type="danger">2</yd-badge>
            </yd-tabbar-item>
            <yd-tabbar-item title="个人中心" link="#">
                <yd-icon name="yonghu" slot="icon" custom></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
    </yd-layout>
</template>
<script>

import menus from './menus'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            showMenu:false,
            title:'首页',
        }
    },
    computed: {
        
    },
    components: {
       menus:menus
    },
    mounted() {
        let _self = this;
        console.log("Native init ------------------");
        if(native){
            console.log("Native init success------------------");
            // 监听收到通知
            native.push.addEventListener( "receive", function ( msg ) {
                // 分析msg.payload处理业务逻辑 
                alert( "You receive: " + msg.content ); 
                _self.$router.push('/main/user');
            }, true ); 
            // 监听点击通知
            native.push.addEventListener( "click", function ( msg ) {
                // 分析msg.payload处理业务逻辑 
                alert( "You clicked: " + msg.content ); 
                _self.$router.push('/main/message');
            }, true ); 
           console.log("Native addEventListener success------------------");
        }
    },
    methods: {
        navClose: function(tab, i) {
            console.log('navClose:' + tab.id);
            this.active_tab = this.tabs[i - 1].id;
            this.comTabsRemove(tab.id);
        },
        openMenus(){
            this.showMenu = true;
        },
        menuSelect(currentMenu){
            this.showMenu = false;
            if(currentMenu){
                this.title = currentMenu.title;   
                this.$router.push('/main/user');   
            }
        },
        goBack(){
            let _self = this;
            _self.$router.push('/login');
            console.log("----------------返回-----------------");
        },
        refresh(){
            console.log("----------------刷新-----------------");
        }
    },
    watch: {

    }
}
</script>
<style scoped lang="less">
.top_calss {
    background: #495060;
    border-bottom: 1px solid #dddee1;
}
</style>
