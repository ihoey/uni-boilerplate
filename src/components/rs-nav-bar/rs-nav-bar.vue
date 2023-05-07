<template>
  <!-- 自定义导航栏 -->
  <view class="rs-nav-bar">
    <!-- 占位状态栏 -->
    <view
      class="status-bar"
      :style="{
        height: statusBarHeight !== null ? `${statusBarHeight}px` : null,
      }"></view>
    <view class="nav-bar justify-between">
      <view class="bar-left align-center" @click="back">
        <!-- <text class="rs-icon rs-icon-back_btn_nor"> -->
        <image
          class="icon_1"
          referrerpolicy="no-referrer"
          src="/static/images/info/SketchPng656c1f0a087ddf2e0ec98913747b9fbe36c1097279c1c092bf009f3b2418e90b.png" />
        <!-- </text> -->
      </view>
      <view class="title">{{ title }}</view>
      <view class="bar-right align-items-center"></view>
    </view>

  </view>
</template>

<script>
export default {
  name: "rs-nav-bar",
  emits: ["back", "heightChange"],
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      height: 0,
    };
  },
  computed: {
    systemInfo() {
      return this.$store.state.systemInfo;
    },
    statusBarHeight() {
      if (this.systemInfo) {
        return this.systemInfo.statusBarHeight;
      }
      return 20;
    },
  },
  mounted() {
    setTimeout(() => {
      this.getComponentHeight();
    }, 50);
  },
  methods: {
    isIOS() {
      return (
        !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ||
        u.indexOf("iPad") > -1 ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      );
    },
    back() {
      this.$emit("back");
    },
    // 判断是否是 iphone X 系列手机
    isIphoneX() {
      if (this.isIOS) {
        // iPhone X、iPhone XS
        const isIPhoneX =
          window.devicePixelRatio &&
          window.devicePixelRatio === 3 &&
          window.screen.width === 375 &&
          window.screen.height === 812;
        // iPhone XS Max
        const isIPhoneXSMax =
          window.devicePixelRatio &&
          window.devicePixelRatio === 3 &&
          window.screen.width === 414 &&
          window.screen.height === 896;
        // iPhone XR
        const isIPhoneXR =
          window.devicePixelRatio &&
          window.devicePixelRatio === 2 &&
          window.screen.width === 414 &&
          window.screen.height === 896;
        return isIPhoneX || isIPhoneXSMax || isIPhoneXR;
      }
      return false;
    },
    getComponentHeight() {
      // .in(this) 将选择器的选取范围更改为本组件内
      const query = wx.createSelectorQuery().in(this);
      query
        .select(".rs-nav-bar")
        .boundingClientRect()
        .exec((res) => {
          if (res.length > 0 && res[0].height) {
            const height = res[0].height;
            this.height = height;
            this.$emit("heightChange", height);
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../pages/common/common.scss";

.rs-nav-bar {
  position: relative;
  // background-color: $nav-color;
  z-index: 1;

  .status-bar {
    width: 100%;
    // // #ifdef  H5
    // height: calc(7px + env(safe-area-inset-top));
    // // #endif

    // // ifndef H5
    // height: var(--status-bar-height);
    // // endif
  }

  .nav-bar {
    height: 80rpx;
    padding: 0 30rpx;
    // padding: 21rpx 30rpx 31rpx 30rpx;
  }
  .bar-left,
  .bar-right {
    width: 140rpx;
    height: 100%;
    padding: 0 10rpx;
  }
  .bar-left {
    .icon_1 {
      width: 19rpx;
      height: 32rpx;
      // margin: 7rpx 0 6rpx 0;
    }
    .rs-icon {
      color: #ffffff;
      font-size: 40rpx;
    }
  }
  .title {
    // color: #ffffff;
    // font-size: 32rpx;
    line-height: 88rpx;
    // font-weight: 600;
    text-align: center;
    flex-grow: 1;
  }
}
</style>
