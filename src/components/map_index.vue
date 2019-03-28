<template>
    <el-row id="map_index">
      <!--<baidu-map class="bm-view" center="北京">-->
      <!--</baidu-map>-->
      <div id="allmap"></div>
      <el-col class="jz">
        <router-link :to="{name:'index'}"><div id="bb" >大数据管理平台</div></router-link>
      </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "map_index",
      data(){
          return{
            who:''
          }
      },
      mounted(){
        //初始化模板选择的下拉框
        // var sel = document.getElementById('stylelist');
        // for(var key in mapstyles){
        //   var style = mapstyles[key];
        //   var item = new  Option(style.title,key);
        //   sel.options.add(item);
        // }
        // sel.value = 'midnight';

        var map = new BMap.Map("allmap");
        var point = new BMap.Point(103.6047, 32.66004);

        // map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
        map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
        map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
        // map.enableScrollWheelZoom();                            //启用滚轮放大缩小
        // map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
        map.centerAndZoom(point, 11);

        var points =[
          {"lng":103.562832,"lat":32.598512,"count":350},
          {"lng":103.50779,"lat":32.566663,"count":351},
          {"lng":103.687749,"lat":32.901513,"count":285},
          {"lng":103.785427,"lat":32.861727,"count":340},
          {"lng":103.513907,"lat":32.685946,"count":300},
          {"lng":103.632627,"lat":32.781319,"count":306},
          {"lng":103.607342,"lat":32.652969,"count":318},
          {"lng":103.839278,"lat":32.748829,"count":380},
          {"lng":103.546707,"lat":32.94678,"count":291},
          {"lng":104.070576,"lat":32.695538,"count":277},
          {"lng":103.659087,"lat":32.81409,"count":242},
          {"lng":103.689985,"lat":32.802669,"count":183},
          {"lng":103.752075,"lat":32.763815,"count":287},
          {"lng":103.693434,"lat":32.661742,"count":223},
          {"lng":103.486464,"lat":32.686056,"count":260},
          {"lng":103.794619,"lat":32.549813,"count":218},
          {"lng":103.397928,"lat":32.747297,"count":195},
          {"lng":103.679636,"lat":32.762844,"count":225},
          {"lng":103.687685,"lat":32.700641,"count":181},
          {"lng":103.610646,"lat":32.482588,"count":200},
          {"lng":103.441621,"lat":32.62088,"count":151},
          {"lng":103.740577,"lat":32.518642,"count":157},
          {"lng":103.611796,"lat":32.662715,"count":211},
          {"lng":103.895804,"lat":32.639368,"count":235},
          {"lng":103.765873,"lat":32.728832,"count":242},
          {"lng":103.649166,"lat":32.659797,"count":174},
          {"lng":103.5842,"lat":32.703072,"count":195},
          {"lng":103.65434,"lat":32.694807,"count":243},
          {"lng":103.608347,"lat":32.653231,"count":200},
          {"lng":103.56724,"lat":32.636935,"count":187},
          {"lng":103.594261,"lat":32.585354,"count":232},
          {"lng":103.686823,"lat":32.661986,"count":244},
          {"lng":103.697458,"lat":32.624773,"count":221},
          {"lng":103.658939,"lat":32.607499,"count":180},
          {"lng":103.644279,"lat":32.580486,"count":232},
          {"lng":103.694296,"lat":32.602389,"count":226},
          {"lng":103.540219,"lat":32.531307,"count":177},
          {"lng":103.669863,"lat":32.536664,"count":247},
          {"lng":103.626169,"lat":32.761508,"count":225},
          {"lng":103.616108,"lat":32.75337,"count":200},
          {"lng":103.656927,"lat":32.811652,"count":239},
          {"lng":103.662101,"lat":32.835318,"count":201},
          {"lng":103.691566,"lat":32.8571578,"count":190},
          {"lng":103.597854,"lat":32.617961,"count":247},
          {"lng":103.610215,"lat":32.668551,"count":152},
          {"lng":103.565084,"lat":32.635962,"count":200},
          {"lng":103.565084,"lat":32.635962,"count":246},
          {"lng":103.621619,"lat":32.715467,"count":199},
          {"lng":103.623739,"lat":32.7319,"count":218},
          {"lng":103.620649,"lat":32.708845,"count":201},
          {"lng":103.611738,"lat":32.710364,"count":169},
          {"lng":103.629273,"lat":32.702221,"count":150},
          {"lng":103.631177,"lat":32.699274,"count":205},
          {"lng":103.612241,"lat":32.692772,"count":223},
          {"lng":103.610408,"lat":32.685479,"count":174},
          {"lng":103.633549,"lat":32.695902,"count":153},
          {"lng":103.586549,"lat":32.689217,"count":186},
          {"lng":103.627512,"lat":32.685813,"count":221},
          {"lng":103.6278,"lat":32.730898,"count":189},
          {"lng":103.578357,"lat":32.665147,"count":199},
          {"lng":103.697077,"lat":32.696995,"count":160},
          {"lng":103.675374,"lat":32.595575,"count":204},
          {"lng":103.642029,"lat":32.54397,"count":196},
          {"lng":103.839225,"lat":32.742196,"count":165},
          {"lng":103.78317,"lat":32.756286,"count":203},
          {"lng":103.7527,"lat":32.755314,"count":177},
          {"lng":103.681985,"lat":32.835925,"count":200},
          {"lng":103.666463,"lat":32.818206,"count":169},
          {"lng":103.585687,"lat":32.806311,"count":154},
          {"lng":103.602216,"lat":32.76843,"count":166},
          {"lng":103.639442,"lat":32.758836,"count":157},
          {"lng":103.600635,"lat":32.730169,"count":209},
          {"lng":103.56844,"lat":32.747419,"count":243},
          {"lng":103.643035,"lat":32.725188,"count":227},
          {"lng":103.549324,"lat":32.788951,"count":188},
          {"lng":103.586406,"lat":32.750182,"count":193},
          {"lng":103.628374,"lat":32.782607,"count":234},
          {"lng":103.531645,"lat":32.681164,"count":184},
          {"lng":103.660139,"lat":32.689794,"count":232},
          {"lng":103.633692,"lat":32.75249,"count":211},
          {"lng":103.611414,"lat":32.748968,"count":238},
          {"lng":103.585831,"lat":32.716773,"count":191},
          {"lng":103.632627,"lat":32.891319,"count":254},
          {"lng":103.628087,"lat":32.7718,"count":301},
          {"lng":103.62665,"lat":32.76755,"count":205},
          {"lng":103.626075,"lat":32.763664,"count":193},
          {"lng":103.623775,"lat":32.757106,"count":194},
          {"lng":103.634986,"lat":32.765728,"count":212},
          {"lng":103.588849,"lat":32.743502,"count":157},
          {"lng":103.65712,"lat":32.75747,"count":170},
          {"lng":103.616301,"lat":32.820361,"count":208}];
        if(!isSupportCanvas()){
          alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
        }
        function isSupportCanvas(){
          var elem = document.createElement('canvas');
          return !!(elem.getContext && elem.getContext('2d'));
        }
        var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
        map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({data:points,max:100});

        function openHeatmap(){
          heatmapOverlay.show();
        }
        openHeatmap()
        function getBoundary(){
          var bdary = new BMap.Boundary();
          var name = '松潘县';
          bdary.get(name, function(rs){       //获取行政区域
            // map.clearOverlays();        //清除地图覆盖物
            var count = rs.boundaries.length; //行政区域的点有多少个
            for(var i = 0; i < count; i++){
              var ply = new BMap.Polygon(rs.boundaries[i],
                {
                  strokeWeight: 3, //设置多边形边线线粗
                  strokeOpacity: 1, //设置多边形边线透明度0-1
                  StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed
                  strokeColor: "#ff0000", //设置多边形边线颜色
                  fillColor: "#00ffff", //设置多边形填充颜色
                  fillOpacity:0.01 //设置多边形填充颜色透明度0-1  注：标红的地放你们可以去掉看一下效果，自己体验一下

                }); //建立多边形覆盖物
              map.addOverlay(ply);  //添加覆盖物
              // map.setViewport(ply.getPath());    //调整视野
            }
          });
        }
        getBoundary()
        // map.centerAndZoom(new BMap.Point(103.6047,32.65604), 15);
        var data_info = [
          [103.562832,32.598512,"牟尼沟风景区","牟尼沟风景区位于松潘县西南牟尼乡境内。占地面积160平方公里，最低海拔2800米，最高海拔4070米，年平均气温约4度","../../static/images/fengjing/one.jpg"],
          [103.50779,32.566663,"牟尼沟-扎嘎瀑布","扎嘎瀑布位于扎嘎沟尾的扎嘎山下，扎嘎瀑布起点海拔3270米，落点海拔3176米，瀑高93.7米，瀑面宽35~40米，夏季流量2~5立方米/秒 ","../../static/images/fengjing/two.jpg"],
          [103.687749,32.901513,"尕米寺","尕米寺，是安多松潘草地早期雍仲苯教著名寺院，也是四川省阿坝藏族羌族自治州最早的苯教寺院之一。","../../static/images/fengjing/three.jpg"],
          [103.785427,32.861727,"红星岩","红星岩位于九寨沟黄龙的漳腊盆地东侧、岷山山脉西坡，该景点海拔较高，以第四纪冰川作用形成的大量奇峰异石地貌景观和冰川堰塞湖为其显著特色，人迹罕至，颇具神秘色彩","../../static/images/fengjing/four.jpg"],
          [103.513907,32.685946,"二道海景区","二道海位于松潘县城南30公里处，是牟尼沟现有两大景观之一，以高山湖泊（俗称海子）著称，由一连串的小海子组成，湖泊中生长着奇花异草。最为奇特的古松树下含硫温泉，是仙女沐浴之处，沐浴后能强身健体。","../../static/images/fengjing/five.jpeg"],
          [103.632627,32.781319,"红军长征纪念碑碑园","红军长征纪念碑碑园位于松潘县川主寺镇元宝山，是去世界自然遗产九寨沟、黄龙风景名胜区的必经之地。","../../static/images/fengjing/six.jpg"],
          [103.607342,32.652969,"松潘古城","松潘古城分内、外两城，内城平面跨崇山，依山顺势略呈三角形，东部崇山之下河谷部份为长方形，外城毗邻内城南面的河谷下坝，有城门与内城相通，平面为长方形。","../../static/images/fengjing/seven.jpg"],
          [103.839278,32.748829,"黄龙风景名胜区","黄龙风景名胜区位于四川省阿坝藏族羌族自治州松潘县。面积700平方公里。是中国唯一保护完好的高原湿地，与九寨沟相距100千米，海拔1700-5588米。","../../static/images/fengjing/eight.jpg"],
          [103.546707,32.94678,"奇峡沟","奇峡沟位于松潘县西北部，岩羊山南坡，羊洞河支沟内，距松潘县城50公里，距黄龙主景区78公里，距九寨沟116公里，距九黄机场47公里，景区面积约为80平方公里。","../../static/images/fengjing/nine.jpg"],
          [104.070576,32.695538,"丹云峡景区","丹云峡景区为古松州东线文化走廊，茶马商道的一段，全长为35公里，距黄龙景区18公里，是典型的峡谷景观。","../../static/images/fengjing/ten.jpg"],
          [103.659087,32.81409,"圣地花海","高原上的普罗旺斯高原上3000亩薰衣草是松潘县目前正全力打造的“九黄圣地花海”的一部分。","../../static/images/fengjing/eleven.jpg"],
        ];
        var opts = {
          width : 300,     // 信息窗口宽度
          height: 280,     // 信息窗口高度
          title : "景点信息" , // 信息窗口标题
          enableMessage:true//设置允许信息窗发送短息
        };
        for(var i=0;i<data_info.length;i++){
          if (i==3||i==8) {
            var myIcon = new BMap.Icon("../../static/images/fengjing/jingdian.png", new BMap.Size(50, 50), {
              // 指定定位位置
              offset: new BMap.Size(10, 25),
              // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置
              imageOffset: new BMap.Size(0, 0) // 设置图片偏移
            });
          }
          if (i==0||i==4||i==5||i==6||i==7||i==10) {
            var myIcon = new BMap.Icon("../../static/images/fengjing/mout.png", new BMap.Size(50, 50), {
              // 指定定位位置
              offset: new BMap.Size(10, 25),
              // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置
              imageOffset: new BMap.Size(0, 0) // 设置图片偏移
            });
          }
          if (i==1||i==2||i==9) {
            var myIcon = new BMap.Icon("../../static/images/fengjing/sea.png", new BMap.Size(50, 50), {
              // 指定定位位置
              offset: new BMap.Size(10, 25),
              // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置
              imageOffset: new BMap.Size(0, 0) // 设置图片偏移
            });
          }
        var label = new BMap.Label(data_info[i][2], opts);  // 创建文本标注对象
          // console.log(myIcon)
        label.setStyle({
          color: "white",
          backgroundColor :"0.5",
          fontWeight :"bold",
          border:"1",
          fontSize: "17px",
          height: "2em",
          lineHeight: "2em",
          fontFamily: "微软雅黑",
        })
          var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon: myIcon});  // 创建标注
          marker.setLabel(label);
          var content =
            "<hr><h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+data_info[i][2]+"</h4><br>" +
            "<img style='float:right;margin:4px' id='imgDemo' src='"+data_info[i][4]+"' width='139' height='104' title='"+data_info[i][2]+"'/>" +
            "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+data_info[i][3]+"</p>" +
            "</div>";
          map.addOverlay(marker);               // 将标注添加到地图中
          addClickHandler(content,marker);
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        }
        function addClickHandler(content,marker){
          marker.addEventListener("mouseover",function(e){
            openInfo(content,e)}
          );
          marker.addEventListener("mouseout",function (e) {
            map.closeInfoWindow()
          })
        }
        function openInfo(content,e){
          var p = e.target;
          var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
          var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
          map.openInfoWindow(infoWindow,point); //开启信息窗口

        }


        function setGradient(){
          /*格式如下所示:
           {
                 0:'rgb(102, 255, 0)',
                 .5:'rgb(255, 170, 0)',
                 1:'rgb(255, 0, 0)'
           }*/
          var gradient = {};
          var colors = document.querySelectorAll("input[type='color']");
          colors = [].slice.call(colors,0);
          colors.forEach(function(ele){
            gradient[ele.getAttribute("data-key")] = ele.value;
          });
          heatmapOverlay.setOptions({"gradient":gradient});
        }
            //图片加载
        // var local = new BMap.LocalSearch(map, {
        //   renderOptions:{map: map}
        // });
        // local.search("景点");

        // changeMapStyle('midnight')
        // // sel.value = 'midnight';
        // function changeMapStyle(style){
        //   map.setMapStyle({style:style});
        //   $('#desc').html(mapstyles[style].desc);
        // }
        var styleJson=[
          {
            "featureType":"land",
            'elementType':"geometry",
            'stylers': {
              'color': '#081734'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
              'color': '#04406F'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'geometry',
            'stylers': {
              'color': '#015B99'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry',
            'stylers': {
              'color':'#003051'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': {
              'color': '#044161'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#003051'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#313131'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#FFFFFF'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -65
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'lightness': -40
            }
          },
          {
            'featureType': 'boundary',
            'elementType': 'geometry',
            'stylers': {
              'color': '#8b8787',
              'weight': '1',
              'lightness': -29
            }
          }
          ]
        map.setMapStyle({styleJson:styleJson});

      },
      methods:{
        changenav(name){
          this.who=name
          sessionStorage.getItem('isnav',this.who)
        }
      }
    }
</script>

<style scoped>
  #map_index{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  #base{
    height: 100em;
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  .bm-view {
    width: 100%;
    height: 1000px;
  }
  .jz{
    position: relative;display: block;text-align: center; left: 50%;
    top: 90%;
    margin: -50px 0 0 -50px;
  }
  #bb{
    background-color: #14547E;color: #05DBE4;height: 3em;width: 10em;border-radius: .5em;cursor: pointer;display: block;text-align: center;line-height: 3em;filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8;
  }
  #bb:hover{
    filter:alpha(Opacity=80);-moz-opacity:1;opacity: 1;
  }
  #allmap{height:100%;width:100%;position: absolute}
</style>
