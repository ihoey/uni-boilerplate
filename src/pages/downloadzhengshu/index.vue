<template>
  <view class="page flex-col">
    <rs-nav-bar title="发起筹款" @back="back" />
    <view class="section_2 flex-col">
      <view class="section_3 flex-row">
        <view class="text-wrapper_2 flex-col">
          <text class="text_2">爱心网友&nbsp;感谢您</text>
          <text class="text_3">帮助&nbsp;[孤寡老人的医疗救治计划]</text>
        </view>
        <image
          class="image_2"
          referrerpolicy="no-referrer"
          src="https://lmg.jj20.com/up/allimg/tp09/210H51R3313N3-0-lp.jpg" />
      </view>
      <button class="button_1 flex-col" @click="onClickDownload">
        <text class="text_4">下载保存证书</text>
      </button>
      <view class="group_2 flex-col">
        <view class="image-wrapper_1 flex-col">
          <image
            class="image_3"
            referrerpolicy="no-referrer"
            src="https://lmg.jj20.com/up/allimg/tp09/210H51R3313N3-0-lp.jpg" />
        </view>
      </view>
      <view class="image-wrapper_2 flex-col">
        <image
          class="image_4"
          referrerpolicy="no-referrer"
          src="https://lmg.jj20.com/up/allimg/tp09/210H51R3313N3-0-lp.jpg" />
      </view>
    </view>

  </view>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";
import downloadUtil from "@/utils/download.js";
export default {
  name: "zhengshu",
  components: { rsNavBar },
  data() {
    return {};
  },
  methods: {
    onClickDownload() {
      downloadUtil.downloadQRCode(url);
    },
  },
};
</script>
<style lang='scss'>
@import "./index.rpx.scss";
</style>
