<template>
  <div>
    <page-header></page-header>
    <div class="mui-content">
      <div style="position: fixed; border-bottom: #e4d3bf 1px solid !important; z-index: 999; ">
        <div
          id="vhx_nod1"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted zt-wrapper"
          data-scroll="2"
        >
          <div
            class="mui-scroll"
            id="tabscroll"
            style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;"
          >
            <a
              class="mui-control-item zt-item"
              href="#"
              data-indexsy="0"
              data-md="xx0"
              data-zs_datatp="zs_datatp"
            >
              <span>首页</span>
            </a>
            <a
              class="mui-control-item zt-item mui-active"
              href="#zt/bazi/"
              data-indexsy="1"
              data-md="xx1"
              data-zs_datatp="zs_datatp"
            >
              <span>八字</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/xingming/"
              data-indexsy="2"
              data-md="xx2"
              data-zs_datatp="zs_datatp"
            >
              <span>姓名</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/haoma/"
              data-indexsy="3"
              data-md="xx3"
              data-zs_datatp="zs_datatp"
            >
              <span>号码</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/yunshi/"
              data-indexsy="4"
              data-md="xx4"
              data-zs_datatp="zs_datatp"
            >
              <span>运势</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#jiemeng/"
              data-indexsy=" 5"
              data-md="xx5"
              data-zs_datatp="zs_datatp"
            >
              <span>解梦</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/peidui/"
              data-indexsy="6"
              data-md="xx6"
              data-zs_datatp="zs_datatp"
            >
              <span>配对</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/huangli/"
              data-indexsy="7"
              data-md="xx7"
              data-zs_datatp="zs_datatp"
            >
              <span>黄历</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/xingzuo/"
              data-indexsy="8"
              data-md="xx8"
              data-zs_datatp="zs_datatp"
            >
              <span>星座</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/shengxiao/"
              data-indexsy="9"
              data-md="xx9"
              data-zs_datatp="zs_datatp"
            >
              <span>生肖</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/fengshui/"
              data-indexsy="10"
              data-md="xx10"
              data-zs_datatp="zs_datatp"
            >
              <span>风水</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/chouqian/"
              data-indexsy="11"
              data-md="xx11"
              data-zs_datatp="zs_datatp"
            >
              <span>抽签</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/xiangxue/"
              data-indexsy="12"
              data-md="xx12"
              data-zs_datatp="zs_datatp"
            >
              <span>相学</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/zhanbu/"
              data-indexsy="13"
              data-md="xx13"
              data-zs_datatp="zs_datatp"
            >
              <span>占卜</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/xingge/"
              data-indexsy="14"
              data-md="xx14"
              data-zs_datatp="zs_datatp"
            >
              <span>性格</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/shiye/"
              data-indexsy="15"
              data-md="xx15"
              data-zs_datatp="zs_datatp"
            >
              <span>事业</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/caiyun/"
              data-indexsy="16"
              data-md="xx16"
              data-zs_datatp="zs_datatp"
            >
              <span>财运</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/yinyuan/"
              data-indexsy="17"
              data-md="xx17"
              data-zs_datatp="zs_datatp"
            >
              <span>姻缘</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/paipan/"
              data-indexsy="18"
              data-md="xx18"
              data-zs_datatp="zs_datatp"
            >
              <span>排盘</span>
            </a>
            <a
              class="mui-control-item zt-item"
              href="#zt/xinli/"
              data-indexsy="19"
              data-md="xx19"
              data-zs_datatp="zs_datatp"
            >
              <span>心理</span>
            </a>
          </div>
          <a class="zt-icon mui-icon mui-icon-arrowdown" data-xjt="1" data-ahs="0"></a>
        </div>
      </div>
    </div>

    <div class="mui-slider-item mui-control-content mui-active">
      <div class="shequ-speimg" style="background-image: url(images/fenlei/fenlei_bazi.jpg)">
        <div class="photo">
          <img src="assets/images/fenlei/fenlei_bazi.png">
        </div>
        <div class="txt">
          <h3>八字</h3>
          <p class="ellipsis2">八字，是根据干支历法排出年月日时四柱的天干地支，并从命局的各种组合变化推论先天命运。</p>
        </div>
      </div>
      <div class="shequ-num">
        测试人数
        <i>1.17亿</i>点赞
        <i>10.72万</i>
      </div>
      <div
        class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative zt-control"
        id="toptop"
      >
        <a class="mui-control-item home-item mui-active" data-id="1">八字列表</a>
        <a class="mui-control-item home-item" data-id="2">八字文库</a>
      </div>

      <!--列表-->
      <div id="top_mui_id">
        <div id="viewview_1" class="mui-control-content mui-active">
          <div class>
            <div class>
              <ul class="shequ-ceshi-list mui-clearfix">
                <li>
                  <a title="八字算命" href="#bazi/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bazi.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字算命
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        3647.11万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 3.46万&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;1210
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字算命：八字排盘、八字排大运、八字命卦分析、五行查询、五行力量分析、命局分析及八字喜用神、八字五行后天改运法、日柱分析、十二运星看运势、八字先天命运、性格分析、先天基础运、婚姻分析、事业分析、体质健康、思想及天赋、年月日时论命、称骨算命、主生肖副生肖解析、本命佛、一生运势吉凶、2017年运势分析等。汉程网八字算命，依据生辰八字理论，是由多位易学专家倾力打造的独一无二的生辰八字算命精品，将专业性与通俗易懂完美结合，既适合有一定专业基础的易学爱好者参考，又适合一般网友八字算命使用。八字算命，也叫生辰八字算命、批八字、四柱算命、四柱八字算命等，是对时间体系对命运影响的系统归纳，根据干支历法的出生时间查出天干地支八个字，并依据四柱预测理论进行各种推断，因此，八字算命是一种根据生辰八字算命的方法。一命二运三风水四积德五读书。“命运”，其先天为“命”，为先天格局大小，后天为“运”，为后天顺利程度。“命”是由出生时间和环境决定，不可逆转，占30%左右；而“运”是后天人生的运行轨迹，是可变的。通过八字算命，用符合八字命局的后天运势调整和风水调整，就成了改变“命运”的重要方法之一。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="姓名测试打分" href="#xingming/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/xingming.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        姓名测试打分
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        4186.17万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 3.56万&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;2707
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >姓名测试打分：包括生辰八字分析、姓名五格数理、三才剖析、五格互动关系、形家四运解析、五格数理姓名测试打分、结合生辰八字姓名测试打分等。汉程姓名测试打分为专业级系统，采用较严格的标准，原则上没有100分的姓名，因为没有完美的人生，物极必反！因此，本系统中名字测试打分在90分以上就相当不错。汉程网姓名测试打分，专业结合生辰八字、五格数理、五格互动关系、三才进行测名字打分，不仅可以对五格数理姓名测试打分，还可以结合生辰八字测名字打分，可谓是不可多得的免费姓名测试精品。姓名测试打分一定要结合生辰八字，单纯的五格数理评分意义不大，因为姓名需要配合本人先天条件才能发挥较好的影响力，而每个人的先天条件不同，所以结合生辰八字进行姓名测试打分非常重要！为什么要进行姓名测试打分呢？因为，一个符合八字五行、数理格局，以及音形义俱佳的好名字有利于社会交往，提高亲和力，增强人际关系，对一个人的运势有极强的灵动力和暗示力，增进人与社会的和谐相处。汉程网姓名测试打分系统，核心部分出自于〖汉程网超级神算〗，由多位易学和姓名学专家携同技术人员花费三年多时间研发并不断改进。系统权威专业，数千家命理起名机构长期参考本站结果，并给予极高评价！提示：汉程网姓名测试打分系统目前支持的姓名为国家语委公布的8000多个规范汉字，非规范汉字笔画可能显示为0，其姓名测试结果也将不准确。如果您的姓名不是规范汉字，请更换一个笔画相同的常用字测试姓名。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="本命佛查询" href="#bmf/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bmf.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        本命佛查询
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        85.04万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 556&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;8
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >本命佛查询：生肖本命佛查询、适合修行的人、本命佛生日、本命佛道场、本尊功德、本命佛介绍、本命佛真言心咒、本命佛的来源、佩戴敬奉本命佛注意事项等。人们在面对不可知的命数时，往往显得茫然无助。一直以来，人们都有“男戴观音女戴佛”的误区。殊不知众生根器不同、因缘不同，也需以不同方式接引。据佛教传承，每个人从一生下来就有位佛菩萨在守护，所生之日与有缘之佛结缘，被称为“本命佛”！佛教密宗也继承这种本尊法，选择一位特别有缘的佛菩萨诚心敬奉，更易在修行上取得成就，也可以得到本尊的庇护，去除痛苦烦恼，事业有成，逢凶化吉，一生安乐。“本命佛”是与十二生肖者磁场最接近、感应力最强的佛菩萨，只要虚心敬奉本命佛法像，培植福报，便能祈愿让事业、财运、爱情、学业、健康等得到显著改善，带您步入人生的光明坦途。《大集经》云：“……是十二兽。昼夜常行阎浮提内。天人恭敬。功德成就已。于诸佛所发深重愿一日一夜。常令一兽游行教化。余十一兽安住修慈。周而复始。七月一日鼠初游行。以声闻乘教化一切鼠身众生。令离恶业劝修善事。如是次第至十三日。鼠复还行。如是乃至尽十二月。至十二岁。亦复如是。常为调伏诸众生故。善男子。是故此土多有功德。乃至畜生亦能教化。演说无上菩提之道。是故他方诸菩萨等。常应恭敬此佛世界……”据佛教传承，该十二兽即是现在的十二生肖，他们均有相应的一位菩萨化导、护持。这就是信众所称的“本命佛”，是千年以来人们所供奉的守护佛！诸佛菩萨同体大悲，但因众生分别而生法，本命佛从佛菩萨慈悲摄受众生的方便法门中而来，如果有善男信女能由“本命佛”而能亲近佛法、供养诸佛菩萨，结佛法善缘，此因缘种子成熟时，必定也会成就无上智慧。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字婚姻测试" href="#bzhunyin/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzhunyin.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字婚姻测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        677.92万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 5693&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;86
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字婚姻算命：八字命盘、八字婚姻缘份、八字婚姻批命、配偶个性及特征、适合的对象、异性缘桃花运、恋爱结婚时机、旺姻缘法、催桃花异性缘法等。汉程网八字婚姻算命，又叫算命婚姻，婚姻批八字算命等，婚姻算命是依据生辰八字理论，对于八字中婚姻信息全面反映，根据八字五行的生克冲合刑害等规律精准分析八字婚姻缘份。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字合婚" href="#hehun/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/hehun.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字合婚
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        498.74万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 4572&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;168
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字合婚：双方八字排盘、八字合婚指数、婚姻配对分析、双方婚姻配对参考等。八字合婚，就是把男女双方八字配在一起，对双方八字之间的生克制化、五行平衡、阴阳平衡、五行互助、生年及日元合害、大运流年有无严重的不好和冲克等问题详加研究，由此推导出两人的婚姻生活吉凶。正道居士解说：人们常说“不是一家人，不进一家门”，很多夫妻不仅越长越有夫妻相，甚至性情、认知、价值观也越来越同化。这是由于夫妻长期生活在一起，双方磁场发生相互作用，其结果或有益于彼，或有益于我，或双方有益，或双方有损等等，于是各自的命运轨迹也就发生了或吉或凶的变化。八字合婚并非定数，俗话说：“十年修得同船渡，百年修得共枕眠”，每个人都应相互珍惜修来的缘份，相互理解尊重，多看优点、包容缺点。即便八字合婚指数不高，也不要失望和轻易放弃，可以通过双方共同的努力，和后天五行调整去改善！祝愿天下有情人终成眷属！</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字流年运程" href="#bzyear/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzyear.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字流年运程
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        167.8万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 1653&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;17
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字流年运程：最近几年流年运程吉凶详批、2019年运势分析、犯太岁分析、流年十二宫神煞、流年意外灾祸、流年官非是非、流年破财损耗、相关化解方法等。八字流年运程，由多位易学专家倾力打造，依据生辰八字理论，分析最近几年流年十二宫神煞并精准进行运势查询，提早预知吉凶，早做预防规避。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字财运测试" href="#bzcaiyun/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzcaiyun.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字财运测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        332.54万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 3958&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;66
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字财运测试：先天财运分析、一生财运起伏图、一生财运分析、最近几年财运测试及得分、最近几年破财损耗分析及化解方法、财运不好怎么办、八字催财运秘法等。汉程网八字财运测试，是由多位易学专家倾力打造的强大财运测试精品。从多个角度全方位进行财运预测分析，其中一生财运起伏图，以图表形式直观的显示一生财运旺衰状态，告诉您十年风水轮流转的道理；一生财运测试点评，如配合当时的环境因素，准确度可说相当高，在您做人生规划不失为一个重要之参考依据；每年财运测试，根据八字命局与流年的生克关系等给出最近几年财运分析；流年财运破财损耗，依八字推论，显示在财运有状况之年有变动、损财或破财的机率较大，同时给出了化解方法。拥有财富是很多人梦寐以求的事，为什么需要财富呢？因为有钱好办事。钱多有很多好处，一来不会为自己和家人的生活烦忧；二来能实现自己的理想；三来可以布施、慈善，帮助需要帮助的人，成为物质和精神都富有之人，为自己和后代积累更大福报。财运不错如何催旺呢？财运不佳如何扭转呢？通过财运测试，我们了解了八字财运的基本情况，然后可以结合后天催财运法，将财气引进来、让磁场动起来，再将财气固起来。同时再配合自己阶段性的规划和努力，相信您一定可以走向财富之路！正道居士提示：君子爱财，取之有道；财因贪失，非分莫想。事常知足心常乐，人到无求品自高。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字每天财运" href="#bzcyri/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzcyri.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字每天财运
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        181.28万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 2463&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;54
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >每天财运测试：最近几天财运测试、财运得分、财运简评等。汉程网每天财运测试c，是由多位易学专家倾力打造的不可多得的财运测试精品，根据您的八字命局，预测最近几天每天的财运状况，在做短期投资理财时可作为一个辅助参考（切勿沉迷，投资风险自负）。正道居士提示：君子爱财，取之有道；财因贪失，非分莫想。事常知足心常乐，人到无求品自高。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字每月财运" href="#bzcyyue/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzcyyue.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字每月财运
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        71.63万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 813&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;7
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >每月财运测试：今年12个月财运起伏图、12个月财运测试、财运得分、注意事项等。汉程网每月财运测试，是由多位易学专家倾力打造的不可多得的财运测试精品。不仅以图表形式直观的显示一年12个月的财运指数，更给出了详细的财运分析点评，配合当时的环境因素，准确度可说相当高，在您做每月规划不失为一个重要之参考。正道居士提示：君子爱财，取之有道；财因贪失，非分莫想。事常知足心常乐，人到无求品自高。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字事业测试" href="#bzshiye/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzshiye.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字事业测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        183.42万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 1764&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;17
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字事业测试：八字看事业运工作运官运、先天事业基础运、事业的助力和阻力、贵人运、贵人方位、适合从事的行业、流年官司是非分析、合伙吉凶分析、上班还是创业好、一生投资时机把握等。汉程网八字事业算命，依据生辰八字理论，详细解读八字里蕴藏的事业官运信息，是不可多得的免费事业测试精品。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="学业考试运测试" href="#bzxueye/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzxueye.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        学业考试运测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        76.37万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 1367&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;89
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字测学业考试运：八字看先天读书运、一生学业考试运、最近几年考试运气测试、学生考生提供运气开运法等。孩子是富人家的宝贝、穷人家的希望。虽然学业运势的好坏是先天条件和后天努力的综合结果，但和理财一样，学业规划却是越早越好，从现有收入中，为孩子储备教育基金是父母的责任。建议您从孩子小的时候就要规划，今后才更容易减轻压力，快乐生活，好运人生。正道居士提示：运势好坏只是先天条件，后天努力更为重要！正所谓：勤能补拙是良训，一份辛苦一份才！九层之台，起于垒土；千里之行，始于足下！</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="体质健康测试" href="#bzjiankang/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzjiankang.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        体质健康测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        27.07万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 418&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;3
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字体质健康测试：八字先天宿疾、五行体质测试、体质改善提醒、五行后天改运法等。汉程网八字体质健康测试，依据生辰八字理论，通过八字日元及月令分析先天八字宿疾，并根据五行旺衰分析先天身体机能及体质健康，以及改善建议！ 五行为“金、水、木、火、土”五种元素，五种元素在天上形成五星，即金星、木星、水星、火星、土星；在地上就是金、木、水、火、土五种物质；在人就是仁、义、礼、智、信五种德性；在中医是金主“肺、大肠、鼻”，木主“肝、胆、眼睛”，水主“肾、膀胱、耳”，火主“心、小肠、舌”，土主“脾、胃、口”。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字今日运势" href="#bzriyun/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzriyun.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字今日运势
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        211.92万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 3220&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;23
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字今日运势：八字今日运势、本月运势、今年运势，主要分析事业、财运、爱情、健康、人缘、名声等运程测试。汉程网八字今日运势查询，根据八字命局与流年、流月、流日等干支关系，给出今日运势、本月运势、今年运势分析，如能再配合当时的环境因素，在您做规划时，不失为一个重要的参考依据。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="喜用神专业测试" href="#vipxys/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/vipxys.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        喜用神专业测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">20.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        17.17万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 110&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;57
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >喜用神是对八字补弊救偏或促进助成的五行，也是后天改运的重要方法。喜用神并不一定是五行缺项，而要视命局的具体情况综合衡量判断。&amp;lt;br/&amp;gt;&amp;lt;br/&amp;gt;一个人出生时间和环境所组成的四柱干支，是每一个人的生命密码，相当于人的生物遗传基因密码。而天干地支就是基因的标志。必须对干支、阴阳、五行的意象和法则作深入之研究，化抽象为具体。如此，方能精准定位，调整八字。&amp;lt;br/&amp;gt;&amp;lt;br/&amp;gt;绝大多数人的八字中，阴阳五行是不均衡、不平和的。其旺衰、轻重不一，导致「太过」与「不及」。这即是「病」，有病须「药」治，这「药」就是「用神」。而能生助用神的称为「喜神」。&amp;lt;br/&amp;gt;&amp;lt;br/&amp;gt;八字之所以能揭示荣辱兴衰，因为这个物质世界有因果。我们放不下对物质的执著，就必然被五行所束缚。五行不和谐，人生更易跌宕起伏。哪怕先天格局好，运途也会较为波折，或好事多磨或挫折重重，也容易有种种这样那样的缺憾。因此易学和中医都将人体称作小宇宙。&amp;lt;br/&amp;gt;&amp;lt;br/&amp;gt;四柱命局以用神为核心。用神健全有力与否，影响人一生的命；行运补救与否，则影响人一生的运。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="八字排盘" href="#bzpaipan/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bzpaipan.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        八字排盘
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        388.53万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 2943&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;136
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >八字排盘：八字排盘、排大运、排流年、八字神煞、干支合化、五行个数、五行力量得分、同类异类力量、阴气阳气、十神力量、日主旺衰、八字格局、八字喜忌等，并提供调候用神、三命通会、穷通宝鉴等古籍参考。汉程网专业级八字排盘系统，排盘功能十分强大，除了基本的八字排盘外，还包含生辰八字查询、排大运、排流年，四柱神煞、八字天干地支的刑冲合害、季节力量、日主旺衰、八字格局、五行及十神力量分析等都有详尽的分析，是不可多得的在线八字排盘系统。经过八字排盘，我们了解八字的基本信息，才能依据生辰八字理论进行各种分析预测。因此，八字排盘是八字算命的基本步骤。八字，也叫四柱，是从历法查出的天干地支八个字，用天地天干地支表示人出生的年、月、日、时，合起来是八个字。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="五行查询" href="#wuxing/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/wuxing.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        五行查询
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        267.35万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 2371&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;17
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >五行查询：八字五行查询、五行个数、五行缺什么、五行旺衰、五行力量强弱、五行体质健康分析、八字喜用五行、五行个性、五行改运法等。五行相生相克：金、水、木、火、土，顺序相生，隔序相克，非常简单易记。五行相生：金生水，水生木，木生火，火生土，土生金。五行相克：金克木，木克土，土克水，水克火，火克金。每个人均出生在特定的时间和环境，即为生辰八字。八字可以转换为五行，五行为“金、水、木、火、土”五种元素，作为构成宇宙万物及各种自然现象变化的基础。五行依“金、水、木、火、土”的顺序，顺序相生，隔序相克。金生水，水生木，木生火，火生土，土生金。金克木，木克土，土克水，水克火，火克金。五行的五种元素在天上形成五星，即金星、木星、水星、火星、土星；五行在地上就是金、木、水、火、土五种物质；五行在人就是仁、义、礼、智、信五种德性；五行在中医是金主“肺、大肠、鼻”，木主“肝、胆、眼睛”，水主“肾、膀胱、耳”，火主“心、小肠、舌”，土主“脾、胃、口”。五行的不和谐会对人的运势和健康产生各种不利影响，这也是在易学和中医理论中，都将人称作“小宇宙”的原因之一。正道居士解说：我们常听说“跳出三界外，不在五行中”，“五行三界”就是这个物质世界所在的范围。佛教、道教都讲“修行”，人可以通过修行来破除物质世界对我们的迷障，放下了对物质世界的执著，就不会被物质所束缚。如果修行力量足够的话，则就没有什么“定命”。“在五行中”或“不在五行中”都是我们自己的选择，对于绝大多数习惯在五行世界中徘徊的人来说，五行系统非常实用，通过五行查询，了解其中奥妙，即可使用五行原理来改善人的命运。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="犯太岁查询" href="#taisui/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/taisui.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        犯太岁查询
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        60.83万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 495&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;17
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >犯太岁查询：根据生辰八字精准查询每年犯太岁状况、太岁名称、太岁方位以及犯太岁如何化解，同时提供年命纳音五行、天运五行、天干地支、生肖等详细信息解读。太岁又称“太岁星君”，既是天上的木星，也是民间奉祀的神祇，共有六十位，是每年的值神。十二地支(生肖)就是象征了木星公转每年相对地球的方位。我们都知道，月球的引力可以影响地球的气候、地理，甚至人类的情绪、健康，其实很多星曜均是如此，这就是风水上星曜磁场的作用。作为太阳系最大的行星和地球生命的天然保护星，木星（太岁）对我们的影响极为深远。时空体系有时间和空间两种，八字犯太岁是时间体系的关系，风水犯太岁则是空间体系的关系。凡是家宅/商铺/办公室大门朝向太岁、岁破方，或者大门、办公室、卧室、睡床，位于房屋的太岁方、岁破方，就是风水犯太岁，遇之也建议适当化解。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="称骨测试" href="#chenggu/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/chenggu.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        称骨测试
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        322.61万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 2889&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;86
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >称骨测试项目：称骨的骨重、分男女版的称骨简评和称骨释意。汉程网称骨算命，和网上绝大多数只有一种解释的称骨算命是不同的，而是按原著分为男女不同的称骨算命法，男女有别，即便骨重一样，称骨算命的解释却是不同的。称骨算命的方法来源于干支，因此本系统默认以干支定月，其部分命例的称骨结果与网上大多数称骨结果有差异，如果您喜欢随大流的话，可以选择以农历定月来进行称骨算命。称骨算命，据传为唐朝袁天罡所著（也有人认为是诸葛亮所著），当然，也不排除是后人借二人之名而创作。称骨算命是算命方法的一种，和八字算命相比，对命运分的比较粗略，考察不细致。需要提醒的是，称骨算命属于传统民俗文化，并非现代科学研究成果，因此仅供参考。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="周易预测" href="#zhouyi/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/zhouyi.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        周易预测
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        114.3万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 1199&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;9
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >周易预测：周易预测属于传统民俗文化，并非现代科学研究成果，仅供参考。依周易理论，以生辰八字起终身卦主卦、变卦，主要预测财运、事业、经商、名誉、出行、决策等。汉程网周易算命，依据周易理论，以生辰八字进行周易算命、周易算卦、周易预测。数千年来，周易六十四卦一直是中国民间超自然改运改命的符咒，也是最有灵性的特殊超强改运符号。不过，周易算命终身卦所包含信息有限，因此仅供参考。周易算命原指根据易经所记录的卦象，辅助以道具甲骨、铜钱、蓍草等，推演计算以占卜吉凶的过程，后引申为泛指占卜、八字算命、看相、测名等等。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="年命纳音查询" href="#bazinm/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/bazinm.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        年命纳音查询
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        213.03万&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 437&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;7
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >年命纳音及生肖查询：查询1900年至2100年每年纳音五行、天干地支、生肖属相、天运五行等。我们通常说的自己是什么命，除了指日主之外，往往指的是出生年的年命纳音五行，也叫天运五行。四柱中的五行包括：天干五行、地支五行、纳音五行等。其中纳音五行是由一个天干与一个地支组成的新五行。</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a title="秘供秘养灵验法" href="#mifa/" data-zs_datatp="zs_datatp">
                    <img class="mui-pull-left" src="assets/images/iconpng/mifa.png">
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">
                        秘供秘养灵验法
                        <span class="font12" style="display: none">特色推荐</span>
                      </h3>
                      <div class="price" style="display: none">0.00汉币</div>
                      <p class="mui-ellipsis colosh font12">
                        9607&nbsp;&nbsp;
                        <i class="iconfont icon-zantong font12"></i>&nbsp; 28&nbsp;&nbsp;
                        <i class="iconfont icon-liuyan font12"></i>&nbsp;0
                      </p>
                      <p
                        class="mui-ellipsis font12"
                      >秘供秘养灵验法仅供开运商城客户免费使用，请刮开圣品防伪吊牌上的涂层，获得10位数字防伪码，每个防伪码可查询一次。系统目前不对外开放，也不接受收费测试。每个人通过独特的圣品供养方法，可以让圣品与个人自身的信息场与环境信息场更为融合，对改善运势具有重要意义。</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="viewview_2" class="mui-control-content">
          <div class>
            <div class>
              <ul
                class="shequ-wenzh-list mui-clearfix"
                data-type="bazi"
                data-count="1"
                data-up="1"
                data-zsgd_id="1553354066347"
                data-gdbl="1"
              >
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">蒋介石之命造</h3>
                      <p
                        class="mui-ellipsis"
                      >枭伤日伤 乾（1847)丁亥庚戌己巳庚午 运：己酉戊申丁未丙午乙巳甲辰癸未壬寅辛丑 81828384858687888 &amp;n</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >537</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">《玉井奥诀》全文</h3>
                      <p
                        class="mui-ellipsis"
                      >玉井奥诀凡推究造化之理，其法以日为主，坐下支神，先求其意，昔人论命，年为本，日为主，删繁就简，专言日主，今云先求坐下支神之意者，言非专论日干，必须合日辰干支两字言之，以干配支凡推究造化之理，其法以日为</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >3332</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字教材</h3>
                      <p
                        class="mui-ellipsis"
                      >四柱八字排列方法四柱八字之推命方法，是以命主之出年日月时，化作农历，再翻查万年历，找出其年月日时之天干地支，以作推算之用。（计算方法以过「气节」为准），大运排列方法以月之干支为根基，阳男阴女顺数，阴男</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >533</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="吉凶的到位与引发"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_4/061228235913491_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">吉凶的到位与引发</h3>
                      <p
                        class="mui-ellipsis"
                      >当命局某一五行偏旺至百千宠爱于一身时则会物极必反，其殃及的不只是自身利益，其它五行都会受到冲击。如水旺成灾，不仅水自身旺极无泄易致灾致损，火也被克得了无生机；金虽生水，此时已是水多金沉；克水之土此时反</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >439</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="解开诸葛亮借东风之迷"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_7/07031319081950_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">解开诸葛亮借东风之迷</h3>
                      <p
                        class="mui-ellipsis"
                      >长篇历史小说《三国演义》被毛宗岗、金圣叹评为天下第一才子书。经中央电视台将其搬上共屏之后，更足家喻户晓，脍炙人口，妇孺皆知，人人争看。三国人物成千上万，其中写得最精彩的，莫过于诸葛亮。写诸葛亮最精彩最</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1146</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[四柱]论空亡</h3>
                      <p
                        class="mui-ellipsis"
                      >[四柱]论空亡干主形，阴阳排列共十位：甲、乙、丙、丁、戊、己、庚、辛、壬、癸；支主气，周流相续共十二位：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。干支的关系，并不单单是一种数学意义上的排列组合。</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >685</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">滴天髓7</h3>
                      <p
                        class="mui-ellipsis"
                      >二十五、疾病 五行和者，一世无灾。 原注：五行和者，不特全而不缺，生而不克，只是全者宜全。缺者宜缺，生者宜生，克者宜克，则和矣。主一世无灾。 任氏曰：五行在天为五气青、赤、黄、白、黑也；在地为五行，木</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >871</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">【命理讲义】吉神凶煞</h3>
                      <p
                        class="mui-ellipsis"
                      >【命理讲义】吉神凶煞《命宫》子《天贵星》志向高远★初限辛苦，中年有四方财，老运平吉有福。为人文雅，志气非凡，心性达观，高尚文雅，主观较强，立性坚定，进取努力。与人多有长远之情感，为人多情，朋友相交情深</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >3049</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">流年歌诀全文</h3>
                      <p
                        class="mui-ellipsis"
                      >摘录了一篇[流年歌诀]，供大家参考。这主要是单纯地从流年神煞上来下断定的，如将星及三台、天喜、白虎、飞廉灾厄等。流年歌诀1．将星及三台百谋事和谐出入必称意添喜又添财2．天罡罗计临三杀年中寻男遇恐凶险女</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1863</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图]猪年哪个明星有“桃花运”"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_2/070227151110971_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图]猪年哪个明星有“桃花运”</h3>
                      <p
                        class="mui-ellipsis"
                      >猪年虽然不是桃花年，但影剧圈永远少不了八卦，反正人生如戏、戏如人生，有岛内塔罗牌专家、姓名八字学专家解析这些天王的猪年桃花运称，周杰伦今年将是遇到爱情麻烦年，不再春风得意，今年将“偏爱长腿名模女”的他</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >577</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">一个八字有20种推算结果</h3>
                      <p
                        class="mui-ellipsis"
                      >八字命理传承千年，排局简易，已成程式，论断不易，多凭经验。举凡同一个命例，名家分析取用迥异者，不可胜数，可知理论并不周全。传统命理大体上只是经验规则的堆积，还没有被构造成一个严密而有机的统一体。业界有</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1765</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">知日元断流年</h3>
                      <p
                        class="mui-ellipsis"
                      >《来龙去脉》凡事之发生，皆有其形成之因素存在，八字算准，还是气数难逃，只有知其原理，才能化解违逆，亦才能化消极为积极，改变命运，算命亦才有意义，亦才能成为人生之有效借镜，但基本之条件，首先吾人或命相家</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >827</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="五行与职业分析"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2006_12/061215085398741_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">五行与职业分析</h3>
                      <p
                        class="mui-ellipsis"
                      >五行与职业属木事业文学、文艺、文具店、文化事业的文人，作家、写作、撰文、教员、校长、教育品、教育界、书店、出版社、公务界、司法界、治安警界、官途之界、、政治界、参政界、新创设界、特殊动植物生长界之学者</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >658</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="会成为女富豪的八字"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_9/07090609295469_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">会成为女富豪的八字</h3>
                      <p
                        class="mui-ellipsis"
                      >想知道妳有没有成为女富豪的命吗？快点拿出妳的八字命盘，雨扬老师将告诉妳：怎样八字的女人最有可能成为大富豪喔！时柱在食神时柱也就是八字命盘的最后一柱，若有食神若于此处，那么代表在晚年可以存得住钱，当然，</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >3.13万</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图文]22种情况不能测"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_5/061230141770401_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图文]22种情况不能测</h3>
                      <p
                        class="mui-ellipsis"
                      >动静阴阳，反复变迁。天下之理生于动，动则生吉凶，吉凶成大业。有机则动；机者，万物萌发之机。比如人之心念一动，神经系统、内分泌系统、血液循环系统、消化系统、生殖系统、甚至泌尿系统和呼吸系统都会引起相应的</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >797</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图]利用周易常骗人几种方式"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_4/070120141390131_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图]利用周易常骗人几种方式</h3>
                      <p
                        class="mui-ellipsis"
                      >正确认识风水周易文化引用在《凤凰卫视》访谈时的一段观点：董易林：周易是中国传统哲学的核心，被广泛的应用到各个领域。还有一点必须要大家明白，周易不是道家的文化，也不是巫术，更不是捉鬼请神，它来自于孔子的</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >581</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="属猪的猪年的注意事项"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_8/07030116435258_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">属猪的猪年的注意事项</h3>
                      <p
                        class="mui-ellipsis"
                      >属猪的在07年本命年的几个注意事项 虽然关于属猪的在07年的本命年运程写了很多了，但是仍有不少朋友继续问，我再总结一下：1、属猪的在07年本年命是自刑，12生肖中有四大自刑，12生肖中也只有这四个生肖</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >378</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图]有几种人不适合批八字"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_4/070120134843341_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图]有几种人不适合批八字</h3>
                      <p
                        class="mui-ellipsis"
                      >八字人人有,但也不是谁都适合批八字,有些人是不适宜批，有些人是无法批。下面董易林提几点批八字的注意事项：1、 几岁刚出生的小孩子，由于孩子太小，不适合批八字。2、 超过60岁的老年人，60一甲子，不建</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >2853</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">【命理讲义】流年命批范例</h3>
                      <p
                        class="mui-ellipsis"
                      >【命理讲义】流年命批范例庚庚庚乙 辰戌辰巳 戊丁丙乙甲癸壬辛 子亥戌酉申未午巳乎。详观此命。邹姓干造。农历三月二十五日辰时生。依书详考。格取伤官生财贵格。四柱定盘立论。大吉呈祥。观此命盘。庚金生当三月</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >625</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="八字男女结合的奥秘"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_7/07030611129426_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字男女结合的奥秘</h3>
                      <p
                        class="mui-ellipsis"
                      >每一个人都有自己与生俱来的五行禀赋，俗称秉性。人的社会属性决定了一个人只要活着，就必须和其它人交往，在交往过程中，和一些人情投意和便成为朋友，和一些人脾气不投，虽近在咫尺，却敬而远之。和得来的这些人和</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >984</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">盲师起运诀及其运用</h3>
                      <p
                        class="mui-ellipsis"
                      >起运诀1火命春分十二寅土命芒种九日未金主立秋三日巳水人立冬当日申木命生人大寒亥起运诀2火命春分十二挠土命芒种当日交金主立秋三日是水人立冬十日交木命生人大寒交此是运诀要知晓注：须配上诀用，上例丁丑年生纳</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1025</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">仪表个性分析</h3>
                      <p
                        class="mui-ellipsis"
                      >15.2仪表伤官泄秀,娇肖美丽可爱,红粉佳人. 食神泄秀,明朗圆滑美丽可爱,贤妻良母. 用神有力,漂亮英俊. 财为用神,五官有力. 食神入用,心宽体胖,体格魁梧. 偏官入用,体格魁梧,眉高眼大,骨骼配</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >562</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">【命理讲义】八字实例</h3>
                      <p
                        class="mui-ellipsis"
                      >【命理讲义】八字实例《宋朝名臣～苏东坡》 〔北宋仁宗景佑三年（西元一Ｏ三六）十二月十九日～～建中靖国元年（西元一一Ｏ一）七月二十八日〕时日月年 乙癸辛丙 卯卯丑子《宋朝名臣～岳飞》 〔宋徽宗崇宁二年（</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >983</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">如何定格局,判富贵贫贱高低</h3>
                      <p
                        class="mui-ellipsis"
                      >如何定格局,判富贵贫贱高低一般初学八字的人,总是会被古书上一大堆的格局名称所迷惑,例如”飞天禄马格,六乙鼠贵格,蝴蝶双飞格…”等等,一大堆的格局名称,令人愈看愈糊涂,似乎学了这些名称后,对于了解八字的</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >4105</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图]对八字预测理论的认识"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_1/070110220083531_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图]对八字预测理论的认识</h3>
                      <p
                        class="mui-ellipsis"
                      >在学八字预测前我们首先必须要对八字预测这一中国神奇的预测术有一个客观的认识。由于我们大家是用逻辑推理来判断八字喜忌从而断出命主的功名利禄富贵层次、大运流年的起伏。那么不可避免地要面对从一个八字推断出几</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1561</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">四柱大运与太阳黑子周期（上）</h3>
                      <p
                        class="mui-ellipsis"
                      >四柱命理学是我国古老传统文化中的一朵奇葩，而太阳黑子是近代天文学上的一个新发现。它们是在两个不同文化领域中，不同时代的产物。本文试图在东西文化之间作一个沟通与交汇，把古代神秘文化与现代科学进行联系与结</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >400</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">论杂格分析介绍</h3>
                      <p
                        class="mui-ellipsis"
                      >论杂格杂格，月令不用，取外格而用之。其格甚多，所以称为杂。大约是要干头无官无煞才算为外格，如果有官煞，那么就自有官煞为用，就不用外格了。如果遇上财也还可取格，但是，如果财根太深或者财透出两位天干，那么</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >458</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">玉照神应真经（下）</h3>
                      <p
                        class="mui-ellipsis"
                      >玉照神应真经（下）162、丙壬同居震位，阴阳淫乱之宫。 163、木入烟中，疾为下小。 164、旺相休囚，问于进退。 165、壬来朝甲，有官贵，中女须荣。 166、台月朝时建旺，则祖先富贵。 167、三</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >495</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">论同辰与守恒</h3>
                      <p
                        class="mui-ellipsis"
                      >有些人，他们的出生时辰相同。在这些时辰相同的人中，有一些人，他们后天的命运很相似，另一些人，他们后天的命运不那幺相似，还有一些人，他们后天的命运，则相去甚远，这是难以理解的。理论上说，命理推论，对于同</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >260</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">疤痕胎记痣纹身的命理符号</h3>
                      <p
                        class="mui-ellipsis"
                      >疤痕、胎记、痣、纹身的命理符号拿到八字就知道日主哪个部位有疤痕、痣、胎记，这以前被称之为绝招，密而不传。笔者在这里不仅向你揭示这些标记的具体看法，还让你看出标记的成因、大小、美丑。疤痕、胎记、痣、纹身</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1341</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">相同的八字不同的命运</h3>
                      <p
                        class="mui-ellipsis"
                      >相同的八字不同的命运难道天底下相同八字的人，都会有相同命运遭遇吗？当然不见得。真正研究命理的人，不会说命理是百分之百准确应验，因为命理不是你命运的主宰者，活生生的人才是。热衷于命学研究的人，对为什么八</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >835</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="影响命运六大因素"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_5/061222003367671_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">影响命运六大因素</h3>
                      <p
                        class="mui-ellipsis"
                      >影响命运的因素，最主要的是我们自己先天命运，以佛家的说法而言，是我们过去生中所做的善恶业力，它决定了我们一生的贫富贵*和人生的基本运行曲线，这个是根本。基本上，出生的年月日时可反映出这个根本曲线的80</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >2181</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">台湾命理分析</h3>
                      <p
                        class="mui-ellipsis"
                      >台湾命理我的（用神)是什么呀!!这是最常见的问题,通常由电脑排盘,会顺便把五行的比例算出来,有的很粗糙,有些（好像)比较精细,五行比例最少的,通常被取来当用神,这里就出现了许多问题,...（用神)_1</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >8601</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">天地合的重要性</h3>
                      <p
                        class="mui-ellipsis"
                      >人合地合即：丁亥、甲午、戊子、己亥、辛已。壬午、癸巳、丙戌（戌逢刑冲时）、壬戌（戌逢刑冲时）。天地合能使天干之意向发生改变，如日主因合而从支，或日主因合而被支制，这一点很容易被大家忽视。例1，康熙：甲</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >939</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">滴天髓3</h3>
                      <p
                        class="mui-ellipsis"
                      >二十一、官杀 官杀混杂来问我，有可有不可。 原注：杀即官也，同流共派者可混也；官非杀也，各立门墙者，不可混也。杀重矣，官从之，非混也；官轻矣，杀助之，非混也。败财与比肩双至者，杀可使官混也；比肩与劫财</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >705</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="【命理讲义】富贵贫贱徵验"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_4/061218000929661_s.gif"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">【命理讲义】富贵贫贱徵验</h3>
                      <p
                        class="mui-ellipsis"
                      >【命理讲义】富贵贫贱徵验《浅论富贵贫贱》 富命 富命★看富命与贫命，以财星为依凭，看财星是否为八字所喜用，而非财星之有无。★财星为八字喜用神且有力，无沖破者。 ★身旺得食伤生财者。 ★八字忌印，有财星</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >2044</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图]江湖“算命”术评说"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_5/070120113765951_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图]江湖“算命”术评说</h3>
                      <p
                        class="mui-ellipsis"
                      >很多人算命，并不是他的命不好，而是因为去算命后，被恐吓的心神不宁，找人开解。算命师和宗教家很像，如果不是具备悲天悯人，与人为善的胸怀，则命理诈财和宗教诈财的本质是一样的，都在利用别人的不幸赚钱。建立正</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1329</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">相同四柱的多样、相似与唯一性</h3>
                      <p
                        class="mui-ellipsis"
                      >我们知道，所有的四柱组合有52万多个，60年的四柱组合有26万多个。目前中国100岁以上的老人还比较少，按100年计算，在目前中国人的四柱组合大概有43万多个。中国人有14亿人，那么平均每造有3000</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >379</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">三命指迷赋全文</h3>
                      <p
                        class="mui-ellipsis"
                      >三命指迷赋一气肇判兮，两仪定位。五行周流兮，万物从类其丽乎天也，为星为辰其为乎人也，五常五事。在物之灵，惟人以贵。粤自支干，论其贵贱。以逆气定其否泰，盛则复衰。穷则更生，有纯有杂，有浊有清。相养所以相</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >555</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[多图]属鼠明星的本命年</h3>
                      <p
                        class="mui-ellipsis"
                      >提及明星的年纪，就像去摸一颗雷，往往有惊爆的效果。不过，在娱乐至死的年代，惊爆往往预示着眼球和人气，明星和看客们都不会反感。所以，当你看到李宇春、艾薇儿这样的人气王居然今年只有24岁的“小鼠”——说“</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1.05万</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="四柱论婚姻－－八字选择婚姻"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_8/07080707564038_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">四柱论婚姻－－八字选择婚姻</h3>
                      <p
                        class="mui-ellipsis"
                      >婚姻选择1、方向选择《周易与预测学》提示：从人生月的地支开始，数初一，顺行到生日的数字止，所指的地支为基点（后天八卦方位），相对的两个方向，其中之一是配偶方向的范围。实践验证，多数吉利婚姻是符合上述规</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >5968</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="婚配看八字 喜得好姻缘"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2006_12/061219000860761_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">婚配看八字 喜得好姻缘</h3>
                      <p
                        class="mui-ellipsis"
                      >人生旅途数十载，如果家庭幸福，犹如转眼之间，倘若事业婚姻不幸，就会度日如年。人生的体验与感受，唯有个人的空间环境下才能知道。婚姻的圆满，并不是简单的事情，是一种相辅相成两面体的结构。现今社会的婚姻，是</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1153</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">《女命泾渭篇》</h3>
                      <p
                        class="mui-ellipsis"
                      >女命泾渭篇女命八法,纯和者清贵,浊乱者娼淫.取官星为夫,为福星,见印食为名贵.为子贵,食神生旺,主生贵子.三奇得位,夫婿封侯.二德归坦,生子折桂.一官一贵,定载金冠.四煞四空,悲呻无助.不过贵神遇合,</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >928</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">&amp;lt;命理珍宝&amp;gt;与&amp;lt;命理瑰宝&amp;gt;原身四</h3>
                      <p
                        class="mui-ellipsis"
                      >公开《命理珍宝》与《命理瑰宝》的原身50期资料之四第十五期、伤官当财我主张活论六亲，也主张活论六神，一般而论，为我所支配者为财，然泛而论之，为我所享用者“禄”也为财；还有第三种财，即我所苦心追求者，乃</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >471</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">五行元理消息赋</h3>
                      <p
                        class="mui-ellipsis"
                      >五行元理消息赋详其往圣、鉴以前贤、论生死全凭鬼谷、推消息端的徐公。阳生阴死、阳死阴生。循环逆顺、变化见矣。夫阳木生亥死午、虽存亡易见。阳木跨马若逢猪、则吉凶可知。艮生丙而遇鸡死。兑生丁而逢虎伤。戊藏寅</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >455</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="八字的走运经典喜用"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_2/070201115074841_s.jpg"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">八字的走运经典喜用</h3>
                      <p
                        class="mui-ellipsis"
                      >八字的喜用之神是金时秋天较走运申月、酉月、猴年和鸡年运气较好下午三点至下午七点是吉时西方是吉方住朝西的房子较吉利睡房在房子的西方较好睡房的西方有窗字较顺利金属床有利健康办公桌朝西有助工作效率吉祥颜色是</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >1309</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">干支节气金钳诀</h3>
                      <p
                        class="mui-ellipsis"
                      >干支节气金钳诀 农历干支节气速算秘诀 在周易应用中，无论是铁板神数、八字、卦占，还是天文、地理，中医的子午流注、五运六气等，尤其是目前较为普遍的八字、纳甲卦占，如何能快速准确无误地将时间转换成干支，</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >692</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <img
                      class="mui-pull-left"
                      alt="[图]五行学说分类概论"
                      src="//mm.httpcn.com/Upload_Pic/News_s/2007_6/070129103966261_s.gif"
                    >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">[图]五行学说分类概论</h3>
                      <p
                        class="mui-ellipsis"
                      >五行学说认为：世界是物质的，宇宙是由木火土金水五种基本物质所构成的，是木火土金水五种基本物质相杂相和而化生的。一、五行的基本概念五行：即木火土金水五种物质及其运动变化。二、五行学说的主要内容（一）五行</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >2629</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">日干详论介绍</h3>
                      <p
                        class="mui-ellipsis"
                      >日干详论 整个四柱可以代表一个整体的人，这时，日干就是人的核心；根据四柱推断与命主密切相关的人事时，日干就代表命主本人，其余干支十神代表六亲人事。所以，日干是四柱的轴或核心。命主各种命理现象的推断主要</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >664</span>
                      </p>
                    </div>
                  </a>
                </li>
                <li data-zs_viewone style="display: none;">
                  <a
                    href="#"
                    data-zs_datatp="zs_datatp"
                  >
                    <div class="mui-media-body">
                      <h3 class="mui-ellipsis">《相心赋》全文</h3>
                      <p
                        class="mui-ellipsis"
                      >相心赋 人居六合，心居五行。欲晓一生，辩形察性。 官星悌恺，贵气轩昂，性优游而仁慈宽大，怀豁达而和畅声音。 丰姿美而秀丽，性格敏而聪明。 印绶主多智慧，丰身自在心慈；食神善能饮食，体厚偏于讴歌。 偏官</p>
                      <p class="mui-ellipsis">
                        <span
                          style="background-color: #e4dfd4; padding: 0 5px; border-radius: 15px;"
                        >711</span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              <div
                class="mui-clearfix"
                style="padding: 20px 15px; display: none;"
                data-zs_listviewnext
              >
                <div class="pages">
                  <a class="nextAll" href="/zt/bazi/?pageNumber=2" data-zs_datatp="zs_datatp">下一页</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--列表/-->
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
<style scoped>
</style>