import Vue from "vue";
// import Ionic from '@ionic/vue';

import VueRouter from "vue-router";
import VueResource from "vue-resource";
import routerConfig from "./router";
import store from "./store";
import { cookie } from "./util";
import { auth } from "./util";

// let ua = window.navigator.userAgent.toLowerCase();
// if (ua.match(/MicroMessenger/i) == "micromessenger") {
//     window.env = "wechat";
//     window.openId = null;
// }

// import iView from "iview";

// const iView = r =>
//     require.ensure([], () => r(require("iview")), "iView");
// Vue.use(iView);
// import "iview/dist/styles/iview.css";
// Vue.use(Ionic);
Vue.use(VueRouter);
Vue.use(VueResource);

// import vueg from 'vueg'
// // import 'vueg/css/transition-min.css'
// const options = {
//     duration: '0.3', //转场动画时长，默认为0.3，单位秒
//     firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
//     firstEntryDuration: '.6', //首次进入应用时的渐现动画时长，默认为.6
//     forwardAnim: 'fadeInRight', //前进动画，默认为fadeInRight
//     backAnim: 'fadeInLeft', //后退动画，默认为fedeInLeft
//     sameDepthDisable: false, //url深度相同时禁用动画，默认为false
//     tabs: [{
//         name: 'home'
//     }, {
//         name: 'my'
//     }], //默认为[]，name对应路由的name,以实现类似app中点击tab页面水平转场效果，如tab[1]到tab[0]，会使用backAnim动画，tab[1]到tab[2]，会使用forwardAnim动画
//     tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
//     disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
// }

import "./test.scss";
import "./iconfont.scss";
import "./style.scss";
import "./pageTrans.scss"

import "./components/Toast/toast.css";
import Toast from "./components/Toast/index";
Vue.use(Toast);

import Footer from "./components/footer/footer.vue";

Vue.component("page-footer", Footer);

// r => require.ensure([], () => r(require("./css/mui.css")), "mui");
// import "./css/m÷ui.css";
// Directive
// Vue.directive('pullToRefresh', pullToRefresh)
// Vue.directive('infiniteScroll', infiniteScroll)

// import iView from "iview";
// Vue.use(iView);

console.log("app --> check auth");
// auth.check();

const router = new VueRouter({
  // mode: 'history',
  mode: "hash",
  base: __dirname
});

routerConfig(router);
// Vue.use(vueg, router);

Vue.http.options.emulateJSON = true;
// import Footer from "./components/footer/footer.vue";

new Vue({
  router,
  store,
  cookie,
  created() {
    document.getElementById("mainLoadding").remove();
    document.getElementById("app").style.display = "block";
  },
  methods: {},
//   data() {
//     return {
//       transitionName: ""
//     };
//   },
//   watch: {
    // $route(to, from) {
    //   if (to.meta.index > from.meta.index) {
    //     this.transitionName = "slide-left";
    //   } else {
    //     this.transitionName = "slide-right";
    //   }
    // }
//   },
  template: `
    <transition name="slide-fade">
      <router-view class="view"></router-view>
    </transition>
  `
}).$mount("#app");
