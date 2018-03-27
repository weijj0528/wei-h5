<!-- Created by Weiun on 2017/1/17. 页面内容区组件，负责内容区布局-->
<template>
	<div class="centerContent" style="width:100%">
		<div v-if="searchShow"><slot name="search"></slot></div>
		<slot name="list"></slot>
		<yd-popup v-model="more" position="right" width="70%" >
			<slot name="more"></slot>
		</yd-popup>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				more:false
			}
		},
		props: {
			searchShow: {
				type: Boolean,
				default: false
			},
			moreShow: {
				type: Boolean,
				default: false
			},
			loading: false
		},
		computed: {
			...mapGetters(['layout'])
		},
		mounted() {
			this.init(); // 初始化
		},
		methods: {
			init: function() {
				
			}
		},
		watch: {
			moreShow:function(newVal,oldVal){
				this.more = true;
			}
		}
	}
</script>
<style scoped>
	/*@import '../styles/common.css';*/
</style>