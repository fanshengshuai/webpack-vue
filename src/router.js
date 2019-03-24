//import $ from 'zepto'

import VueRouter from "vue-router";

const Home = r => require.ensure([], () => r(require("./Home.vue")), "home");
const Fenlei = r => require.ensure([], () => r(require("./Fenlei.vue")), "Fenlei");
const Find = r => require.ensure([], () => r(require("./Find.vue")), "Find");
const PhoneNum = r => require.ensure([], () => r(require("./PhoneNum.vue")), "PhoneNum");
const PhoneResult = r => require.ensure([], () => r(require("./PhoneResult.vue")), "PhoneResult");

const MyProfile = r => require.ensure([], () => r(require("./MyProfile.vue")), "MyProfile");
const QianDao = r => require.ensure([], () => r(require("./QianDao.vue")), "QianDao");
const MyChangePasswd = r => require.ensure([], () => r(require("./MyChangePasswd.vue")), "MyChangePasswd");

// import Author from "./Author.vue";
import store from "./store";

/**
 * 设置 router
 * @param {VueRouter} router
 * @param {Vuex} store
 */
export default function(router) {
    var routerConfig = [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/test/bazi",
            component: r => require.ensure([], () => r(require("./Bazi.vue")), "Bazi")
        },
        {
            path: "/ce/bazi",
            component: r => require.ensure([], () => r(require("./ce/Bazi.vue")), "ceBazi")
        },
        {
            path: '/fenlei',
            component: Fenlei
        },
        {
            path: "/find",
            component: Find
        },
        {
            path: "/ce/number",
            component: PhoneNum
        },
        {
            path: "/ce/xingming",
            component: r => require.ensure([], () => r(require("./ce/XingMing.vue")), "ceXingMing")
        },
        {
            path: "/phone_result",
            component: PhoneResult
        },
        {
            path: "/my",
            component: r => require.ensure([], () => r(require("./My.vue")), "my"),
            meta: {
                requiresAuth: false
            }
        }, {
            path: "/my/profile",
            component: MyProfile
        }, {
            path: '/my/qiandao',
            component: QianDao
        }, {
            path: '/my/passwd',
            component: MyChangePasswd
        }
    ];

    router.addRoutes(routerConfig);

    // router.beforeEach((to, from, next) => {
    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //         if (store.getters.userData == null) {
    //             sessionStorage.setItem("beforeLoginUrl", to.fullPath);
    //             next("/author");
    //             return false;
    //         }
    //     }

    //     next();
    // });
}