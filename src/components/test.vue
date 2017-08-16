<template>
<div>
   <mt-search autofocus  v-model="value" :result="filterResult" ></mt-search> 
   <mt-button type="default" @click="toast(1,2)">Click me</mt-button>
   <mt-button type="primary" @click="indicator()">primary</mt-button>
   <mt-button type="danger">danger</mt-button>
   <mt-button plain>plain</mt-button>
   <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
   <mt-cell-swipe
  title="向左滑动删除"
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"></mt-cell-swipe>
  <mt-switch v-model="value">开关</mt-switch>
<mt-checklist title="复选框列表" v-model="checklist" :options="options" align="right">
</mt-checklist>
<mt-field label="邮箱" state="success" v-model="email"></mt-field>
<mt-field label="邮箱" state="error" v-model="email"></mt-field>
<mt-field label="邮箱" state="warning" v-model="email"></mt-field>

   <!--  <mt-palette-button content="+">
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
      <div class="my-icon-button"></div>
    </mt-palette-button> -->
 <!--     <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
    </mt-palette-button>
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>

<mt-header title="多个按钮">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    <mt-button @click="handleClose">关闭</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button> 
</mt-header>-->
<!--         <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
        <mt-cell class="page-part" title="当前选中" :value="selected" />  

      <mt-tab-container v-model="selected">
  <mt-tab-container-item id="外卖">
    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
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
 -->
</div>
</template>
<script>
import { Toast,Indicator } from 'mint-ui';
export default {
  data () {
    return {
      value:"",
      defaultResult: [  
        'Apple',  
        'Banana',  
        'Orange',  
        'Durian',  
        'Lemon',  
        'Peach',  
        'Cherry',  
        'Berry',  
        'Core',  
        'Fig',  
        'Haw',  
        'Melon',  
        'Plum',  
        'Pear',  
        'Peanut',  
        'Other'  
      ] ,
      checklist :['值A', '值B'],
      options:[
  {
    label: '被禁用',
    value: '值F',
    disabled: true
  },
  {
    label: '选中禁用',
    value: '选中禁用的值',
    disabled: true
  },
  {
    label: '选项A',
    value: '值A',
    disabled: true
  },
  {
    label: '选项B',
    value: '值B'
  }
],
      selected:"外卖",
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
    computed: {  
    filterResult() {  
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));  
    }  
  },
  methods:{
  	toast:function(a,b){
  		// this.$toast('upload complete')//没有导入Toast时可以这样使用
  		Toast('提示信息');
  	},
  	indicator:function(){
  	Indicator.open('加载中...');
  },
   onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
