import Vue from "vue";
// import Ionic from '@ionic/vue';

import VueRouter from "vue-router";
import VueResource from "vue-resource";
import routerConfig from "./router";
import store from "./store";
import {
    cookie
} from "./util";
import {
    auth
} from "./util";


let ua = window.navigator.userAgent.toLowerCase();
if (ua.match(/MicroMessenger/i) == "micromessenger") {
    window.env = "wechat";
    window.openId = null;
}

// import iView from "iview";

// const iView = r =>
//     require.ensure([], () => r(require("iview")), "iView");
// Vue.use(iView);
// import "iview/dist/styles/iview.css";
// Vue.use(Ionic);
Vue.use(VueRouter);
Vue.use(VueResource);

import './components/Toast/toast.css';
import Toast from './components/Toast/index';
Vue.use(Toast);






// r => require.ensure([], () => r(require("./css/mui.css")), "mui");
// import "./css/m÷ui.css";
// Directive
// Vue.directive('pullToRefresh', pullToRefresh)
// Vue.directive('infiniteScroll', infiniteScroll)

// import iView from "iview";
// Vue.use(iView);


console.log("app --> check auth")
// auth.check();


const router = new VueRouter({
    // mode: 'history',
    mode: "hash",
    base: __dirname
});

routerConfig(router);

Vue.http.options.emulateJSON = true;

new Vue({
    router,
    store,
    cookie,
    created() {
        document.getElementById("mainLoadding").remove();
        document.getElementById("app").style.display = "block";

    },
    methods: {},
    template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount("#app");