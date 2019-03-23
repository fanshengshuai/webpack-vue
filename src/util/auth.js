import axios from "axios";
import store from "../store";

export default {
    userData: null,
    check() {
        var storeUserData = store.getters.userData;
        if (!storeUserData) {
            this.userData = JSON.parse(sessionStorage.getItem("userData"));
            if (this.userData) {
                console.log("auth from session ...");
                store.commit("setUserData", this.userData);
                return;
            }
        }

        var that = this;

        axios
            .get("/api/user/getUserInfo", {
                responseType: "json"
            })
            .then(function(resp) {
                if (resp.data && resp.data.status == "ok") {
                    sessionStorage.setItem("userData", JSON.stringify(resp.data.result));
                    that.authInfo = resp.data.result;
                    store.commit("setUserData", resp.data.result);
                    console.log("setOnline...");
                } else {

                    if (window.env == 'wechat') {
                        window.openId = resp.data.result.openId;

                        if (window.openId == null) {
                            window.location.href = "/car/public/wxLogin";
                        }
                    }


                }
            });
    },
    getAuthInfo() {
        this.check();
        return this.authInfo;
    },
    logout() {
        sessionStorage.removeItem("userData");
        this.userData = null;
        store.commit("setUserData", null);
        store.commit("car/removeCars", null);
    }
};