<template>
  <div class="common">
      <header>
          <h2 class="common-title">发表评论</h2>
          <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
          <mt-button type="primary" size="large" @click="commit">发表评论</mt-button>
          <ul class="common-list">
              <li class="common-item" v-for = "(item,index) in list" :key="index">
                  <div class="common-item-header">
                      <span>第{{index+1}}楼</span>
                      <span>用户:{{item.user_name}}</span>
                      <span>发表时间:2017-10-22 17:08:26</span>
                  </div>
                  <div class="common-item-content">
                      {{ item.content }}
                  </div>
              </li>
          </ul>
           <mt-button type="primary" size="large" plain @click="loadMore">加载更多</mt-button>
      </header>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    props:["commonId"],

    data(){
        return{
            list:[],
            curPage: 1,
            content:""
        }
    },
    created(){
        this.getCommon()

    },
    watch:{
        commonId:function(){
            this.getCommon();
        }
    },
    methods:{
        getCommon:function(){
            if(!this.commonId){
                return
            }
            // console.log(this.commonId)

            // const url = `http://vue.studyit.io/api/getcomments/${this.commonId}?pageindex=${this.curPage}`
            const url = `api/getcomments/${this.commonId}?pageindex=${this.curPage}`

            this.$http.get(url).then(function(res){

          // this.$axios.get(url).then(function(res){
                // console.log(res);
                // const body = res.data
                const body = res.body
                if(body.status===0){
                    // this.list = body.message
                    this.list = this.list.concat(body.message)
                }
            })
        },
        loadMore(){
         this.curPage++;
         this.getCommon();
        },
        commit(){
            if(this.content.trim()===""){
                return Toast({
                message: '内容为空',
                duration: 2000
            });
            }else{
                // 第一个参数：表示接口地址
                // 第二个参数：表示发送给接口的数据是一个对象
                // 第三个参数：是一个配置对象，使用 emulateJSON 来设置请求的content-type
                // const url= `http://vue.studyit.io/api/postcomment/${this.commonId}`
                const url= `api/postcomment/${this.commonId}`
              // this.$axios.post(url, `content=${this.content}`)
                this.$http.post(url,{content:this.content}, {emulateJSON: true})
                .then(function(res){
                    console.log(res);
                    // const body = res.data
                  const body = res.body
                    if(body.status===0){
                       this.list.unshift({
                           add_time:new Date(),
                           content:this.content,
                           user_name:"匿名用户"
                       })

                       Toast({
                            message: '评论成功',
                            duration: 2000
                    });
                    }
                    this.content=""
                })
            }
        }
    }
};
</script>

<style >
.common{
    padding: 10px;
}
.common-title{
    font-size: 18px;
}
.common-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 5px;
}
.common-item-header {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  background-color: #ffffff;
  line-height: 24px;
  align-items: center;
}
.common-item-content{
    padding: 10px;
    font-size: 16px;
}
</style>
