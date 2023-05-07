<template>
  <div class="page flex-col">
    <rs-nav-bar title="发起筹款" @back="back" />
    <f-basic></f-basic>
    <f-title></f-title>
    <f-package></f-package>
    <f-slogan></f-slogan>

    <div class="image-text_16 flex-row justify-between align-center">
      <checkbox class="checkbox_1 flex-col" style="transform:scale(0.7)" value="cb" checked="true" />
      <span class="text_17">请阅读并确认《捐赠者协议》</span>
    </div>

    <div class="text-wrapper_6 flex-col">
      <span class="text_18">*为保护隐私，以上信息仅用于核验、存档、不予公开</span>
    </div>

    <div class="section_6 flex-col">
      <button class="button_1 flex-col" @click="onClick_1">
        <span class="text_19">提交审核</span>
      </button>
    </div>
  </div>
</template>

<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";
import fBasic from "./components/basic";
import fTitle from "./components/title";
import fPackage from "./components/package";
import fSlogan from "./components/slogan.vue";

export default {
  components: {
    rsNavBar,
    fBasic,
    fTitle,
    fPackage,
    fSlogan,
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
@import "./index.rpx.scss";
::v-deep .uni-date-x {
  background: #f9f9f9 !important;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
}
</style>





