<template>
  <div class="section_4 flex-col" :class="{close:!visible}">
    <div class="section_13 flex-row justify-between" @click="changeVisible">
      <span class="text_9">爱心包数量</span>
      <div class="image-text_15 flex-row justify-between">
        <span class="text-group_8">一个爱心包=300元</span>
        <img
          class="icon_3"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng44ac6d6e6afa18c6c29fb960ce8f8601230573a70bfa84dbc9617d7125de3ea3" />
      </div>
    </div>
    <span class="text_10">请填写所需爱心包数量</span>
    <div class="block_2 flex-col"></div>
    <span class="text_11">捐赠时间</span>
    <div class="text-wrapper_2 flex-row justify-between">
      <span class="text_12">开始时间</span> <span class="text_13">至</span>
      <span class="text_14">结束时间</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "f-package",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style lang="scss">
.section_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 690rpx;
  align-self: center;
  margin-top: 20rpx;
  padding: 34rpx 19rpx 45rpx 19rpx;

  &.close {
    overflow: hidden;
    height: 100rpx;
    .up {
      transform: rotate(-180deg);
    }
  }

  .section_13 {
    width: 650rpx;
    margin-right: 2rpx;

    .text_9 {
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 32rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 45rpx;
    }

    .image-text_15 {
      width: 267rpx;
      margin: 3rpx 0 5rpx 0;

      .text-group_8 {
        overflow-wrap: break-word;
        color: rgba(249, 101, 30, 1);
        font-size: 26rpx;
        font-weight: NaN;
        text-align: left;
        white-space: nowrap;
        line-height: 37rpx;
      }

      .icon_3 {
        width: 32rpx;
        height: 18rpx;
        margin: 11rpx 0 8rpx 0;
      }
    }
  }

  .text_10 {
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 28rpx;
    font-weight: NaN;
    text-align: justify;
    white-space: nowrap;
    line-height: 40rpx;
    margin: 38rpx 372rpx 0 0;
  }

  .block_2 {
    background-color: rgba(233, 233, 233, 1);
    width: 649rpx;
    height: 1rpx;
    margin: 22rpx 2rpx 0 1rpx;
  }

  .text_11 {
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 45rpx;
    margin: 20rpx 524rpx 0 0;
  }

  .text-wrapper_2 {
    background-color: rgba(249, 249, 249, 1);
    border-radius: 10px;
    width: 651rpx;
    margin: 20rpx 0 0 1rpx;
    padding: 26rpx 70rpx 26rpx 70rpx;

    .text_12 {
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 30rpx;
      letter-spacing: 1.0714285373687744px;
      font-weight: NaN;
      text-align: center;
      white-space: nowrap;
      line-height: 42rpx;
    }

    .text_13 {
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 28rpx;
      letter-spacing: 1px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
      line-height: 40rpx;
      margin-top: 1rpx;
    }

    .text_14 {
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 30rpx;
      letter-spacing: 1.0714285373687744px;
      font-weight: NaN;
      text-align: center;
      white-space: nowrap;
      line-height: 42rpx;
    }
  }
}
</style>
