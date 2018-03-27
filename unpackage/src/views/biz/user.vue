<!-- Created by Weiun on 2017/1/17.-->
<template>
    <div>
        <div class="user-top">
            <img class="user-icon" src="https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3545401083,2251952841&fm=77&w_h=121_75&cs=2008984878,1171842780" alt="">
        </div>
        <div class="user-name">
            <span style="font-size:.4rem">韦爵爷</span><br>
            <span style="font-size:.3rem;margin-top:.1rem;margin-bottom:.1rem"><yd-icon slot="icon" name="diamond-o" size=".3rem" custom></yd-icon>我欲乘风归去</span>
        </div>
        <yd-cell-group  style="margin-top:.2rem">
            <yd-cell-item >
                <yd-icon slot="icon" name="yinhangqia" size=".42rem" custom></yd-icon>
                <span slot="left">钱包</span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group  style="margin-top:.2rem">
            <yd-cell-item >
                <yd-icon slot="icon" name="shoucang" size=".42rem" custom></yd-icon>
                <span slot="left">收藏</span>
            </yd-cell-item>
            <yd-cell-item >
                <yd-icon slot="icon" name="tupian-xianxing" size=".42rem" custom></yd-icon>
                <span slot="left">相册</span>
            </yd-cell-item>
            <yd-cell-item >
                <yd-icon slot="icon" name="chaibaoguoqujian-xianxing" size=".42rem" custom></yd-icon>
                <span slot="left">卡包</span>
            </yd-cell-item>
            <yd-cell-item >
                <yd-icon slot="icon" name="jiankongshexiangtou-xianxing" size=".42rem" custom></yd-icon>
                <span slot="left">表情</span>
            </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group style="margin-top:.2rem">
            <yd-cell-item >
                <yd-icon slot="icon" name="shezhi-xianxing" size=".42rem" custom></yd-icon>
                <span slot="left">设置</span>
            </yd-cell-item>
        </yd-cell-group>
    </div>
</template>
<script>
import bus from '../../libs/bus'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['layout']),
        userChartHeight: function() {
            return (this.layout.contentHeight - 100) / 2;
        },
        userChartWidth: function() {
            return this.layout.contentWidth * 2 / 3;
        },
        channelChartHeight: function() {
            return (this.layout.contentHeight - 100);
        },
        channelChartWidth: function() {
            return this.layout.contentWidth * 1 / 3;
        },
    },
    components: {

    },
    mounted: function() {
        this.$nextTick(function() {
            // 代码保证 this. 在 document 中
            bus.$emit('main-more-action',[]); //触发事件
            // 监听页面右上角更多操作功能执行
            bus.$on('main-more-action-execute', (key) => { //Hub接收事件
                console.log("----------------功能调用-----------------"+key);
            });
        })
    },
    beforeDestroy() {
        // 移除更多功能
        bus.$emit('main-more-action',[]); 
        // 移除监听
        bus.$off('main-more-action-execute')
    },
    methods: {}
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
.user-top{
    width: 100%;
    height: 4rem;
    background-color: cadetblue;

}
.user-icon{
    width: 1rem;
    height: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    margin-right: .5rem;
    border-radius:50%; 
    overflow:hidden;
}
.user-name{
    width: 4rem;
    height: 1rem;
    top: 1.5rem;
    margin-left: 2.2rem;
    margin-right: .2rem;
    position: absolute;
    color: aliceblue
}
#h1{
    size: .4rem;
}
</style>