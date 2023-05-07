<template>
  <div class="group_5 flex-col" :class="{close:!visible}">
    <div class="group_11 flex-row justify-between" @click="changeVisible">
      <span class="text_15">筹款人宣传语</span>
      <img
        class="icon_4"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng44ac6d6e6afa18c6c29fb960ce8f8601230573a70bfa84dbc9617d7125de3ea3" />
    </div>
    <div class="text-wrapper_3 flex-col">
      <span class="text_16">将用于感谢捐款人</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "f-slogan",
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
.group_5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 690rpx;
  align-self: center;
  margin-top: 20rpx;
  padding: 34rpx 21rpx 20rpx 19rpx;

  &.close {
    overflow: hidden;
    height: 100rpx;
    .up {
      transform: rotate(-180deg);
    }
  }

  .group_11 {
    width: 650rpx;

    .text_15 {
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 32rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 45rpx;
    }

    .icon_4 {
      width: 32rpx;
      height: 18rpx;
      margin: 14rpx 0 13rpx 0;
    }
  }

  .text-wrapper_3 {
    background-color: rgba(249, 249, 249, 1);
    border-radius: 12px;
    margin-top: 38rpx;
    padding: 25rpx 398rpx 136rpx 28rpx;

    .text_16 {
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 28rpx;
      font-weight: NaN;
      text-align: justify;
      white-space: nowrap;
      line-height: 40rpx;
    }
  }
}
</style>
