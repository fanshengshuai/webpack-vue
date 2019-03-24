<template>
  <nav class="mui-bar mui-bar-tab hc-footer">
    <router-link to="/home" class="mui-tab-item" active-class="mui-active">
      <span class="mui-icon iconfont icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>

    <router-link to="/fenlei" class="mui-tab-item" active-class="mui-active">
      <span class="mui-icon iconfont icon-ceshi"></span>
      <span class="mui-tab-label">测试</span>
    </router-link>

    <router-link to="/find" class="mui-tab-item" active-class="mui-active">
      <span class="mui-icon iconfont icon-faxian"></span>
      <span class="mui-tab-label">发现</span>
    </router-link>
    <!-- <a class="mui-tab-item" title="开运商城" href="http://m.okbmf.com/" data-zs_datatp="zs_datatp">
      <span class="mui-icon iconfont icon-cart"></span>
      <span class="mui-tab-label">开运商城</span>
    </a>-->
    <router-link to="/my" class="mui-tab-item" active-class="mui-active">
      <span class="mui-icon iconfont icon-wo"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
</template>
<style>
</style>

<script>
export default {};
</script>
