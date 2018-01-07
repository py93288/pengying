<template>
  <ul class="mui-table-view mui-table-view-chevron">

    <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">

         <img class="mui-media-object mui-pull-left" :src="item.img_url">
           <div class="mui-media-body">
             {{ item.title }}
            <p class="mui-ellipsis">
                <span>发表时间：{{item.add_time | date}}</span>
                <span>点击次数：{{item.click}}次</span>
            </p>
            </div>
         <router-link :to="'/home/newsinfo/' + item.id" >
            <button type="button" class="mui-btn mui-btn-primary">点击确定</button>
        </router-link>
 </li>
 </ul>
</template>

<script>
// import moment from "moment"
 export default {
  created() {
    this.getlist();
  },
//   filters:{
//    date:function(val){
// //  console.log(val);
//  return moment(val).format("YYYY-MM-DD HH:mm:ss")
//    }
//   },
  data() {
    return {
      list: []
    };
  },
  methods: {
    getlist() {
      this.$http
        .get("http://vue.studyit.io/api/getnewslist")
        .then(function(res) {
          if (res.body.status === 0) {
            //    console.log(res.body.message)
            this.list = res.body.message;
          }
        });
    }
  }
};
</script>

<style>
.search-page {
  position: relative;
  overflow: hidden;
}
.search-wrap {
  margin-top: -452px;
  width: 100%;
  height: 50px;
  position: absolute;
  background-color: rgb(63, 240, 231);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.search-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.search-list {
  margin-top: 80px;
}

</style>

