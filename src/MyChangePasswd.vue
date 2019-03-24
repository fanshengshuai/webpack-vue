<template>
  <div class="my-change-passwd-page">
    <header class="mui-bar mui-bar-nav member-bar">
      <router-link class="mui-icon mui-icon-left-nav mui-pull-left" to="/my"></router-link>
      <h1 class="mui-title">修改密码</h1>
    </header>
    <div class="mui-content">
      <div class="member-input-list">
        <div class="member-input-row">
          <label class="colozs">验证码</label>
          <input type="password" name="old" placeholder="验证码">
          <button type="button" class="mui-btn mui-btn-warning user-input-yzm" id="yzm">获取验证码</button>
        </div>
        <div class="member-input-row">
          <label class="colozs">新密码</label>
          <input type="password" name="xin" placeholder="新密码">
        </div>
        <div class="member-input-row" style="border-bottom: none;">
          <label class="colozs">确认密码</label>
          <input type="password" name="xin2" placeholder="确认密码">
        </div>
      </div>
      <div class="user-h-padd">
        <button id="but_ok" class="mui-btn member-btn">确定</button>
      </div>
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