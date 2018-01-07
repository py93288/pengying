<template>
  <div class="prov-page">
    <div class="prov-header">
      <mt-header fixed title="供应商">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="prvo-content">
      <ul>
       <div class="itemHover" :class='{itemHover:itemHoverIndex==0}' @mouseEnter="mouseEnter(0)" @mouseLeave = "mouseLeave">diyixiakjsdhfjkafjHFJHKJSDFHKJ</div>
        <br>
        <br>
        <div class="itemHover" :class='{itemHover:itemHoverIndex==1}' @mouseEnter="mouseEnter(1)" @mouseLeave = "mouseLeave">diyixiakjsdhfjkafjHFJHKJSDFHKJ</div>
        <br>
        <br>
        <div class="itemHover" :class='{itemHover:itemHoverIndex==2}' @mouseEnter="mouseEnter(2)" @mouseLeave = "mouseLeave">diyixiakjsdhfjkafjHFJHKJSDFHKJ</div>
        <br>
        <br>
        <div class="itemHover" :class='{itemHover:itemHoverIndex==3}' @mouseEnter="mouseEnter(3)" @mouseLeave = "mouseLeave">diyixiakjsdhfjkafjHFJHKJSDFHKJ</div>

        <br>
        <br>

        <a  class="hov" href="">hover效果</a>
         <li class="prov-add" >
           <router-link to="/home/prvision/add" class="prov-text">
             添加供应商
           </router-link>
         </li>

        <li class="prov-add">
          <router-link to="/home/prvision/preserve" class="prov-text" >
            维护供应商
          </router-link>
        </li>
        <li class="prov-add" >
          <router-link to="/home/prvision/library" class="prov-text" >
            供应商库
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
    return{
      itemHoverIndex:null,
    }
    },
    methods:{
      mouseEnter(index){
        this.itemHoverIndex=index
      },
      mouseLeave(){
        this.itemHoverIndex=null
      }
    }

  }

</script>
<style scoped>
  .prvo-content {
    margin-top: 60px;
    position: relative;
  }
  .prvo-content>ul{
    padding: 0 30px;
  }
  li,.prov-add{
    list-style: none;
    height: 50px;
    background-color: #ccc;
    text-align: center;
    line-height: 50px;
    margin-bottom: 60px;
    border-radius: 20px;

  }
  .itemHover{
    background-color: red !important;
  }

</style>
