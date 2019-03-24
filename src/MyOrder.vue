<template>
  <div class="my-order-page">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <div class="hc-huangli-top">
        <div class="mui-segmented-control hc-huangli-tab">
          <a class="mui-control-item hc-huangli-item" href="/help/" data-zs_datatp="zs_datatp">问题</a>
          <a
            class="mui-control-item hc-huangli-item"
            href="#"
            data-zs_datatp="zs_datatp"
          >反馈</a>
          <a
            class="mui-control-item hc-huangli-item mui-active"
            href="/order.shtml"
            data-zs_datatp="zs_datatp"
          >订单</a>
        </div>
      </div>
      <a class="mui-icon iconfont icon-moreandroid mui-pull-right" id="icon-menu"></a>
      <a
        class="mui-pull-right mui-badge"
        data-loginaad="1"
        style="
    color: #bb8962;
    padding: 8px 10px;
    margin-top: 7px;
    font-size: 15px; margin-right: 0;display: none;"
      >登录</a>
    </header>
    <div class="mui-content">
      <div class="quanzi-top-tab" style="top: 44px;">
        <a class="quanzi-top-item qz-active" data-id="#quanzi-tab1">全部</a>
        <a class="quanzi-top-item" data-id="#quanzi-tab2">已支付</a>
        <a class="quanzi-top-item" data-id="#quanzi-tab3">未支付</a>
      </div>

      <div
        class="search"
        style="position: fixed;top: 85px;left: 0;right: 0;height: 56px;padding: 10px 5px;-webkit-backdrop-filter: blur(5px);backdrop-filter: blur(5px);background-color: #f2e9d4;overflow: hidden;z-index: 666; "
      >
        <div
          class="mui-input-row mui-search"
          style="line-height: 34px;position: absolute;z-index: 1;top: 10px;right: 10px;bottom: 0px;left: 10px;display: inline-block;color: #999;font-size: 16px;-webkit-box-sizing: border-box;box-sizing: border-box;height: 34px;text-align: center;border: 0;border-radius: 6px; background-color: rgba(0,0,0,.1);"
        >
          <span class="mui-input-clear"></span>
          <span data-id="cleardata" class="mui-icon mui-icon-clear mui-hidden"></span>
          <span
            class="mui-placeholder"
            data-zsxiugai="1"
            data-title="订单查询"
            data-lx="1"
            data-value="确认查询"
          >
            <span class="mui-icon mui-icon-search"></span>
            <span>如果未显示付款订单，点这里查询</span>
          </span>
        </div>
      </div>

      <div class="mui-slider-group" style="margin-top: 110px;">
        <div id="quanzi-tab1" class="mui-slider-item mui-control-content mui-active">
          <div data-count="2" data-id data-zsgd_id="1553421872363" data-up="up" data-gdbl="0"></div>

          <div class="hc-pull-bottom-tips" data-zsgun_tps="1553421872363">
            <span class="hc-pull-loading">没有更多内容了...</span>
          </div>
        </div>
        <div id="quanzi-tab2" class="mui-slider-item mui-control-content">
          <div data-count="1" data-id="1" data-zsgd_id="1553421872363" data-up="up" data-gdbl="1"></div>
        </div>
        <div id="quanzi-tab3" class="mui-slider-item mui-control-content">
          <div data-count="1" data-id="0" data-zsgd_id="1553421872363" data-up="up" data-gdbl="1"></div>
        </div>
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