<template>
<div class="orderContainer">
	hello
</div>
</template>
<script>
export default{
	data(){
		return{
			defaultResult:[]
		}		
	},
	mounted(){
      var vm=this;
      vm.getdata();
   },
	methods:{
		getdata(){
			this.$http.get('http://cangdu.org:8001/v1/cities',{params:{'type':'guess'}}).then(function(response){
				this.defaultResult=response.data;
				console.log("返回的response",response);
				console.log("返回的defaultResult",this.defaultResult);
			})
		}
	}
}
</script>
<style>
</style>