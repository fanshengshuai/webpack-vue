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
            name: "/cars",
            path: "/cars",
            component: Chekuang,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "/car/edit",
            path: "/car/edit",
            component: CarEdit,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "/car_wz",
            path: "/car_wz",
            component: Wz,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "/car_wl",
            path: "/car_wl",
            component: Wl,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/my",
            component: My,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/test",
            component: Test
        },
        {
            path: "/author",
            component: Author
        },
        {
            path: "/car/driveInfo",
            component: Todaydrive,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/traillist",
            component: TrailList,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "/wl/detail",
            path: "/wl/detail",
            component: Wldetail,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "/NewHome",
            path: "/NewHome",
            component: NewHome,
            meta: {
                requiresAuth: false
            }
        },
        {
            name: "/NewMy",
            path: "/NewMy",
            component: NewMy,
            meta: {
                requiresAuth: false
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