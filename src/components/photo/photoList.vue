<template>
  <div>

    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
           data-scroll="1">
        <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
          <!--<a href="javascript:;" class="all">全部</a>-->
          <a :class="['mui-control-item', {'mui-active': item.id === 14}]" href="#item1mobile"
             data-wid="tab-top-subpage-1.html" v-for="item in navbarList" :key="item.index">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <!-- 图片列表 -->
    <div>
      <ul class="img-item-list">
        <li v-for="item in photoList" :key="item.id" class="item-list" @click="gophotoInfo(item.id)">
        <!-- <li v-for="item in photoList" :key="item.id" class="item-list" > -->
          <!--<img :src="item.img_url" alt="">-->
          <img v-lazy="item.img_url">
          <div>
            <h4>{{item.title}}</h4>
            <p>{{item.zhaiyao}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navbarList: [],
        photoList: [],
        id: 0
      };
    },
    created() {
      this.getnarBarList();
      this.getphotoList();
    },
    methods: {
      getnarBarList() {
        this.$http.get("api/getimgcategory").then(function (res) {
          // console.log(res);
          const body = res.body;
          if (body.status === 0) {
            // this.navbarList = [{id: 0, title: "全部"}, ...body.message];
            this.navbarList = body.message;
          }
        });
      },
      getphotoList() {
        this.$http.get(`api/getimages/${this.id}`)
          .then(function (res) {
          // console.log(res);
          const body = res.body;
          if (body.status === 0) {
            this.photoList = body.message;
          }
        });
      },
      gophotoInfo(id) {
        this.$router.push({path: `/home/photoinfo/${id}`})
        // console.log(id);
      },

    },
  };
</script>

<style scoped>
  .mui-slider {
    position: fixed;
    top: 40px;
    background-color: #fff;
  }

  * {
    touch-action: none;
  }

  li {
    list-style: none;
  }

  .img-item-list {
    padding: 5px;
    padding-top: 30px;
  }

  .item-list li > img {
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    -webkit-background-size: cover  ;
    background-size: cover  ;
  }
</style>
