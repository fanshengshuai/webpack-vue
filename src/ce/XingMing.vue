<template>
  <div class="ce-xingming-page">
    <header class="mui-bar mui-bar-nav">
      <a
        class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"
        to="#"
        onclick="window.history.go(-1)"
      ></a>
      <router-link class="mui-pull-right mui-icon iconfont icon-moreandroid" id="icon-menu" to="#"></router-link>
      <router-link
        class="mui-icon iconfont icon-fenxiang mui-pull-right"
        style="margin-right: 0"
        to="#"
      ></router-link>
      <h1 class="mui-title" data-key_h1="xingming">姓名测试打分</h1>
    </header>
    <div id="offCanvasContentScroll" class="mui-content">
      <div class>
        <div class="httpcn_main_pic">
          <img src="assets/images/mainpic/xingming.jpg" title="姓名测试打分">
        </div>
        <form class="hc-input-group">
          <div class="mui-slider-indicator mui-segmented-control hc-sjhm">
            <a class="mui-control-item mui-active">结合八字测试</a>
            <a class="mui-control-item">只测试姓名</a>
          </div>
          <div data-show="0">
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
                id="mobiscroll1553430825836"
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
              <label>喜用神</label>
              <input
                type="text"
                readonly="readonly"
                placeholder="喜用神"
                data-name="wxxy"
                name="xys"
                value="自动分析"
                data-val="0"
                autocomplete="off"
              >
            </div>
            <div class="mui-input-row hc-input" style="display: none">
              <label>喜神</label>
              <input
                type="text"
                readonly="readonly"
                placeholder="金"
                data-name="xishen"
                name="xs"
                value="金"
                data-val="金"
                autocomplete="off"
              >
            </div>
            <div class="mui-input-row hc-input" style="display: none">
              <label>用神</label>
              <input
                type="text"
                readonly="readonly"
                placeholder="金"
                data-name="yongshen"
                name="ys"
                value="金"
                data-val="金"
                autocomplete="off"
              >
            </div>
            <div class="mui-input-row hc-input"></div>
          </div>
          <div class="mui-input-row hc-input">
            <label>姓</label>
            <input
              type="text"
              class="mui-input-clear"
              data-name="xing"
              name="xing"
              placeholder="姓"
              data-input-clear="7"
              autocomplete="off"
            >
            <span class="mui-icon mui-icon-clear mui-hidden"></span>
          </div>
          <div class="mui-input-row hc-input">
            <label>名</label>
            <input
              type="text"
              class="mui-input-clear"
              data-name="ming"
              name="ming"
              placeholder="名"
              data-input-clear="8"
              autocomplete="off"
            >
            <span class="mui-icon mui-icon-clear mui-hidden"></span>
          </div>
          <div class="mui-input-row hc-input">
            <label>性别</label>
            <p class="mui-radio">
              <input name="sex" data-name="sex" type="radio" checked="checked" value="1"> 男&nbsp;&nbsp;&nbsp;&nbsp;
              <input name="sex" data-name="sex" type="radio" value="0"> 女
            </p>
          </div>
          <div class="mui-button-row">
            <button
              type="button"
              class="hc-input-but"
              name="butstart"
              style="padding: 15px 0px;"
            >开始测算</button>
          </div>
          <div class="hc-peoplenum-title" data-hits="1273a42d99a04b409b2b4289863559ff">
            <span>
              已有
              <font color="#be0000">4189.87万</font>人使用
            </span>
          </div>
          <div class="mui-button-row hc-zang">
            <button
              type="button"
              data-val="3.56万"
              data-uid="1273a42d99a04b409b2b4289863559ff"
              class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
            >
              <span class="mui-icon iconfont icon-zantong"></span>3.56万
            </button>
            <button
              type="button"
              name="zs_help"
              class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
              data-helpkey="xingming"
            >
              <span class="mui-icon iconfont icon-wenhao1"></span>帮助
            </button>
            <router-link class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined" to="#">首页</router-link>
          </div>
        </form>
        <div data-tg="type:5" data-tgkey class="mui-content-padded bsgg" style="margin: 0px;">
          <router-link to="#"></router-link>
        </div>

        <div class="hc-cs-title">测试介绍</div>
        <div class="mui-clearfix" id="zdddddd" style="background:#F1E9D4;padding:20px;">
          <p class="zstext-overflow" style="height: 300px; overflow: hidden;">
            姓名测试打分：包括生辰八字分析、姓名五格数理、三才剖析、五格互动关系、形家四运解析、五格数理姓名测试打分、结合生辰八字姓名测试打分等。汉程姓名测试打分为专业级系统，采用较严格的标准，原则上没有100分的姓名，因为没有完美的人生，物极必反！因此，本系统中名字测试打分在90分以上就相当不错。
            <br>汉程网姓名测试打分，专业结合生辰八字、五格数理、五格互动关系、三才进行测名字打分，不仅可以对五格数理姓名测试打分，还可以结合生辰八字测名字打分，可谓是不可多得的免费姓名测试精品。姓名测试打分一定要结合生辰八字，单纯的五格数理评分意义不大，因为姓名需要配合本人先天条件才能发挥较好的影响力，而每个人的先天条件不同，所以结合生辰八字进行姓名测试打分非常重要！
            <br>为什么要进行姓名测试打分呢？因为，一个符合八字五行、数理格局，以及音形义俱佳的好名字有利于社会交往，提高亲和力，增强人际关系，对一个人的运势有极强的灵动力和暗示力，增进人与社会的和谐相处。
            <br>汉程网姓名测试打分系统，核心部分出自于〖汉程网超级神算〗，由多位易学和姓名学专家携同技术人员花费三年多时间研发并不断改进。系统权威专业，数千家命理起名机构长期参考本站结果，并给予极高评价！
            <br>提示：汉程网姓名测试打分系统目前支持的姓名为国家语委公布的8000多个规范汉字，非规范汉字笔画可能显示为0，其姓名测试结果也将不准确。如果您的姓名不是规范汉字，请更换一个笔画相同的常用字测试姓名。
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
              <router-link class="mui-navigate-right" to="#">每个人从一生下来就有位佛菩萨守护</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mui-off-canvas-backdrop"></div>
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