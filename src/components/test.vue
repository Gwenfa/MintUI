<template>
<div>
   <mt-button type="default" @click="toast(1,2)">Click me</mt-button>
   <mt-button type="primary" @click="indicator()">primary</mt-button>
   <mt-button type="danger">danger</mt-button>
</div>
</template>
<script>
import { Toast,Indicator } from 'mint-ui';
export default {
  data () {
    return {
     
    }
  },
  methods:{
  	toast:function(a,b){
  		// this.$toast('upload complete')//没有导入Toast时可以这样使用
  		Toast('提示信息');
  	},
  	indicator:function(){
  	Indicator.open('加载中...');
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
