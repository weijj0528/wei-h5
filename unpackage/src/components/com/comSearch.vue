<!-- 通用查询组件-->
<template>
	<yd-flexbox  class="search">
		<div style="width:6.5rem">
			<yd-flexbox-item >
				<yd-search v-model="value1" :on-submit="submitHandler" ></yd-search>
			</yd-flexbox-item>
		</div>
		<div style="text-align:center" @click="more">
			更多
			<!-- <yd-icon name="more" class="icon" @click.native="more"></yd-icon> -->
		</div>
	</yd-flexbox>
</template>
<script>
	export default {
		data() {
			return {
				value1:'',
			}
		},
		props: {
			moreButtonShow: {
				type: Boolean,
				default: true
			}
		},
		computed: {

		},
		mounted: function() {

		},
		methods: {
			submitHandler(){

			},
			more(){
				console.log("----------------more-----------------")
				this.$emit('more')
			}
		}
	}
</script>
<style >
	.search{
		background-color: #efeff4
	}
</style>