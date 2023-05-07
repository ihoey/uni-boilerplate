<template>
  <div class="section_3 flex-col" :class="{close:!visible}">
    <div class="box_15 flex-row justify-between" @click="changeVisible">
      <span class="text_3">筹款标题</span>
      <img
        class="icon_2"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng44ac6d6e6afa18c6c29fb960ce8f8601230573a70bfa84dbc9617d7125de3ea3" />
    </div>
    <rs-input class="text_4" placeholder="剪简短描述您的情况或需要什么帮助"></rs-input>
    <div class="group_3 flex-col"></div>
    <span class="text_5">筹款人故事</span>
    <div class="text-wrapper_1 flex-col">
      <!-- <span class="text_6">筹款人的生活详情及需救助内容</span> -->
      <textarea class="text_6" name="" id="" cols="30" rows="5" placeholder="筹款人的生活详情及需救助内容"></textarea>
    </div>
    <div class="text-group_7 flex-col">
      <span class="text_7">老人生活图片</span>
      <span class="text_23">可上传多张</span>
    </div>
    <f-upload placeholder="请上传老人生活图片"></f-upload>
  </div>
</template>
<script>
import rsInput from "@/components/rs-input/rs-input";
import fUpload from "../upload/upload";

export default {
  components: {
    rsInput,
    fUpload,
  },
  name: "f-title",
  data() {
    return {
      visible: true,
      imageStyles: {
        width: 160,
        height: 102,
      },
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
::v-deep .rs-input {
  padding: 0 0;
  .rs-input--input {
    padding: 0 26rpx;
    border-radius: 10rpx;
  }
}

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
    margin-top: 38rpx;
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
    padding: 25rpx 0 10rpx 28rpx;

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
}
</style>
