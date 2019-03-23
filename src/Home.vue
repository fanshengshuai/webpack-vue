<template>
  <div>
    <page-footer v-if="!inBigMapMode"></page-footer>
    <div
      class="banner"
      :class="{ bigMap: inBigMapMode}"
      v-bind:style="{height: mapHeight}"
      id="mapContainer"
    >
      <div ref="mapContainer" style="width: 100%;height: 100%;"></div>
      <div
        v-if="!inBigMapMode"
        style="width: 100%;height: 100%;position: absolute;top:0;left: 0;"
        @click="openBigMapMode()"
      ></div>

      <div
        v-if="!inBigMapMode"
        class="plate_show"
        ref="plateNumberSelecter"
        @click="showCars"
      >{{ default_car.plate_number }}</div>
      <div class="plate_list" v-show="selectCarMode">
        <a
          v-for="(item, index) in cars"
          :key="index"
          @click="changeCar(index)"
          class="plate_li"
          href="javascript:;"
        >{{ item.plate_number }}</a>
      </div>

      <Card v-if="inBigMapMode && default_car.stop == 1 && default_car.lng > 0" class="infoPanel">
        <div>
          <div
            style="background: #c5d1db; display: inline-block; padding: 1px 5px;"
          >{{ default_car.plate_number}}</div>
          <div style=" display: inline-block; padding: 1px 5px; color:green;">停止中</div>
        </div>
        <ul id="infoPanelBody">
          <li id="info-stopTime">停车时间：{{ default_car.date_time }}</li>
          <li id="info-jwd">经度：{{ default_car.lng}}，维度：{{ default_car.lat }}</li>
          <li
            id="info-addr"
            @click="getCarsAddress()"
            style="color:green;"
          >{{ address?address:"获取地址" }}</li>
        </ul>
      </Card>

      <div v-if="inBigMapMode" @click="closeBigMapMode()" class="btnCloseBigMap">返回</div>
    </div>

    <div
      id="cars"
      style="margin-top:-120px;z-index:100;"
      :style="{'display':inBigMapMode?'none':'block'}"
    >
      <div class="mui-slider">
        <div class="mui-slider-group">
          <!-- 默认车 -->
          <div
            v-for="(car,index) in cars"
            :key="car.id"
            :id="index"
            class="mui-slider-item"
            :class="{'mui-active':index==2}"
          >
            <div class="mui-card">
              <div v-if="car.id==0" class="mui-card-header">您还没有添加车辆信息</div>
              <div v-if="car.id>0" class="mui-card-header mui-card-media">
                <img :src=" '/res/logo/' + car.brand_id + '.png' ">
                <div class="mui-media-body">
                  {{ car.plate_number}}
                  <p v-if="car.status==1">未绑定OBD</p>
                  <p v-if="car.status==2 && car.stop==1">已停车</p>
                  <p v-if="car.status==2 && car.stop==0">行驶中</p>
                </div>
                <!-- <div class="mui-media-body right">
                      {{car.licheng}}
                      <p>行驶里程</p>
                    </div>
                    <div class="mui-media-body right">
                      {{car.youhao}}
                      <p>平均油耗</p>
                </div>-->
              </div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <ul class="summay mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                      <router-link :to="{path:'/traillist',query: {flag: 1,id:car.id}}">
                        <a href="#" class="hei">超速：{{ car.chaosu_count }} 次</a>
                      </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                      <router-link :to="{path:'/traillist',query: {flag: 2,id:car.id}}">
                        <a href="#" class="hei">急转弯：{{ car.jizhuanwan_count }} 次</a>
                      </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                      <router-link :to="{path:'/traillist',query: {flag: 3,id:car.id}}">
                        <a href="#" class="hei">快速变道：{{ car.kuaisubiandao_count }} 次</a>
                      </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                      <router-link :to="{path:'/traillist',query: {flag: 4,id:car.id}}">
                        <a href="#" class="hei">急加油：{{ car.jijiayou_count }} 次</a>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="mui-card-footer">
                  <a class="mui-card-link"></a>
                  <router-link :to="{path:'/car/driveInfo',query:{id:car.id}}">
                    <a class="mui-card-link mui-navigate-right">查看更多信息&nbsp;&nbsp;</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="mui-slider-item">
            <div class="mui-card" onClick="location='/car/condition/editor';">
              <div class="mui-card-header mui-card-media">
                <!-- <img :src=" '/res/logo/' + default_car.brand_id + '.png' "> -->
                <div class="mui-media-body">
                  <p></p>
                </div>
              </div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <ul class="summay mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6 tianjia">
                      <span
                        class="mui-icon iconfont icon-cheliang"
                        style="font-size: 62px;color:#43b9b5;"
                      >
                        <!-- <span class="mui-badge">9</span> -->
                      </span>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-6">
                      <a style="text-align: left;font-size: 22px;color: orange;">＋ 请添加车辆</a>
                    </li>
                  </ul>
                </div>
                <div class="mui-card-footer">
                  <a class="mui-card-link"></a>
                  <!-- <router-link :to="'/car/driveInfo'">
                        <a class="mui-card-link mui-navigate-right"></a>
                  </router-link>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mui-card" style="border:none; background:none;">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a :href="'/car/order/index?car_id='+default_car.id">
              <span class="mui-icon iconfont icon-yuyue"></span>
              <!-- <img src="/res/img/car/icon1.png" alt class="icon"> -->
              <div class="mui-media-body">服务预约</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a :href="'/car/rescue/index?car_id='+default_car.id">
              <span class="mui-icon iconfont icon-jiuyuan"></span>
              <!-- <img src="/res/img/car/icon2.png" alt class="icon"> -->
              <div class="mui-media-body">车辆救援</div>
            </a>
          </li>

          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a :href="'/car/early_warning/index?car_id='+default_car.id">
              <span class="mui-icon iconfont icon-yujing">
                <span v-if="default_car.countyujing>0" class="mui-badge">{{default_car.countyujing}}</span>
              </span>
              <!-- <img src="/res/img/car/icon3.png" alt class="icon"> -->
              <div class="mui-media-body">重要预警</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link
              :to="{path:'/car_wz',query:{id:default_car.id,plate_number:default_car.plate_number}}"
            >
              <span class="mui-icon iconfont icon-weizhang"></span>
              <!-- <img src="/res/img/car/icon4.png" alt class="icon"> -->
              <div class="mui-media-body">违章查询</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link :to="{path:'/traillist',query:{id:default_car.id}}">
              <a href="#">
                <span class="mui-icon iconfont icon-guiji"></span>
                <!-- <img src="/res/img/car/icon4.png" alt class="icon"> -->
                <div class="mui-media-body">行程轨迹</div>
              </a>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <!-- <router- href="/car/condition/info1"> -->
            <a :href="'/car/condition/info1?='+default_car.id">
              <span class="mui-icon iconfont icon-tijian"></span>
              <!-- <img src="/res/img/car/icon5.png" alt class="icon"> -->
              <div class="mui-media-body">车辆体检</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a :href="'/car/annual_inspection/index?car_id='+default_car.id">
              <span class="mui-icon iconfont icon-nianjian"></span>
              <!-- <img src="/res/img/car/icon6.png" alt class="icon"> -->
              <div class="mui-media-body">年检查询</div>
            </a>
          </li>

          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a :href="'/car/keep_fit/index?car_id='+default_car.id">
              <span class="mui-icon iconfont icon-baoyang"></span>
              <!-- <img src="/res/img/car/icon7.png" alt class="icon"> -->
              <div class="mui-media-body">保养查询</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a :href="'/car/insurance/index?car_id='+default_car.id">
              <span class="mui-icon iconfont icon-baoxian"></span>
              <!-- <img src="/res/img/car/icon8.png" alt class="icon"> -->
              <div class="mui-media-body">保险查询</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link :to="{path:'/car_wl',query:{id:default_car.id}}">
              <!-- <img src="/res/img/car/icon9.png" alt class="icon"> -->
              <span class="mui-icon iconfont icon-dianziweilan"></span>
              <div class="mui-media-body">电子围栏</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="/car/news/index">
              <!-- <img src="/res/img/car/icon9.png" alt class="icon"> -->
              <span class="mui-icon iconfont icon-news"></span>
              <div class="mui-media-body">新闻动态</div>
            </a>
          </li>
        </ul>
      </div>
      <div style="height:80px;"></div>
    </div>
  </div>
