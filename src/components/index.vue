<template>

  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" id="index">

    <el-row>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" id="prov">

        <el-table :data="list_one"  :header-cell-style="tableHeaderColor" :row-style="tableRowStyle"
                  style="height:44em;width:20em;overflow-y:scroll;margin: 2.5em 1.8em">
          <el-table-column prop="province" label="省份"></el-table-column>
          <el-table-column prop="people" label="人数"></el-table-column>
          <el-table-column prop="stay" label="停留天数"></el-table-column>
        </el-table>

      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="margin-top: 5.5em">
        <el-row>
          <el-col :xs="6" :sm="6" :md="7" :lg="5" :xl="5" :offset="6">
            <div style="border: 1px solid #668D9E;height: 3.2em;">
              <div style="background-color: #2C5C6C;margin-top: .5em">
                <span style="color: white;line-height: 2em;font-size: 1.1em;display: block;text-align: center">今日人员流动</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="6" :sm="6" :md="9" :lg="7" :xl="5" style="margin-left: .1em">
            <div style="border: 1px solid #668D9E;height: 3.2em;">
              <div style="margin-top: .5em">
                <span style="color: white;line-height: 2em;font-size: 1.1em;background-color: #2C5C6C;padding: .5em;margin: .5em 0 .5em 0.4em">{{num[0]}}</span>
                <span style="color: white;line-height: 2em;font-size: 1.1em;background-color: #2C5C6C;padding: .5em;margin: .5em 0">{{num[1]}}</span>
                <span style="color: white;line-height: 2em;font-size: 1.1em;background-color: #2C5C6C;padding: .5em;margin: .5em 0">{{num[2]}}</span>
                <span style="color: white;line-height: 2em;font-size: 1.1em;background-color: #2C5C6C;padding: .5em;margin: .5em 0">{{num[3]}}</span>
                <span style="color: white;line-height: 2em;font-size: 1.1em;background-color: #2C5C6C;padding: .5em;margin: .5em 0">{{num[4]}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <iframe frameborder="0" src="../../static/leaflet-echarts3-master/examples/index.html" style="width: 95%;height: 35em;margin-top: 1em;margin-left: 1em "></iframe>
          <!--<img src="../../static/images/map.png" style="margin-top: .5em">-->
        </el-row>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <el-row id="people">
          <div id="piechart" class="grid"></div>
        </el-row>
        <el-row id="time">
          <div id="timechart" class="lgrid"></div>
        </el-row>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        num:[],
        list_one: [],
        people:[],
        location:[]
      }
    },
    mounted() {
      var _this = this
      this.$axios.get('../static/index_db.json').then(res=> {
        _this.list_one=res.data.keyuan
        _this.people=res.data.renliu
        _this.location=res.data.shishi
        this.pie(_this.location)
        this.line(_this.people)
        // console.log(_this.people)
      })

      this.num = sessionStorage.getItem('num')
      if (this.num==null){
        this.num=['2','3','8','4','1']
        this.add(this.num)
      }
      else {
        this.num = sessionStorage.getItem('num')
        var c = this.num.split(',');
        this.num=c
        this.add(this.num)
      }


    },
    methods: {
      tableRowStyle({row, rowIndex}) {
        return 'background-color: #021734;color:#FFF'
      },
      tableHeaderColor({row, column, rowIndex, columnIndex}) {
        if (rowIndex === 0) {
          return 'background-color: #021734;color: #FFF;font-weight: 500;'
        }
      },
      add(num){

        var a='';
        // console.log(typeof (num))
        for (let i=0;i<num.length;i++){
          a +=num[i]
        }
        // console.log(parseInt(a))
        var b=parseInt(a)+1
        var c = String(b).split('');
        // console.log(b)
        this.num=c
        sessionStorage.setItem('num',this.num)

      },
      line(data) {
        var line = this.$echarts.init(document.getElementById('timechart'));
        var options = {
          legend: {
            textStyle: {
              color: '#FFF'
            }
          },
          color: ['#E6A23C', '#409EFF'],
          tooltip: {},
          dataset: {
            dimensions: ['product', '游客', '本地'],
            source: data
          },
          xAxis: {
            type: 'category',
            lineStyle: {color: 'white'},
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
          series: [
            {type: 'bar'},
            {type: 'bar'},
          ]
        };
        line.setOption(options);
      },
      pie(data) {
        var pie = this.$echarts.init(document.getElementById('piechart'));
        var options = {
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
          },
          color: ['#E6A23C', '#409EFF'],
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['本地', '客流'],
            textStyle: {
              color: '#FFF'
            }
          },
          series: [
            {
              name: '统计',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                normal: {
                  position: 'inner'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },

            },
            {
              name: '统计',
              type: 'pie',
              radius: ['40%', '55%'],
              label: {
                normal: {
                  formatter: '{hr|}\n  {b|{b}：}{c}  ',
                  backgroundColor: '#eee',
                  borderColor: '#FFF',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    hr: {
                      borderColor: '#FFF',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: {
                      fontSize: 14,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#E3A644',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              data: data
            }
          ]
        };
        pie.setOption(options);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #index {
    height: 100%;

  }

  #prov {
    background: url("../../static/images/border/province.png") no-repeat;
    /*border: 4px solid #498099;*/
    /*box-shadow: #498099 0px 0px 20px 1px ,#498099 0px 0px 20px 1px inset;*/
    margin-top: 6em;

    background-size: contain;
    height: 43em;
    width: 20em;
  }

  #people {
    background: url("../../static/images/border/people.png") no-repeat;
    margin-top: 6em;
    background-size: contain;
    height: 22em;
    width: 26em;
  }

  .grid {
    width: 25em;
    height: 18em;
    margin: 1em 1em;
  }

  .lgrid {
    width: 28em;
    height: 19em;
    margin: 2em 1em;
  }

  #time {
    background: url("../../static/images/border/visitor_time.png") no-repeat;
    background-size: contain;
    height: 25em;
    width: 29em;
    /*width: 100%;*/
  }
</style>
