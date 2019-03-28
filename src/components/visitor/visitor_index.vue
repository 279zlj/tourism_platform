<template>
  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" id="visitor_index">
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="age">
        <div id="age_analyse" class="grid"></div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="area">
        <div id="area_analyse" class="grid"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="number">
        <div id="num_analyse" class="ngrid"></div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="face">
        <el-row>
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" ><div id="face_analyse" class="fgrid"></div></el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" ><div id="money" class="fgrid"></div></el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" ><div id="card" class="fgrid"></div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
    export default {
        name: "visitor_index",
      data(){
          return{
            mm:[],
            aa:[],
            mun:[],
            mon:[],
            ff:[],
            cc:[]
          }
      },
      mounted(){
        var _this=this
        this.$axios.get('../static/visitor_db.json').then(res=> {
          _this.mm=res.data.men_women
          _this.mun=res.data.number
          _this.aa=res.data.area
          _this.mon=res.data.money
          _this.ff=res.data.face
          _this.cc=res.data.card
          _this.age(_this.mm)
          _this.area(_this.aa)
          _this.number(_this.mun)
          _this.face(_this.ff)
          _this.money(_this.mon)
          _this.card(_this.cc)
        })


      },
      methods:{
          age(data){

            var age = this.$echarts.init(document.getElementById('age_analyse'));
            var options = {
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              color:['#E6A23C', '#409EFF'],
              legend: {
                data:['女性','男性'],
                textStyle: {
                  color: '#FFF'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  "axisLine": {
                    lineStyle: {
                      color: 'white'
                    }
                  },
                  type : 'category',
                  data : ['18岁以下','18-25','26-30','31-40','41-50','50以上']
                },


              ],
              yAxis : [
                {
                  type : 'value',
                  "axisLine": {
                    lineStyle: {
                      color: 'white'
                    }
                  },
                },
              ],
              series : [
                {
                  name:'女性',
                  type:'bar',
                  stack: '性别分析',
                  data:data[0].women,
                  barWidth : 30,
                },
                {
                  name:'男性',
                  type:'bar',
                  stack: '性别分析',
                  data:data[1].men,
                  barWidth : 30,
                }
              ]
            }
            age.setOption(options)
          },
          area(data){
            var area=this.$echarts.init(document.getElementById('area_analyse'))
            var options={
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
              },
              color:['#409EFF','#67C23A','#E6A23C','#F56C6C'],
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '70%',

                  center: ['50%', '50%'],
                  data:data,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{
                      label:{
                        textStyle:{
                          fontSize:18
                        }
                      }
                    }
                  }
                }
              ]
            }
            area.setOption(options)
          },
        face(data){
            var face=this.$echarts.init(document.getElementById('face_analyse'))
            var options={
              tooltip : {
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              color:['#409EFF','#67C23A','#E6A23C','#F56C6C'],
              legend: {
                x : 'center',
                y : 'bottom',
                data:['本科专科','硕士','高中及以下'],
                textStyle:{
                  color:'#FFF'
                }
              },
              toolbox: {
                show : true,
                feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                  },

                  restore : {show: true},
                  saveAsImage : {show: true}
                }
              },
              calculable : true,
              series : [

                {
                  name:'学历占比',
                  type:'pie',
                  radius : [20, 60],
                  center : ['50%', '50%'],
                  roseType : 'area',
                  label: {
                    normal: {
                      position: 'inner',
                      show : false
                    }
                  },
                  data:data
                }
              ]
            }
            face.setOption(options)
        },
        money(data){
          var m=this.$echarts.init(document.getElementById('money'))
          var options={
            tooltip : {
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:['#409EFF','#67C23A','#E6A23C','#F56C6C'],
            legend: {
              x : 'center',
              y : 'bottom',
              data:['<=3k','3k-8k','8k-1.5k','>=1.5k'],
              textStyle:{
                color:'#FFF'
              }
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            series : [

              {
                name:'收入占比',
                type:'pie',
                radius : [20, 60],
                center : ['50%', '50%'],
                label: {
                  normal: {
                    position: 'inner',
                    show : false
                  }
                },
                roseType : 'area',
                data:data
              }
            ]
          }
          m.setOption(options)
        },
        card(data){
          var c=this.$echarts.init(document.getElementById('card'))
          var options= {
            tooltip: {
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:['#409EFF','#67C23A','#E6A23C','#F56C6C'],
            legend: {
              x : 'center',
              y : 'bottom',
              data:['有车','无车'],
              textStyle:{
                color:'#FFF'
              }
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            series : [

              {
                name:'是否有车',
                type:'pie',
                radius : [20, 60],
                center : ['50%', '50%'],
                roseType : 'area',
                label: {
                  normal: {
                    position: 'inner',
                    show : false
                  }
                },
                data:data
              }
            ]
          }
          c.setOption(options)
        },

        number(data){
            var num=this.$echarts.init(document.getElementById('num_analyse'))
            var options={
              tooltip : {
                trigger: 'axis'
              },
              color:['#E6A23C', '#409EFF'],
              legend: {
                data:['今年','前年'],
                textStyle: {
                  color: '#FFF'
                }
              },
              toolbox: {
                show : true,
                feature : {
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
                }
              },
              calculable : true,
              xAxis : [
                {
                  type : 'category',
                  data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  "axisLine": {
                    lineStyle: {
                      color: 'white'
                    }
                  },
                }
              ],
              yAxis : [
                {
                  type : 'value',
                  "axisLine": {
                    lineStyle: {
                      color: 'white'
                    }
                  },
                }
              ],
              series : [
                {
                  name:'今年',
                  type:'bar',
                  data:data[0].qn,
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name: '平均值'}
                    ]
                  }
                },
                {
                  name:'前年',
                  type:'bar',
                  data:data[1].jn,
                  markPoint : {
                    data : [
                      {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                      {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name : '平均值'}
                    ]
                  }
                }
              ]
            }
            num.setOption(options)
          }
      }
    }
</script>

<style scoped>
#age{
  background: url("../../../static/images/border/age.png") no-repeat;
  margin-top: 6em;
  background-size: contain;
  height: 25em;
  width: 45em;
  margin-right: 4em;
}
#area{
  background: url("../../../static/images/border/area.png") no-repeat;
  margin-top: 6em;
  background-size: contain;
  height: 25em;
  width: 45em;
}
#number{
  background: url("../../../static/images/border/number.png") no-repeat;
  background-size: contain;
  height: 25em;
  width: 45em;
  margin-right: 4em;
}
#face{
  background: url("../../../static/images/border/face.png") no-repeat;
  background-size: contain;
  height: 25em;
  width: 45em;
}
.grid {
  width: 95%;
  height: 18em;
  margin: 2em 2em;
}
.ngrid {
  width: 95%;
  height: 20em;
  margin: 2em 1em;
}
.fgrid {
  width: 13em;
  height: 18em;
  margin: 2em 1em;
}
</style>
