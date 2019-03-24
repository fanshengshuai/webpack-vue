<template>
  <div class="page-fenlei">
    <page-header></page-header>

    <div class="mui-content mui-row mui-fullscreen">
      <div class="mui-col-xs-3" style="background-color: #f1e9d4;">
        <div
          id="segmentedControls"
          class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
        >
          <router-link class="mui-control-item hc-fl-item mui-active" to="#">热门推荐</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="1" to="#">八字</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="2" to="#">姓名</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="3" to="#">号码</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="4" to="#">运势</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="5" to="#">解梦</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="7" to="#">抽签</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="9" to="#">配对</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="11" to="#">星座</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="10" to="#">生肖</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="8" to="#">占卜</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="13" to="#">黄历</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="12" to="#">风水</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="14" to="#">相学</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="16" to="#">民俗</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="17" to="#">排盘</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="18" to="#">性格</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="19" to="#">财运</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="21" to="#">姻缘</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="20" to="#">事业</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="22" to="#">健康</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="15" to="#">心理</router-link>
          <router-link class="mui-control-item hc-fl-item" data-id="6" to="#">紫微</router-link>
        </div>
      </div>
      <div
        id="segmentedControlContents"
        class="mui-col-xs-9"
        style="border-left: 1px solid #e4d3c1;"
      >
        <div id="gundong_id" class="mui-content mui-scroll-wrapper" data-scroll="1">
          <!--新加-->
          <div class="hc-fl-top mui-clearfix">
            <div class="mui-pull-left">
              <router-link
                class="iconfont iconfont icon-paixu"
                data-id="0"
                to="#"
                id="pxpxpxpxpxpx"
              >排序</router-link>
            </div>
            <div class="mui-pull-left">
              <router-link
                class="iconfont iconfont icon-paixu"
                data-id="0"
                id="xxxxxxxxxxxx"
                to="#"
              >筛选</router-link>
            </div>
            <div class="mui-pull-right" id="moshi_idid">
              <router-link to="#" class="iconfont iconfont icon-liebiao active">列表模式</router-link>
            </div>
          </div>
          <div
            class="mui-scroll"
            id="iddv_mui_mui"
            style="padding-bottom: 40px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"
          >
            <div class="mui-control-content mui-active" id="div_cycsfl">
              <div class="hc-fl-list">
                <h3>
                  最近测试
                  <div class="mui-pull-right" id="moshi_idid">
                    <router-link to="#" class="iconfont icon-del">删除</router-link>
                  </div>
                </h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link to="#">
                      <img src="assets/images/iconpng/sjhm.png">
                      <div class="mui-media-body mui-ellipsis">手机号码测吉凶</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <img src="assets/images/iconpng/bzpaipan.png">
                      <div class="mui-media-body mui-ellipsis">八字排盘</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <img src="assets/images/iconpng/bazi.png">
                      <div class="mui-media-body mui-ellipsis">八字算命</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <img src="assets/images/iconpng/qiming.png">
                      <div class="mui-media-body mui-ellipsis">免费在线起名</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <img src="assets/images/iconpng/jiemeng.png">
                      <div class="mui-media-body mui-ellipsis">周公解梦</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <img src="assets/images/iconpng/fsdamen.png">
                      <div class="mui-media-body mui-ellipsis">大门风水</div>
                    </router-link>
                  </li>
                </ul>
                <h3>热门推荐</h3>
              </div>
            </div>
            <div class="hc-fl-list-two" id="iiiddddd">
              <ul class="mui-clearfix" id="ul_list_two">
                <li>
                  <router-link title="八字算命" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bazi.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字算命</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >八字算命：八字排盘、八字排大运、八字命卦分析、五行查询、五行力量分析、命局分析及八字喜用神、八字五行后天改运法、日柱分析、十二运星看运势、八字先天命运</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">3648.7万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >3.46万</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >1210</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="姓名测试" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xingming.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">姓名测试打分</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >姓名测试打分：包括生辰八字分析、姓名五格数理、三才剖析、五格互动关系、形家四运解析、五格数理姓名测试打分、结合生辰八字姓名测试打分等。汉程姓名测试打分</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">4188.08万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >3.56万</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >2707</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="本命佛查" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bmf.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">本命佛查询</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >本命佛查询：生肖本命佛查询、适合修行的人、本命佛生日、本命佛道场、本尊功德、本命佛介绍、本命佛真言心咒、本命佛的来源、佩戴敬奉本命佛注意事项等。人们在</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">85.06万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >556</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >8</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="八字婚姻" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzhunyin.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字婚姻测试</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >八字婚姻算命：八字命盘、八字婚姻缘份、八字婚姻批命、配偶个性及特征、适合的对象、异性缘桃花运、恋爱结婚时机、旺姻缘法、催桃花异性缘法等。汉程网八字婚姻</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">678.21万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >5693</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >86</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="八字合婚" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/hehun.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字合婚</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >八字合婚：双方八字排盘、八字合婚指数、婚姻配对分析、双方婚姻配对参考等。八字合婚，就是把男女双方八字配在一起，对双方八字之间的生克制化、五行平衡、阴阳</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">498.98万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >4572</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >168</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="八字流年" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzyear.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字流年运程</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >八字流年运程：最近几年流年运程吉凶详批、2019年运势分析、犯太岁分析、流年十二宫神煞、流年意外灾祸、流年官非是非、流年破财损耗、相关化解方法等。八字流年</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">167.87万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1653</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >17</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="八字财运" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzcaiyun.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字财运测试</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >八字财运测试：先天财运分析、一生财运起伏图、一生财运分析、最近几年财运测试及得分、最近几年破财损耗分析及化解方法、财运不好怎么办、八字催财运秘法等。汉</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">332.65万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >3958</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >66</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="八字每天" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzcyri.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字每天财运</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >每天财运测试：最近几天财运测试、财运得分、财运简评等。汉程网每天财运测试c，是由多位易学专家倾力打造的不可多得的财运测试精品，根据您的八字命局，预测最近</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">181.31万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2463</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >54</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="八字今日" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzriyun.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字今日运势</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >八字今日运势：八字今日运势、本月运势、今年运势，主要分析事业、财运、爱情、健康、人缘、名声等运程测试。汉程网八字今日运势查询，根据八字命局与流年、流月</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">212.02万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >3221</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >23</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="五行查询" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/wuxing.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">五行查询</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >五行查询：八字五行查询、五行个数、五行缺什么、五行旺衰、五行力量强弱、五行体质健康分析、八字喜用五行、五行个性、五行改运法等。五行相生相克：金、水、木</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">267.43万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2371</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >17</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="犯太岁查" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/taisui.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">犯太岁查询</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >犯太岁查询：根据生辰八字精准查询每年犯太岁状况、太岁名称、太岁方位以及犯太岁如何化解，同时提供年命纳音五行、天运五行、天干地支、生肖等详细信息解读。太</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">60.84万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >495</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >17</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="称骨测试" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/chenggu.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">称骨测试</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >称骨测试项目：称骨的骨重、分男女版的称骨简评和称骨释意。汉程网称骨算命，和网上绝大多数只有一种解释的称骨算命是不同的，而是按原著分为男女不同的称骨算命</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">322.65万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2890</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >86</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="住宅布局" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/fscs.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">住宅布局测试</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >住宅布局：吉位图、宅卦命卦、宅命相符分析、大门分析、适宜居住房屋建议、吉位查询及催旺、凶位查询及化解、大门形煞化解、房屋外在形煞化解等。重要说明：很多</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">180.72万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1835</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >69</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="家居风水" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/fengshui.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">家居风水宝典</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >“风水之道，安身立命之本也，不得不查！”家居住宅环境及居室内部格局的分配是否合理，将会直接影响到家庭成员的和睦相处、生活安定、身体健康、事业学业的进展</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">52.65万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >553</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >13</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="黄道吉日" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/jiri.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">黄道吉日查询</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >一般的黄道吉日查询，主要根据每日的十二神执位（建、除、满、平、定、执、破、危、成、收、开、闭），以及吉神凶煞，来判断当日吉凶宜忌。汉程黄道吉日查询作为</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">1179.07万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2261</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >189</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="免费测算" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/sm.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">免费测算大全</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >本系统来源于中国传统民俗文化，并非科学研究成果，仅供休闲娱乐和学术参考，请勿迷信！汉程网免费算命系统为目前最强大、最完善、测算功能最多、最准的免费算命</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">3615.32万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >4.03万</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >242</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="2019" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/2019.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">2019年生肖运势</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >2019年是己亥猪年，纳音五行平地木，太岁名谢太星君。己亥猪年，天干”己“属土，为阴土，田园湿土；地支”亥“是生肖的猪，属水，为阴水。因天干己土，2019年可</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">220.22万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >114</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >0</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="每天星座" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xzys.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">每天星座运势</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >星座运势查询：每日星座运势、今日星座运势、明日星座运势、本周星座运势、本月星座运势、今年星座运势。包括十二星座的整体运势、爱情、事业、学业、健康、财运</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">1295.1万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1.16万</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >156</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="在线许愿" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xuyuan.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">在线许愿</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >汉程在线许愿，许愿人数最多的在线许愿之一，写下一段虔诚的愿望，留下一份美好的寄托，我们会祝福您的心愿得以实现。</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">153.11万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1398</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >0</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="手机号码" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/sjhm.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">手机号码测吉凶</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >想知道手机号码数理吉凶及评分吗？想知道手机号码与您的八字相合吗？想预测使用手机号码后对短期及长期运势影响吗？想知道您用什么手机号码最有利吗？想知道您用</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">1.55亿</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >6.99万</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >2279</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="车牌号码" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/cphm.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">车牌号码测吉凶</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >想知道车牌号码数理吉凶及评分吗？想知道车牌号码与您的八字相合吗？想知道您用什么车牌号码最有利吗？想知道您买什么颜色的车最好吗？想知道流年是否有意外灾祸</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">1912.34万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1.41万</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >144</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="选全吉手" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/vipsjhm.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">选全吉手机号码</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >☞ 综合考虑生辰八字、81数理、易经卦象长期/短期影响等三位四相法，优选推荐最适合您的全吉手机号码，并可根据号码评分、卦象、号码规律、数字特点等筛选号码。☞</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">234.82万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1622</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >374</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="生肖属相" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/shengxiao.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">生肖属相测试</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >生肖属相测试：生肖属相性格、属相婚配、生肖配对、三十六生肖、生肖本命佛、生肖生月命运、生肖流年运程、属相出生时间、属相今年多大等。生肖属相算命，是依据</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">191.83万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1658</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >30</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="汉程黄历" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/huangli.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">汉程黄历查询</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >黄历，又称老黄历、皇历，是在中国农历基础上产生出来的，带有每日吉凶宜忌的一种万年历。黄历相传是由轩辕黄帝创制，故称为黄历。黄历主要内容为二十四节气，每</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">732.57万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >3764</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >91</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="超级星盘" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xingpan.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">超级星盘</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >汉程超级星盘：星座命盘、星盘天盘行星及星座分析、星盘地盘宫位分析、福点、上升星座、中天星座、主星及强势星、行星入十二星座分析、行星入十二宫分析、行星入</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">119.91万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2294</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >37</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="神准星座" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xingzuo.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">神准星座解密</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >星座解密：神准分析性格、爱情、事业、EQ情商、个性、情绪、人际社交、特性、特性破解、心灵、优点缺点、心智、休闲、为人父母、为人子女、建议等。汉程网星座测</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">78.02万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2943</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >26</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="生肖属相" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/sxpd.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">生肖属相婚配</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >生肖配对：有利属相婚配、不利属相婚配、三合生肖、六合生肖、相冲生肖、相害生肖、相刑生肖等。生肖配对不仅限于属相婚配，对于朋友、合作关系等都可以应用生肖</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">228.71万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >1590</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >91</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="星座配对" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xzpd.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">星座配对查询</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >星座配对：最配星座、最不配星座、星座速配指数、星座速配比重、星座配对分析、星座配对注意事项、占上风或下风的星座等。星座配对是婚姻配对的一种，俗话说：“</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">42.13万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >425</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >13</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="生日配对" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/xqpd.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">生日配对</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >生日配对：根据48星区进行生日配对分析、爱情关系、工作关系、小建议、个性优缺点等。生日配对是婚姻配对的一种，俗话说：“百年修得同船渡，千年修得共枕眠”，</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">99.12万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >735</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >4</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="六爻排盘" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/liuyao.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">六爻排盘占卜</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >六爻占卜：六爻排盘占卜，每天最好只对一件事进行占卜，占卜前请先对预测之事凝神静思3分钟。可预测财运、婚姻、事业、学业、合作、比赛、行人(失踪)等。古代六爻</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">443.07万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >2892</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >132</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="观音灵签" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/guanyin.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">观音灵签</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >观音灵签说明：心诚则灵！观音灵签抽签前先抛弃杂念，双手合十默念“南(nā)无(mó)大慈大悲救苦救难观世音菩萨”三遍；然后默念自己姓名、出生时间、居住地址；</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">471.83万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >9325</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >9796</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="手相图解" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/shouxiang.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">手相图解大全</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >手相图解大全：汉程网手相算命通过手相图解大全分析生命线、命运线、感情线、婚姻线、成功线、智慧线及指纹。手相要看哪只手才正确？虽然各学派看法有所不同，但</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">128.58万</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >938</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >1</i>
                      </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link title="心理测试" to="#">
                    <img class="mui-pull-left" src="assets/images/iconpng/ceshi.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">心理测试</h3>
                      <p
                        class="mui-ellipsis"
                        style="font-size: 13px;color:#898989"
                      >汉程生活心理测试提供性格、智商、情商、爱情、姻缘、缘份、事业、财运、社交等心理测试题大全，让您通过心理测试题全方位了解自己。心理测试主要根据系统归纳整</p>
                      <p class="mui-ellipsis">
                        <i class="iconfont icon-liulan" style="font-size: 12px !important;">0</i>&nbsp;&nbsp;
                        <i
                          class="iconfont icon-zantong"
                          style="font-size: 12px !important;"
                        >0</i>&nbsp;&nbsp;
                        <i
                          class="mui-icon mui-icon-chatbubble"
                          style="font-size: 12px !important;"
                        >1</i>
                      </p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <!--新加/-->
            <div id="item0" class="mui-control-content mui-active" style="display: none">
              <div class="hc-fl-list">
                <h3>八字</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="八字算命" to="#">
                      <img src="assets/images/iconpng/bazi.png">
                      <div class="mui-media-body">八字算命</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="姓名测试" to="#">
                      <img src="assets/images/iconpng/xingming.png">
                      <div class="mui-media-body">姓名测试</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="本命佛查" to="#">
                      <img src="assets/images/iconpng/bmf.png">
                      <div class="mui-media-body">本命佛查</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="八字婚姻" to="#">
                      <img src="assets/images/iconpng/bzhunyin.png">
                      <div class="mui-media-body">八字婚姻</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="八字合婚" to="#">
                      <img src="assets/images/iconpng/hehun.png">
                      <div class="mui-media-body">八字合婚</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="八字流年" to="#">
                      <img src="assets/images/iconpng/bzyear.png">
                      <div class="mui-media-body">八字流年</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="八字财运" to="#">
                      <img src="assets/images/iconpng/bzcaiyun.png">
                      <div class="mui-media-body">八字财运</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="八字每天" to="#">
                      <img src="assets/images/iconpng/bzcyri.png">
                      <div class="mui-media-body">八字每天</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="八字今日" to="#">
                      <img src="assets/images/iconpng/bzriyun.png">
                      <div class="mui-media-body">八字今日</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="五行查询" to="#">
                      <img src="assets/images/iconpng/wuxing.png">
                      <div class="mui-media-body">五行查询</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="犯太岁查" to="#">
                      <img src="assets/images/iconpng/taisui.png">
                      <div class="mui-media-body">犯太岁查</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="称骨测试" to="#">
                      <img src="assets/images/iconpng/chenggu.png">
                      <div class="mui-media-body">称骨测试</div>
                    </router-link>
                  </li>
                </ul>
                <h3>风水</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="住宅布局" to="#">
                      <img src="assets/images/iconpng/fscs.png">
                      <div class="mui-media-body">住宅布局</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="家居风水" to="#">
                      <img src="assets/images/iconpng/fengshui.png">
                      <div class="mui-media-body">家居风水</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="黄道吉日" to="#">
                      <img src="assets/images/iconpng/jiri.png">
                      <div class="mui-media-body">黄道吉日</div>
                    </router-link>
                  </li>
                </ul>
                <h3>运势</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="免费测算" to="#">
                      <img src="assets/images/iconpng/sm.png">
                      <div class="mui-media-body">免费测算</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="2019" to="#">
                      <img src="assets/images/iconpng/2019.png">
                      <div class="mui-media-body">2019</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="每天星座" to="#">
                      <img src="assets/images/iconpng/xzys.png">
                      <div class="mui-media-body">每天星座</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="在线许愿" to="#">
                      <img src="assets/images/iconpng/xuyuan.png">
                      <div class="mui-media-body">在线许愿</div>
                    </router-link>
                  </li>
                </ul>
                <h3>号码</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="手机号码" to="#">
                      <img src="assets/images/iconpng/sjhm.png">
                      <div class="mui-media-body">手机号码</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="车牌号码" to="#">
                      <img src="assets/images/iconpng/cphm.png">
                      <div class="mui-media-body">车牌号码</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="选全吉手" to="#">
                      <img src="assets/images/iconpng/vipsjhm.png">
                      <div class="mui-media-body">选全吉手</div>
                    </router-link>
                  </li>
                </ul>
                <h3>生肖</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="生肖属相" to="#" data-zs_datatp="zs_datatp">
                      <img src="assets/images/iconpng/shengxiao.png">
                      <div class="mui-media-body">生肖属相</div>
                    </router-link>
                  </li>
                </ul>
                <h3>黄历</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="汉程黄历" to="#">
                      <img src="assets/images/iconpng/huangli.png">
                      <div class="mui-media-body">汉程黄历</div>
                    </router-link>
                  </li>
                </ul>
                <h3>紫微</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="超级星盘" to="#">
                      <img src="assets/images/iconpng/xingpan.png">
                      <div class="mui-media-body">超级星盘</div>
                    </router-link>
                  </li>
                </ul>
                <h3>星座</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="神准星座" to="#">
                      <img src="assets/images/iconpng/xingzuo.png">
                      <div class="mui-media-body">神准星座</div>
                    </router-link>
                  </li>
                </ul>
                <h3>配对</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="生肖属相" to="#">
                      <img src="assets/images/iconpng/sxpd.png">
                      <div class="mui-media-body">生肖属相</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="星座配对" to="#">
                      <img src="assets/images/iconpng/xzpd.png">
                      <div class="mui-media-body">星座配对</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="生日配对" to="#">
                      <img src="assets/images/iconpng/xqpd.png">
                      <div class="mui-media-body">生日配对</div>
                    </router-link>
                  </li>
                </ul>
                <h3>抽签</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="六爻排盘" to="#">
                      <img src="assets/images/iconpng/liuyao.png">
                      <div class="mui-media-body">六爻排盘</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link title="观音灵签" to="#">
                      <img src="assets/images/iconpng/guanyin.png">
                      <div class="mui-media-body">观音灵签</div>
                    </router-link>
                  </li>
                </ul>
                <h3>相学</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="手相图解" to="#" data-zs_datatp="zs_datatp">
                      <img src="assets/images/iconpng/shouxiang.png">
                      <div class="mui-media-body">手相图解</div>
                    </router-link>
                  </li>
                </ul>
                <h3>心理</h3>
                <ul class="mui-clearfix">
                  <li>
                    <router-link title="心理测试" to="#">
                      <img src="assets/images/iconpng/ceshi.png">
                      <div class="mui-media-body">心理测试</div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mui-scrollbar mui-scrollbar-vertical">
            <div
              class="mui-scrollbar-indicator"
              style="transition-duration: 0ms; display: block; height: 8px; transform: translate3d(0px, -8px, 0px) translateZ(0px);"
            ></div>
          </div>
        </div>
      </div>
      <div class="mui-off-canvas-backdrop"></div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import "./fenlei.scss";
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
</style>