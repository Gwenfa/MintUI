<template>
<div class="searchContainer">
<span @click="goback"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
<mt-search autofocus  v-model="value" :result="filterResult" ></mt-search> 
</div>
</template>

<script>
import {api} from '@/global/api'
export default {
  data () {
    return {
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
    },
    goback(){
    	this.$router.go(-1);
    }
   }

  }
</script>
<style>
.searchContainer .mint-searchbar {
    width: 80%;
    margin-left: 5%;
}
.searchContainer .mint-searchbar {
	background: #fff;
}
.searchContainer .mint-searchbar-core,.searchContainer .mint-searchbar-inner  {
	background: #efefef;
}
.searchContainer span{
	display: inline-block;
	float: left;
	margin-top: 4%;
    margin-left: 2%;
    color: #1892ea;
}
</style>