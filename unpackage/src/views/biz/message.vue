<!-- Created by Weiun on 2017/1/17.-->
<template>
    <centerContent :searchShow="true" :moreShow="moreShow">
      <yd-tab slot="search" :callback="tabCallback">
          <yd-tab-panel label="报价" tabkey="offer"></yd-tab-panel>
          <yd-tab-panel label="订单" tabkey="order"></yd-tab-panel>
          <yd-tab-panel label="物流" tabkey="logis"></yd-tab-panel>
          <yd-tab-panel label="系统" tabkey="sys"></yd-tab-panel>
      </yd-tab>
      <div slot="list" style="margin:0.1rem">
          消息列表
      </div>
      <div slot="more">消息更多查询条件</div>
    </centerContent>
</template>
<script>
import bus from "../../libs/bus";
import { mapGetters } from "vuex";
import centerContent from "../layout/centerContent.vue";
import comSearch from "../com/comSearch.vue";

export default {
  data() {
    return {
      moreShow: false
    };
  },
  computed: {
    ...mapGetters(["layout"]),
    userChartHeight: function() {
      return (this.layout.contentHeight - 100) / 2;
    },
    userChartWidth: function() {
      return this.layout.contentWidth * 2 / 3;
    },
    channelChartHeight: function() {
      return this.layout.contentHeight - 100;
    },
    channelChartWidth: function() {
      return this.layout.contentWidth * 1 / 3;
    }
  },
  components: {
    centerContent,
    comSearch
  },
  mounted: function() {
    this.$nextTick(function() {
      // 设置标题
      bus.$emit("main-title", "消息");
      // 设置页面右上角更多操作功能项
      bus.$emit("main-more-action", [
        {
          label: "添加",
          callback: () => {
            this.$dialog.toast({ mes: "添加！" });
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
        {
          label: "删除",
          callback: () => {
            this.$dialog.toast({ mes: "删除！" });
          }
        }
      ]);
    });
  },
  beforeDestroy() {
    // 移除更多功能
    bus.$emit("main-more-action", []);
  },
  methods: {
    more() {
      this.moreShow = !this.moreShow;
      bus.$emit("set-function", "hehe"); //触发事件
    },
    tabCallback(labe, key) {
      console.log("--------------Tab切换----------------");
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>