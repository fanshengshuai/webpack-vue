<template>
  <div class="my-profile-page">
    <header class="mui-bar mui-bar-nav member-bar">
      <router-link class="mui-icon mui-icon-left-nav mui-pull-left" to="/my"></router-link>
      <h1 class="mui-title">个人资料</h1>
    </header>
    <div class="mui-content">
      <ul class="member-list" style="margin-top: 0">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-pull-left colozs" style="line-height: 80px;">头像</span>
            <label for="hdimg111">
              <img
                id="img_head"
                class="photo mui-pull-right"
                src="//imgcdn.httpcn.com/upload/public/3.jpg"
              >
            </label>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-pull-left colozs">帐号</span>
            <span class="member-right mui-ellipsis">4973942901283958120</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left colozs">昵称(只能修改一次)</span>
            <span
              class="member-right"
              data-title="昵称"
              data-bq="no"
              data-type="1"
              data-key="1"
              data-leng="10"
              data-lx="1"
              data-val
              data-value
            >未设置</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right&quot;">
            <span class="mui-pull-left colozs">生日(只能修改一次)</span>
            <span id="sr" data-key="4" data-val="公历 未设置" class="member-right">公历 未设置</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left colozs">性别</span>
            <span id="sex" data-key="5" class="member-right">未设置</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left colozs">所在地</span>
            <span id="sf" data-key="6" class="member-right">未设置</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left colozs">个性签名</span>
            <span
              class="member-right mui-ellipsis"
              style="width: 75%;"
              data-title="个性签名"
              data-lx="2"
              data-bq="no"
              data-key="2"
              data-leng="200"
              data-value
              data-val
            >未设置</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left colozs">个人介绍</span>
            <span
              class="member-right mui-ellipsis"
              style="width: 75%;"
              data-title="个人介绍"
              data-lx="2"
              data-bq="no"
              data-key="3"
              data-leng="500"
              data-value
              data-val
            >未设置</span>
          </a>
        </li>
      </ul>
      <input
        type="file"
        id="hdimg111"
        accept="image/jpg, image/jpeg, image/png, image/bmp"
        style="display: none"
        name="headimg"
      >
      <ul class="member-list">
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left icon color1 iconfont icon-shouji"></span>
            <div class="mui-media-body">
              <h4 class="colozs font16">手机号码</h4>
              <p class="mui-ellipsis" style="padding-right: 65px;">185*****669</p>
            </div>
          </a>
          <span class="anniu">
            <button
              type="button"
              data-url="/member/shouji"
              class="mui-btn mui-btn-success"
              data-zs_datatp="zs_datatp"
            >更换</button>
          </span>
        </li>
        <li class="mui-table-view-cell" id="wx_hideshowshow" style="display: none">
          <a class="user-n-right">
            <span class="mui-pull-left icon color2 iconfont icon-weixin"></span>
            <div class="mui-media-body">
              <h4 class="colozs font16">微信</h4>
              <p class="mui-ellipsis" style="padding-right: 65px;">未绑定</p>
            </div>
          </a>
          <span class="anniu">
            <button
              type="button"
              data-isbsat="1"
              data-url="//m.login.httpcn.com/home/weixindenglu"
              class="mui-btn mui-btn-danger"
              data-zs_datatp="zs_datatp"
            >绑定</button>
          </span>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left icon color3 iconfont icon-qq"></span>
            <div class="mui-media-body">
              <h4 class="colozs font16">QQ</h4>
              <p class="mui-ellipsis" style="padding-right: 65px;">未绑定</p>
            </div>
          </a>
          <span class="anniu">
            <button
              type="button"
              data-isbsat="2"
              data-url="//m.login.httpcn.com/home/qqdenglu"
              class="mui-btn mui-btn-danger"
              data-zs_datatp="zs_datatp"
            >绑定</button>
          </span>
        </li>
        <li class="mui-table-view-cell">
          <a class="user-n-right">
            <span class="mui-pull-left icon color4 iconfont icon-unie61d"></span>
            <div class="mui-media-body">
              <h4 class="colozs font16">微博</h4>
              <p class="mui-ellipsis" style="padding-right: 65px;">未绑定</p>
            </div>
          </a>
          <span class="anniu">
            <button
              type="button"
              data-url="//m.login.httpcn.com/home/weibodenglu"
              class="mui-btn mui-btn-danger"
              data-zs_datatp="zs_datatp"
            >绑定</button>
          </span>
        </li>
      </ul>
      <ul class="member-list" style="display: none">
        <li class="mui-table-view-cell">
          <a class="user-n-right" href="/member/pwd" data-zs_datatp="zs_datatp">
            <span class="mui-pull-left colozs">修改密码</span>
          </a>
        </li>
      </ul>
      <ul class="member-list">
        <li class="mui-table-view-cell">
          <div class="user-h-padd">
            <button
              id="exit_zx"
              data-url="/member/zxxz"
              style="   border: 1px solid #f0ad4e;  background-color: #f0ad4e;color: #fff;"
              class="mui-btn member-btn"
              data-zs_datatp="zs_datatp"
            >注销我的帐号</button>
          </div>
        </li>
      </ul>
      <div style="height: 30px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
</style>