<template>
<div class="orderContainer">
		<header>
			 <router-link to="/search"><mt-search autofocus  v-model="value" :result="filterResult" ></mt-search></router-link>
             <span class="span1"><i class="fa fa-microphone" ></i></span>
             <div class="dicon">
             <i class="fa fa-user-o" aria-hidden="true"></i>
             </div>
		</header>
		<div style="height:50px;"></div>
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
         <li class="shop_li" v-for="store in storeList">
           <div class="img"><img :src="store.foodimg"/></div>
           <div class="storeContent">
             <h4 class="htitle">{{store.storename}}</h4>
             <ul class="shop_detail_ul">
                 <li data-v-2df9c5b6="" class="supports">保</li>
                 <li data-v-2df9c5b6="" class="supports">准</li>
                 <li data-v-2df9c5b6="" class="supports">票</li>
             </ul>
            <div class="middle">
               <el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"> </el-rate>  
               <section class="sale">月售{{store.saleAmount}}单</section>
               <section class="delivery">
	               <span class="delivery_left">蜂鸟专送</span> 
	               <span class="delivery_right">准时达</span>
               </section>
            </div>
	        <div class="fee_distance">
	            <p class="fee">¥{{store.deliveryMoney}}起送 <span data-v-2df9c5b6="" class="segmentation">/</span>配送费约¥5</p> 
	            <p class="distance_time">
		            <span >{{store.distance}}公里</span> 
		            <span class="segmentation">/</span> 
		            <span data-v-2df9c5b6="" class="order_time">{{store.time}}分钟</span>
	            </p>
			</div> 

           </div>
       </li>
    </ul>

       </div>
		</div> 

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
       value:"",
       defaultResult:[],
       value5:3.7,
       storeList:null,
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
      this.$http.get(api.WaimaiData).then(function(response){
        this.defaultResult=response.data.defaultResult;
        this.storeList=response.data.storeList;
        console.log("storeList",this.storeList)
        console.log("storeresponse",response)
      })
    },
    goback(){
    	this.$router.push("/home");
    	this.selected="外卖";
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
body{
	margin: 0;
	background-color: #F5F5F5;
}
.orderContainer header{
	height: 50px;
	background: #3190e8; 
	width: 100%;
	position: fixed;
     z-index: 999;
}
.orderContainer header .mint-searchbar{
  background: #3190e8; 
  position: inherit;
   padding: 7px 10px;
}
.orderContainer header .mint-searchbar-core,header .mint-searchbar-inner {
  background:#1873b9; 
 /* height: 1.2rem;*/
    color: #fff;
}
.orderContainer header .mint-search {
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
.orderContainer ::-webkit-input-placeholder,header .mint-searchbar-inner .mintui-search{
	color: #fff;
}
.foodType{
	width: 100%;
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
  text-align: left;
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
    overflow: hidden;
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
    position: relative;
    top:-1rem;
    display: inline-block;
    text-align: left;
    left: -0.8rem;
  }
 .htitle::before{
    content: '品牌';
    display: inline-block;
    font-size: 0.5rem;
    line-height: .6rem;
    color: #333;
    background-color: #ffd930;
 }
  .shop_detail_ul{
    float: right;
    position: relative;
    right: 0.1rem;
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
.storeContent{
    position: relative;
    left: 0.4rem;
    overflow: hidden;
}
.storeContent .el-rate{
	float: left;
}
.storeContent .el-rate__icon {
    font-size: 0.1rem;
    margin-right: 0.05rem;
}
.delivery_left{
    color: #fff;
    background-color: #3190e8;
    border: 0.025rem solid #3190e8;
}
.delivery_right{
    color: #3190e8;
    border: 0.025rem solid #3190e8;
}
.sale{
	transform: scale(0.8);
    font-size: 0.6rem;
    color: #666;
    float: left;
    margin-top: 0.1rem;
}
.delivery{
	font-size: 0.4rem;
	font-weight: normal;
	padding-top: 0.1rem;
	float: right;
	position: relative;
    right: 0.2rem;
}
.fee_distance {
    font-size: 0.5rem;
    color: #333;
     clear: both;
    overflow: hidden;
}
.distance_time{
    overflow: hidden;
    position: relative;
    right: 0.4rem;
    text-align: right;
 }
.fee{
	float: left;
    margin: 0.2rem 0;
}
.middle{
	overflow: hidden;
    margin-top: -2rem;
    clear: both;
}
.segmentation{
	padding: 0 0.1rem;
}

</style>