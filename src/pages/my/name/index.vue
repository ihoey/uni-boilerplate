<template>
  <view class="page flex-col">
    <rs-nav-bar title="更换捐款人姓名" @back="back" />

    <view class="box_1 flex-col">
      <view class="text-wrapper_1 flex-col">
        <!-- <text class="text_3">请输入捐款人姓名</text> -->
        <rs-input class="text_3" placeholder="请输入捐款人姓名"></rs-input>
      </view>
      <button class="text-wrapper_2 flex-col" @click="onClick_1">
        <text class="text_4">确定</text>
      </button>
    </view>
  </view>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";
import rsInput from "@/components/rs-input/rs-input";

export default {
  components: {
    rsNavBar,
    rsInput,
  },
  data() {
    return {
      constants: {},
    };
  },
  methods: {
    back() {
      console.log("back");
      // wx.navigateBack({
      //   delta: 1,
      // });
      wx.navigateBack({
        delta: 1,
      });
    },
    onClick_1() {
      alert(1);
    },
  },
};
</script>
<style lang='scss'>
@import "./index.rpx.scss";
</style>
