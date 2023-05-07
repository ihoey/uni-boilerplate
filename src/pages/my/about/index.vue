<template>
  <view class="page flex-col">

    <rs-nav-bar title="关于我们" @back="back" />

    <view class="box_4 flex-col">
      <view class="text-group_3 flex-col">
        <text class="text_3">产品理念</text>
        <text class="paragraph_1">
          随着我国人口老龄化进程的不断加快，如果提高广大老年人的生活质量和生命质量，已逐渐引起了全社会的重视。特别针对孤寡、无保障、失能失智、贫困地区的老年人，他们在面对养老现状所存在的个人费用不足、子女负担过大、护理人员短缺等难题时更需要全社会的关注与帮扶。
          <br />
          <br />
        </text>
      </view>
      <view class="box_1 flex-col"></view>
      <view class="text-group_4 flex-col">
        <text class="text_4">建议与反馈</text>
        <text class="text_5">请填写您的邮箱或手机号及相关建议</text>
      </view>
      <view class="input_1 flex-col">
        <rs-input v-model="value" class="text_6" placeholder="请填写手机号或邮箱"></rs-input>
      </view>
      <view class="box_2 flex-col">
        <view class="text-wrapper_3 flex-row">
          <textarea v-model="value" class="text_6" placeholder="请留下您宝贵的意见，我们将努力改进"></textarea>
          <!-- <rs-input v-model="value" class="text_6" placeholder="请留下您宝贵的意见，我们将努力改进"></rs-input> -->
        </view>
        <view class="text-wrapper_4 flex-row">
          <text class="text_8">0/200</text>
        </view>
      </view>
      <button class="button_1 flex-col" @click="onClick_1">
        <text class="text_9">确定</text>
      </button>
    </view>
  </view>
</template>
<script>
import rsInput from "@/components/rs-input/rs-input";
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";

export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    rsInput,
    rsNavBar,
  },
  computed: {},
  methods: {
    back() {
      console.log("back");
      // wx.navigateBack({
      //   delta: 1,
      // });
      wx.switchTab({
        url: "/pages/my/index",
      });
    },
    onClick_1() {
      // alert(1);
    },
  },
};
</script>
<style lang="scss">
@import "./index.rpx.scss";
</style>
