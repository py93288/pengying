import Vue from "vue"
import moment from "moment"
Vue.filter("date", function(val) {
    return moment(val).format("YYYY-MM-DD HH:mm:ss")
})