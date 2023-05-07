<template>
  <div class="page flex-col">
    <rs-nav-bar title="账户明细" @back="back" />

    <div class="section_2 flex-col">
      <span class="text_20">总计提现金额（元）</span>
      <div class="text-wrapper_2 flex-row">
        <span class="text_21">元</span>
        <span class="text_22">12800.00</span>
      </div>
    </div>

    <div class="block_2 flex-col">
      <div class="group_5 flex-row justify-between">
        <span class="text_1">提现记录</span>
        <div class="image-text_2 flex-row justify-between" @click="dialogShow">
          <img
            class="icon_1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8c546ea32ccc2c7c0c953b8363774200022865ce6e90e251467b9fe45b00b831" />
          <span class="text-group_1">筛选</span>
        </div>
      </div>
    </div>
    <div class="box_3 flex-col">

      <div class="block_3 flex-row justify-between">
        <div class="text-group_10 flex-col">
          <span class="text_2">项目名称：孤寡老人的看护计划</span>
          <span class="text_3">2022-02-22&nbsp;11:20:12</span>
        </div>
        <div class="text-group_11 flex-col">
          <span class="text_4">-150,2</span>
          <span class="text_5 shibai">成功</span>
        </div>
      </div>
      <div class="block_3 flex-row justify-between">
        <div class="text-group_10 flex-col">
          <span class="text_2">项目名称：孤寡老人的看护计划</span>
          <span class="text_3">2022-02-22&nbsp;11:20:12</span>
        </div>
        <div class="text-group_11 flex-col">
          <span class="text_4">-150,2</span>
          <span class="text_5 shibai">成功</span>
        </div>
      </div>
    </div>
    <zhanghumignxi ref="hhhhh" :showMode="showMode"></zhanghumignxi>
  </div>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";
import zhanghumignxi from "../zhanghumignxi/index";
export default {
  name: "huMain",
  components: {
    rsNavBar,
    zhanghumignxi,
  },
  data() {
    return { showMode: false };
  },
  methods: {
    back() {
      wx.switchTab({
        url: "/pages/my/index",
      });
    },
    dialogShow() {
      this.$refs.hhhhh.$refs.popppp.open();
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "../common/common.scss";
@import "./index.rpx.scss";
</style>
