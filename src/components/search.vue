<template>
<div class="searchContainer">
<header>
<span @click="goback"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
<div style="height:60px;background:#3190e8;"></div>
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
       defaultResult:[],
       selected:""
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
      this.$http.get(api.WaimaiData).then(function(response){
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
	/*height: 50px;
	background: #3190e8;*/ 
  position: fixed;
  width: 100%;
}
.searchContainer .mint-searchbar {
    width: 80%;
    margin-left: 9%;
    height: 50px;
    background: #3190e8;
    position: fixed;
    margin-top:-55px;
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
.searchContainer .mint-search-list {
	    padding-top: 60px !important;
    }
.searchContainer span .fa-chevron-left{
	display: inline-block;
	float: left;
	margin-top: 5%;
    margin-left: 2%;
    color: #fff;
}
</style>