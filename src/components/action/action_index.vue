<template>
  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" id="action_index">
    <el-row>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
        <el-row id="spend" >
          <div id="spend_a" class="grid"></div>
        </el-row>
        <el-row>
          <div id="said" >
          <div class="content">
          <div v-for="i in comment">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
            <span style="color: #02AFB6">{{i.name}}</span>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
            <el-rate v-model=i.star disabled show-score text-color="#ff9900" ></el-rate>
          </el-col>
          <el-row>
            <div style="width: 20em;display: table;color: #5C7C8A">{{i.content}}</div>
          </el-row>
            <hr>
          </div>

          </div>
          </div>
        </el-row>
      </el-col>
      <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
        <img src="../../../static/images/three_bg.png" style="margin-top: 6em">
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" >
        <el-row id="target" class="grid">
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
            <div style="margin: 3.5em;color: white">
              <p v-for="i in list">{{i.index}}.{{i.name}}<span style="margin-left: 2em" :class="{'tt':i.kk==='top','gg':i.kk==='down'}">{{i.value}}</span></p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
            <img src="../../../static/images/border/ta.png" style="margin-top: 4em">
          </el-col>
        </el-row>
        <el-row id="aciton" class="agrid">

        </el-row>
      </el-col>
    </el-row>

  </el-col>
</template>

<script>
    export default {
        name: "action_index",
      data(){
          return{
            list:[

            ],
            comment:[

            ],
            all:[],
            aa:'[]'
          }
      },
      mounted(){

        var _this=this
        this.$axios.get("../../static/action_db.json").then(res => {
          _this.comment=res.data.comment;
          _this.all=res.data.spend
          _this.list=res.data.alllist
          _this.aa=res.data.action
          _this.spend(_this.all)
          _this.action(_this.aa)
        });
      },
      methods:{
          spend(data){
            var spend = this.$echarts.init(document.getElementById('spend_a'))
            var options={

              tooltip: {
                trigger: 'axis'
              },

              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['12日','13日','14日','15日','16日','17日','18日'],
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
              series: [
                {
                  name:'衣',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  data:data[0].yi
                },
                {
                  name:'食',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  data:data[1].shi
                },
                {
                  name:'住',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  data:data[2].zhu
                },
                {
                  name:'行',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  data:data[3].xing
                },
                {
                  name:'游',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  data:data[4].you
                }
              ]
            }
            spend.setOption(options)
          },
        action(data){
          var a = this.$echarts.init(document.getElementById('aciton'));
          var options = {
            tooltip: {
              trigger: 'item',
              formatter: "{b}: {c} ({d}%)"
            },
            color: ['#DB6885', '#65E7E4','#6AE262','#B96FC1','#529EE8','#DF8741'],
            legend: {
              orient: 'vertical',
              x: 'left',
              data: ['咨询', '求助','建议','感谢','投诉'],
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
          a.setOption(options);
        }
      }
    }
</script>

<style scoped>
#spend{
  background: url("../../../static/images/border/spend.png") no-repeat;
  margin-top: 6em;
  background-size: contain;
  height: 20em;
  width: 30em;
}
  #said{
    background: url("../../../static/images/border/said.png") no-repeat;
    background-size: contain;
    height: 25em;
    width: 24em;
    padding: 1em .5em;
  }
  #target{
    background: url("../../../static/images/border/target.png") no-repeat;
    margin-top: 6em;
    background-size: contain;
    height: 20em;
    width: 30em;
  }
  #aciton{
    background: url("../../../static/images/border/action.png") no-repeat;
    background-size: contain;
    height: 25em;
    width: 29em;
  }
.grid {
  width: 26em;
  height: 15em;
  margin: 1em 1em;

}
  .content{
    margin-top: 1em;
    padding:1.5em 1.5em;
    width: 20em;
    height: 18em;
    overflow-y: scroll;
  }
  .tt{
    background-color: #F56C6C;
  }
  .gg{
    background-color: #67C23A;
  }
  .agrid{
    width: 28em;
    height: 19em;
    padding: 2em 2em;
  }
</style>
