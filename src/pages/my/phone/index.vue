<template>
  <view class="page flex-col">
    <rs-nav-bar title="更换手机号" @back="back" />
    <view class="box_2 flex-col">
      <view class="box_3 flex-col">
        <view class="text-wrapper_1 flex-row justify-between align-center">
          <text class="text_2">+86</text>
          <!-- <text class="text_3">请输入新的手机号</text> -->
          <rs-input class="text_3" placeholder="请输入新的手机号"></rs-input>

        </view>
        <view class="group_1 flex-col"></view>
        <view class="text-wrapper_2 flex-row justify-between">
          <!-- <text class="text_4">输入验证码</text> -->
          <rs-input class="text_4" placeholder="输入验证码"></rs-input>

          <text class="text_5">获取验证码</text>
        </view>
      </view>
      <button class="button_1 flex-col" @click="onClick_1">
        <text class="text_6">确定</text>
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
  mounted() {
    wx.setNavigationBarTitle({
      title: "更换手机号",
    });
  },
  data() {
    return {
      constants: {},
    };
  },
  methods: {
    back() {
      console.log("back");
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
@import "../../common/common.scss";
@import "./index.rpx.scss";
</style>
