<template>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" id="left_bar">
     <el-row style="margin:50% 0 1em 20%">
       <el-col>
        <!--<router-link :to="{name:'index'}"><img src="../../../static/images/area.png" @click="change_bar('index')" :class="{'bar_color':who==='index'}"></router-link>-->
         <router-link :to="{name:'index'}"><div class="bg" @click="change_bar('index')" :class="{'bar_color':who==='index'}"><span class="ft">全域客流管理</span></div></router-link>
       </el-col>
     </el-row>
      <el-row style="margin:1% 0 1em 20%">
        <el-col>
          <!--<router-link :to="{name:'visitor_index'}"><img src="../../../static/images/visitor.png"  @click="change_bar('visitor')" :class="{'bar_color':who==='visitor'}"></router-link>-->
          <router-link :to="{name:'visitor_index'}"><div class="bg" @click="change_bar('visitor')" :class="{'bar_color':who==='visitor'}"><span class="ft">游客画像</span></div></router-link>
        </el-col>
      </el-row>
      <el-row style="margin:1% 0 1em 20%">
        <el-col>
          <!--<router-link :to="{name:'market_index'}"><img src="../../../static/images/market.png" @click="change_bar('market')" :class="{'bar_color':who==='market'}"></router-link>-->
          <router-link :to="{name:'market_index'}"><div class="bg" @click="change_bar('market')" :class="{'bar_color':who==='market'}"><span class="ft">旅游精准营销</span></div></router-link>
        </el-col>
      </el-row>
      <el-row style="margin:1% 0 1em 20%">
        <el-col>
          <!--<router-link :to="{name:'action_index'}"><img src="../../../static/images/action.png" @click="change_bar('action')" :class="{'bar_color':who==='action'}"></router-link>-->
          <router-link :to="{name:'action_index'}"><div class="bg" @click="change_bar('action')" :class="{'bar_color':who==='action'}"><span class="ft">游客行为分析</span></div></router-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="11">
          <el-tooltip class="item" effect="dark" content="图表显示" placement="left-end">
            <router-link :to="{name:'data_export'}"><img src="../../../static/images/charts.png" style="cursor: pointer" ></router-link>
          </el-tooltip>

        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
          <el-tooltip class="item" effect="dark" content="导出数据" placement="left-end">
            <img src="../../../static/images/export.png" style="cursor: pointer" @click="dialogVisible = true">
          </el-tooltip>
        </el-col>
        <el-dialog
          title="导出数据"
          :visible.sync="dialogVisible"
          width="30%"
          >
          <span>是否确认导出表格数据</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-row>
    </el-col>
</template>

<script>
    export default {
        name: "left_bar",
      data(){
          return{
            who:sessionStorage.getItem('isnav'),
            dialogVisible: false
          }
      },
      methods:{
          change_bar(name){
            this.who=name
            sessionStorage.setItem('isnav',this.who)
            // console.log(this.who)
          },

      },
      mounted(){
          if (sessionStorage.getItem('isnav')==null){
            this.change_bar('index')
          }
      }
    }
</script>

<style scoped>
  #left_bar{
    height: 100%;
  }
  .bar_color{
    background-color: #1F3A4E !important;
  }
  .bg{
    background-color: #033952;width: 75%;height: 2.5em
  }
  .ft{
    color: #00FFFF;display: block;text-align: center;font-size: 1.3em;line-height: 1.8em;font-weight: 600;
  }
  a{
    text-decoration: none;
  }
</style>
