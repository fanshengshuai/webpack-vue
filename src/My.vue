<template>
  <div class="my-page">
    <header class="mui-bar mui-bar-nav member-bar">
      <router-link class="mui-icon iconfont icon-sign mui-pull-left" to="/my/qiandao">
        <span class="txt">签到</span>
      </router-link>
      <h1 class="mui-title">会员中心</h1>
      <router-link to="#" class="mui-icon iconfont icon-moreandroid mui-pull-right" id="icon-menu"></router-link>
    </header>
    <div class="mui-content">
      <div class="member-banner" v-show="false">
        <router-link to="#" class="member-user">
          <img class="photo" src="assets/images/user/user.jpg">
          <h3 class="mui-ellipsis font16">请您登录</h3>
        </router-link>
        <div class="member-tongji">
          <router-link to="#">
            <span>0</span>
            <p>汉币余额(个)</p>
          </router-link>
          <router-link to="#" style="border-right:0;">
            <span>0</span>
            <p>汉点(积分)</p>
          </router-link>
        </div>
      </div>

      <!--栏目列表-->
      <ul class="member-list" v-show="false">
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color6 iconfont icon-tongzhi"></span>
            <span class="mui-pull-left title colozs font16">消息通知</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color1 iconfont icon-jinbi"></span>
            <span class="mui-pull-left title colozs font16">我的汉币</span>
          </router-link>
        </li>
      </ul>
      <ul class="member-list" v-show="false">
        <li class="mui-table-view-cell">
          <router-link class="user-n-right" to="#">
            <span class="mui-pull-left icon color2 iconfont icon-dingdan"></span>
            <span class="mui-pull-left title colozs font16">我的订单</span>
          </router-link>
        </li>

        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color5 iconfont icon-dingdan"></span>
            <span class="mui-pull-left title colozs font16">订单找回</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color5 iconfont icon-wenhao1"></span>
            <span class="mui-pull-left title colozs font16">在线反馈</span>
          </router-link>
        </li>
      </ul>
      <ul class="member-list">
        <li class="mui-table-view-cell">
          <router-link to="/my/profile" class="user-n-right">
            <span class="mui-pull-left icon color6 iconfont icon-ziliao"></span>
            <span class="mui-pull-left title colozs font16">编辑个人资料</span>
          </router-link>
        </li>

        <li class="mui-table-view-cell">
          <router-link to="/my/passwd" class="user-n-right">
            <span class="mui-pull-left icon color4 iconfont icon-mima1"></span>
            <span class="mui-pull-left title colozs font16">修改密码</span>
          </router-link>
        </li>
      </ul>
      <!-- <ul class="member-list" v-show="false">
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color1 iconfont icon-star"></span>
            <span class="mui-pull-left title colozs font16">我的收藏</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color3 iconfont icon-quanzi1"></span>
            <span class="mui-pull-left title colozs font16">我的主页</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color4 iconfont icon-guanzhu"></span>
            <span class="mui-pull-left title colozs font16">我关注的人</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color1 iconfont icon-fensi"></span>
            <span class="mui-pull-left title colozs font16">我的粉丝</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color5 iconfont icon-quanxian"></span>
            <span class="mui-pull-left title colozs font16">缘友圈权限设置</span>
          </router-link>
        </li>
      </ul>-->
      <!-- <ul class="member-list" v-show="false">
        <li class="mui-table-view-cell">
          <router-link to="#" class="user-n-right">
            <span class="mui-pull-left icon color4 mui-icon mui-icon-trash"></span>
            <span class="mui-pull-left title colozs font16">清除隐私</span>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <div class="user-h-padd">
            <button id="exit_id" class="mui-btn member-btn">请您登录</button>
          </div>
        </li>
      </ul>-->
      <!--栏目列表/-->
      <div style="height: 30px;"></div>
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import Footer from "./components/footer/footer.vue";
import Header from "./components/header.vue";
export default {
  components: {
    "page-header": Header,
    "page-footer": Footer
  },
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
</style>