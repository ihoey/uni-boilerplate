<template>
  <div class="page flex-col">
    <!-- <rs-nav-bar title="捐款详情" @back="back" /> -->
    <div class="header-bg"></div>
    <div class="group_1 flex-col">
      <div class="group_3 flex-row">
        <div class="text-wrapper_5 flex-col">
          <span class="text_3">3</span>
          <span class="text_4">帮助发起项目(次)</span>
        </div>
        <div class="line-1"></div>
        <!-- <img class="image_2" referrerpolicy="no-referrer"
             src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdd8c45b2d428b6d82db6985467094c630d144462d0f2af814fec2c4307d311fc" /> -->
        <div class="text-wrapper_6 flex-col">
          <span class="text_5">0</span>
          <span class="text_6">计划爱心包总数</span>
        </div>
      </div>
      <span class="text_7">各项目进度</span>
    </div>
    <div class="box_7 flex-col">
      <div class="image-text_2 flex-row">
        <div class="image-text_18 flex-row justify-between">
          <div class="group_5 flex-col"></div>
          <div class="section_1 flex-col">
            <div class="text-group_17 flex-col">
              <span class="text_11">孤寡老人的医疗救治计划</span>
              <span class="text_12">为孤寡老人、失能失智老人提供基础医疗服务行动</span>
            </div>
            <div v-if="true" class="tag_1 flex-row">
              <div class="image-text_19 flex-row justify-between">
                <img class="icon_2" referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3cd7f15f27fe371d17e592cd8bf04885c4209a0d10466e21b1973f88222da383" />
                <span class="text-group_4">审核未通过</span>
              </div>
            </div>
          </div>
        </div>
        <button class="button_2 flex-col green" @click="onClick_1">
          <span class="text_13 ">修改资料</span></button><img class="image_4" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf85821876343eed38fa7d8c9a3263535e8c7328952693eb2e18012c2bfadc96b" />
      </div>
    </div>
    <div class="group_10 flex-col">
      <button class="button_4 flex-col" @click="onClick_4">
        <span class="text_20">帮助发起捐款</span>
      </button>
    </div>
  </div>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";

export default {
  components: {
    rsNavBar,
  },
  data() {
    return {
      loopData0: [],
    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
    toPath(url) {
      wx.navigateTo({
        url,
      });
    },
    back() {
      wx.switchTab({
        url: "/pages/my/index",
      });
    },
  },
};
</script>




<style lang='scss'>
@import "../common/common.scss";
@import "./index.rpx.scss";
</style>





