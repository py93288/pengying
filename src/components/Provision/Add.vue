<template>
  <div class="prvo-add-page">
    <div class="prov-add-header">
      <mt-header fixed title="新的供应商">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="prov-search">
      <router-link to="prvo-add-page-info" class="search-wrap">
        <i class="el-icon-search search-icon"><span class="search-text">手机/联系人搜索</span></i>
      </router-link>
    </div>
    <div class="current">
      <p> 近三天</p>
      <div class="current-contact">
        <ul>
          <li class="current-contact-list">
            <div class="img-wrap"><img src="../../../static/menu3.png" alt=""></div>
            <div class="text-wrap">
              <p>江苏乐建网络科技有限公司</p>
              <p>请求添加您为好友</p>
            </div>
            <input type="submit" class="btn" @click="added" v-model="agree">
          </li>
          <li class="current-contact-list">
            <div class="img-wrap"><img src="../../../static/menu3.png" alt=""></div>
            <div class="text-wrap">
              <p>江苏乐建</p>
              <p>请求添加您为好友</p>
            </div>
            <input type="submit" class="btn" @click="added" v-model="agree">
          </li>
        </ul>

      </div>


    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        agree: "同意"
      }
    },

    methods: {
      added() {
        this.agree = "已添加"
      }
    }
  }

</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .search-wrap {
    text-align: center;
    line-height: 45px;
    display: block;
    width: 100%;
    height: 55px;
    background-color: #e8ebdb;
    position: relative;

  }

  .search-icon {
    display: block;
    background-color: #fff;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  .search-text {
    color: #000000;
    height: 35px;
    line-height: 35px;

  }

  .current {
    padding: 10px 0px;

  }

  .current > p {
    height: 30px;
    line-height: 30px;
    padding: 0 8px
  }

  .current-contact {
    width: 100%;
    /*height: 50px;*/
    border-top: 1px solid #9a9a9a;
    border-bottom: 1px solid #9a9a9a;
    overflow: hidden;
    padding: 3px 6px;
  }

  .current-contact > ul {
    padding: 0;
  }

  .current-contact-list {
    list-style: none;
    float: left;
    padding: 8px 8px;
    border-bottom: 1px solid #9a9a9a;
    /*margin-bottom: 8px;*/
  }

  ul li:last-child {

    border-bottom: none;
  }

  .img-wrap {
    float: left;
    border: 1px solid #9a9a9a;
    margin-top: 5px;
  }

  .current-contact-list img {
    width: 35px;
    height: 35px;
    float: left;
    margin: 0px;
  }

  .text-wrap {
    float: left;
    margin-left: 15px;
    margin-right: 15px;
    width: 168px;
  }

  .text-wrap > p {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h5 {
    margin: 0;
  }

  .btn {
    float: right;
    margin-top: 6px;
    background-color: cyan;
    padding-left: 50px;
    /*margin-right: 10px;*/
  }
</style>
