<template>
	<view class="top-nav">
		<view class="top-nav-back" @click="back">
			<img class="back-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgOSAxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjI4IDcuMDJjLS4wOS4wOC0uMTYuMTgtLjIxLjMtLjA1LjExLS4wNy4yMy0uMDcuMzUgMCAuMTIuMDIuMjQuMDcuMzUuMDUuMTEuMTIuMjIuMjEuM2w2LjkyIDYuNzVjLjE4LjE3LjQyLjI3LjY2LjI3LjI1IDAgLjQ5LS4wOS42Ny0uMjcuMDktLjA4LjE2LS4xOC4yMS0uMjkuMDUtLjEyLjA3LS4yNC4wNy0uMzZzLS4wMi0uMjQtLjA3LS4zNWMtLjA1LS4xMS0uMTItLjIxLS4yMS0uM2wtNi4yNS02LjEgNi4yNS02LjFjLjA5LS4wOC4xNi0uMTkuMjEtLjMuMDQtLjExLjA3LS4yMy4wNy0uMzUgMC0uMTItLjAzLS4yNC0uMDctLjM1YS44MTMuODEzIDAgMCAwLS4yMS0uMy45OC45OCAwIDAgMC0uNjctLjI3Yy0uMjQgMC0uNDguMS0uNjYuMjdMLjI4IDcuMDJ6IiBmaWxsPSIjMmMyYzJjIi8+PC9zdmc+" alt="">
		</view>
		<view class="top-nav-title">
			title
		</view>
		<view class="top-nav-more">
			
		</view>
	</view>
</template>

<script setup>
function back(){
	uni.navigateBack()
}
</script>

<style lang="less">
.top-nav{
	display: flex;
	flex-wrap: nowrap;
	height: 50px;
	background-color: #eee;
	align-items: center;
	.top-nav-back{
		flex: 1;
		display: flex;
		justify-content: center;
		.back-icon{
			width: 20px;
			height: 20px;
		}
	}
	.top-nav-title{
		flex: 5;
		display: flex;
		justify-content: center;
		font-weight: 600;
		font-size: 20px;
	}
	.top-nav-more{
		flex: 1;
		
	}
}
</style>