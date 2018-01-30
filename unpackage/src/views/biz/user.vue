<!-- Created by Weiun on 2017/1/17.-->
<template>
    <div>用户中心</div>
</template>
<script>
import util from '../../libs/util'
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
            util.bus.$emit('main-more-action',[]); //触发事件
            // 监听页面右上角更多操作功能执行
            util.bus.$on('main-more-action-execute', (key) => { //Hub接收事件
                console.log("----------------功能调用-----------------"+key);
            });
        })
    },
    beforeDestroy() {
        // 移除更多功能
        util.bus.$emit('main-more-action',[]); 
        // 移除监听
        util.bus.$off('main-more-action-execute')
    },
    methods: {}
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>