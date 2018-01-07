<template>
  <div id="numbox" class="mui-numbox" :data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
  import "../../../mui-master/examples/hello-mui/js/mui"
  import mui from "../../lib/mui/js/mui"

  export default {
    props: ["Maxnum"],
    mounted() {
      mui("#umbox").numbox()
      mui("#umbox").numbox().setOption('max', this.Maxnum)
    }
  }
</script>
<style>

</style>
