<template>
<div class="searchContainer">
<header>
<span @click="goback"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
<mt-search autofocus  v-model="value" :result="filterResult" ></mt-search> 
</header>
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
    	this.selected="外卖";
    }
   }

  }
</script>
<style>
body{
	padding: 0;
	margin: 0;
}
header{
	height: 50px;
	background: #3190e8; 
}
.searchContainer .mint-searchbar {
    width: 80%;
    margin-left: 5%;
    height: 50px;
}
.searchContainer .mint-searchbar {
	background: #3190e8; 
}
.searchContainer .mint-searchbar-core,.searchContainer .mint-searchbar-inner  {
	background: #efefef;
}
.searchContainer .mint-searchbar-inner .mintui-search {
    color: #000;
}
.searchContainer .mint-searchbar-cancel {
     color: #fff; 
}
.mint-search-list {
	    padding-top: 60px;
    }
.searchContainer span .fa-chevron-left{
	display: inline-block;
	float: left;
	margin-top: 4%;
    margin-left: 2%;
    color: #fff;
}
</style>