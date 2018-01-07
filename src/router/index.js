import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);
import Home from "../components/Home/Home.vue"
import News from "../components/News/News.vue"
import Contancts from "../components/Contancts/Contancts.vue"
import Test from "../components/Test/Test.vue"
import List from "../components/List/List.vue"
import NewsInfo from '../components/List/Info.vue'
import photoList from "../components/photo/photoList.vue"
import photoInfo from "../components/photo/photoInfo.vue"
import Alist from "../components/List/alist"
import Provision from "../components/Provision/Provision"
import Add from "../components/Provision/Add"
import Preserve from "../components/Provision/Preserve"
import Library from "../components/Provision/Library"
import ShoppingList from "../components/ShoppingList/ShoppingList"
import goodsListInfo from "../components/ShoppingList/goodsListInfo"


const router = new VueRouter({
  routes: [
    {path: "/", redirect: "/home"},
    {path: "/home", component: Home},
    {path: "/news", component: News},
    {path: "/contancts", component: Contancts},
    {path: "/test", component: Test},
    {path: "/home/list", component: List},
    {path: "/home/newsinfo/:id", component: NewsInfo},
    {path: "/home/photoList", component: photoList},
    {path: "/home/photoinfo/:id", component: photoInfo},
    {path: "/home/alist", component: Alist},
    {path: "/home/provision", component: Provision},
    {path: "/home/prvision/add", component: Add},
    {path: "/home/prvision/preserve", component: Preserve},
    {path: "/home/prvision/library", component: Library},
    {path:"/home/shoppingList",component:ShoppingList},
    {path:"/home/shoppingList/:id",component:goodsListInfo}
  ],
  linkActiveClass: "mui-active"
})
export default router
