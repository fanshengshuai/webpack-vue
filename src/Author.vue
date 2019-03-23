<template>
  <div class="mainPanel" ref="mainPanel" v-if="inited" :style="'height:'+winHeight+'px'">
    <div style="text-align:center;padding:20px 0; ">
      <img class="logo" :src="imgLogo">
    </div>
    <div class="mui-content">
      <form id="login-form" class="mui-input-group">
        <div class="mui-input-row">
          <label>手机号</label>
          <input type="text" v-model="account" placeholder="请输入账号">
        </div>
        <div class="mui-input-row">
          <label class="iconfont_log_reg icon-youjian">验证码</label>
          <input type="text" placeholder="请输入短信验证码" step="width:50%;" v-model="code">
        </div>
        <div class="yzmPanel" style>
          <button id="send_code" ref="btnSendSMS" @click="abc" type="button" value>获取验证码</button>
        </div>
      </form>
      <div class="mui-content-padded">
        <button
          id="login"
          type="button"
          @click="login"
          class="mui-btn mui-btn-block mui-btn-primary"
        >登录</button>
        <div class="link-area">
          <a id="reg">注册账号</a>
          <span class="spliter">|</span>
          <a id="forgetPassword">忘记密码</a>
        </div>
      </div>
      <div class="mui-content-padded oauth-area"></div>
    </div>
    <div style="text-align:center;padding:35px 0;" v-if="showEWM">
      <img class="erweima" :src="imgErweima">
    </div>
  </div>
</template>

<script>
import { cookie } from "./util";
import Axios from "axios";

export default {
  data() {
    return {
    //   imgLogo: require("./img/login_logo.png"),
    //   imgErweima: require("./img/erweima.png"),
      account: "",
      code: "",
      inited: false,
      showEWM: true,
      winHeight: 0
    };
  },
  methods: {
    login: function() {
      var account = this.account;
      var code = this.code;
      if (!this.validNumber(account)) {
        this.$Message.error("手机号码错误");
        return;
      }
      if (!code || code == "") {
        this.$Message.error("验证码错误");
        return;
      }
      var url = "/car/public/register";
      this.$http.post(url, { phone: account, code: code }).then(function(resp) {
        if (resp.body.status == "y") {
          location = "/wx/#/";
        } else {
          alert(resp.body.info);
        }
      });
    },
    countdown(s) {
      var that = this;
      s--;
      if (s == 0) {
        this.$refs.btnSendSMS.disabled = false;
        this.$refs.btnSendSMS.innerText = "获取验证码";
      } else {
        this.$refs.btnSendSMS.innerText = s + " 秒后可重发";
        setTimeout(function() {
          that.countdown(s);
        }, 1000);
      }
    },
    validNumber(t) {
      return /^1\d{10}$/.test(t);
    },

    abc() {
      var that = this;
      // console.log("发送短信验证码");
      var account = this.account;
      if (that.validNumber(account)) {
        // console.log("验证通过");
        var url = "/car/public/send_message";
        that.$http.post(url, { phone: account }).then(function(resp) {
          if (resp.body.result == "success") {
            this.$Message.success("发送成功");
            this.$refs.btnSendSMS.disabled = true;

            that.countdown(60);
          } else {
            this.$Message.error({
              content: "发送失败，请稍后重试",
              duration: 10
            });
          }
        });
      } else {
        this.$Message.info("请填写正确的手机号", "手机号码错误");
        return;
      }
    }
  },
  mounted() {
    // var height = this.$refs.mainPanel.innerHeight;
  },
  created: function() {
    var that = this;
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      // 跳转到微信授权页面
      Axios.post("/api/wechat/getOpenId", {
        responseType: "json"
      }).then(function(resp) {
        if (resp.data && resp.data.status == "ok") {
          that.inited = true;
          that.winHeight = window.innerHeight;
        } else {
          window.location.href = "/car/public/wxLogin";
        }
      });
    } else {
      this.inited = true;
      this.winHeight = window.innerHeight;
    }

    // if (this.$route.query && this.$route.query.token) {
    // this.inited = true;
    // this.winHeight = window.innerHeight;
    // return true;
    // }

    // var url = "/api/user/getUserInfo";
    // this.$http.post(url).then(data => {
    //   console.log("get auth ...");
    //   console.log(data);

    //   if (data.status == "error") {
    //     location = "/car/public/auth";
    //   } else {
    //     this.$store.commit("setUserData", data.body);
    //     var url = sessionStorage.getItem("beforeLoginUrl");
    //     sessionStorage.removeItem("beforeLoginUrl");
    //     this.$router.push({
    //       path: url
    //       // params: { auth: "logined" }
    //     });
    //   }
    // });
  }
};
</script>

<style scoped>
.mainPanel {
  padding-top: 50px;
  /* background-image: url(./img/bg.jpg); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.yzmPanel {
  position: absolute;
  right: 25px;
  margin-top: -37px;
}

.erweima {
  box-shadow: 1px 0px 15px #888888;
  width: 120px;
  height: 120px;
}

@media only screen and (max-width: 320px) {
  .erweima {
    display: none;
  }
  .yzmPanel {
    right: 2px;
  }
}

#send_code {
  color: green;
  background: #ddd;
}
.logo {
  /* border: #6e87a2 5px solid; */
  /* box-shadow: 1px 0px 15px #888888; */
  width: 120px;
  height: 120px;
  /* border-radius: 50%; */
}
.area {
  margin: 20px auto 0px auto;
}

.mui-content {
  background-color: inherit;
}

.mui-input-group {
  margin-top: 10px;
  background: none;
}

.mui-input-group:before,
.mui-input-group::after {
  background: none;
}

.mui-input-group:first-child {
  margin-top: 20px;
}

.mui-input-group label {
  width: 85px;
  color: #ccc;
}
.mui-input-group input {
  color: #ccc;
  height: 40px;
  line-height: 40px;
}

.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 175px;
  float: left;
}

.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}

.mui-content-padded {
  margin-top: 25px;
}

.mui-btn {
  padding: 10px;
}

.link-area {
  display: block;
  margin-top: 25px;
  text-align: center;
}

.spliter {
  color: #bbb;
  padding: 0px 8px;
}

.oauth-area {
  position: absolute;
  bottom: 20px;
  left: 0px;
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.oauth-area .oauth-btn {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0px 20px;
  /*-webkit-filter: grayscale(100%); */
  border: solid 1px #ddd;
  border-radius: 25px;
}

.oauth-area .oauth-btn:active {
  border: solid 1px #aaa;
}

.oauth-area .oauth-btn.disabled {
  background-color: #ddd;
}
#login {
  font-size: 15px;
  padding: 5px;
}
</style>
<style>
.mui-input-row .mui-input-clear ~ .mui-icon-clear {
  left: 170px;
  right: inherit;
  color: #ccc !important;
}
</style>