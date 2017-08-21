<template>
<div>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="外卖">
    <Waimai></Waimai>
  </mt-tab-container-item>

  <mt-tab-container-item id="搜索">
   <searchBar></searchBar>
  </mt-tab-container-item>

  <mt-tab-container-item id="订单">
   <Order></Order>
  </mt-tab-container-item>

  <mt-tab-container-item id="我的">
    <Mine></Mine>
  </mt-tab-container-item>
</mt-tab-container>

<mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="外卖">
    <img slot="icon" src="./../assets/elm.jpg">
    外卖
  </mt-tab-item>
  <mt-tab-item id="搜索">
    <img slot="icon" src="./../assets/faxian.png">
    搜索
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="./../assets/dingdan.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="./../assets/wode.png">
    我的
  </mt-tab-item>
</mt-tabbar>

</div>

</template>

<script>
import searchBar from './search'
import Mine from './Mine'
import Waimai from './waimai'
import Order from './order'

export default {
  components: { searchBar,Mine,Waimai,Order},
  data () {
    return {
       selected:"外卖"   
  }
}
}
</script>

<style>
</style>