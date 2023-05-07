<template>
  <view class="page flex-col">
    <view class="section_1 flex-col">
      <view class="section_18 flex-row">
        <view class="nav-bar_2 flex-row">
          <image class="icon_1" referrerpolicy="no-referrer" src="/static/images/back.png" />
          <text class="text_2">小善筹</text>
          <image class="applet-top-bar_1" referrerpolicy="no-referrer"
                 src="/static/images/juankuan/SketchPng9b3de2a04d8c71a024ded39dac87a33d9bcb39c3d781be45f3717c0c25c5dd0e.png" />
        </view>
        <image class="image_2" referrerpolicy="no-referrer"
               src="/static/images/juankuan/SketchPngb4881c9dfa53665ee74d410ce58d599cef36767ddee6ace5d3de21edae9c7041.png" />
      </view>
      <view class="section_3 flex-col">
        <view class="group_1 flex-row justify-between">
          <text class="text_3">选择帮助金额</text>
          <view class="image-text_2 flex-row justify-between" :class="{ active: anonymous }" @click="anonymous = !anonymous">
            <view class="checkbox_1 flex-col"></view>
            <text class="text-group_1">匿名支持</text>
          </view>
        </view>
        <view class="grid_2 flex-row">
          <view class="text-wrapper_1 flex-col" v-for="(item, index) in loopData0" @click="selectIndex = index"
                :key="index" :class="{ active: selectIndex === index }">
            <text class="text_4">{{ item.lanhutext0 }}</text>
          </view>
        </view>
        <view class="text-wrapper_2 flex-col" @click="selectIndex = -1">
          <!-- <text class="text_5">其他金额</text> -->
          <rs-input v-model="thor" class="text_5" placeholder="其他金额"></rs-input>
        </view>
        <view class="text-wrapper_3 flex-row">
          <text class="text_6">寄语：</text>
          <text class="text_7">我要帮助{{ loopData0[selectIndex]?.lanhutext0 || thor }}元，希望老人可以身体健康</text>
        </view>
      </view>
      <view class="section_5 flex-col">
        <view class="text-wrapper_4 flex-col">
          <text class="text_8">筹款人的一段话：</text>
          <text class="text_9">
            感谢您为我献出的爱心，感恩有您，让我生活中又燃起了火光。
          </text>
        </view>
        <image class="image_3" referrerpolicy="no-referrer"
               src="/static/images/juankuan/SketchPngfeeb3b45ee6121ca8f4303e7a8505c7ab53be15960bff50482dcb6456a8240bf.png" />
      </view>
    </view>
    <view class="box_4 flex-col">
      <view class="box_1 flex-col">
        <text class="text_10">捐款人名称</text>
        <view class="text-wrapper_5 flex-col">
          <!-- <text class="text_25">请输入捐款人名称</text> -->
          <rs-input v-model="name" class="text_25" placeholder="请输入捐款人名称"></rs-input>
        </view>
      </view>
      <view class="list_2 flex-col">
        <view class="list-items_1 flex-col" v-for="(item, index) in loopData1" :key="index">
          <text class="text_12">{{ item.lanhutext0 }}</text>
          <view class="section_7 flex-col"></view>
          <view v-if="item.slot1 === 1" class="section_8 flex-col">
            <view class="box_5 flex-row justify-between" @click="switch_1 = !switch_1">
              <text class="text_13">我要留言</text>
              <image v-if="switch_1" class="switch_1" referrerpolicy="no-referrer"
                     src="/static/images/juankuan/SketchPng85e6af8e4da3b1c1018727dd6ce878f2af07149910d12ec681fec2f1795ca903.png" />
              <image v-else class="switch_1" referrerpolicy="no-referrer"
                     src="/static/images/juankuan/SketchPng1ed010fcaf6bb6f217df4aceb876844089b1ccd1b1055dcf58df875197908901.png" />
            </view>
            <!-- <view class="box_3 flex-col"></view> -->
            <textarea v-model="mark" class="box_3 flex-col"></textarea>
          </view>
        </view>
      </view>
    </view>
    <view class="section_9 flex-col">
      <view class="group_2 flex-row justify-between" @click="switch_2 = !switch_2">
        <view class="text-group_3 flex-col">
          <text class="text_14">是否开发票</text>
          <text class="text_15">*捐赠金额需大于1000元</text>
        </view>
        <image v-if="switch_2" class="switch_2" referrerpolicy="no-referrer"
               src="/static/images/juankuan/SketchPng1ed010fcaf6bb6f217df4aceb876844089b1ccd1b1055dcf58df875197908901.png" />
        <image v-else class="switch_2" referrerpolicy="no-referrer"
               src="/static/images/juankuan/SketchPng85e6af8e4da3b1c1018727dd6ce878f2af07149910d12ec681fec2f1795ca903.png" />
      </view>
      <view class="text-wrapper_7 flex-row justify-between">
        <text class="text_16">票据类型</text>
        <text class="text_17">电子票据</text>
      </view>
      <view class="section_11 flex-col"></view>
      <text class="text_18">票据主体</text>
      <view class="section_12 flex-col position-relative">
        <rs-input v-model="name" class="input" placeholder=""></rs-input>
      </view>
      <text class="text_19">票据抬头</text>
      <view class="section_13 flex-col position-relative">
        <rs-input v-model="name" class="input" placeholder=""></rs-input>

      </view>
      <text class="text_20">统一社会信用代码</text>
      <view class="section_14 flex-col position-relative">
        <rs-input v-model="name" class="input" placeholder=""></rs-input>

      </view>
      <text class="text_21">收件人邮箱</text>
      <view class="section_15 flex-col position-relative">
        <rs-input v-model="name" class="input" placeholder=""></rs-input>
      </view>
      <text class="text_22">收件人电话</text>
      <view class="section_15 flex-col position-relative">
        <rs-input v-model="name" class="input" placeholder=""></rs-input>
      </view>
    </view>
    <view class="section_16 flex-col">
      <button class="button_1 flex-col" @click="onClick_1">
        <text class="text_23">立即捐赠</text>
      </button>
    </view>
  </view>
</template>
<script>
import rsInput from "@/components/rs-input/rs-input";

export default {
  components: {
    rsInput,
  },
  data() {
    return {
      selectIndex: 0,
      thor: "",
      name: "",
      mark: "",
      anonymous: false,
      switch_1: true,
      switch_2: false,
      loopData0: [
        {
          lanhutext0: "10元",
        },
        {
          lanhutext0: "20元",
        },
        {
          lanhutext0: "30元",
        },
        {
          lanhutext0: "40元",
        },
        {
          lanhutext0: "50元",
        },
        {
          lanhutext0: "60元",
        },
      ],
      loopData1: [
        { lanhutext0: "我要留言", slot1: 1 },
        { lanhutext0: "我要留言" },
      ],
      constants: {},
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
