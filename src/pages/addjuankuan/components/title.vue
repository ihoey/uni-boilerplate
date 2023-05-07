<template>
  <div class="section_3 flex-col" :class="{close:!visible}">
    <div class="box_15 flex-row justify-between" @click="changeVisible">
      <span class="text_3">筹款标题</span>
      <img
        class="icon_2"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng44ac6d6e6afa18c6c29fb960ce8f8601230573a70bfa84dbc9617d7125de3ea3" />
    </div>
    <span class="text_4">剪简短描述您的情况或需要什么帮助</span>
    <div class="group_3 flex-col"></div>
    <span class="text_5">筹款人故事</span>
    <div class="text-wrapper_1 flex-col">
      <span class="text_6">筹款人的生活详情及需救助内容</span>
    </div>
    <div class="text-group_7 flex-col">
      <span class="text_7">老人生活图片</span>
      <span class="text_23">可上传多张</span>
    </div>
    <div class="group_4 flex-col">
      <img
        class="image_2"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1c6536c181849e464360c10ec6adb9bf6fe61df5436be6f19b11a3a4be7e4283" />
      <span class="text_8">请上传老人生活图片</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "f-title",
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
.section_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 690rpx;
  align-self: center;
  margin-top: 20rpx;
  padding: 34rpx 21rpx 31rpx 19rpx;

  &.close {
    height: 100rpx;
    overflow: hidden;
    .up {
      transform: rotate(-180deg);
    }
  }

  .box_15 {
    width: 650rpx;

    .text_3 {
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 32rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 45rpx;
    }

    .icon_2 {
      width: 32rpx;
      height: 18rpx;
      margin: 14rpx 0 13rpx 0;
    }
  }

  .text_4 {
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 28rpx;
    font-weight: NaN;
    text-align: justify;
    white-space: nowrap;
    line-height: 40rpx;
    margin: 38rpx 202rpx 0 0;
  }

  .group_3 {
    background-color: rgba(233, 233, 233, 1);
    width: 649rpx;
    height: 1rpx;
    margin: 22rpx 0 0 1rpx;
  }

  .text_5 {
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 45rpx;
    margin: 20rpx 490rpx 0 0;
  }

  .text-wrapper_1 {
    background-color: rgba(249, 249, 249, 1);
    border-radius: 12px;
    margin-top: 20rpx;
    padding: 25rpx 230rpx 136rpx 28rpx;

    .text_6 {
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 28rpx;
      font-weight: NaN;
      text-align: justify;
      white-space: nowrap;
      line-height: 40rpx;
    }
  }

  .text-group_7 {
    margin: 30rpx 457rpx 0 1rpx;

    .text_7 {
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 32rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 45rpx;
    }

    .text_23 {
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 24rpx;
      font-weight: NaN;
      text-align: left;
      white-space: nowrap;
      line-height: 40rpx;
      margin: 10rpx 72rpx 0 0;
    }
  }

  .group_4 {
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5ed2b867a8dbb7e662eceed8c94123d603f57fa0de95401843414c3003f7f6e4)
      100% no-repeat;
    background-size: 100% 100%;
    margin: 20rpx 338rpx 0 0;
    padding: 35rpx 48rpx 43rpx 48rpx;

    .image_2 {
      width: 66rpx;
      height: 66rpx;
      align-self: center;
    }

    .text_8 {
      overflow-wrap: break-word;
      color: rgba(249, 101, 30, 1);
      font-size: 24rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 33rpx;
      margin-top: 24rpx;
    }
  }
}
</style>
