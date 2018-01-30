<!-- Created by Weiun on 2017/1/17.-->
<template>
    <div>
        <yd-slider autoplay="3000">
            <yd-slider-item>
                <a href="">
                    <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="">
                    <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                </a>
            </yd-slider-item>
            <yd-slider-item>
                <a href="">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                </a>
            </yd-slider-item>
        </yd-slider>
        <yd-rollnotice autoplay="2000">
            <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
            <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
            <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
        <hr>
        <yd-tabbar>
			<yd-tabbar-item title="喜欢" type="a" @click.native="tabbarClick('home')">
				<yd-icon name="xihuan" slot="icon" color="#FF685D" custom></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="收藏" type="a" @click.native="tabbarClick('order')">
				<yd-icon name="shoucang" slot="icon"  color="#16AA6B" custom></yd-icon>
			</yd-tabbar-item>
			<yd-tabbar-item title="邮件" type="a" @click.native="tabbarClick('message')">
				<yd-icon name="xin-xianxing" slot="icon" color="#FF685D" custom></yd-icon>
				<yd-badge slot="badge" type="danger">2</yd-badge>
			</yd-tabbar-item>
			<yd-tabbar-item title="财务" type="a" @click.native="tabbarClick('user')">
				<yd-icon name="caiwu" slot="icon"  color="#16AA6B" custom></yd-icon>
			</yd-tabbar-item>
		</yd-tabbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
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
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this. 在 document 中
    });
  },
  beforeDestroy() {},
  methods: {
      tabbarClick(tab){
        console.log("-------------Tab点击-------------")
      },
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>