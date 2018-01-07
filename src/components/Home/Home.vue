<template>
<div>
    <div>
        <mt-swipe :auto="4000">
                 <mt-swipe-item v-for="(item,index) in swipeList" :key="index">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <div>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <!-- router-link to ="newList" 即可跳转到list但是为了让下面的导航栏home组件高亮所以加了/home/newList -->
                      <router-link to="/home/list">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻</div>
                     </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/photoList">
		                <span class="mui-icon mui-icon-email">
                      <span class="mui-badge">5</span>
                    </span>
		                <div class="mui-media-body">图片</div>
                  </router-link >
                        </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/alist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">消息</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/provision">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">供应商</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/shoppingList">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">商品列表</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">电话</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">设置</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">关于</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">更多</div></a></li>
		        </ul>
		</div>
    </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      swipeList: [
        "../../../static/1.jpg",
        "../../../static/3.jpg",
        "../../../static/4.jpg"
      ]
    };
  }
};
</script>
<style scoped>
/* 轮播图 */
.mint-swipe {
  height: 180px;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}
.mint-swipe-indicator {
  background-color: rgb(250, 252, 249);
  opacity: 1;
}
.mint-swipe-indicator.is-active {
  background-color: rgb(247, 7, 7);
}
/* 九宫格 */
.mui-content > .mui-table-view:first-child {
  margin-top: 0px;
  background-color: #fff;
}
.mui-content {
  background-color: #fff;
}
  .mui-table-view .mui-table-view-cell{
    padding: 5px;
  }
</style>

