<template>
  <div id="app">
    <router-view name="time"></router-view>
    <router-view/>
    <router-view name="bar"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style>
#app {
  background: url('../static/images/bg.png') no-repeat ;
  background-size: cover;
  height: 100%;
  width: 100%;
 /*overflow: hidden;*/
}
  body,html{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right,#101232,#190E30);
  }
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width: 7px;
  height: 7px;
  background-color: #56466D;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #56466D;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #241A35;
}
::-moz-scrolled-content{
  background-color: #56466D;
}
</style>
