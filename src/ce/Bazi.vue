<template>
  <div id="offCanvasContentScroll" class="mui-content">
    <div class>
      <div class="httpcn_main_pic">
        <img src="assets/images/mainpic/bazi.jpg" alt="八字算命" title="八字算命">
      </div>
      <form class="hc-input-group">
        <div class="mui-input-row hc-input">
          <label>出生日期</label>
          <input
            type="text"
            readonly
            data-vals="1984|11|13|22|0"
            data-val="公历 1984-11-13 22:00"
            data-sf="ok"
            data-name="csrq"
            name="csrq"
            value="公历 1980-07-01 08:00"
            autocomplete="off"
            placeholder="出生日期"
            id="mobiscroll1553428942121"
          >
        </div>
        <div class="mui-input-row hc-input">
          <label>真太阳时</label>
          <input
            type="text"
            placeholder="使用真太阳时"
            data-name="zty"
            name="zty"
            readonly
            value="不使用"
            data-val="0"
            autocomplete="off"
          >
        </div>
        <div class="mui-input-row hc-input" style="display: none" id="csdddiv">
          <label>出生地点</label>
          <input
            type="text"
            placeholder="出生地点"
            readonly
            data-name="csdd"
            name="csdd"
            value
            data-val
            autocomplete="off"
          >
        </div>
        <div class="mui-input-row hc-input">
          <label>性别</label>
          <p class="mui-radio">
            <input name="sex" data-name="sex" type="radio" checked="checked" value="1"> 男&nbsp;&nbsp;&nbsp;&nbsp;
            <input name="sex" data-name="sex" type="radio" value="0"> 女
          </p>
        </div>
        <div class="mui-input-row hc-input">
          <label>您的姓名</label>
          <input
            type="text"
            data-name="name"
            name="zsname"
            class="mui-input-clear"
            placeholder="您的姓名"
            data-input-clear="6"
            autocomplete="off"
          >
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
        </div>
        <div class="mui-button-row">
          <button type="button" class="hc-input-but" name="butstart" style="padding: 15px 0px;">开始测算</button>
        </div>
        <div class="hc-peoplenum-title" data-hits="37f7f64871e64e92976da5da5071a402">
          <span>
            已有
            <font color="#be0000">3649.94万</font>人使用
          </span>
        </div>
        <div class="mui-button-row hc-zang">
          <button
            type="button"
            data-val="3.46万"
            data-uid="37f7f64871e64e92976da5da5071a402"
            class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
          >
            <span class="mui-icon iconfont icon-zantong"></span>3.46万
          </button>
          <button
            type="button"
            name="zs_help"
            class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
            data-helpkey="bazi"
          >
            <span class="mui-icon iconfont icon-wenhao1"></span>帮助
          </button>
          <a
            class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
            href="/"
            data-zs_datatp="zs_datatp"
          >
            <span class="mui-icon mui-icon-home"></span>首页
          </a>
        </div>
      </form>
      <div class="hc-cs-title btd">
        相关测试
        <span class="mui-pull-right">
          <a href="#/zt/bazi/" data-zs_datatp="zs_datatp">更多</a>
        </span>
      </div>
      <div class="mui-clearfix" style="background:#F1E9D4;">
        <ul class="mui-table-view" data-tg="type:1,isnq:1, index:-1" data-tgkey>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/sm/"
              title="免费测算大全"
              data-zs_datatp="zs_datatp"
            >免费测算大全</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzhunyin/"
              title="八字婚姻测试"
              data-zs_datatp="zs_datatp"
            >八字婚姻测试</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/hehun/"
              title="八字合婚"
              data-zs_datatp="zs_datatp"
            >八字合婚</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzyear/"
              title="八字流年运程"
              data-zs_datatp="zs_datatp"
            >八字流年运程</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzcaiyun/"
              title="八字财运测试"
              data-zs_datatp="zs_datatp"
            >八字财运测试</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzcyri/"
              title="八字每天财运"
              data-zs_datatp="zs_datatp"
            >八字每天财运</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzcyyue/"
              title="八字每月财运"
              data-zs_datatp="zs_datatp"
            >八字每月财运</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzshiye/"
              title="八字事业测试"
              data-zs_datatp="zs_datatp"
            >八字事业测试</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#/bzxueye/"
              title="学业考试运测试"
              data-zs_datatp="zs_datatp"
            >学业考试运测试</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              title="寻找守护你一生的佛"
              href="http://m.okbmf.com/bmf/"
              data-zs_datatp="zs_datatp"
            >寻找守护你一生的佛</a>
          </li>
        </ul>
      </div>
      <div class="hc-cs-title btd">
        测试分类
        <span class="mui-pull-right">
          <a href="#/fenlei/" data-zs_datatp="zs_datatp">更多</a>
        </span>
      </div>
      <div
        class="home-fenlei-list"
        style="background:#F1E9D4;border-top:#e3d3bf 1px solid;border-bottom:#e3d3bf 1px solid;padding:10px 5px"
      >
        <ul class="mui-clearfix">
          <li>
            <a title="八字" href="#/zt/bazi/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_bazi.png" alt="八字">
              <span>八字</span>
            </a>
          </li>
          <li>
            <a title="姓名" href="#/zt/xingming/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xingming.png" alt="姓名">
              <span>姓名</span>
            </a>
          </li>
          <li>
            <a title="号码" href="#/zt/haoma/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_haoma.png" alt="号码">
              <span>号码</span>
            </a>
          </li>
          <li>
            <a title="运势" href="#/zt/yunshi/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_yunshi.png" alt="运势">
              <span>运势</span>
            </a>
          </li>
          <li>
            <a title="解梦" href="/jiemeng/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_jiemeng.png" alt="解梦">
              <span>解梦</span>
            </a>
          </li>
          <li>
            <a title="配对" href="#/zt/peidui/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_peidui.png" alt="配对">
              <span>配对</span>
            </a>
          </li>
          <li>
            <a title="星座" href="#/zt/xingzuo/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xingzuo.png" alt="星座">
              <span>星座</span>
            </a>
          </li>
          <li>
            <a title="生肖" href="#/zt/shengxiao/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_shengxiao.png" alt="生肖">
              <span>生肖</span>
            </a>
          </li>
          <li>
            <a title="风水" href="#/zt/fengshui/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_fengshui.png" alt="风水">
              <span>风水</span>
            </a>
          </li>
          <li>
            <a title="抽签" href="#/zt/chouqian/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_chouqian.png" alt="抽签">
              <span>抽签</span>
            </a>
          </li>
          <li>
            <a title="黄历" href="#/zt/huangli/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_huangli.png" alt="黄历">
              <span>黄历</span>
            </a>
          </li>
          <li>
            <a title="相学" href="#/zt/xiangxue/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xiangxue.png" alt="相学">
              <span>相学</span>
            </a>
          </li>
          <li>
            <a title="占卜" href="#/zt/zhanbu/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_zhanbu.png" alt="占卜">
              <span>占卜</span>
            </a>
          </li>
          <li>
            <a title="性格" href="#/zt/xingge/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xingge.png" alt="性格">
              <span>性格</span>
            </a>
          </li>
          <li>
            <a title="排盘" href="#/zt/paipan/" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_paipan.png" alt="排盘">
              <span>排盘</span>
            </a>
          </li>
        </ul>
      </div>
      <div data-tg="type:5" data-tgkey class="mui-content-padded bsgg" style="margin: 0px;">
        <a href="http://m.okbmf.com/zt/2019/?f=mlife2019ys300.1" data-zs_datatp="zs_datatp">
          <img
            style="width: 100%;height: auto;display: block"
            src="//s1.httpcn.com/m/tg/img/life/2019/2019ys-750-300-1.jpg"
            alt
          >
        </a>
      </div>

      <div class="hc-cs-title">测试介绍</div>
      <div class="mui-clearfix" id="zdddddd" style="background:#F1E9D4;padding:20px;">
        <p class="zstext-overflow" style="height: 300px; overflow: hidden;">
          八字算命：八字排盘、八字排大运、八字命卦分析、五行查询、五行力量分析、命局分析及八字喜用神、八字五行后天改运法、日柱分析、十二运星看运势、八字先天命运、性格分析、先天基础运、婚姻分析、事业分析、体质健康、思想及天赋、年月日时论命、称骨算命、主生肖副生肖解析、本命佛、一生运势吉凶、2017年运势分析等。
          <br>汉程网八字算命，依据生辰八字理论，是由多位易学专家倾力打造的独一无二的生辰八字算命精品，将专业性与通俗易懂完美结合，既适合有一定专业基础的易学爱好者参考，又适合一般网友八字算命使用。
          <br>八字算命，也叫生辰八字算命、批八字、四柱算命、四柱八字算命等，是对时间体系对命运影响的系统归纳，根据干支历法的出生时间查出天干地支八个字，并依据四柱预测理论进行各种推断，因此，八字算命是一种根据生辰八字算命的方法。
          <br>一命二运三风水四积德五读书。“命运”，其先天为“命”，为先天格局大小，后天为“运”，为后天顺利程度。“命”是由出生时间和环境决定，不可逆转，占30%左右；而“运”是后天人生的运行轨迹，是可变的。通过八字算命，用符合八字命局的后天运势调整和风水调整，就成了改变“命运”的重要方法之一。
        </p>
        <div style="position: relative" data-zsmoreaction>
          <div class="AnswerItem-mask">
            <span>
              展开阅读全文
              <i class="mui-icon mui-icon-arrowdown"></i>
            </span>
          </div>
        </div>
      </div>
      <div data-tg="type:1,wz:'wz6'" data-tgkey class="mui-clearfix">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right" href="#/fengshui/?f=mlifetext" data-zs_datatp="zs_datatp">
              <span class="iconfont icon-sound"></span> 图文并茂，教你进行家居环境布局
            </a>
          </li>
        </ul>
      </div>

      <div
        data-tg="type:5,wz:'wz7'"
        data-tgkey
        class="mui-content-padded bsgg"
        style="margin: 0px;"
      >
        <a href="http://m.okbmf.com/zt/2019/?f=mlife2019ys300.4" data-zs_datatp="zs_datatp">
          <img
            style="width: 100%;height: auto;display: block"
            src="//s1.httpcn.com/m/tg/img/life/2019/2019ys-750-300-4.jpg"
            alt
          >
        </a>
      </div>

      <div class="hc-up-link">
        <a href="/" data-zs_datatp="zs_datatp">返回首页</a>
        <a href="#" data-zs_datatp="zs_datatp">登录</a>
        <a href="#" data-zs_datatp="zs_datatp">注册</a>
        <a href="#" data-zs_datatp="zs_datatp">用户反馈</a>
      </div>
    </div>
    <div class="mui-off-canvas-backdrop"></div>

    <page-footer></page-footer>
  </div>
</template>

<script>
// import Footer from "./components/footer/footer.vue";
// import Header from "./components/header.vue";

export default {
  //   components: {
  //     "page-header": Header,
  //     "page-footer": Footer
  //   },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
</style>