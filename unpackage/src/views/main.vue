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
            <menus @menu-close="closeMenus"></menus>
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
        if(native){
            console.log("Native init success------------------");
            // 导入Activity、Intent类
            var Intent = native.importClass("android.content.Intent");
            var Uri = native.importClass("android.net.Uri");
            // 获取主Activity对象的实例
            var main = native.runtimeMainActivity();
            // 创建Intent
            var uri = Uri.parse("tel:17612157428"); // 这里可修改电话号码
            var call = new Intent("android.intent.action.CALL",uri);
            // 调用startActivity方法拨打电话
            main.startActivity( call );
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
        closeMenus(currentMenuTitle){
            this.showMenu = false;
            if(currentMenuTitle){
                this.title = currentMenuTitle;   
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
