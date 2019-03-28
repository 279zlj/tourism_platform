<template>
  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" id="data_export">
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="p_a" >
        <div class="cotent">
          <el-table :data="alist" height="270" :header-cell-style="tableHeaderColor" :row-style="tableRowStyle" style="width: 90%;margin: .5em 1.5em">
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="people" label="人数"></el-table-column>
            <el-table-column prop="stay" label="停留天数"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="sop">
        <div class="cotent">
          <el-table :data="vlist" height="270" :header-cell-style="tableHeaderColor" :row-style="tableRowStyle" style="width: 90%;margin: .5em 1.5em">
            <el-table-column prop="date" width="150"></el-table-column>
            <el-table-column prop="tour" label="游客"></el-table-column>
            <el-table-column prop="location" label="本地"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="p_p">
        <div class="cotent">
          <el-table :data="alist" height="270" :header-cell-style="tableHeaderColor" :row-style="tableRowStyle" style="width: 90%;margin: .5em 1.5em">
            <el-table-column prop="province" label="省份"></el-table-column>
            <el-table-column prop="people" label="人数"></el-table-column>
            <el-table-column prop="stay" label="停留天数"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" id="p_t">
        <div class="cotent">
          <el-table :data="vlist" height="270" :header-cell-style="tableHeaderColor" :row-style="tableRowStyle" style="width: 90%;margin: .5em 1.5em">
            <el-table-column prop="date" width="150"></el-table-column>
            <el-table-column prop="tour" label="游客"></el-table-column>
            <el-table-column prop="location" label="本地"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
    export default {
        name: "data_export",
      data(){
          return{
            alist:[

            ],
            vlist:[

            ]
          }
      },
      mounted(){
        var _this=this
        this.$axios.get('../static/data.json').then(res=> {
          _this.alist=res.data.ky
          _this.vlist=res.data.rl
        })
      },
      methods:{
        tableRowStyle({row, rowIndex}) {
          return 'background-color: #021734;color:#FFF'
        },
        tableHeaderColor({row, column, rowIndex, columnIndex}) {
          if (rowIndex === 0) {
            return 'background-color: #021734;color: #FFF;font-weight: 500;'
          }
        },
      }
    }
</script>

<style scoped>
#p_a{
  background: url("../../../static/images/border/p_a.png") no-repeat;
  margin-top: 7em;
  background-size: contain;
  height: 20em;
  width: 45em;
}
  #sop{
    background: url("../../../static/images/border/sop.png") no-repeat;
    margin-top: 7em;
    background-size: contain;
    height: 20em;
    width: 45em;
  }
  #p_p{
    background: url("../../../static/images/border/p_p.png") no-repeat;
    background-size: contain;
    margin-top: 1em;
    height: 20em;
    width: 45em;
  }
  #p_t{
    background: url("../../../static/images/border/p_t.png") no-repeat;
    background-size: contain;
    margin-top: 1em;
    height: 20em;
    width: 45em;
  }
  .cotent{
    padding: 1em;
  }
</style>
