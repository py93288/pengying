<template>
  <div class="goods-list">
    <ul>

       <li class="goods-item" v-for="item in goodsList" :key="item.id">
         <router-link :to="'/home/shoppingList/'+item.id">
         <img :src="item.img_url" alt="">
         <h2>{{item.title}}</h2>
         <div class="goodsPrice">
           <span class="price-cur">￥{{item.sell_price}}</span>
           <span class="price-prev">￥{{item.market_price}}</span>
         </div>
         <p>
           <span>热卖中</span>
           <span>剩余{{item.stock_quantity}}件</span>
         </p>
         </router-link>
       </li>
    </ul>

     <!--<mt-button type="primary" size="large" plain @click="loadMoreGoods-->
<!--" v-if='isshow' v-text="msg" ref="dv">-->
     <!--</mt-button>-->
    <div class="btn" @click="loadMoreGoods" v-if='isshow' v-text="msg" ref="dv"></div>
   </div>

</template>
<script>
  export default {
    data() {
      return {
        goodsList: [],
        page: 1,
        isshow: true,
        msg:"加载更多"
      }
    },
    created() {
      this.getgoods()
    },
    methods: {
      getgoods() {
        this.$http.get(`api/getgoods?pageindex=${this.page}`)
          .then(res => {
            console.log(res);
            const body = res.body;
            if (body.status === 0) {
              this.goodsList = [...this.goodsList, ...body.message]
              if (body.message.length < 10) {
                this.msg = "没有更多数据了"
                console.log(this.$refs.dv);
                this.$refs.dv.style.border= "none";
                this.$refs.dv.style.marginTop = 0;
                this.$refs.dv.style.color= 'red';
              }
            }
          })
      },
      loadMoreGoods() {
        this.page++;
        this.getgoods()

      }
    }
  }


</script>
<style>
  .goods-list ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .goods-item {
    width: 48%;
    margin: 1%;
    padding: 3px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
  }

  h2 {
    font-size: 14px;
  }

  .goodsPrice {
    font-size: 14px;
    margin-top: 5px;
  }

  .price-cur {
    color: #f00;
    margin-right: 10px;
  }

  .price-prev {
    text-decoration: line-through;
    color: #ccc;
  }

  img {
    width: 100%;
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 3px;
    color: #ccc;
  }
  .btn{
    width: 95%;
    height: 45px;
    border: 1px solid dodgerblue;
    text-align: center;
    line-height: 45px;
    margin-bottom: 10px;
  }
</style>
