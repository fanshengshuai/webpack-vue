<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" to="/home" active-class="mui-active">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>

    <router-link class="mui-tab-item" to="/cars" active-class="mui-active">
      <span class="mui-icon iconfont icon-cheliang">
        <!-- <span class="mui-badge">9</span> -->
      </span>
      <span class="mui-tab-label">车况</span>
    </router-link>

    <router-link class="mui-tab-item" to="/NewMy" active-class="mui-active">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>

    <!-- <a class="mui-tab-item" href="#tabbar-with-map">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">设置</span>
    </a>-->
  </nav>
</template>
<style>
.mui-bar-tab .mui-tab-item.mui-active {
  color: #43b8b4;
}
</style>

<script>
export default {};
</script>
