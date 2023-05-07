<template>
  <view class="page flex-col">
    <view class="box_1 flex-col">
      <view class="image-wrapper_1 flex-col">
        <view class="nav-bar_4 flex-row" @click="back">
          <image class="image_1" referrerpolicy="no-referrer" src="/static/images/back.png" />
          <text class="text_4">小善筹</text>
        </view>
      </view>
      <view class="text-wrapper_1 flex-col">
        <text class="text_1">图片{{ currentSwiperIndex }}/{{ swiperList.length }}</text>
      </view>
      <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
        :duration="duration" @change="onSwiperChange">
        <block v-for="item in swiperList" :key="item">
          <swiper-item>
            <image class="swiper-item " :src="item">
            </image>
          </swiper-item>
        </block>
      </swiper>
    </view>

    <view class="text-wrapper_2 flex-col" @click="toPage('/pages/details_tab/main')">
      <text class="text_2">{{ message.fundraisingTitle }}</text>
      <text class="text_5">总项目详情</text>
      <image class="thumbnail_1" referrerpolicy="no-referrer" src="/static/images/more.png" />
    </view>
    <view class="box_2 flex-row">
      <view class="group_5 flex-col">
        <view class="text-wrapper_4 flex-row justify-between">
          <text class="text_15">所需爱心包：{{ message.lbNumber }}</text>
          <view class="text_16">
            <text class="text_18">可获得爱心包：</text>
            <text class="text_19">{{ message.availableLbNum }}</text>
            <text class="text_20"></text>
            <text class="text_21">个</text>
          </view>
        </view>
        <view class="text-group_10 flex-col">
          <text class="text_6">项目内容</text>
          <text class="text_7">
            {{ message.story }}
          </text>
        </view>
        <view class="box_3 flex-col"></view>
        <text class="text_8">查看全部</text>
        <view class="box_4 flex-row justify-between">
          <view class="image-text_19 flex-row justify-between">
            <image class="label_1" referrerpolicy="no-referrer"
              src="/static/images/details/SketchPngac87b85df7a1bc8b98a10c97322da80517b5d2132ca8bf34b52b2068aceaef54.png" />
            <text class="text-group_2">信息审核</text>
          </view>
          <text class="text_9">基础信息已核实{{ statusMessage }}</text>
        </view>
        <image class="image_4" referrerpolicy="no-referrer"
          src="/static/images/details/SketchPng6a9957d9ade600408d418b32bb1bbf2ed80241932005d60d05d6b93bec3dd59e.png" />
      </view>
      <view class="group_2 flex-row">
        <view class="image-text_20 flex-col" @click="switchTab('/pages/index/index')">
          <image class="label_4" referrerpolicy="no-referrer"
            src="/static/images/details/SketchPng60684e3b3edebcc91af51c04387d7c289ad4fbce5ff0b64b82a744a5b83661b8.png" />
          <text class="text-group_3">首页</text>
        </view>
        <view class="image-text_21 flex-col">
          <image class="label_5" referrerpolicy="no-referrer"
            src="/static/images/details/SketchPnga8f90a1c9592c21cefdd58146710ec1de0ed4475ee2beb8ac1935a7fa31d8f8d.png" />
          <text class="text-group_4">{{ message.sforwardNum }}次</text>
        </view>
        <button class="text-wrapper_3 flex-col" @click="onClick_1">
          <text class="text_10">我要帮助</text>
        </button>
      </view>
    </view>
  </view>
</template>
<script>
import { getInfo } from "@/apis/detail";

export default {
  data() {
    return {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
      currentSwiperIndex: 1,
      swiperList: [
        "http://localhost:3000/images/details/SketchPng90ce35b3cde27f93b14f2e70b035a73ddc99cdf472b6d45cef9ab855af51f3d6.png",
        "http://localhost:3000/images/details/cb3d2e128b334dc885ed62cfe9ac09c8_mergeImage.png",
      ],
      data: {
        subProject: {
          subProjectId: "10001",
          fundraisingTitle:
            "孤寡老人的爱心医疗救治计划啊啊啊啊啊啊啊啊啊啊啊啊",
          mainItemId: null,
          mainItemName: null,
          openId: "1",
          fundraisingAmount: 3000000,
          story:
            "一间狭小又破旧的房屋，屋内的陈设也乱七八糟，墙上到处挂满了蜘蛛网，一张古老又陈旧的老式床，零零散散的挂着一些衣服，床单被套没有叠整，看起来乱糟糟的。",
          projectType: "2",
          initiatorJob: "公务员",
          relationship: "admin",
          fundraisingMessage: "照顾老人",
          donorTime: "2023-04-04 17:50:30-2024-04-04 17:50:30",
          lbNumber: "30",
          availableLbNum: "3",
          projectProcess: "30%",
          loveSort: null,
          homeSort: null,
          lbAmount: 100,
          loveDisplay: null,
          homeDisplay: null,
          labelIds: "1,2,3",
          auditStatus: "1",
          forwardNum: "15",
          appletImg: [
            {
              searchValue: null,
              createBy: null,
              createTime: null,
              updateBy: null,
              updateTime: null,
              remark: null,
              params: {},
              startDate: null,
              endDate: null,
              start: null,
              end: null,
              id: null,
              openId: "1",
              subProjectId: "10001",
              mainItemId: null,
              imgType: "7-1",
              filePath: "456",
            },
          ],
        },
      },
      message: {},
      statusMessage: "",
    };
  },
  onLoad() {
    // this.setData({});
  },
  mounted() {
    // console.log(this);
    getInfo().then((res) => {
      console.log("res :>> ", res);
    });
    this.handleMessage();
  },
  methods: {
    back() {
      wx.navigateBack({
        delta: 1,
      });
    },
    switchTab(path) {
      console.log(path);
      wx.switchTab({
        url: path,
      });
    },
    toPage(path) {
      console.log(path);
      wx.navigateTo({
        url: path,
      });
    },
    handleMessage(data) {
      this.message = this.data.subProject;
      switch (+this.message.auditStatus) {
        case 1:
          this.statusMessage = "审核通过";
          break;
        case 2:
          this.statusMessage = "审核中";
          break;
        case 3:
          this.statusMessage = "审核未通过";
          break;
      }
    },
    onClick_1() {
      // alert(1);
    },
    onSwiperChange(event) {
      console.log("event", event);
      var current = event.target.current;
      // console.log(current);
      this.currentSwiperIndex = current + 1;
    },
  },
};
</script>

<style lang='scss'>
@import "../common/common.scss";
@import "./index.rpx.scss";
</style>

