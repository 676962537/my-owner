<template>
  <div>
    <div class="banner" @click='clickFn'>
      <div class="banner-item">index</div>
      <div class="banner-item">index</div>
      <div class="banner-item">index</div>
      <div class="banner-item">index</div>
      <div class="banner-item">index</div>
      <div class="banner-item">index</div>
    </div>
    <div class="mahenan">askjdhaksjd</div>
    <div v-color id="mahenan">mahenan</div>

    <div class="mahenan">
      <span>
        <span>mahenan的第三次b_mahenan分支修改</span>
        <span>mahenan的第三次master分支修改</span>
      </span>
      <span>
        <div>mahenan的第三次master分支修改</div>
      </span>
      <span>
        <div>mahenan的第三次b_mahenan分支修改</div>
        <div>mahenan的第三次master分支修改</div>
      </span>
      <span>
        <div>mahenan的第三次b_mahenan分支修改</div>
        <div>mahenan的第三次master分支修改</div>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
    import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
    import {getName} from '@/util/index'
    import _ from 'lodash'
    @Component({

    })
    export default class Index extends Vue{
      private name:string = 'mahenan';
      private name2:string = 'mahenan2';
      private name6:string = 'mahenan6';
      private name7:string = 'mahenan7';
      private name8:string = 'mahenan8';
      private name10:string = 'mahenan10';

      private mahenan1:string = 'mahenan1';
      private mounted(){
        console.log(_);
        getName('index')
      }
      private clickFn(){
        console.log(1);
      }
    }
</script>
<style scoped lang="less">
  .banner{
    position: relative;
    padding: 5px;
    display: inline-block;
    &:after{
      position: absolute;
      top: 0;
      left: 0;
      content: " ";
      pointer-events: none;
      width: 200%;
      transform-origin: 0 0;
      transform: scale(0.5);
      height: 200%;
      border: 1px solid green;
    }
    &-item:nth-child(2n){
      color: red;
    }
    .mahenan{
      color: red;
    }
  }

  @width: 10px;
  @height: @width + 10px;

  .color{
    color: red;
  }
  .mahenan {
    display: inline-block;
    width: @width;
    height: @height;
    .color()
  }
</style>
<!--<style scoped>-->
<!--  .banner{-->
<!--    color: red;-->
<!--  }-->
<!--</style>-->
