<template>
<div>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="外卖">
    <div class="homeContainer">
		<header>
			 <router-link to="/search"><mt-search autofocus  v-model="value" :result="filterResult" ></mt-search></router-link>
             <span class="span1"><i class="fa fa-microphone" ></i></span>
             <div class="dicon">
             <i class="fa fa-user-o" aria-hidden="true"></i>
             </div>
		</header>
		<div class="foodType">
			<div class="typelist">
	            		<router-link to="" v-for="item in imgList" class="link_to_food">
	            			<figure>
	            				<img :src="item.imgurl">
	            				<figcaption>{{item.title}}</figcaption>
	            			</figure>
	            		</router-link>
		  </div>
		</div>
		<div class="shoplist">
		   <div class="head">
		      <i class="fa fa-building" aria-hidden="true"></i>
		      <span style="color: #999;font-size: 0.55rem">附近商家</span>
		   </div>
       <div class="storelist">
         <ul class="showEvery">
         <li class="shop_li">
           <div class="img"><img src="./../assets/mm.jpeg"/></div>
           <div class="storeContent">
             <h4 class="htitle">火村麦当劳</h4>
             <ul class="shop_detail_ul">
                 <li data-v-2df9c5b6="" class="supports">保</li>
                 <li data-v-2df9c5b6="" class="supports">准</li>
                 <li data-v-2df9c5b6="" class="supports">票</li>
             </ul>
            <!--  <el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"> </el-rate>   -->    
           </div>
           </li>
         </ul>

       </div>
		</div>

</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="搜索">
     <i class="fa fa-microphone" aria-hidden="true"></i>
  </mt-tab-container-item>
  <mt-tab-container-item id="订单">
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
  <mt-tab-item id="搜索">
    <img slot="icon" src="">
    搜索
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="">
    订单
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
import tianpin from './../assets/tianpin.jpeg'
import meishi from './../assets/meishi.jpeg'
import zhunshida from './../assets/zhunshida.jpeg'
import tehui from './../assets/tehui.jpeg'
import dangao from './../assets/dangao.jpeg'
import zhoudian from './../assets/zhoudian.jpeg'
import bianli from './../assets/bianli.jpeg'
import yuding from './../assets/yuding.jpeg'

export default {
  data () {
    return {
       selected:"外卖",
       value:"",
       defaultResult:[],
       value5:3.7,
       "imgList":[
         {
        "imgurl":tianpin,
        "title":"甜品饮品"
        },
        {
        "imgurl":meishi,
        "title":"美食"
        },
        {
        "imgurl":zhunshida,
        "title":"准时达"
        },
         {
        "imgurl":tehui,
        "title":"新店特惠"
        },
        {
        "imgurl":dangao,
        "title":"鲜花蛋糕"
        },
        {
        "imgurl":zhoudian,
        "title":"包子粥店"
        },
         {
        "imgurl":bianli,
        "title":"商超便利"
        },
        {
        "imgurl":yuding,
        "title":"预定早餐"
        }
      ]
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
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
html{
	font-size: 23.4375px
}
body{
	margin: 0;
	background-color: #F5F5F5;
}
header{
	height: 50px;
	background: #3190e8; 
	width: 100%;
	position: relative;
}
header .mint-searchbar{
  background: #3190e8; 
  position: inherit;
 padding: 7px 10px;
}
header .mint-searchbar-core,header .mint-searchbar-inner {
  background:#1873b9; 
  height: 1.2rem;
    color: #fff;
}
header .mint-search {
    height: auto; 
    float: left;
    width: 70%;
}
.span1{
    position: absolute;
    left: 63%;
    top: 20%;
    z-index: 999;
    color: white;
  } 
.dicon{
	float: right;
	top: 20%; 
	right: 4%;
	display: inline-block;
	position: relative;
	color: white;
}
header .mint-searchbar .mint-searchbar-cancel{
  display: none;
}
.homeContainer ::-webkit-input-placeholder,header .mint-searchbar-inner .mintui-search{
	color: #fff;
}
.foodType{
	width: 100%;
	float: left;
	position: relative;
	background-color: #fff;
}
.foodType img{
	height: 1.8rem;
	width: 1.8rem;
	margin-bottom: 0.3rem;
}
.typelist{
 display:flex;
 -webkit-flex-wrap: wrap;
 border-bottom: 0.025rem solid #e4e4e4;
 padding-bottom: 1rem

}
.foodType .link_to_food{
    width: 25%;
    padding: 0.3rem 0rem;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #333;
   text-decoration: none;
   font-size: 0.55rem
}
figure{
	margin: 0;
	padding:0;
}
.shoplist{
	margin-top:0.4rem;
	border-top: 0.025rem solid #e4e4e4;
  background-color: #fff;
  clear: both;
}
.head{
  float: left;
}
.storelist{
  clear: both;
}
.fa-building{
	font-size: 0.6rem;
	color:#999;
	margin-left: 0.6rem; 
}
.showEvery{
  list-style: none;
  clear: both;
}
.showEvery img{
  height:2.7rem; 
  width:2.7rem;
}
.shop_li{
    border-bottom: 0.025rem solid #f1f1f1;
    padding: 0.7rem 0.4rem;
  }
  .img{
    float: left;
  }
  .htitle{
    width: 8.5rem;
    color: #333;
    padding-top: .01rem;
    font-size: 0.65rem;
    font-weight: 700;
  }
  .shop_detail_ul{
    float: right;
  }
  .supports{
    font-size: 0.5rem;
    color: #999;
    border: 0.025rem solid #f1f1f1;
    padding: 0 0.04rem;
    border-radius: 0.08rem;
    margin-left: 0.05rem;
    float: left;
}
</style>