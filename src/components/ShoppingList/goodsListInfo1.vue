<template>
<div>
  <div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图组件 -->
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in List" :key="index">
              <img :src="item.src" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
  </div>
  <!-- 商品数据展示 -->
  <div class="mui-card">
    <div class="mui-card-header">{{info.title}}</div>
    <div class="mui-card-content">
      <div class="mui-card-content-inner info">
        <p>
          <span class="market-price">市场价：<del>￥{{info.market_price}}</del></span>
          <span>
              销售价：
              <span class="sell-price">￥{{info.sell_price}}</span>
            </span>
        </p>
        <div class="numbox-container">
          购买数量：
          <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="5">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
          </div>
        </div>
        <div class="btn-wrap">
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addCart">加入购物车</mt-button>
        </div>
      </div>
    </div>
  </div>
  <!-- 商品参数 -->
  <div class="mui-card">
    <div class="mui-card-header">商品参数</div>
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <p>商品货号：{{info.goods_no}}</p>
        <p>库存情况：{{info.stock_quantity}}件</p>
        <p>上架时间：{{info.add_time | date}}</p>
      </div>
    </div>
    <div class="mui-card-footer">
      <mt-button type="primary" size="large" plain @click="goDetails">图文介绍</mt-button>
      <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data(){
      return{
        List:[],
        id:this.$route.params.id,
        info:[]
      }
    },
    created(){
      this.getgoodsSwiper()
        this.getgoodsmsg()
    },

    methods:{
      getgoodsSwiper(){
        this.$http.get(`api/getthumimages/${this.id}`)
          .then(res=>{
            console.log(res);
            const body = res.body
            if(body.status===0){
              this.List = body.message
            }
          })
      },
      getgoodsmsg(){
        this.$http.get(`api/goods/getinfo/${this.id}`)
          .then(res=>{
            console.log(res);
            const body =res.body;
            if(body.status===0){
              this.info = body.message[0]
            }
          })
      },
      addCart(){

      },
      // getCount(){
      //
      // },
      goDetails(){

      },
      goComment(){}
    }

  }
</script>
<style>
.mint-swipe{
  height: 200px;

}
.mint-swipe-item{
  text-align: center;
}
  .mint-swipe-item img{
    -webkit-background-size: cover;
    background-size: cover;
    width: auto;
    height: 100%;

  }
  .mui-numbox{
    height: 25px;
    margin-bottom: 5px;
  }


.mint-button{
  font-size: 12px;
  height: 30px;
}
.mui-card-footer{
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;

}

</style>
