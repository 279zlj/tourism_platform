<template>
  <el-row >
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" style="color: #6AE6E7;line-height: 5em"><router-link :to="{name:'map_index'}"><i class="el-icon-back" style="font-size: 3em;margin: .5em 0 0 .5em;cursor: pointer;color: #6AE1E4"></i></router-link></el-col>
    <el-col :xs="7" :sm="7" :md="6" :lg="9" :xl="7" ><div style="height: 1em"></div></el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4" ><span style="color: #00FFFF;font-size: 2.6em;line-height: 2.5em">{{title_img}}</span></el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="1" :xl="4" ><div style="height: 1em"></div></el-col>
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" style="color: #6AE6E7;line-height: 6em"><i class="el-icon-date" style="margin-right: 1em"></i>{{now}}</el-col>
    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" style="color: #6AE6E7;line-height: 6em"><i class="el-icon-date" style="margin-right: 1em"></i>{{week}}</el-col>
  </el-row>
</template>

<script>
    export default {
        name: "time",
      data(){
        return{
          now:'',
          week:'',
          one:true,
          title:sessionStorage.getItem('isnav'),
          title_img:''
        }
      },
      mounted(){
        this.monthnow()

        var _this=this
        // console.log(str)
        setInterval(function () {
          _this.monthnow()
        },10000)
      },
      watch:{
        "$route": "top_title"                  //检测路由发生变化时执行该方法
      },
      created() {
        this.top_title()
      },
      methods:{
        monthnow(){
          var date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth()+1;
          var day = date.getDate();
          var week = date.getDay(); //星期
          //判断星期几
          var weeks = ["日","一","二","三","四","五","六"];
          var getWeek = "星期" + weeks[week];
          this.week=getWeek
          var now=year+'年'+month+'月'+day+'日 '
          this.now=now
        },
        top_title(){
          this.title=sessionStorage.getItem('isnav')
          if (this.title=='index'||this.title==null){
            this.title_img='全域客流管理'
          }
          else if (this.title=='visitor') {
            this.title_img='旅客画像分析'
          }
          else if (this.title=='market') {
            this.title_img='旅游精准营销'
          }
          else if (this.title=='action') {
            this.title_img='旅客行为分析'
          }
          // console.log(this.title)
        }
      }
    }
</script>

<style scoped>

</style>
