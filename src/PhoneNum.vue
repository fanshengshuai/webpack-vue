<template>
  <div id="offCanvasContentScroll" class="mui-content">
    <div class>
      <div class="httpcn_main_pic">
        <a href="/sjhm/" data-zs_datatp="zs_datatp">
          <img src="assets/images/mainpic/sjhm.jpg" alt="手机号码测吉凶" title="手机号码测吉凶">
        </a>
      </div>
      <form class="hc-input-group">
        <div class="mui-slider-indicator mui-segmented-control hc-sjhm" data-action="0">
          <a class="mui-control-item mui-active" data-name="isbz" data-val="0" data-show="0">只测手机号码</a>
          <a class="mui-control-item" data-name="isbz" data-val="1" data-show="1">结合八字测号码</a>
        </div>
        <div class="mui-input-row hc-input">
          <label>手机号码</label>
          <input
            type="number"
            name="mobile"
            maxlength="15"
            data-name="word"
            class="mui-input-clear"
            placeholder="请输入11位手机号码"
            data-input-clear="1"
          >
          <span class="mui-icon mui-icon-clear mui-hidden"></span>
        </div>
        <div class="bs_1" data-show="0" style="display:none">
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
              id="mobiscroll1553355318507"
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
            <label>喜用神</label>
            <input
              type="text"
              name="wxxymore"
              readonly="readonly"
              data-name="wxxymore"
              data-val="0"
              value="系统自动分析"
              class="mui-input-clear"
              data-input-clear="7"
              autocomplete="off"
            >
            <span class="mui-icon mui-icon-clear mui-hidden"></span>
            <input
              type="text"
              style="display:none"
              name="xiyong"
              value="0"
              class="mui-input-clear"
              data-input-clear="8"
              autocomplete="off"
            >
          </div>
          <div class="mui-input-row hc-input"></div>
        </div>
        <div class="mui-button-row">
          <button
            type="button"
            class="hc-input-but"
            v-on:click="showResult"
            name="butstart"
            style="padding: 15px 0px;"
          >开始测算</button>
        </div>
        <div class="mui-button-row" style="padding-top:18px;">
          <a href="/haomamore/" class="mui-btn mui-btn-royal" data-zs_datatp="zs_datatp">
            批量测号码
            <span class="mui-badge mui-badge-success">20个</span>
          </a>
          <a href="/vipsjhm/" class="mui-btn mui-btn-danger" data-zs_datatp="zs_datatp">
            测全吉号码
            <span class="mui-badge mui-badge-warning">100分</span>
          </a>
        </div>
        <div class="hc-peoplenum-title" data-hits="127d8d8a0ead4e3b80cfeb78ea8c3ad3">
          <span>
            已有
            <font color="#be0000">1.55亿</font>人使用
          </span>
        </div>
        <div class="mui-button-row hc-zang">
          <button
            type="button"
            data-val="6.99万"
            data-uid="127d8d8a0ead4e3b80cfeb78ea8c3ad3"
            class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
          >
            <span class="mui-icon iconfont icon-zantong"></span>6.99万
          </button>
          <button
            type="button"
            name="zs_help"
            class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
            data-helpkey="sjhm"
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
          <a href="#" data-zs_datatp="zs_datatp">更多</a>
        </span>
      </div>
      <div class="mui-clearfix" style="background:#F1E9D4;">
        <ul class="mui-table-view" data-tg="type:1,isnq:1, index:-1" data-tgkey>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="车牌号码测吉凶"
              data-zs_datatp="zs_datatp"
            >车牌号码测吉凶</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="选全吉手机号码"
              data-zs_datatp="zs_datatp"
            >选全吉手机号码</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="QQ号码测吉凶"
              data-zs_datatp="zs_datatp"
            >QQ号码测吉凶</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="电话号码测吉凶"
              data-zs_datatp="zs_datatp"
            >电话号码测吉凶</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="400号码测吉凶"
              data-zs_datatp="zs_datatp"
            >400号码测吉凶</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="批量号码测试"
              data-zs_datatp="zs_datatp"
            >批量号码测试</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="批量测车牌号码"
              data-zs_datatp="zs_datatp"
            >批量测车牌号码</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              href="#"
              title="选全吉车牌号码"
              data-zs_datatp="zs_datatp"
            >选全吉车牌号码</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              title="寻找守护你一生的佛"
              href="http://m.okbmf.com/bmf/"
              data-zs_datatp="zs_datatp"
            >寻找守护你一生的佛</a>
          </li>
          <li class="mui-table-view-cell mui-pull-left mui-col-xs-6">
            <a
              class="mui-navigate-right"
              title="2019年十二生肖运势"
              href="http://m.okbmf.com/zt/2019/"
              data-zs_datatp="zs_datatp"
            >2019年十二生肖运势</a>
          </li>
        </ul>
      </div>
      <div class="hc-cs-title btd">
        测试分类
        <span class="mui-pull-right">
          <a href="#" data-zs_datatp="zs_datatp">更多</a>
        </span>
      </div>
      <div
        class="home-fenlei-list"
        style="background:#F1E9D4;border-top:#e3d3bf 1px solid;border-bottom:#e3d3bf 1px solid;padding:10px 5px"
      >
        <ul class="mui-clearfix">
          <li>
            <a title="八字" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_bazi.png" alt="八字">
              <span>八字</span>
            </a>
          </li>
          <li>
            <a title="姓名" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xingming.png" alt="姓名">
              <span>姓名</span>
            </a>
          </li>
          <li>
            <a title="号码" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_haoma.png" alt="号码">
              <span>号码</span>
            </a>
          </li>
          <li>
            <a title="运势" href="#" data-zs_datatp="zs_datatp">
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
            <a title="配对" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_peidui.png" alt="配对">
              <span>配对</span>
            </a>
          </li>
          <li>
            <a title="星座" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xingzuo.png" alt="星座">
              <span>星座</span>
            </a>
          </li>
          <li>
            <a title="生肖" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_shengxiao.png" alt="生肖">
              <span>生肖</span>
            </a>
          </li>
          <li>
            <a title="风水" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_fengshui.png" alt="风水">
              <span>风水</span>
            </a>
          </li>
          <li>
            <a title="抽签" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_chouqian.png" alt="抽签">
              <span>抽签</span>
            </a>
          </li>
          <li>
            <a title="黄历" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_huangli.png" alt="黄历">
              <span>黄历</span>
            </a>
          </li>
          <li>
            <a title="相学" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xiangxue.png" alt="相学">
              <span>相学</span>
            </a>
          </li>
          <li>
            <a title="占卜" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_zhanbu.png" alt="占卜">
              <span>占卜</span>
            </a>
          </li>
          <li>
            <a title="性格" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_xingge.png" alt="性格">
              <span>性格</span>
            </a>
          </li>
          <li>
            <a title="排盘" href="#" data-zs_datatp="zs_datatp">
              <img src="assets/images/fenlei/small/fenlei_paipan.png" alt="排盘">
              <span>排盘</span>
            </a>
          </li>
        </ul>
      </div>
      <!--
 原先是广告5效果的。现在改成广告4的效果
 现在又改成11,3天后改回去(data-tg="type:4")，现在要改成8
 2017年11月13日09:05:52 已改
 2017年12月8日16:14:39 改成2018
      -->
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
          想知道手机号码数理吉凶及评分吗？想知道手机号码与您的八字相合吗？想预测使用手机号码后对短期及长期运势影响吗？想知道您用什么手机号码最有利吗？想知道您用什么颜色的手机最好吗？赶紧进入汉程手机号码测吉凶吧。
          <br>汉程网手机号码测吉凶，是目前独家结合生辰八字、81数理、易经卦象进行手机号码吉凶预测的专业级系统。
          <br>易学中有“世间万事万物皆有数”！数：即一切物体从发生到覆灭的发展过程；理：宇宙之道理。周易可以运用八卦预测信息的方法，预测自然和人事吉凶方面的有关信息。手机号码测吉凶系统根据81数理，预测手机号码数理吉凶，并给出手机号码吉凶分析、数理评分和对主人个性的潜在影响，同时显示手机号码归属地信息。并独家结合易经卦象超准测试手机号码，预测使用手机号码后短期及长期的运势变化，供您参考。
          <br>结合生辰八字测试手机号码吉凶时，应输入机主或手机主要使用者出生信息，系统会自动精准分析八字命局，分析手机号码是否适合生辰八字，并给出适合您的吉祥手机号码及手机吉祥颜色建议！
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
            <a
              class="mui-navigate-right"
              href="http://m.okbmf.com/bmf/?f=mlifetext"
              data-zs_datatp="zs_datatp"
            >
              <span class="iconfont icon-sound"></span> 每个人从一生下来就有位佛菩萨守护
            </a>
          </li>
        </ul>
      </div>
      <div class="hc-cs-title">
        推荐测试
        <span class="mui-pull-right">
          <a href="#" title="算命大全" data-zs_datatp="zs_datatp">更多</a>
        </span>
      </div>
      <ul class="shequ-ceshi-list mui-clearfix" data-tg="type:2,isnq:1,index:-1" data-tgkey>
        <li>
          <a title="八字算命" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/bazi.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">八字算命</h3>
              <p class="mui-ellipsis-2 font12">2万多字，可媲美绝大部分收费测试，包括八字排盘、五行分析、命局分析及喜用神以及通俗易懂的解释。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="姓名测试打分" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/xingming.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">姓名测试打分</h3>
              <p class="mui-ellipsis-2 font12">结合生辰八字、五格数理、三才、五格互动、形家四运、五行、汉字音形义等进行姓名测试打分。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="手机号码测吉凶" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/sjhm.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">手机号码测吉凶</h3>
              <p class="mui-ellipsis-2 font12">功能强大的结合生辰八字、81数理、易经数字占签等方式对手机号码吉凶进行综合预测的专业级系统。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="八字财运测试" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/bzcaiyun.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">八字财运测试</h3>
              <p class="mui-ellipsis-2 font12">包括先天财运分析、一生财运起伏图、一生财运分析、最近几年财运测试及得分、最近几年破财分析等。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="八字婚姻测试" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/bzhunyin.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">八字婚姻测试</h3>
              <p class="mui-ellipsis-2 font12">八字婚姻缘份、八字婚姻批命、配偶个性及特征、适合的对象、异性缘桃花运、恋爱结婚时机、旺姻缘法等。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="住宅风水测试" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/fscs.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">住宅风水测试</h3>
              <p class="mui-ellipsis-2 font12">根据八字和风水学理论，从八字、命卦、宅卦、流年、布局等多个维度量身分析，既严谨专业，又通俗易懂。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="汉程黄历查询" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/huangli.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">汉程黄历查询</h3>
              <p class="mui-ellipsis-2 font12">汉程黄历包含每日宜忌、合害、吉时、干支、纳音、十二神、值日、冲煞、胎神、彭祖百忌、吉神凶煞等50余项信息。</p>
            </div>
          </a>
        </li>
        <li>
          <a title="每天星座运势" href="#" data-zs_datatp="zs_datatp">
            <img class="mui-pull-left" src="assets/images/iconpng/xzys.png">
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">每天星座运势</h3>
              <p class="mui-ellipsis-2 font12">包括今日、明日、本周、本月、今年运势，含运势指数、综合运势、爱情、事业、学业、健康、财运等。</p>
            </div>
          </a>
        </li>
        <li class>
          <a href="http://m.okbmf.com/zt/2019jxw/?f=mlifewz2" data-zs_datatp="zs_datatp">
            <img
              class="mui-pull-left"
              src="//s1.httpcn.com/m/tg/img/life/2019/wz2_jxw.jpg"
              alt="2019己亥年十二生肖吉祥物"
            >
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">2019己亥年十二生肖吉祥物</h3>
              <p class="mui-ellipsis-2 font12">根据十二生肖运势特点采用正品和田玉定制，男女多款可选。2019年，陪你一起创造美好未来！</p>
            </div>
          </a>
        </li>
        <li class>
          <a href="http://m.okbmf.com/item/?id=18248&amp;f=mlifewz2" data-zs_datatp="zs_datatp">
            <img
              class="mui-pull-left"
              src="//s1.httpcn.com/m/tg/img/life/wz2_I90800041.jpg"
              alt="开门大吉！用七星九运过门垫！"
            >
            <div class="mui-media-body">
              <h3 class="mui-ellipsis">开门大吉！用七星九运过门垫！</h3>
              <p class="mui-ellipsis-2 font12">换一款七星九运过门垫，摆放简单，五行相生。新年新气象，祝您吉星高照，好运开门来！</p>
            </div>
          </a>
        </li>
      </ul>
      <div data-tg="type:3" data-tgkey style="display: none;"></div>

      <div class="hc-cs-title">
        缘友评论
        <span class="mui-pull-right">
          <a
            href="#"
            data-zs_datatp="zs_datatp"
          >更多</a>
        </span>
      </div>
      <div class="hc-hd-pingread">
        提示：请文明发言，不要泄漏个人隐私。评论中所有交易及收费信息
        <font class="txt-col-red">均与汉程网无关</font>，请注意风险，不要轻信，以防财物损失！
      </div>
      <div style="background:#F1E9D4; border-top:#e3d3bf 1px solid; padding: 10px 15px 0 15px;">
        <span
          data-zsxiugai="1"
          style="display: block; border: #e4d3bf 1px solid; background-color: #f9f4e7; font-size: 14px; line-height: 21px; width: 100%; height: 40px; padding: 10px 15px; border-radius: 3px;"
        >点这里开始评论...</span>
      </div>
      <div class="hc-hd-list" data-none="1" style="border-top: none; border-bottom: none;">
        <ul class="mui-table-view" id="ullist">
          <li>
            <div class="left photo">
              <a
                href="#"
                data-zs_datatp="zs_datatp"
              >
                <img src="http://imgcdn.httpcn.com/upload/public/4.jpg">
              </a>
            </div>
            <div class="hc-hd-content">
              <div class="hc-clear">
                <span class="left">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    紫气东来99
                    <span class="hydjicon">1</span>
                  </a>
                </span>
                <span class="right">
                  <a
                    class="iconfont icon-zantong"
                    style="margin-right: 20px"
                    data-thisuid="1324485fe8c442b699fc8900a820eec4"
                    data-dz="0"
                  >0</a>
                  <a
                    class="iconfont icon-liuyan"
                    data-value="回复:紫气东来99"
                    data-uid="b6abc8b6e5e5488db15399c9d171e296"
                    data-thisuid="1324485fe8c442b699fc8900a820eec4"
                  ></a>
                </span>
              </div>
              <div
                class="hc-hd-content-txt"
                style="word-wrap:break-word;"
              >大师，我的八字阳气才17%阴气83%，请问我选号码是不是要阳气指数高的呢？</div>
              <div class="time">2019-03-22 22:18</div>
            </div>
          </li>
          <li>
            <div class="left photo">
              <a
                href="#"
                data-zs_datatp="zs_datatp"
              >
                <img src="http://imgcdn.httpcn.com/upload/public/7.jpg">
              </a>
            </div>
            <div class="hc-hd-content">
              <div class="hc-clear">
                <span class="left">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    drxiao
                    <span class="hydjicon">1</span>
                  </a>
                </span>
                <span class="right">
                  <a
                    class="iconfont icon-zantong"
                    style="margin-right: 20px"
                    data-thisuid="b4507e1f011a45d79393779f1b764122"
                    data-dz="0"
                  >0</a>
                  <a
                    class="iconfont icon-liuyan"
                    data-value="回复:drxiao"
                    data-uid="0a32207bb3a64431bdd1e1b0c48734a0"
                    data-thisuid="b4507e1f011a45d79393779f1b764122"
                  ></a>
                </span>
              </div>
              <div
                class="hc-hd-content-txt"
                style="word-wrap:break-word;"
              >请教下老师，核心数是100分，但短期和长期运势是次吉和多变，那这样的号码可以用吗？</div>
              <div class="time">2019-03-22 12:45</div>
            </div>
          </li>
          <li>
            <div class="left photo">
              <a
                href="#"
                data-zs_datatp="zs_datatp"
              >
                <img src="http://imgcdn.httpcn.com/upload/public/7.jpg">
              </a>
            </div>
            <div class="hc-hd-content">
              <div class="hc-clear">
                <span class="left">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    drxiao
                    <span class="hydjicon">1</span>
                  </a>
                </span>
                <span class="right">
                  <a
                    class="iconfont icon-zantong"
                    style="margin-right: 20px"
                    data-thisuid="db3e4ab1ebcb4897b4b163cd3ebfc99d"
                    data-dz="0"
                  >0</a>
                  <a
                    class="iconfont icon-liuyan"
                    data-value="回复:drxiao"
                    data-uid="0a32207bb3a64431bdd1e1b0c48734a0"
                    data-thisuid="db3e4ab1ebcb4897b4b163cd3ebfc99d"
                  ></a>
                </span>
              </div>
              <div
                class="hc-hd-content-txt"
                style="word-wrap:break-word;"
              >您好，老师！我的手机号在您系统上测起来是匹配八字的，这样是不是不用担心八极灵数（数字能量）里说的寿阳位遇绝命而可能产生的后果。</div>
              <div class="time">2019-03-20 08:35</div>
            </div>
          </li>
          <li>
            <div class="left photo">
              <a
                href="#"
                data-zs_datatp="zs_datatp"
              >
                <img
                  src="http://imgcdn.httpcn.com/upload/user/2017/htt/httpcn/9195a3e2b50247f2828c5891a1c4b1f3/20170808112739779001.jpg"
                >
              </a>
            </div>
            <div class="hc-hd-content">
              <div class="hc-clear">
                <span class="left">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    汉程生活
                    <span class="hydjicon">4</span>
                  </a>
                </span>
                <span class="right">
                  <a
                    class="iconfont icon-zantong"
                    style="margin-right: 20px"
                    data-thisuid="0bbb6343bb1f416fab0e80c04b1f00f2"
                    data-dz="0"
                  >0</a>
                  <a
                    class="iconfont icon-liuyan"
                    data-value="回复:汉程生活"
                    data-uid="9195a3e2b50247f2828c5891a1c4b1f3"
                    data-thisuid="0bbb6343bb1f416fab0e80c04b1f00f2"
                  ></a>
                </span>
              </div>
              <div class="hc-hd-content-txt" style="word-wrap:break-word;">
                您好，真太阳时是依出生地和出生北京时间来纠正的，您只知道是申时，建议不使用。
                <div class="hc-hd-content-hui" style="word-wrap:break-word;">
                  <b>江阳心铭：</b>老师您好！我出生的时辰是申时，但不知道具体时分，就不使用真太阳时测是吗？
                </div>
              </div>
              <div class="time">2019-03-19 07:39</div>
            </div>
          </li>
          <li>
            <div class="left photo">
              <a
                href="#"
                data-zs_datatp="zs_datatp"
              >
                <img
                  src="http://imgcdn.httpcn.com/upload/user/2017/htt/httpcn/9195a3e2b50247f2828c5891a1c4b1f3/20170808112739779001.jpg"
                >
              </a>
            </div>
            <div class="hc-hd-content">
              <div class="hc-clear">
                <span class="left">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    汉程生活
                    <span class="hydjicon">4</span>
                  </a>
                </span>
                <span class="right">
                  <a
                    class="iconfont icon-zantong"
                    style="margin-right: 20px"
                    data-thisuid="1c0ee8032da04f1abd6dcc109663f467"
                    data-dz="0"
                  >0</a>
                  <a
                    class="iconfont icon-liuyan"
                    data-value="回复:汉程生活"
                    data-uid="9195a3e2b50247f2828c5891a1c4b1f3"
                    data-thisuid="1c0ee8032da04f1abd6dcc109663f467"
                  ></a>
                </span>
              </div>
              <div class="hc-hd-content-txt" style="word-wrap:break-word;">
                您好，测试结果中已有说明。
                <div class="hc-hd-content-hui" style="word-wrap:break-word;">
                  <b>茹宝小精灵：</b>请教大师手机号阳气99.99%阴气0
                </div>
              </div>
              <div class="time">2019-03-19 07:37</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="mui-button-row bbd" style="background:#F1E9D4; padding-bottom: 15px;">
        <button
          type="button"
          data-zsxiugai="2"
          data-url="//m.life.httpcn.com/comment/more.shtml?key=sjhm&amp;sign=1034A2F2150DB3E6FD50D86F69F0F717&amp;app_name=%e6%89%8b%e6%9c%ba%e5%8f%b7%e7%a0%81%e6%b5%8b%e5%90%89%e5%87%b6"
          class="mui-btn hc-zang-btn mui-btn-danger mui-btn-outlined"
          data-zs_datatp="zs_datatp"
        >查看全部2277条评论</button>
      </div>
      <div
        data-tg="type:5,wz:'wz7'"
        data-tgkey
        class="mui-content-padded bsgg"
        style="margin: 0px;"
      >
        <a href="http://m.okbmf.com/zt/2019/?f=mlife2019ys300.2" data-zs_datatp="zs_datatp">
          <img
            style="width: 100%;height: auto;display: block"
            src="//s1.httpcn.com/m/tg/img/life/2019/2019ys-750-300-2.jpg"
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
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    showResult() {
      console.log("click");
      this.$router.push({
        path: "/phone_result",
        params: { num: "115" }
      });
    }
  }
};
</script>

<style lang="" scoped>
</style>