<template>
  <div class="section_7 flex-col" :class="{close:!visible}">
    <div class="group_12 flex-row justify-between" @click="changeVisible">
      <span class="text_20">{{title}}</span>
      <img
        class="icon_5"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga3a0a7d64d472853d20b83eba0a03b8649bdd5d41e2f9bc445bbe2f40f37beff" />
    </div>
    <span v-show="visible" class="text_21">可上传多张</span>
    <div class="group_13 flex-row justify-between">
      <f-upload class="zm1" placeholder="请上传医疗病例"></f-upload>
      <f-upload class="fm1" placeholder=" 请上传残障证明"></f-upload>
      <f-upload class="yhk1" placeholder="请上传辅助证明"></f-upload>

    </div>
  </div>
</template>
<script>
import rsInput from "@/components/rs-input/rs-input";

import fUpload from "../upload/upload";

export default {
  components: {
    fUpload,
    rsInput,
  },
  name: "f-basic",
  props: {
    title: {
      type: String,
      default: "请上传基本信息",
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible;
    },
    onUpdatePic(event, type) {
      console.log(event, type);
    },
  },
};
</script>
<style lang="scss">
.section_7 {
  margin-top: 40rpx;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  width: 690rpx;
  align-self: center;
  padding: 34rpx 20rpx 19rpx 19rpx;
  transition: all 0.3s;

  &.close {
    overflow: hidden;
    height: 100rpx;
    .up {
      transform: rotate(-180deg);
    }
  }

  .group_12 {
    width: 651rpx;

    .text_20 {
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 32rpx;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      white-space: nowrap;
      line-height: 45rpx;
    }

    .icon_5 {
      width: 32rpx;
      height: 18rpx;
      margin: 14rpx 0 13rpx 0;
    }
  }

  .text_21 {
    width: 651rpx;
    // height: 80rpx;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-weight: NaN;
    text-align: left;
    line-height: 40rpx;
    margin-top: 13rpx;
  }

  .group_13 {
    width: 650rpx;
    flex-wrap: wrap;

    .zm::v-deep .upload {
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng316d2332d57a20754dc0c2e7c611f92362d53edf4ed7df65ce27614df6dc0a69)
        100% no-repeat;
      background-size: 100% 100%;
    }

    .fm::v-deep .upload {
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60663263e8d60205a5c931d2c4d22c87fd9e686482d566200cc7394e0762d2f1)
        100% no-repeat;
      background-size: 100% 100%;
    }

    .yhk::v-deep .upload {
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngefc7215121e19eec0433712112b02cbcbffcb1d4843ffa862ae42140ce617f53)
        100% no-repeat;
      background-size: 100% 100%;
    }
  }

  .text_25 {
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
    line-height: 45rpx;
    margin: 40rpx 458rpx 0 1rpx;
  }

  .text_26 {
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 28rpx;
    font-weight: NaN;
    text-align: justify;
    white-space: nowrap;
    line-height: 40rpx;
    margin-top: 10rpx;
  }

  .block_6 {
    background-color: rgba(233, 233, 233, 1);
    width: 649rpx;
    height: 1rpx;
    // margin-top: 10rpx;
  }

  ::v-deep .rs-input {
    padding: 0 0;
    .rs-input--input {
      padding: 0 26rpx;
      // background-color: rgb(249, 249, 249);
      border-radius: 10rpx;
    }
  }
}
</style>
