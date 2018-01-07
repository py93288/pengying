<template>
  <div>
    <ul>
      <button @click="current">近三天</button>
      <li v-for="item in list" :key="item.index">
        <p>姓名:{{item.title}}</p>
        <p>时间:{{item.time}}</p>
        <button>{{item.isallow}}</button>
      </li>
    </ul>
    <ul>
      <div>三天前</div>
      <li v-for="item in list" :key="item.index">
        <p>姓名:{{item.title}}</p>
        <p>时间:{{item.time}}</p>
        <button>{{item.isallow}}</button>
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        date:new Date().getTime(),
        list: [
          {
            "title": "彭盈6",
            "time": "2018-1-2 12:12",
            "isallow": false
          },

          {
            "title": "彭盈5",
            "time": "2018-1-1 12:12",
            "isallow": false
          },

          {
            "title": "彭盈7",
            "time": "2017-12-31 12:12",
            "isallow": false
          },
          {
            "title": "彭盈4",
            "time": "2017-12-30 12:12",
            "isallow": false
          },
          {
            "title": "彭盈3",
            "time": "2017-12-29 12:12",
            "isallow": true
          },
          {

            "title": "彭盈2",
            "time": "2017-12-25 12:12",
            "isallow": false
          },
          {
            "title": "彭盈1",
            "time": "2017-12-13 12:12",
            "isallow": true
          }
        ],

      }
    },
    methods:{

      current(){
        var date = this.date;
        console.log("现在的时间"+date);

        var list = this.list;
        // console.log(list);
        for (var i = 0; i < list.length; i++) {
         var j = list[i].time
          console.log(j);
          var a =new Date(j).getTime();
          console.log(a);
          if(date-a>=259200000){
            console.log("大于三天的数据"+a)
          }

        }

      }
  },
    created(){
      // console.log(this.date)
      // current();
      // console.log(this.list[0].time);

    },



  }
</script>
<style>

</style>
