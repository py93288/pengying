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
        <li class="prov-add">
          <router-link to="/home/prvision/add" class="prov-text">
            添加供应商
          </router-link>
        </li>

        <li class="prov-add">
          <router-link to="/home/prvision/preserve" class="prov-text">
            维护供应商
          </router-link>
        </li>
        <li class="prov-add">
          <router-link to="/home/prvision/library" class="prov-text">
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
      return {
        itemHoverIndex: null,
      }
    },
    methods: {}

  }

</script>
<style scoped>
  .prvo-content {
    margin-top: 60px;
    position: relative;
  }

  .prvo-content > ul {
    padding: 0 30px;
  }

  li, .prov-add {
    list-style: none;

    background-color: #ccc;
    text-align: center;
    line-height: 50px;
    margin-bottom: 60px;
    border-radius: 20px;

  }
  .prov-text{
    width: 100%;
    display: block;
    height: 50px;
    color: #fff;
    background-color: #ccc;
    border-radius: 20px;
  }
  .prov-text:hover{
    background-color: #0e4dff;
  }


</style>