</template>

<script>
import { clearTimeout, setTimeout, clearInterval, setInterval } from "timers";
import Footer from "./components/footer/footer.vue";
import { mapState, mapActions } from "vuex";
import { CarUtil } from "./util";

export default {
  components: {
    "page-footer": Footer
  },
  computed: mapState({
    cars: state => state.car.all,
    default_car: state => state.car.default_car
  }),
  data() {
    return {
      mapHeight: (window.innerWidth * 3) / 4 + "px",
      updateCount: 0,
      inBigMapMode: false,
      mapPoints: [],
      timer: 0,
      map: null,
      mapMarker: null,
      default_map_point: null,
      default_car_title: "鲁XX-000",
      guiji: {},
      carId: 0,
      mapNavCtrl: null,
      mapScaleCtrl: null,
      travelId: 0,
      dian: ["1"],
      updateProcessId: 0,
      updateSock: 0,
      selectCarMode: false,
      address: "",
      countyujing: 0
    };
  },
  methods: {
    showCars() {
      this.selectCarMode = this.selectCarMode ? false : true;
    },
    changeCar(id) {
      this.selectCarMode = false;
      // console.log(id);
      if (id == -1) {
        var default_car = this.cars.filter(car => car.is_default == 1);

        if (default_car.length == 1) {
          this.$store.commit("car/setDefaultCar", default_car[0]);
        } else this.$store.commit("car/setDefaultCar", this.cars[0]);
      } else {
        this.$store.commit("car/setDefaultCar", this.cars[id]);
      }

      var left = window.innerWidth * this.default_car.index;
      document.querySelector(".mui-slider-group").style.transform =
        "translate3d(-" + left + "px, 0px, 0px) translateZ(0px)";

      window.document.title = this.default_car.plate_number;

      this.$http
        .post("/car/car/changeDefault", { carId: this.default_car.id })
        .then(function(data) {});

      if (this.default_car.lng == 0) {
        this.mapCenterAndZoom({ x: 116.404, y: 39.915 }, 11);
        return;
      }
      this.map.clearOverlays();
      this.reMarkCarInMap(this.default_car.stop);
    },
    changeCarPos(lng, lat) {
      var point = new BMap.Point(lng, lat);
      this.mapMarker.setPosition(point);
      this.mapCenterAndZoom(point, 16);
    },
    reMarkCarInMap(isStoped) {
      var point = new BMap.Point(this.default_car.lng, this.default_car.lat);
      this.mapCenterAndZoom(point, 16);

      this.mapMarker = new BMap.Marker(point, {
        icon: new BMap.Icon(
          isStoped ? "/res/img/car/no_is.png" : "/res/img/car/is.png",
          new BMap.Size(48, 48),
          {
            anchor: new BMap.Size(24, 48)
          }
        )
      });

      this.map.addOverlay(this.mapMarker);
    },
    updateLocation() {
      if (this.updateSock > 0) return;

      // 当前操作的主键
      var carIndex = this.default_car.id;

      this.updateSock = 1;
      clearTimeout(window.updateProcessId);

      var url = "/car/car/getLocation";
      this.$http
        .post(url, {
          carId: carIndex,
          obd_no: this.default_car.obd_no
        })
        .then(function(resp) {
          this.updateSock = 0;

          window.updateProcessId = setTimeout(() => {
            this.updateLocation();
          }, 10000);

          var respData = resp.body.result;
          if (respData.lng) {
            if (respData.lng == 0 || respData.lng == null) return;

            this.default_car.lng = respData.lng;
            this.default_car.lat = respData.lat;
          }

          // console.log(this.default_car.stop);
          // console.log(respData.stop);

          // if (this.inBigMapMode)

          // 判断车当前情况
          if (this.default_car.stop != respData.stop) {
            // console.log("reMarkCarInMap  stop  change");
            this.map.clearOverlays();
            this.reMarkCarInMap(respData.stop);
          } else if (!respData.stop) {
            // console.log("changeCarPos  stop not change");
            this.changeCarPos(respData.lng, respData.lat);
          }

          this.default_car.stop = respData.stop;

          var point = new BMap.Point(
            this.default_car.lng,
            this.default_car.lat
          );

          if (!respData.stop) {
            // if (this.updateCount == 0)
            //   this.mapCenterAndZoom({ x: point.lng, y: point.lat }, 16);

            this.updateCount++;

            if (typeof this.mapPoints[carIndex] == "undefined")
              this.mapPoints[carIndex] = [];

            var points = this.mapPoints[carIndex];

            if (points.length > 0) {
              var lastPoint = points[points.length - 1];

              if (
                lastPoint.lat != respData.lat ||
                lastPoint.lon != respData.lon
              ) {
                this.mapPoints[carIndex].push(point);
              }
            } else {
              this.mapPoints[carIndex].push(point);
            }

            if (this.inBigMapMode) {
              this.printPolyline();
            }
          }
        });
    },
    openBigMapMode() {
      this.inBigMapMode = this.inBigMapMode ? false : true;

      this.mapHeight = window.innerHeight + "px";
      this.map.addControl(this.mapNavCtrl);
      this.map.addControl(this.mapScaleCtrl);

      setTimeout(() => {
        this.mapCenterAndZoom(
          { x: this.default_car.lng, y: this.default_car.lat },
          16
        );
        this.drawGuiji();
      }, 500);
    },
    closeBigMapMode() {
      this.inBigMapMode = false;
      this.mapHeight = (window.innerWidth * 3) / 4 + "px";

      this.map.removeControl(this.mapNavCtrl);
      this.map.removeControl(this.mapScaleCtrl);

      this.map.clearOverlays();

      setTimeout(() => {
        this.mapCenterAndZoom(
          { x: this.default_car.lng, y: this.default_car.lat },
          16
        );
        this.reMarkCarInMap(this.default_car.stop);
      }, 500);
    },
    printPolyline() {
      console.log("drow line");
      // 只在大图下画
      if (!this.inBigMapMode) return;

      // 清理画布
      this.map.clearOverlays();

      var points = this.mapPoints[this.default_car.id];
      // console.log(points);

      var polyline = new BMap.Polyline(points, {
        strokeColor: "#5298ff",
        strokeWeight: 6,
        strokeOpacity: 1
      });
      this.map.addOverlay(polyline);

      var distance = this.map.getDistance(points[0], points[points.length - 1]);

      // 添加起点
      this.map.addOverlay(
        new BMap.Marker(new BMap.Point(points[0]["lng"], points[0]["lat"]), {
          icon: new BMap.Icon(
            "/res/img/car/qidian.png",
            new BMap.Size(48, 48),
            {
              anchor: new BMap.Size(24, 48)
            }
          )
        })
      );

      if (distance) {
        distance = distance.toFixed(2);
      } else {
        return;
      }

      var zoom = 17;
      if (distance <= 100) {
        zoom = 17;
      } else if (100 < distance && distance <= 500) {
        zoom = 16;
      } else if (500 < distance && distance <= 1000) {
        zoom = 15;
      } else if (1000 < distance && distance <= 4000) {
        zoom = 14;
      } else if (4000 < distance && distance <= 6000) {
        zoom = 14;
      } else if (6000 < distance && distance <= 20000) {
        zoom = 14;
      } else if (20000 < distance && distance <= 30000) {
        zoom = 14;
      } else if (30000 < distance && distance <= 40000) {
        zoom = 10;
      }
      this.mapCenterAndZoom(points[points.length - 1], zoom);

      // 终点位置
      this.map.addOverlay(
        new BMap.Marker(
          new BMap.Point(
            points[points.length - 1]["lng"],
            points[points.length - 1]["lat"]
          ),
          {
            icon: new BMap.Icon(
              "/res/img/car/" + (this.default_car.stop ? "no_" : "") + "is.png",
              new BMap.Size(48, 48),
              {
                anchor: new BMap.Size(24, 48)
              }
            )
          }
        )
      );
    },
    drawGuiji() {
      if (this.cars.length == 0) return;

      // 必须重新置空
      this.mapPoints[this.default_car.id] = [];

      var that = this;

      var url = "/car/car/getTravelData";
      this.travelId = 0;
      this.$http
        .post(url, {
          carId: this.default_car.id,
          travel_id: this.travelId,
          obd_no: this.default_car.obd_no
        })
        .then(function(resp) {
          if (typeof resp.body.points == "undefined") return;
          var points = resp.body.points;

          if (points.length == 0) return;

          for (var i = 0; i < points.length; i++) {
            this.mapPoints[this.default_car.id].push(
              new BMap.Point(points[i][0], points[i][1])
            );
          }

          this.printPolyline();
        });
    },
    mapCenterAndZoom(point, zoom) {
      if (typeof point.x == "undefined") {
        point.x = point.lng;
        point.y = point.lat;
      }
      // console.log("center and zoom" + zoom);
      // console.log(point);
      if (point.x > 0) {
        this.map.centerAndZoom(new BMap.Point(point.x, point.y), zoom);
      } else {
        this.map.centerAndZoom(this.default_car.point, zoom);
      }
    },
    createMap() {
      this.map = new BMap.Map(this.$refs.mapContainer); // 创建Map实例

      this.default_map_point = new BMap.Point(115.404, 39.914);

      this.mapCenterAndZoom({ x: 116.404, y: 39.915 }, 11); // 初始化地图,设置中心点坐标和地图级别

      this.mapNavCtrl = new BMap.NavigationControl();
      this.ScaleControl = new BMap.ScaleControl();
    },
    getCarsAddress() {
      var myGeo = new BMap.Geocoder();
      // this.cars.forEach((elem, index) => {
      var that = this;
      myGeo.getLocation(
        new BMap.Point(this.default_car.lng, this.default_car.lat),
        function(rs) {
          that.address = rs.address;
          // if (rs.surroundingPois.length > 0) {
          //   that.default_car.address = that.cars[index].address =
          //     rs.surroundingPois[0].address + rs.surroundingPois[0].title;
          // }
        }
      );
      // });
    }
  },
  mounted() {
    this.createMap();
    var that = this;

    if (this.cars.length > 0) {
      setTimeout(() => {
        this.changeCar(-1);
        // this.getCarsAddress();
      }, 500);
      return;
    }

    CarUtil.getCarList(() => {
      setTimeout(() => {
        this.changeCar(-1);
        // this.getCarsAddress();
      }, 500);
    });

    window.updateProcessId = setTimeout(() => {
      this.updateLocation();
    }, 10000);
  }
};
</script>
<style scoped>
.hei {
  color: #000;
}
.right {
  float: right;
  margin-left: 10px;
}
.mui-slider-indicator {
  bottom: 6px;
}
.mui-slider .mui-slider-group .mui-slider-item img {
  width: auto;
}
.mui-grid-2 {
  padding: 0 10px 70px 0;
}
.mui-content {
  background: inherit;
  overflow: auto;
}
.mui-table-view:after {
  height: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  /* font-size: 14px; */
  line-height: inherit;
  height: inherit;
}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon {
  color: #43b9b5;
}
.mui-navigate-right:after {
  right: -9px;
}
.mui-card-content a {
  font-size: 15px;
}

