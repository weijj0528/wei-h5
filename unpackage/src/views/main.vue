<!-- -->
<template>
	<yd-layout>
    <!-- 标题栏 -->
		<yd-navbar slot="navbar" :title="title">
      <!-- 功能菜单 -->
			<yd-icon v-if="navBarShow.menu" name="liebiaoshitucaidan" slot="left" size='.5rem' style="margin-right:.2rem" @click.native="openMenus" custom></yd-icon>
			<!-- 返回 -->
      <yd-icon v-if="navBarShow.back" name="shangyiyehoutuifanhui" slot="left" size='.5rem' @click.native="goBack" custom></yd-icon>
			<!-- 刷新 -->
      <yd-icon v-if="navBarShow.refresh" name="shuaxin" slot="right" size='.5rem' style="margin-right:.2rem" @click.native="refresh" custom></yd-icon>
			<!-- 更多功能 -->
      <yd-icon v-if="functionList.length > 0" name="gengduo-shuxiang" slot="right" @click.native="poptipShow" custom></yd-icon>
		</yd-navbar>
    <!-- 更多功能 上拉菜单-->
    <yd-actionsheet :items="functionList" v-model="moreFunction" cancel="取消"></yd-actionsheet>
		<!-- 路由页面 -->
		<router-view></router-view>
		<!-- 侧边菜单 -->
		<yd-popup v-model="showMenu" position="left" width="70%">
			<menus @menu-select="menuSelect" @menu-close="menuClose"></menus>
		</yd-popup>
    <!-- 底部导航 -->
		<yd-tabbar slot="tabbar">
			<yd-tabbar-item title="首页" type="a" @click.native="tabbarClick('home')" :active="active.home">
				<yd-icon name="shouye" slot="icon" custom></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="购物车" type="a" @click.native="tabbarClick('order')" custom :active="active.order">
				<yd-icon name="caigou" slot="icon" custom></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="消息" type="a" @click.native="tabbarClick('message')" custom :active="active.message">
				<yd-icon name="lingdang" slot="icon" custom></yd-icon>
				<yd-badge slot="badge" type="danger">2</yd-badge>
			</yd-tabbar-item>
			<yd-tabbar-item title="个人中心" type="a" @click.native="tabbarClick('user')" :active="active.user">
				<yd-icon name="yonghu" slot="icon" custom></yd-icon>
			</yd-tabbar-item>
		</yd-tabbar>
	</yd-layout>
</template>
<script>
import bus from "../libs/bus";
import menus from "./main/menus";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      navBarShow:{
        menu:true,
        back:false,
        refresh:false,
      },
      showMenu: false,
      moreFunction: false,
      functionList: [],
      active: {
        home: true,
        order: false,
        message: false,
        user: false
      }
    };
  },
  computed: {},
  components: {
    menus: menus
  },
  mounted() {
    this.tabbarClick("home");
  },
  created() {
    // 设置右上角更多功能项
    bus.$on("main-more-action", actions => {
      //Hub接收事件
      console.log("----------------功能设置-----------------" + actions.length);
      this.functionList = actions;
    });
    // 设置标题
    bus.$on("main-title", title => {
      //Hub接收事件
      console.log("----------------标题设置-----------------" + title);
      this.title = title;
    });
  },
  methods: {
    navClose: function(tab, i) {
      console.log("navClose:" + tab.id);
      this.active_tab = this.tabs[i - 1].id;
      this.comTabsRemove(tab.id);
    },
    openMenus() {
      this.showMenu = true;
    },
    menuClose(){
      this.showMenu = false;
    },
    menuSelect(currentMenu) {
      this.showMenu = false;
      if (currentMenu) {
        this.title = currentMenu.title;
        if(currentMenu.link == '/main/user'){
            this.tabbarClick('user');
        }
        if(currentMenu.link == '/main/order'){
            this.tabbarClick('order');
        }
        if(currentMenu.link == '/main/message'){
            this.tabbarClick('message');
        }
        if(currentMenu.link == '/main/home'){
            this.tabbarClick('home');
        }
        this.$router.push(currentMenu.link);
      }
    },
    goBack() {
      let _self = this;
      _self.$router.push("/login");
      console.log("----------------返回-----------------");
    },
    refresh() {
      console.log("----------------刷新-----------------");
      window.location.reload();
    },
    poptipShow() {
      console.log("----------------展开-----------------");
      if (this.functionList.length == 0) {
        this.moreFunction = false;
      } else {
        this.moreFunction = !this.moreFunction;
      }
    },
    tabbarClick(tab) {
      this.active = {
        home: false,
        order: false,
        message: false,
        user: false
      };
      switch (tab) {
        case "home":
          this.active.home = true;
          this.$router.push("/main/home");
          break;
        case "order":
          this.active.order = true;
          this.$router.push("/main/order");
          break;
        case "message":
          this.active.message = true;
          this.$router.push("/main/message");
          break;
        case "user":
          this.active.user = true;
          this.$router.push("/main/user");
          break;
        default:
      }
    }
  },
  watch: {}
};
</script>
<style scoped lang="less">
.top_calss {
  background: #495060;
  border-bottom: 1px solid #dddee1;
}

.more-function {
  position: absolute;
  z-index: 99999;
  width: 30%;
  margin-left: 70%;
}
</style>