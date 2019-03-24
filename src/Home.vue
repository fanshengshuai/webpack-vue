<template>
  <div>
    <div class="home-banner">
      <img src="assets/images/banner/2019ys-750-300-4.jpg" class="lazy">
    </div>

    <div id="Gallery" class="mui-slider" data-slider="2">
      <div class="mui-slider-group" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
        <div class="mui-slider-item home-fenlei-list">
          <ul class="mui-clearfix">
            <li>
              <router-link title="八字" to="/ce/bazi">
                <img src="assets/images/fenlei/fenlei_bazi.png" alt="八字" class="lazy">
                <span>八字</span>
              </router-link>
            </li>
            <li>
              <router-link title="姓名" to="#">
                <img src="assets/images/fenlei/fenlei_xingming.png" alt="姓名" class="lazy">
                <span>姓名</span>
              </router-link>
            </li>
            <li>
              <router-link title="号码" to="#">
                <img src="assets/images/fenlei/fenlei_haoma.png" alt="号码" class="lazy">
                <span>号码</span>
              </router-link>
            </li>
            <li>
              <router-link title="运势" to="#">
                <img src="assets/images/fenlei/fenlei_yunshi.png" alt="运势" class="lazy">
                <span>运势</span>
              </router-link>
            </li>
            <li>
              <router-link title="解梦" to="#">
                <img src="assets/images/fenlei/fenlei_jiemeng.png" alt="解梦" class="lazy">
                <span>解梦</span>
              </router-link>
            </li>
            <li>
              <router-link title="配对" to="#">
                <img src="assets/images/fenlei/fenlei_peidui.png" alt="配对" class="lazy">
                <span>配对</span>
              </router-link>
            </li>
            <li>
              <router-link title="星座" to="#">
                <img src="assets/images/fenlei/fenlei_xingzuo.png" alt="星座" class="lazy">
                <span>星座</span>
              </router-link>
            </li>
            <li>
              <router-link title="生肖" to="#">
                <img src="assets/images/fenlei/fenlei_shengxiao.png" alt="生肖" class="lazy">
                <span>生肖</span>
              </router-link>
            </li>
            <li>
              <router-link title="黄历" to="#">
                <img src="assets/images/fenlei/fenlei_huangli.png" alt="黄历" class="lazy">
                <span>黄历</span>
              </router-link>
            </li>
            <li>
              <router-link title="姻缘" to="#">
                <img src="assets/images/fenlei/fenlei_yinyuan.png" alt="姻缘" class="lazy">
                <span>姻缘</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item home-fenlei-list">
          <ul class="mui-clearfix">
            <li>
              <router-link title="风水" to="#">
                <img src="assets/images/fenlei/fenlei_fengshui.png" alt="风水" class="lazy">
                <span>风水</span>
              </router-link>
            </li>
            <li>
              <router-link title="抽签" to="#">
                <img src="assets/images/fenlei/fenlei_chouqian.png" alt="抽签" class="lazy">
                <span>抽签</span>
              </router-link>
            </li>

            <li>
              <router-link title="相学" to="#">
                <img src="assets/images/fenlei/fenlei_xiangxue.png" alt="相学" class="lazy">
                <span>相学</span>
              </router-link>
            </li>
            <li>
              <router-link title="占卜" to="#">
                <img src="assets/images/fenlei/fenlei_zhanbu.png" alt="占卜" class="lazy">
                <span>占卜</span>
              </router-link>
            </li>
            <li>
              <router-link title="性格" to="#">
                <img src="assets/images/fenlei/fenlei_xingge.png" alt="性格" class="lazy">
                <span>性格</span>
              </router-link>
            </li>
            <li>
              <router-link title="事业" to="#">
                <img src="assets/images/fenlei/fenlei_shiye.png" alt="事业" class="lazy">
                <span>事业</span>
              </router-link>
            </li>
            <li>
              <router-link title="财运" to="#">
                <img src="assets/images/fenlei/fenlei_caiyun.png" alt="财运" class="lazy">
                <span>财运</span>
              </router-link>
            </li>

            <li>
              <router-link title="排盘" to="#">
                <img src="assets/images/fenlei/fenlei_paipan.png" alt="排盘" class="lazy">
                <span>排盘</span>
              </router-link>
            </li>
            <li>
              <router-link title="心理" to="#">
                <img src="assets/images/fenlei/fenlei_xinli.png" alt="心理" class="lazy">
                <span>心理</span>
              </router-link>
            </li>
            <li>
              <router-link title="算命大全" to="#">
                <img src="assets/images/fenlei/more.png" alt="更多" class="lazy">
                <span>更多</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mui-slider-indicator" style="bottom: 5px;">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator" style="display:none"></div>
      </div>
    </div>

    <div class="home-news">
      <div class="mui-pull-left home-news-title"></div>
      <div class="home-news-list">
        <div id="mrch" class="core">
          <router-link to="#">2019年生肖运势发布，看看你第几名</router-link>
          <router-link to="#">2019年定制吉祥物，新年转运一年很顺</router-link>
          <router-link to="#">2019年风水布局，最短平快的开运秘法</router-link>

          <router-link to="#">2019年生肖运势发布，看看你第几名</router-link>
          <router-link to="#">2019年定制吉祥物，新年转运一年很顺</router-link>
          <router-link to="#">2019年风水布局，最短平快的开运秘法</router-link>
        </div>
      </div>
    </div>

    <div class="home-huangli mui-clearfix" id="hl_id" data-url="/huangli_date/2019-03-24">
      <div class="rili mui-pull-left mui-clearfix">
        <span>24</span>
        <p>
          二月十八
          <br>2019-03
        </p>
      </div>
      <div class="jiri mui-pull-left">
        <p class="mui-ellipsis1">执执位 冲虎煞南</p>
        <span>白虎(黑道日)</span>
      </div>
      <div class="yiji mui-pull-right">
        <div class="yi">
          <span>宜</span>
          <i class="mui-ellipsis1">结婚 订婚 祈福 求嗣 签约 祭祀 装修 建造 种植</i>
        </div>
        <div class="ji">
          <span>忌</span>
          <i class="mui-ellipsis1">开业 交易 搬家 出行 求财 新船下水</i>
        </div>
      </div>
    </div>

    <div class="home-tuijian">
      <ul class="mui-clearfix">
        <li class="one mui-col-xs-4">
          <router-link title="八字测试" to="/ce/bazi">
            <h3>八字测试</h3>
            <h4>2万多字揭示出生奥秘</h4>
            <img alt="八字测试" src="assets/images/home/tj-ico01.png" class="lazy">
          </router-link>
        </li>
        <li class="one mui-col-xs-4">
          <router-link title="号码测试" to="#">
            <h3>号码测试</h3>
            <h4>号码隐藏的秘密</h4>
            <img alt="号码测试" src="assets/images/home/tj-ico02.png" class="lazy">
          </router-link>
        </li>
        <li class="one mui-col-xs-4" style="border-right:0;">
          <router-link title="每日运势" to="#">
            <h3>每日运势</h3>
            <h4>每天1分钟看一看</h4>
            <img alt="每日运势" src="assets/images/home/tj-ico03.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6">
          <router-link to="#">
            <h3>测财运</h3>
            <h4>偷窥你一生财运密码</h4>
            <img src="assets/images/home/tj-ico04.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6" style="border-right:0;">
          <router-link to="#">
            <h3>测姻缘</h3>
            <h4>婚姻测试配偶分析</h4>
            <img src="assets/images/home/tj-ico05.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6">
          <router-link to="#">
            <h3>测住宅</h3>
            <h4>详解家居布局方法</h4>
            <img src="assets/images/home/tj-ico06.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6" style="border-right:0;">
          <router-link to="#">
            <h3>测五行</h3>
            <h4>超准五行查询分析</h4>
            <img src="assets/images/home/tj-ico07.png" class="lazy">
          </router-link>
        </li>
      </ul>
    </div>

    <div class="hc-cs-title">
      家居风水宝典
      <span class="mui-pull-right">
        <router-link title="家居风水宝典" to="#">更多</router-link>
      </span>
    </div>

    <div class="mui-slider home-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative"
        data-scroll="3"
      >
        <div
          class="mui-scroll"
          id="fengshui_a_id"
          style="transform: translate3d(0px, 0px, 0px) translateZ(0px);"
        >
          <router-link class="mui-control-item home-item mui-active" data-id="13" to="#">大门风水</router-link>
          <router-link class="mui-control-item home-item" data-id="14" to="#">客厅风水</router-link>
          <router-link class="mui-control-item home-item" data-id="15" to="#">卧室风水</router-link>
          <router-link class="mui-control-item home-item" data-id="16" to="#">书房风水</router-link>
          <router-link class="mui-control-item home-item" data-id="17" to="#">厨房风水</router-link>
          <router-link class="mui-control-item home-item" data-id="18" to="#">卫生间风水</router-link>
          <router-link class="mui-control-item home-item" data-id="19" to="#">供桌风水</router-link>
        </div>
      </div>
      <div class="home-box" style="padding-top: 5px;">
        <div id="fengshui_13" class="mui-control-content mui-active">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="大门风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-101.gif"
                    data-original="assets/images/fsshaimg/sha1-101.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">大门风水：开门见向下的楼梯</h3>
                    <p class="mui-ellipsis2">现代住宅，往往会出现这样的情况：大门打开，正对着向下的楼梯，这就是风水上俗称的“卷帘水”，犯之严重漏</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="大门风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-102.gif"
                    data-original="assets/images/fsshaimg/sha1-102.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">大门风水：开门见向上的楼梯</h3>
                    <p class="mui-ellipsis2">大门打开，即正对着向上的楼梯。俗话说：“门为口、梯为舌”，因此下冲之气将直入门内，影响气场稳定，并容</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="大门风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-103.gif"
                    data-original="assets/images/fsshaimg/sha1-103.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">大门风水：两门相对</h3>
                    <p class="mui-ellipsis2">由于现代住宅的结构，很容易造成两家大门相对，即“对门煞”，也叫“朱雀煞”。鲁班经载：“二家不可面相对</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="大门风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-104.gif"
                    data-original="assets/images/fsshaimg/sha1-104.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">大门风水：大门对电梯</h3>
                    <p class="mui-ellipsis2">大门打开，见到电梯门，好像老虎开口想噬人般，称之开口煞。开开合合造成气场不稳，主意外之灾及漏财效应。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="大门风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-105.gif"
                    data-original="assets/images/fsshaimg/sha1-105.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">大门风水：大门对向上的斜坡</h3>
                    <p class="mui-ellipsis2">房屋建在斜坡尽头，大门面对斜坡，形势险恶。在风水学来说，斜坡是“水”，虽说是水为财，但倘若滔滔不绝的</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="大门风水" to="#">查看更多大门风水</router-link>
          </div>
        </div>
        <div id="fengshui_14" class="mui-control-content">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="客厅风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-156.gif"
                    data-original="assets/images/fsshaimg/sha1-156.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">客厅风水：沙发正对大门</h3>
                    <p class="mui-ellipsis2">客厅沙发正对大门摆设，气场会极不稳定。对宅内人员运势不利，在家坐不住，一天到晚都想往外跑。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="客厅风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-157.gif"
                    data-original="assets/images/fsshaimg/sha1-157.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">客厅风水：沙发背对大门</h3>
                    <p class="mui-ellipsis2">客厅的主沙发位置很重要，如果摆设错误会导致犯小人等问题。坐在主沙发上要能看到大门出入，不可背对门而摆</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="客厅风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-158.gif"
                    data-original="assets/images/fsshaimg/sha1-158.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">客厅风水：沙发背后无实墙</h3>
                    <p class="mui-ellipsis2">主沙发背后如果不靠实墙，气场会极不稳定。其最主要效应为运势反复，无贵人。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="客厅风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-159.gif"
                    data-original="assets/images/fsshaimg/sha1-159.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">客厅风水：沙发背后有走道</h3>
                    <p class="mui-ellipsis2">客厅的沙发背后如为走道，气场会极不稳定。其最主要之现象，对家人运势不利，并且易有小人暗中伤害。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="客厅风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-160.gif"
                    data-original="assets/images/fsshaimg/sha1-160.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">客厅风水：客厅阴暗光线不好</h3>
                    <p class="mui-ellipsis2">明厅暗房是阳宅基本准则，客厅是阳宅之内明堂，也是接气纳气之处。如果客厅采光不好，将会严重影响前途，也</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="客厅风水" to="#">查看更多客厅风水</router-link>
          </div>
        </div>
        <div id="fengshui_15" class="mui-control-content">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="卧室风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-165.gif"
                    data-original="assets/images/fsshaimg/sha1-165.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卧室风水：房门对房门</h3>
                    <p class="mui-ellipsis2">室内房门对房门，会有口舌争吵及家庭不合的现象发生。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卧室风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-166.gif"
                    data-original="assets/images/fsshaimg/sha1-166.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卧室风水：房门对卫生间门</h3>
                    <p class="mui-ellipsis2">室内房门对卫生间门，卫生间之秽气会直冲进房内，造成居住其中之人会时常病痛，运势相应也会跟着不好。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卧室风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-167.gif"
                    data-original="assets/images/fsshaimg/sha1-167.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卧室风水：房门对厨房门</h3>
                    <p class="mui-ellipsis2">室内房门对厨房门，厨房之废气和火煞之气会直冲房内，造成居住其中之人会时常病痛、脾气暴躁，运势相对也会</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卧室风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-168.gif"
                    data-original="assets/images/fsshaimg/sha1-168.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卧室风水：大门对房门</h3>
                    <p class="mui-ellipsis2">大门对房门，通常房间为财库之一，入门见门会有漏财的现象，而且没有隐私可言，会让居住该房间之人有桃花倾</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卧室风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-169.gif"
                    data-original="assets/images/fsshaimg/sha1-169.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卧室风水：床头背房门</h3>
                    <p class="mui-ellipsis2">房间的床头背门而摆，容易犯小人和心神不宁等现象产生。</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="卧室风水" to="#">查看更多卧室风水</router-link>
          </div>
        </div>
        <div id="fengshui_18" class="mui-control-content">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="卫生间风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-148.gif"
                    data-original="assets/images/fsshaimg/sha1-148.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卫生间风水：进门见卫生间</h3>
                    <p class="mui-ellipsis2">一进门就看到卫生间，秽气直冲，导致败运。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卫生间风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-194.gif"
                    data-original="assets/images/fsshaimg/sha1-194.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卫生间风水：厨房门对卫生间门</h3>
                    <p class="mui-ellipsis2">厨房门对厕所门，厕所之秽气会直冲厨房内，因为厨房为烹饪食物之处，所以会影响食物干净卫生，故家人会有肠</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卫生间风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-190.gif"
                    data-original="assets/images/fsshaimg/sha1-190.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卫生间风水：书房门正对卫生间门</h3>
                    <p class="mui-ellipsis2">书房的门如正对厕所门，厕所的秽气会直接流入书房内。而且文昌星忌污秽之气，故会无贵人、犯小人，影响学习</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卫生间风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-206.gif"
                    data-original="assets/images/fsshaimg/sha1-206.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卫生间风水：卫生间门冲餐桌</h3>
                    <p class="mui-ellipsis2">厕所为排污纳秽之处，充满臭气和细菌，而餐桌是我们用餐之处，如受到厕所直冲而出的秽气、臭气、细菌将会污</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="卫生间风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-207.gif"
                    data-original="assets/images/fsshaimg/sha1-207.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">卫生间风水：卫生间位于房屋中央</h3>
                    <p class="mui-ellipsis2">阳宅最忌厕所位于住宅正中间，厕所居中秽气四散，住在此宅之人会病痛连连或会有心脏血管或是腹部疾病之问题</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="卫生间风水" to="#">查看更多卫生间风水</router-link>
          </div>
        </div>
        <div id="fengshui_17" class="mui-control-content">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="厨房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-147.gif"
                    data-original="assets/images/fsshaimg/sha1-147.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">厨房风水：大门对厨房</h3>
                    <p class="mui-ellipsis2">厨房为财库所在，入门见厨房，代表漏财、花费多及家庭不和睦。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="厨房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-194.gif"
                    data-original="assets/images/fsshaimg/sha1-194.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">厨房风水：厨房门对卫生间门</h3>
                    <p class="mui-ellipsis2">厨房门对厕所门，厕所之秽气会直冲厨房内，因为厨房为烹饪食物之处，所以会影响食物干净卫生，故家人会有肠</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="厨房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-195.gif"
                    data-original="assets/images/fsshaimg/sha1-195.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">厨房风水：厨房门冲灶</h3>
                    <p class="mui-ellipsis2">厨房门冲到灶，会有漏财和家人不睦之现象发生，有口角、官非诉讼产生，会时常病痛、脾气暴躁等。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="厨房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-196.gif"
                    data-original="assets/images/fsshaimg/sha1-196.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">厨房风水：厨房门冲冰箱</h3>
                    <p class="mui-ellipsis2">厨房门冲到冰箱，会对家中女主人不利，且会有漏财之现象发生。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="厨房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-197.gif"
                    data-original="assets/images/fsshaimg/sha1-197.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">厨房风水：灶和水池相邻相对</h3>
                    <p class="mui-ellipsis2">灶和水池如果紧邻或是相距不到50厘米，或是相对冲，这叫水火相克之象，会有严重漏财和开刀之现象。</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="厨房风水" to="#">查看更多厨房风水</router-link>
          </div>
        </div>
        <div id="fengshui_19" class="mui-control-content">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="供桌风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-210.gif"
                    data-original="assets/images/fsshaimg/sha1-210.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">供桌风水：供桌神桌不可冲门</h3>
                    <p class="mui-ellipsis2">供桌两旁不宜被门或路所冲，不管是房门、厕所门、或是厨房门都不宜；其中以厕所门和厨房门的影响最大，会有</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="供桌风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-211.gif"
                    data-original="assets/images/fsshaimg/sha1-211.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">供桌风水：供桌神桌不可靠厕所墙面</h3>
                    <p class="mui-ellipsis2">供桌背后如紧靠厕所墙面，这样极为不敬。并且易导致家人健康问题。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="供桌风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-212.gif"
                    data-original="assets/images/fsshaimg/sha1-212.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">供桌风水：供桌神桌不可邻厨房</h3>
                    <p class="mui-ellipsis2">供桌背后如果为厨房，火煞过重，有家运不稳、渐退之象。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="供桌风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-213.gif"
                    data-original="assets/images/fsshaimg/sha1-213.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">供桌风水：供桌神桌座向不可与宅向相反</h3>
                    <p class="mui-ellipsis2">供桌和阳宅本身之座向相反就是俗称之“倒头厅”，有严重影响家运之效应，且家人不睦，严重时会有无男丁的现</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="供桌风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-214.gif"
                    data-original="assets/images/fsshaimg/sha1-214.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">供桌风水：横梁不可压供桌神桌</h3>
                    <p class="mui-ellipsis2">供桌上方如有横梁压过，会产生压力之煞气，家人会有脑疾、精神衰弱、长幼无序不分，严重时家运一直不好，所</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="供桌风水" to="#">查看更多供桌风水</router-link>
          </div>
        </div>
        <div id="fengshui_16" class="mui-control-content">
          <div class="home-fs-list">
            <ul class="mui-clearfix">
              <li>
                <router-link to="#">
                  <img
                    alt="书房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-187.gif"
                    data-original="assets/images/fsshaimg/sha1-187.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">书房风水：书桌、办公桌背门</h3>
                    <p class="mui-ellipsis2">书桌、办公桌如果背门而放，主犯小人，以及会无法专心学习工作。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="书房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-188.gif"
                    data-original="assets/images/fsshaimg/sha1-188.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">书房风水：书桌、办公桌冲门</h3>
                    <p class="mui-ellipsis2">书桌、办公桌如果冲门而放，无法专心学习工作、坐不住、心不定、精神不集中等。</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="书房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-189.gif"
                    data-original="assets/images/fsshaimg/sha1-189.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">书房风水：书桌、办公桌在横梁下</h3>
                    <p class="mui-ellipsis2">书桌、办公桌如果正好位于横梁下，会让人思绪不清，精神难以集中，精神压力也会跟着加重，而且横梁压到座位</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="书房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-190.gif"
                    data-original="assets/images/fsshaimg/sha1-190.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">书房风水：书房门正对卫生间门</h3>
                    <p class="mui-ellipsis2">书房的门如正对厕所门，厕所的秽气会直接流入书房内。而且文昌星忌污秽之气，故会无贵人、犯小人，影响学习</p>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <img
                    alt="书房风水"
                    class="mui-pull-left lazy"
                    src="assets/images/fsshaimg/sha1-191.gif"
                    data-original="assets/images/fsshaimg/sha1-191.gif"
                    style="display: block;"
                  >
                  <div class="mui-media-body">
                    <h3 class="mui-ellipsis">书房风水：座位背后开窗</h3>
                    <p class="mui-ellipsis2">座位背后如果开窗，除了气场极不稳定之外，别人也可以从窗外窥视，所以其现象会有严重犯小人、漏气漏财等等</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="home-sx-more">
            <router-link title="书房风水" to="#">查看更多书房风水</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="hc-cs-title">
      开运商城
      <span class="mui-pull-right">
        <router-link title="开运商城" to="#">更多</router-link>
      </span>
    </div>

    <div class="home-tuijian" style="margin-top: 0;">
      <ul class="mui-clearfix">
        <li class="two mui-col-xs-6">
          <router-link to="#">
            <h3>2019吉祥物</h3>
            <h4>新年平安好运</h4>
            <img src="assets/images/home/mfmz.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6" style="border-right:0;">
          <router-link to="#">
            <h3>猪年改运</h3>
            <h4>短平快的布局方法</h4>
            <img src="assets/images/home/zcjb.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6">
          <router-link to="#">
            <h3>风水秘法</h3>
            <h4>转运化煞旺宅</h4>
            <img src="assets/images/home/zzhs.png" class="lazy">
          </router-link>
        </li>
        <li class="two mui-col-xs-6" style="border-right:0;">
          <router-link to="#">
            <h3>本命佛</h3>
            <h4>您的终身守护佛</h4>
            <img src="assets/images/home/jkxz.png" class="lazy">
          </router-link>
        </li>
      </ul>
    </div>

    <div class="hc-cs-title">
      生肖运势
      <span class="mui-pull-right">
        <router-link title="十二生肖" to="#">更多</router-link>
      </span>
    </div>

    <div class="mui-slider home-slider">
      <div
        id="shengxiaoyunshi"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative"
        data-scroll="1"
      >
        <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
          <router-link class="mui-control-item home-item mui-active" to="#">属鼠</router-link>
          <router-link class="mui-control-item home-item" to="#">属牛</router-link>
          <router-link class="mui-control-item home-item" to="#">属虎</router-link>
          <router-link class="mui-control-item home-item" to="#">属兔</router-link>
          <router-link class="mui-control-item home-item" to="#">属龙</router-link>
          <router-link class="mui-control-item home-item" to="#">属蛇</router-link>
          <router-link class="mui-control-item home-item" to="#">属马</router-link>
          <router-link class="mui-control-item home-item" to="#">属羊</router-link>
          <router-link class="mui-control-item home-item" to="#">属猴</router-link>
          <router-link class="mui-control-item home-item" to="#">属鸡</router-link>
          <router-link class="mui-control-item home-item" to="#">属狗</router-link>
          <router-link class="mui-control-item home-item" to="#">属猪</router-link>
        </div>
      </div>
      <div class="home-box">
        <div id="item1sx" class="mui-control-content mui-active">
          <!--1-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx01.jpg" class="lazy">
              <br>劫财
            </div>
            <p>属鼠人进入2019年己亥猪年，因地支亥子相会成水局，且亥阴子阳，阴阳和合而生机勃发。这意味着属鼠人今年人际关系不错，可以好好把握。但今年并没有任何吉星相助，且天干己土克水，这暗示着今年并非能一帆风顺，而是吉凶参半，喜忧并存。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">无</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>病符：</b>有损健康运，身体欠安，健康不利，岁运不畅。
              <br>
              <b>亡神：</b>有损健康运，身体欠安，病痛，是非纷争。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属鼠人2019年运势" to="#">查看属鼠人运势详情</router-link>
          </div>
          <!--1/-->
        </div>
        <div id="item2sx" class="mui-control-content">
          <!--2-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx02.jpg" class="lazy">
              <br>财星
            </div>
            <p>属牛人去年刑太岁，或多或少会对运势造成一定的破坏。进入2019年己亥猪年，因吉星不旺，凶星威胁却不小，因此今年总体运势并不理想，特别是平安运势会受到较大影响，恐怕会心力交瘁，要加以留心。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>驿马：</b>
              有利行动力，旅游，出差，搬迁，变动等。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>天狗：</b>有损平安运，谨防损伤之灾，如交通、病痛等。
              <br>
              <b>吊客：</b>有损平安运，谨防损财伤身，晦气，家人健康等。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属牛人2019年运势" to="#">查看属牛人运势详情</router-link>
          </div>
          <!--2/-->
        </div>
        <div id="item3sx" class="mui-control-content">
          <!--3-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx03.jpg" class="lazy">
              <br>破太岁/合太岁
            </div>
            <p>属虎人进入2019年己亥猪年，生肖与流年地支形成“寅亥相破”之局，“破太岁”也是犯太岁的一种，只是影响比“冲太岁”轻微。同时，寅亥又成六合之局，这意味着与流年交织成一种错综复杂的关系。与太岁相合表面看上去如同皇亲国戚，但实际上伴君如伴虎，吉凶难料。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>岁合：</b>有利贵人运，但吉凶难测，合吉则吉，合凶则凶。
              <br>
              <b>天德：</b>有利贵人运，贵人扶助，逢凶化吉，诸事顺利。
              <br>
              <b>福星：</b>有利吉祥运，博学多能，平安幸运，广结善缘。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>劫煞：</b>有损平安运，谨防劫物或破财，伤灾，阻碍。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属虎人2019年运势" to="#">查看属虎人运势详情</router-link>
          </div>
          <!--3/-->
        </div>
        <div id="item4sx" class="mui-control-content">
          <!--4-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx04.jpg" class="lazy">
              <br>半合
            </div>
            <p>属兔人进入2019年己亥猪年，虽无明显的吉星相助，但生肖与流年亥卯半合，与太岁相合的力量比一般的贵人星要大得多，因此今年总体运势还算不错。需要格外注意的是，属兔人今年遇到“白虎”临门。“白虎”是一颗大凶星，命书云：白虎当头坐，无灾也有祸。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">无</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>白虎：</b>有损平安运，谨防意外之灾，病痛，小人暗害
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属兔人2019年运势" to="#">查看属兔人运势详情</router-link>
          </div>
          <!--4/-->
        </div>
        <div id="item5sx" class="mui-control-content">
          <!--5-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx05.jpg" class="lazy">
              <br>财星
            </div>
            <p>属龙人去年冲太岁，不可避免地会受到诸事变动的影响。进入2019年己亥猪年，喜逢多颗吉星高照，看起来是否极泰来之年，如果好好规划，计划有望顺利达成。无奈的是仍会受到三大凶星的攻击，发展过程中会出现不少烦人的阻碍。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>紫微：</b>有利贵人运，贵人提拔，富贵可期，逢灾化吉。
              <br>
              <b>龙德：</b>有利贵人运，贵人多助，晋升有利，财利可得。
              <br>
              <b>红鸾：</b>有利吉祥运，遇吉星增吉，遇凶星失力。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>暴败：</b>有损整体运，难以预防的灾厄，如破财、官非、伤灾等。
              <br>
              <b>亡神：</b>有损健康运，身体欠安，小心病痛，是非纷争。
              <br>
              <b>官符：</b>有损吉祥运，是非，口舌，诉讼，牢狱。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属龙人2019年运势" to="#">查看属龙人运势详情</router-link>
          </div>
          <!--5/-->
        </div>
        <div id="item6sx" class="mui-control-content">
          <!--6-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx06.jpg" class="lazy">
              <br>冲太岁
            </div>
            <p>属属蛇人进入2019年己亥猪年，与太岁巳亥正冲，六冲力量是犯太岁中最严重的一种，加之吉星无力，凶星险恶，这暗示着属蛇人可能要面临心神不定，事业不利，运势动荡，诸事欠顺的一年！</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>驿马：</b>有利行动力，旅游，出差，搬迁，变动等。
              <br>
              <b>月空：</b>有利吉祥运，遇吉星增吉，遇凶星失力。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>岁破：</b>有损平安运，诸事不利，不测之灾，敬奉太岁保平安。
              <br>
              <b>大耗：</b>有损财富运，大损财或大损伤，是非小人。
              <br>
              <b>阑干：</b>有损吉祥运，事业阻碍，谋事不顺，官司诉讼。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属蛇人2019年运势" to="#">查看属蛇人运势详情</router-link>
          </div>
          <!--6/-->
        </div>
        <div id="item7sx" class="mui-control-content">
          <!--7-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx07.jpg" class="lazy">
              <br>官星/暗合
            </div>
            <p>
              属马人进入2019年己亥猪年，亥为午的
              <em>官星</em>，且亥午有暗合之象，这暗示着今年易得到贵人暗中相助，人际关系畅通，事业机会良多，运势总体较为顺遂。但同时也意味着牵绊过多，压力倍增，你要做好运用智慧冷静应对的心理准备。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>月德：</b>有利贵人运，贵人扶助，诸事顺利，逢凶化吉。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>劫煞：</b>有损平安运，谨防劫物或破财，伤灾，阻碍。
              <br>
              <b>死符：</b>有损平安运，争斗，伤病，官灾，破财。
              <br>
              <b>小耗：</b>有损财富运，小损财或小损伤。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属马人2019年运势" to="#">查看属马人运势详情</router-link>
          </div>
          <!--7/-->
        </div>
        <div id="item8sx" class="mui-control-content">
          <!--8-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx08.jpg" class="lazy">
              <br>拱合
            </div>
            <p>属羊人进入2019年己亥猪年，亥未拱合，与太岁相合暗示着贵人扶持，有不少发展的机会，看上去运势不错。但遗憾的是，今年是非小人极重，麻烦纠纷不断，未必能够一帆风顺，务必要多加防范。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>三台：</b>有利竞争运，利竞争、升迁、人缘。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>五鬼：</b>有损吉祥运，小人，官非，怪病，劫财。
              <br>
              <b>官符：</b>有损吉祥运，是非，口舌，诉讼，牢狱。
              <br>
              <b>天哭：</b>
              有损平安运，损财，长辈或子女身体欠安。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属羊人2019年运势" to="#">查看属羊人运势详情</router-link>
          </div>
          <!--8/-->
        </div>
        <div id="item9sx" class="mui-control-content">
          <!--9-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx09.jpg" class="lazy">
              <br>相生
            </div>
            <p>属猴人进入2019年己亥猪年，申亥相害为害太岁，是犯太岁的一种，主要表现在是非小人很重，运势难免会遭到破坏。今年事业财运均不旺，建议保守为宜，不要好高鹜远，应累积经验，增长智慧，以待天时。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>太阴：</b>有利贵人运，阴和阳合，利女不利男。
              <br>
              <b>地解：</b>有利吉祥运，逢凶化吉，解除厄运。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>贯索：</b>不利吉祥运，是非纠缠，厌世，陷害。
              <br>
              <b>官符：</b>有损吉祥运，是非，口舌，诉讼，牢狱。
              <br>
              <b>亡神：</b>有损健康运，身体欠安，病痛，是非纷争。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属猴人2019年运势" to="#">查看属猴人运势详情</router-link>
          </div>
          <!--9/-->
        </div>
        <div id="item10sx" class="mui-control-content">
          <!--10-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx10.jpg" class="lazy">
              <br>伤官
            </div>
            <p>属鸡人进入2019年己亥猪年，年逢伤官，又有不利吉祥福报凶星干扰，整体运势并不太理想，应谨慎小心，广结人缘，并提前规划目标，提高积极主动性，方可有所收获。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>地解：</b>有利吉祥运，逢凶化吉，解除厄运。
              <br>
              <b>驿马：</b>有利行动力，旅游，出差，搬迁，变动等。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>丧门：</b>有损吉祥运，病灾，损财，阻碍，勿探病问丧。
              <br>
              <b>孤辰：</b>有损感情运，感情欠和，孤独多疑，情绪困扰。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属鸡人2019年运势" to="#">查看属鸡人运势详情</router-link>
          </div>
          <!--10/-->
        </div>
        <div id="item11sx" class="mui-control-content">
          <!--11-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx11.jpg" class="lazy">
              <br>财星
            </div>
            <p>属狗人度过值太岁的本命年，进入2019年己亥猪年，今年命走偏财，又有两大吉星助力，运势开始上扬，是机缘颇多的一年。因此不可因循守旧，要抓住大好时机，勇于接受挑战，才能事业顺利，财运畅通。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>太阳：</b>有利贵人运，光明正大，贵人提拔，顺利成功，防家庭风波。
              <br>
              <b>天喜：</b>
              有利社交运，多喜庆之事，有亲和力。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>天空：</b>有损财富运，有灵感，虚浮，损财，钱财虚花。
              <br>
              <b>劫煞：</b>有损平安运，谨防劫物或破财，伤灾，阻碍。
              <br>
              <b>孤辰：</b>有损感情运，感情欠和，孤独多疑，情绪困扰。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属狗人2019年运势" to="#">查看属狗人运势详情</router-link>
          </div>
          <!--11/-->
        </div>
        <div id="item12sx" class="mui-control-content">
          <!--12-->
          <div class="home-sx-info mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/sx12.jpg" class="lazy">
              <br>值太岁/刑太岁
            </div>
            <p>属猪人去年健康运势不太理想，进入2019年己亥猪年，今年正值本命年，太岁当头，又亥亥自刑，更是雪上加霜，再逢三大凶星同时入命，运势可谓吉凶莫测，动荡难安。</p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/jixing.png" class="lazy">
            </div>
            <p class="ji">
              <b>天解：</b>有利吉祥运，先难后易，逢凶化吉。
            </p>
          </div>
          <div class="home-sx-jixiong mui-clearfix">
            <div class="mui-pull-left photo">
              <img src="assets/images/home/xiongxing.png" class="lazy">
            </div>
            <p class="xiong">
              <b>太岁：</b>有损整体运，诸事欠顺，不测之灾，注意安全，敬奉太岁保平安。
              <br>
              <b>血刃：</b>有损平安运，血光之灾，手术，车祸等。
              <br>
              <b>剑锋：</b>有损平安运，金属之伤，手术，病痛等。
              <br>
              <b>指背：</b>有损吉祥运，背叛失约，损财，借钱不还等。
            </p>
          </div>
          <div class="home-sx-more">
            <router-link title="属猪人2019年运势" to="#">查看属猪人运势详情</router-link>
          </div>
          <!--12/-->
        </div>
      </div>
    </div>

    <page-footer></page-footer>
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
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>