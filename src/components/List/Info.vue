<template>
  <div>
    <!--{{$route.params.id}}-->

    <header>
    <h3>{{list.title}}</h3>
    <p class="mui-ellipsis">
      <span>发表时间：{{list.add_time | date}}</span>
      <span>点击次数：{{list.click}}次</span>
    </p>
  </header>
    <div class="news-content" v-html = "list.content"></div>
    <Common :commonId = "list.id" ></Common>
  </div>

</template>

<script>
import Common from "../Common/Common.vue";
export default {
  data() {
    return {
      list: [],
      id:this.$route.params.id
    };
  },
  created() {
    this.getnew();
  },
  methods: {
    getnew() {
      // this.$http.get("http://vue.studyit.io/api/getnew/"+this.$route.params.id)
      this.$http
        // .get(`http://vue.studyit.io/api/getnew/${this.$route.params.id}`)
         .get(`api/getnew/${this.id}`)
        .then(function(res) {
          // console.log(res);
          const body = res.body;
          if (body.status === 0) {
            this.list = body.message[0];
          }
        });
    }
  },
  components:{
    Common:Common
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>

