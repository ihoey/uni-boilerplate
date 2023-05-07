<template>
  <uni-section title="">
    <view class="example-body">
      <uni-file-picker :limit="limit" :imageStyles="imageStyles">
        <div class="upload flex-col align-center justify-center">
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1c6536c181849e464360c10ec6adb9bf6fe61df5436be6f19b11a3a4be7e4283" />
          <span class="text_8">{{placeholder}}</span>
        </div>
      </uni-file-picker>
    </view>
  </uni-section>
</template>

<script>
export default {
  name: "f-upload",
  props: {
    placeholder: {
      type: String,
      default: "请上传",
    },
    limit: {
      default: 1,
    },
  },

  data() {
    return {
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
.upload {
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5ed2b867a8dbb7e662eceed8c94123d603f57fa0de95401843414c3003f7f6e4)
    100% no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;

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
</style>
