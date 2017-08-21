<template>
<div class="mineContainer">
	<mt-header title="我的" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link>
   </mt-header>
   <section class="user">
	 <a  class="profile-link">
		 <img src="" class="privateImage">
		  <div class="user-info">
			  <p >13414947210</p>
			  <p >
				  <span><i class="fa fa-mobile" aria-hidden="true"></i></span> 
				  <span class="mobile-number">暂无绑定手机号</span>
			  </p>
		  </div> 
		  <span class="arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
	  </a>
   </section>
   <section class="info-data">
	   <ul class="clear">
		   <li data-v-0fc4ab7a="" class="info-data-link">
			   <span  class="info-data-top"><b>0.00</b>元</span> 
			   <span  class="info-data-bottom">我的余额</span>
	       </li> 
		   <li  class="info-data-link">
			   <span  class="info-data-top"><b data-v-0fc4ab7a="">3</b>个</span> 
			   <span class="info-data-bottom">我的优惠</span>
		   </li>
		    <li class="info-data-link">
			    <span  class="info-data-top"><b>0</b>分</span>
			    <span  class="info-data-bottom">我的积分</span>
		    </li>
	    </ul>
   </section>
   <section class="act">
   	<mt-cell title="我的订单" to="//github.com" is-link value="带链接">
   	<i class="fa fa-list-alt" aria-hidden="true"></i>
   	</mt-cell>

   	<mt-cell title="积分商城" to="//github.com" is-link value="带链接">
   	<i class="fa fa-shopping-bag" aria-hidden="true"></i>
   	</mt-cell>

   	<mt-cell title="饿了么会员卡" to="//github.com" is-link value="带链接">
   	<i class="fa fa-diamond" aria-hidden="true"></i>
   	</mt-cell>
   </section>

   <section class="act">
   	<mt-cell title="服务中心" to="//github.com" is-link value="带链接">
   	<i class="fa fa-server" aria-hidden="true"></i>
   	</mt-cell>

   	<mt-cell title="下载饿了么APP" to="//github.com" is-link value="带链接">
   	<i class="fa"><img slot="icon" src="./../assets/elm.jpg" width="17" height="18"></i>
   	</mt-cell>

   </section>


</div>
</template>

<script>
</script>
<style>
body{
	background-color: #F5F5F5;
}
.mineContainer  .mint-header{
    background-color: #3190e8;
    height: 1.95rem;
}

.mineContainer .mint-header-title {
    font-size: 0.8rem;
    font-weight: bold;
}
.mineContainer .mintui-back {
    font-size: 0.8rem;width: 3px;
}
.user{
padding-top:1.95rem;
}
.profile-link{
    display: block;
    background: #3190e8;
    padding: .666667rem .6rem;
    	overflow: hidden;
}
.privateImage{  
   display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    vertical-align: middle;
    float: left;
}
.user-info{
	float: left;
    margin-left: .48rem;
}
.arrow{
	   float: right;
	   color: #fff;
	   position: relative;
       top: 0.4rem;
}
.user-info p{
	padding: 0;
	margin: 0;
	font-weight: 700;
    font-size: 0.8rem;
    color: #fff;
}
.mobile-number{
	font-size: 0.57333rem;
    color: #fff;
    font-weight: normal;
}
.info-data{
	 overflow: hidden; 
	 background: #fff;
}
.info-data-link{
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    display: inline-block;
    border-right: 1px solid #f1f1f1;
}
.info-data-link span{
	display: block;
}
.info-data-top{
    font-size: 0.55rem;
    color: #333;
    padding: .853333rem 0 .453333rem;
}
.info-data-top b{
    display: inline-block;
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
}
.info-data ul .info-data-link:nth-of-type(2) .info-data-top b{
    color: #ff5f3e;
}
.info-data ul .info-data-link:nth-of-type(3) .info-data-top b{
    color: #6ac20b;
}
.info-data-bottom{
    font-size: 0.57333rem;
    color: #666;
    font-weight: 400;
    padding-bottom: .453333rem;
}
.act{
    margin-top: .4rem;
    background: #fff;
    position: relative;
}
.act .fa{
    position: absolute;
    left: 1rem;
}
.mineContainer .mint-cell-text{
    left: 2.1rem;
    position: absolute;
    top: 0.7rem;
}
.fa-list-alt{color: #000}
.fa-shopping-bag { color: #fc7b53;}
.fa-diamond{color: #ffdf8d;}
.fa-server{color:#4aa5f0}
</style>