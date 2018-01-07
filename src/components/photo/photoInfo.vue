<template>
  <div class="photo-info">
    <!--图片详情-->
    <!--{{$route.params}}-->
    <!--{{$route.path}}-->
    <!--{{$route.query}}-->
    <!--<div>hash值是:{{$route.hash}}</div>-->
    <!--<div>完整的url是{{$route.fullPath}}</div>-->

    <header>

          <h4 class="title">{{info.title}}</h4>
          <p class="mui-ellipsis">
            <span>发表时间：{{info.add_time | date}}</span>
            <span>点击次数：{{info.click}}次</span>
          </p>
          <div class="thumb-img">
            <!--<img :src="item.src" alt="" class="photo-info-img" v-for="(item,index) in imgThumbList" :key="index">-->
          </div>
          <div v-html="info.content"></div>

          <!--<Common :commonId = "id" ></Common>-->

    </header>

  </div>
</template>

<script>
  // import Common from "../Common/Common.vue";
  export default {
    data() {
      return {
        info: [],
        // imgThumbList:[],
        id:this.$route.params.id

      };
    },
    created() {
      this.getphotoInfo()
      // this.getThumbList()
    },
    methods: {
      getphotoInfo() {
        this.$http.get(`api/getimageInfo/${this.id}`)
          .then(function (res) {
            // console.log(res);
            const body = res.body
            if (body.status === 0) {
              this.info = body.message[0]
            }
          })
      },
      // getThumbList(id) {
      //   this.$http.get(`api/getthumimages/${this.id}`)
      //     .then(function(res){
      //       console.log(res);
      //       const body = res.body
      //       if(body.status===0){
      //         this.imgThumbList = body.message
      //       }
      //     })
      // }
    }

  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .photo-info {
    padding: 10px;
    margin-top: 40px;
  }

  .photo-info-list {
    list-style: none;
  }
  .thumb-img{
    width: 100%;
    height: 100%;
  }
  .thumb-img img {
    width: 50px;
    height: 50px;
    -webkit-background-size: cover;
    background-size: cover;
    margin-left: 10px
  ;
  }
</style>