.p30 {
  padding: 8px;
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
}
.services a {
  display: inline-block;
  text-align: center;
}
.services a img {
  width: 60%;
}

.banner {
  height: 300px;
  width: 100%;
  position: relative;
}
.plate_show {
  z-index: 100;
  width: 130px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #535353;
  border-radius: 5px;
  color: #fff;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -65px;
  font-size: 18px;
}
.plate_list {
  z-index: 100;
  width: 130px;
  position: absolute;
  top: 64px;
  left: 50%;
  margin-left: -65px;
}
.plate_list.show {
  display: block;
}
.plate_li {
  width: 130px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 16px;
  background: #ccc;
  display: block;
  color: #fff;
  border-bottom: 1px solid #fff;
}
.plate_li:last-child {
  border-bottom: none;
}

.bigMap {
  height: 100%;
}

.btnCloseBigMap {
  box-shadow: 1px 0px 9px #888888;
  background: #fff;
  position: absolute;
  top: 40%;
  right: 30px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  line-height: 70px;
  font-size: 20px;
  text-align: center;
}
.summay {
  background: #fff;
}
/* .summay ul li {
  width: 48%;
  float: left;
  padding-left: 5px;
} */

.infoPanel {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  height: 110px;
  background: #fff;
}
.infoPanel > ul {
  list-style: none;
  margin: 5px 10px;
}
.infoPanel ul li {
  list-style: none;
}
</style>