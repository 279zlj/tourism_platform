<template>
  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" id="market_idnex">
    <el-row>
      <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23" id="ads">
        <div id="ads_analyse" class="grid"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="tips">
        <div id="tips_analyse" class="tgrid"></div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="chanel">
        <div id="chanel_analyse" class="cgrid"></div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
    export default {
        name: "market_idnex",
      data(){
          return{
            aa:[],
            tt:[],
            cc:[]
          }
      },
      mounted(){
          var _this=this
        this.$axios.get('../static/market.json').then(res=> {
          _this.aa=res.data.ads
          _this.tt=res.data.tips
          _this.cc=res.data.chanel
          _this.ads(_this.aa)
          _this.tip(_this.tt)
          _this.chanel(_this.cc)
        })

      },
      methods:{
        ads(data){
          var data1 = data;
          var ads = this.$echarts.init(document.getElementById('ads_analyse'));
          var options = {
            color:'#4EA9B1',
            toolbox: {
              // y: 'bottom',
              feature: {
                magicType: {
                  type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                  pixelRatio: 2
                }
              }
            },
            tooltip: {},
            xAxis: {
              data: ['腾讯','飞猪','搜狐','百度','途牛','马蜂窝','佰程','今日头条','去哪儿','阿里旅游','携程网','穷游网','Airbnb','驴妈妈'],
              silent: false,
              splitLine: {
                show: false
              },
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            yAxis: {
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            series: [{
              name: '投放量',
              type: 'bar',
              data: data1,
              barWidth:30,
              animationDelay: function (idx) {
                return idx * 10;
              }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
              return idx * 5;
            }
          }
          ads.setOption(options)
        },
        tip(data){
          var tips=this.$echarts.init(document.getElementById('tips_analyse'))
          var options={
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              data: ['黄龙', '松浦古城', '争艳池', '迎宾池', '黄龙寺', '川主寺', '二道海','丹云峡','牟尼沟扎嘎瀑布'],
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            yAxis: {
              type: 'value',
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            series: [{
              name:'游客量',
              data: data,
              type: 'line',
              symbol: 'triangle',
              symbolSize: 20,
              lineStyle: {
                normal: {
                  color: 'green',
                  width: 4,
                  type: 'dashed'
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  borderColor: 'yellow',
                  color: 'blue'
                }
              }
            }]
          }
          tips.setOption(options)
        },
        chanel(data){
          var c=this.$echarts.init(document.getElementById('chanel_analyse'))
          var options={
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            color:['#1F4F9A'],
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01],
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            yAxis: {
              type: 'category',
              data: ['飞猪','途牛','马蜂窝','佰程','去哪儿','阿里旅游','携程','驴妈妈','穷游网','驴友网','自驾游','百事通'],
              "axisLine": {
                lineStyle: {
                  color: 'white'
                }
              },
            },
            series: [

              {
                name: '销售量',
                type: 'bar',
                data: data
              }
            ]
          }
          c.setOption(options)
        }
      },

    }
</script>

<style scoped>
#ads{
  background: url("../../../static/images/border/ads.png") no-repeat;
  margin-top: 6em;
  background-size: contain;
  height: 25em;
  width: 92.5%;

}
  #tips{
    background: url("../../../static/images/border/tips.png") no-repeat;
    background-size: contain;
    height: 20em;

  }
#chanel{
  background: url("../../../static/images/border/chanel.png") no-repeat;
  background-size: contain;
  height: 20em;

}
.grid {
  width: 95%;
  height: 18em;
  margin: 2.5em 0;
}
.tgrid {
  width: 45em;
  height: 18em;
  margin: 2.5em 0;
}
  .cgrid{
    width: 40em;
    height: 18em;
    margin: .5em 0;
  }
</style>
