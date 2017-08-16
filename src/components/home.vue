<template>
<div>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="外卖">
    <div class="homeContainer">
		<header>
			 <mt-search autofocus  v-model="value" :result="filterResult" ></mt-search>
       <span><i class="fa fa-microphone" ></i></span>
		</header>
</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="订单">
     <i class="fa fa-microphone" aria-hidden="true"></i>
  </mt-tab-container-item>
  <mt-tab-container-item id="发现">
    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="我的">
    <mt-cell v-for="n in 7" title="tab-container 4"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>

<mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="外卖">
    <img slot="icon" src="">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="./../assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>

</div>

</template>

<script>
import {api} from '@/global/api'
export default {
  data () {
    return {
       selected:"外卖",
       value:"",
       defaultResult:[]
    }
   },
   mounted(){
      var vm=this;
      vm.getaData();
   },
   computed: {  
    filterResult() {  
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));  
    }  
  },
   methods:{
    getaData(){
      this.$http.get(api.homeData).then(function(response){
        this.defaultResult=response.data.defaultResult;
      })
    }
   }

  }
</script>

<style>
body{
	margin: 0;
}
header{
	height: 100px;
	background: #1e82d2;
}
header .mint-searchbar{
  background: #1e82d2; 
  position: inherit;
}
header .mint-searchbar-core,header .mint-searchbar-inner {
  background:#ababab; 
  height: 1.2rem;
}
header .mint-search {
    height: auto; 
    float: left;
}
span .fa{
    margin-top: 0.8rem;
    margin-left: -9.2rem;
  } 
header .mint-searchbar .mint-searchbar-cancel{
  display: none;
}
</style>