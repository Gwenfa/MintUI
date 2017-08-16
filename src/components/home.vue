<template>
<div>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="外卖">
    <div class="homeContainer">
		<header>
			<mt-search v-model="value"></mt-search>
		</header>
</div>
  </mt-tab-container-item>
  <mt-tab-container-item id="订单">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
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
export default {
  data () {
    return {
       selected:"外卖",
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
	background: #00aaee;
}
</style>