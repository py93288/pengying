<template>
<div>
  <div >
    <mt-header  fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
  <div>
    <router-view class="content"></router-view>
  </div>
  <div>
<nav class="mui-bar mui-bar-tab">
			<router-link to="home" class="mui-tab-item mui-active" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="news" class="mui-tab-item">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link to="contancts" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link to ="test" class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
	background-color: #fff;
}
.content{
	padding-top: 40px;
	padding-bottom: 50px;
}
</style>







