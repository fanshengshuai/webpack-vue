//import $ from 'zepto'

import VueRouter from "vue-router";

const Home = r => require.ensure([], () => r(require("./Home.vue")), "home");

import My from "./My.vue";
import Author from "./Author.vue";
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
            path: "/my",
            component: My,
            meta: {
                requiresAuth: true
            }
        }
    ];

    router.addRoutes(routerConfig);

    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (store.getters.userData == null) {
                sessionStorage.setItem("beforeLoginUrl", to.fullPath);
                next("/author");
                return false;
            }
        }

        next();
    });
}