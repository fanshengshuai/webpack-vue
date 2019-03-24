<template>
  <div class="page-find">
    <page-header></page-header>

    <div class="mui-content" style="background: #e9ddc3;">
      <!-- 相关推荐-->

      <!-- <dl class="hanyu-xg hanyu-xg1">
        <dt>
          实用工具
          <span class="mui-pull-right iconfont icon-iconfontright"></span>
        </dt>
        <dd>
          <ul class="hanyu-xg-list1 hanyu-xg-list mui-clearfix">
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/hanchengzidian.png">
                <div class="mui-media-body mui-ellipsis">汉程字典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/kangxizidian.png">
                <div class="mui-media-body mui-ellipsis">康熙字典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/shuowenjiezi.png">
                <div class="mui-media-body mui-ellipsis">说文解字</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/hanchengcidian.png">
                <div class="mui-media-body mui-ellipsis">汉程词典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/jianfanzhuanhuan.png">
                <div class="mui-media-body mui-ellipsis">简繁转换</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/hanzizhuanpiny.png">
                <div class="mui-media-body mui-ellipsis">汉字转拼音</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/shicidaquan.png">
                <div class="mui-media-body mui-ellipsis">诗词大全</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/chengyucidian.png">
                <div class="mui-media-body mui-ellipsis">成语词典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/shufazidian.png">
                <div class="mui-media-body mui-ellipsis">书法字典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="assets/images/hanyu/wubichaxun.png">
                <div class="mui-media-body mui-ellipsis">五笔查询</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="//fy.httpcn.comassets/images/en.png">
                <div class="mui-media-body mui-ellipsis">英文词典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="//fy.httpcn.comassets/images/jp.png">
                <div class="mui-media-body mui-ellipsis">日语词典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="//fy.httpcn.comassets/images/fanyi.png">
                <div class="mui-media-body mui-ellipsis">在线翻译</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="//fy.httpcn.comassets/images/kr.png">
                <div class="mui-media-body mui-ellipsis">韩语词典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="//fy.httpcn.comassets/images/ru.png">
                <div class="mui-media-body mui-ellipsis">俄语词典</div>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <img src="//fy.httpcn.comassets/images/de.png">
                <div class="mui-media-body mui-ellipsis">德语词典</div>
              </router-link>
            </li>
          </ul>
        </dd>
      </dl>-->
      <dl class="hanyu-xg hanyu-xg1">
        <dt>
          免费测试
          <span class="iconfont icon-iconfontright mui-pull-right"></span>
        </dt>
        <dd>
          <ul class="hanyu-xg-list hanyu-xg-list1 mui-clearfix">
            <li>
              <router-link title="八字" to="/ce/bazi">
                <img src="assets/images/fenlei/small/fenlei_bazi.png" alt="八字">
                <span>八字</span>
              </router-link>
            </li>
            <li>
              <router-link title="姓名" to="/ce/xingming">
                <img src="assets/images/fenlei/small/fenlei_xingming.png" alt="姓名">
                <span>姓名</span>
              </router-link>
            </li>
            <li>
              <router-link title="号码" to="/ce/number">
                <img src="assets/images/fenlei/small/fenlei_haoma.png" alt="号码">
                <span>号码</span>
              </router-link>
            </li>
            <li>
              <router-link title="运势" to="#">
                <img src="assets/images/fenlei/small/fenlei_yunshi.png" alt="运势">
                <span>运势</span>
              </router-link>
            </li>
            <li>
              <router-link title="解梦" to="#">
                <img src="assets/images/fenlei/small/fenlei_jiemeng.png" alt="解梦">
                <span>解梦</span>
              </router-link>
            </li>
            <li>
              <router-link title="配对" to="#">
                <img src="assets/images/fenlei/small/fenlei_peidui.png" alt="配对">
                <span>配对</span>
              </router-link>
            </li>
            <li>
              <router-link title="星座" to="#">
                <img src="assets/images/fenlei/small/fenlei_xingzuo.png" alt="星座">
                <span>星座</span>
              </router-link>
            </li>
            <li>
              <router-link title="生肖" to="#">
                <img src="assets/images/fenlei/small/fenlei_shengxiao.png" alt="生肖">
                <span>生肖</span>
              </router-link>
            </li>
            <li>
              <router-link title="风水" to="#">
                <img src="assets/images/fenlei/small/fenlei_fengshui.png" alt="风水">
                <span>风水</span>
              </router-link>
            </li>
            <li>
              <router-link title="抽签" to="#">
                <img src="assets/images/fenlei/small/fenlei_chouqian.png" alt="抽签">
                <span>抽签</span>
              </router-link>
            </li>
            <li>
              <router-link title="黄历" to="#">
                <img src="assets/images/fenlei/small/fenlei_huangli.png" alt="黄历">
                <span>黄历</span>
              </router-link>
            </li>
            <li>
              <router-link title="相学" to="#">
                <img src="assets/images/fenlei/small/fenlei_xiangxue.png" alt="相学">
                <span>相学</span>
              </router-link>
            </li>
            <li>
              <router-link title="占卜" to="#">
                <img src="assets/images/fenlei/small/fenlei_zhanbu.png" alt="占卜">
                <span>占卜</span>
              </router-link>
            </li>
            <li>
              <router-link title="性格" to="#">
                <img src="assets/images/fenlei/small/fenlei_xingge.png" alt="性格">
                <span>性格</span>
              </router-link>
            </li>
            <li>
              <router-link title="排盘" to="#">
                <img src="assets/images/fenlei/small/fenlei_paipan.png" alt="排盘">
                <span>排盘</span>
              </router-link>
            </li>
          </ul>
        </dd>
      </dl>

      <!-- 相关推荐end-->
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import "./find.scss";
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
/*全局修改*/
/* body { font-size: 16px; } */
/* body, form, ul, img, li, ol, dl, dt, dd, p, h1, h2, h3, h4, h5, h6 { margin: 0px; padding: 0px; border: 0px; list-style:none; } */
/* img{ width: 100%;}
a {text-decoration: none; }
a:active {color: #960000;} */
</style>