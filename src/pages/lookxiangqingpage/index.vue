<template>
  <view class="page flex-col">
    <view class="group_3 flex-col">
      <view class="box_7 flex-row justify-between">
        <text class="text_3">老人基础信息</text>
        <image
          class="image_4"
          referrerpolicy="no-referrer"
          src="" />
      </view>
      <view class="box_8 flex-row justify-between">
        <view class="group_4 flex-col">
          <!-- <view class="text-wrapper_1 flex-col">
            <uni-section title="自定义图片大小" type="line">
              <view class="example-body ">
                <uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
                </uni-file-picker>
                <uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all">
                </uni-file-picker>
              </view>
            </uni-section>
          </view> -->
        </view>

      </view>

    </view>
  </view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      imageStyles: {
        width: 64,
        height: 64,
        border: {
          radius: "50%",
        },
      },
      listStyles: {
        // 是否显示边框
        border: true,
        // 是否显示分隔线
        dividline: true,
        // 线条样式
        borderStyle: {
          width: 1,
          color: "blue",
          style: "dashed",
          radius: 2,
        },
      },
      fileLists: [
        {
          url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
          extname: "png",
          name: "shuijiao.png",
        },
        {
          url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
          extname: "png",
          name: "uniapp-logo.png",
        },
        {
          url: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",
          extname: "png",
          name: "shuijiao.png",
        },
      ],
    };
  },
  methods: {
    onClick_1() {
      alert(1);
    },
  },
};
</script>
<style lang='scss'>
@import "../common/common.scss";
@import "./index.rpx.scss";
</style>
