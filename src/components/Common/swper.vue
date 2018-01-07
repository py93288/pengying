<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in swipeList" :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    props:["swipe"]

  }
</script>
<style>

</style>
