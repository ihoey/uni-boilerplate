<template>
  <view class="page flex-col">
    <rs-nav-bar title="发起筹款" @back="back" />
    <view class="group_3 flex-col" :class="{close:!visible1}">
      <view class="box_7 flex-row justify-between" @click="changeVisible('visible1')">
        <text class="text_3">志愿者信息</text>
        <uni-icons class="arrorR" type="top" color="#999" size="15"></uni-icons>
      </view>
      <text class="text_4">社工</text>
      <view class="box_2 flex-col"></view>
      <text class="text_4">社工</text>
      <view class="box_2 flex-col"></view>
      <view class="box_8 flex-row justify-between">
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465',0)"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" />
        </view>
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg',1)"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg" />
        </view>

      </view>
    </view>
    <view class="group_3 flex-col" :class="{close:!visible2}">
      <view class="box_7 flex-row justify-between" @click="changeVisible('visible2')">
        <text class="text_3">老人基础信息</text>
        <uni-icons class="arrorR" type="top" color="#999" size="15"></uni-icons>
      </view>

      <view class="box_8 flex-row justify-between">
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465',0)"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" />
        </view>
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg',1)"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg" />
        </view>

      </view>

    </view>
    <view class="group_3 flex-col" :class="{close:!visible3}">
      <view class="box_7 flex-row justify-between" @click="changeVisible('visible3')">
        <text class="text_3">辅助证明</text>
        <uni-icons class="arrorR" type="top" color="#999" size="15"></uni-icons>
      </view>

      <view class="box_8 flex-row justify-between">
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465',0)"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" />
        </view>
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg',1)"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg" />
        </view>

      </view>

    </view>
    <view class="group_3 flex-col" :class="{close:!visible4}">
      <view class="box_7 flex-row justify-between" @click="changeVisible('visible4')">
        <text class="text_3">筹款标题</text>
        <uni-icons class="arrorR" type="top" color="#999" size="15"></uni-icons>
      </view>
      <text class="text_8">小善大爱xxx</text>
      <view class="group_7 flex-col"></view>
      <text class="text_9">筹款人故事</text>
      <text class="text_10">山区贫困&nbsp;家境贫寒</text>
      <text class="text_11">老人生活图片</text>
      <view class="box_8 flex-row justify-between">
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465')"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" />
        </view>
        <view class="group_4 flex-col">
          <image
            @click="clickImg('https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465')"
            class="image_4" mode="aspectFit"
            referrerpolicy="no-referrer"
            src="https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465" />
        </view>

      </view>
    </view>
    <view class="group_3 flex-col" :class="{close:!visible5}">
      <view class="box_7 flex-row justify-between" @click="changeVisible('visible5')">
        <text class="text_3">筹款金额</text>
        <uni-icons class="arrorR" type="top" color="#999" size="15"></uni-icons>
      </view>
      <text class="text_14">1200.00</text>
      <view class="group_10 flex-col"></view>
      <text class="text_15">捐赠时间</text>
      <view class="text-wrapper_8 flex-row justify-between">
        <text class="text_16">2023年3月10日</text>
        <text class="text_17">至</text>
        <text class="text_18">2023年6月10日</text>
      </view>
    </view>
    <view class="group_3 flex-col" :class="{close:!visible6}">
      <view class="box_7 flex-row justify-between" @click="changeVisible('visible6')">
        <text class="text_3">筹款人宣传语</text>
        <uni-icons class="arrorR" type="top" color="#999" size="15"></uni-icons>
      </view>
      <view class="text-wrapper_9 flex-row">
        <text class="text_20">感恩有你</text>
      </view>
    </view>
    <text class="text_21">
      *为保护隐私，以上信息仅用于核验、存档、不予公开
    </text>

  </view>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";
export default {
  components: { rsNavBar },
  data() {
    return {
      visible1: true,
      visible2: true,
      visible3: true,
      visible4: true,
      visible5: true,
      visible6: true,
      arrImg: [
        "https://img1.baidu.com/it/u=1357002844,4027162325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=465",
        "https://picnew9.photophoto.cn/20150510/xuankufeixiangdeyingwutupian-09960611_1.jpg",
      ],
    };
  },
  mounted() {},
  methods: {
    onClick_1() {
      alert(1);
    },
    clickImg(url, num) {
      uni.previewImage({ current: num, urls: this.arrImg });
    },
    changeVisible(val) {
      this[val] = !this[val];
    },
  },
};
</script>
<style lang='scss'>
@import "./index.rpx.scss";
</style>
