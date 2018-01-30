<!-- Created by Weiun on 2017/1/17.-->
<template>
    <centerContent :searchShow="true" :moreShow="moreShow">
        <comSearch slot="search" @more='more'></comSearch>
        <div slot="list" style="margin:0.1rem">
            订单列表
        </div>
        <div slot="more">订单更多查询条件</div>
    </centerContent>
</template>
<script>
import util from "../../libs/util";
import { mapGetters } from "vuex";
import centerContent from "../../components/centerContent.vue";
import comSearch from "../../components/com/comSearch.vue";

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
      // 设置页面右上角更多操作功能项
      util.bus.$emit("main-more-action", [
        { title: "添加", key: "add", icon: "jia" },
        { title: "删除", key: "del", icon: "jian" }
      ]); //触发事件
      // 监听页面右上角更多操作功能执行
      util.bus.$on("main-more-action-execute", key => {
        //Hub接收事件
        console.log("----------------功能调用-----------------" + key);
      });
    });
  },
  beforeDestroy() {
    // 移除更多功能
    util.bus.$emit("main-more-action", []);
    // 移除监听
    util.bus.$off("main-more-action-execute");
  },
  methods: {
    more() {
      this.moreShow = !this.moreShow;
      util.bus.$emit("set-function", "hehe"); //触发事件
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>