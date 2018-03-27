<!-- Created by Weiun on 2017/1/17. 页面详情内容区组件，负责详情布局-->
<template>
    <div style="height: 100%;">
        <yd-layout>
            <yd-navbar slot="navbar" title="客户详情">
                 <yd-icon name="shangyiyehoutuifanhui" slot="left" size='.5rem' @click.native="goBack" custom></yd-icon>
                 <yd-icon name="touchengkongyun" slot="right" size='.5rem' @click.native="share" custom></yd-icon>
            </yd-navbar>
            <slot></slot>
            <hr slot="tabbar">
            <yd-flexbox slot="tabbar">
                <yd-flexbox-item v-for="func in funcs" :key="func.label" @click.native="func.callback" style="padding-top:.2rem;padding-bottom:.2rem">
                  <div class="func-button">
                      <yd-icon v-if="func.icon" slot="text" :name="func.icon" size=".4rem" style="margin-right:.1rem"></yd-icon>
                      {{func.label}}
                  </div>
                </yd-flexbox-item>
                <yd-flexbox-item v-if="moreFun.length > 0" @click.native="moreShow = true">
                    <div class="func-button-more">
                        <yd-icon slot="text" name="more" size=".4rem"></yd-icon>
                    </div>
                </yd-flexbox-item>
            </yd-flexbox>
        </yd-layout>
        <yd-actionsheet :items="moreFun" v-model="moreShow" cancel="取消"></yd-actionsheet>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      moreShow: false
    };
  },
  props: {
    // 常用功能
    funcs: {
      type: Array,
      default: function() {
        return [
          {
            label: "常用功能1",
            callback: () => {
              this.$dialog.toast({ mes: "Say: 常用的功能1" });
            },
            icon: ""
          },
          {
            label: "常用功能2",
            callback: () => {
              this.$dialog.toast({ mes: "Say: 常用的功能2" });
            },
            icon: ""
          }
        ];
      }
    },
    // 更多功能
    moreFun: {
      type: Array,
      default: function() {
        return [
          {
            label: "更多的功能项1",
            callback: () => {
              this.$dialog.toast({ mes: "Say: 添加更多的功能来吧1！" });
            },
            icon: ""
          },
          {
            label: "更多的功能项2",
            callback: () => {
              this.$dialog.toast({ mes: "Say: 添加更多的功能来吧2！" });
            },
            icon: ""
          }
        ];
      }
    }
  },
  computed: {
    ...mapGetters(["layout"]),
  },
  mounted() {},
  methods: {
    goBack() {
      window.history.go(-1);
      console.log("----------------返回-----------------");
    },
    share() {
      // TODO 分享功能
    }
  },
  watch: {}
};
</script>
<style scoped lang="less">
.func-button {
  margin: 0rem auto;
  text-align: center;
  height: .6rem;
  line-height: .6rem;
  background-color: #f8f8f9;
  border-right:1px solid #bbbec4;
}
.func-button-more {
  margin: 0rem auto;
  text-align: center;
  height: .6rem;
  line-height: .6rem;
  background-color: #f8f8f9;
}
</style>
