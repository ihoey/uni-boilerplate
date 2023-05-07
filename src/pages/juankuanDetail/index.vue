<template>
  <view class="page flex-col">
    <rs-nav-bar title="捐款详情" @back="back" />
    <view class="box_2">
      <view class="image-text_4">
        <view class="block_2"></view>
        <view class="group_3">
          <view class="text-group_7">
            <text lines="1" class="text_2">{{ constants.subProject.mainItemName }}</text>
            <text lines="1" class="text_3 ellipsis">{{ constants.subProject.story }}</text>
          </view>
          <button bindtap="onClick" class="text-wrapper_1">
            <text lines="1" class="text_4">再次捐款</text>
          </button>
        </view>
      </view>
    </view>
    <view class="box_3">
      <view class="text-wrapper_26">
        <text lines="1" class="text_5">我帮助过的项目</text>
      </view>
      <view class="text-wrapper_27">
        <text lines="1" class="text_6">帮助人</text>
        <text lines="1" class="text_7">{{ constants.oldManName }}</text>
      </view>
      <view class="text-wrapper_28">
        <text lines="1" class="text_8">捐赠金额</text>
        <text lines="1" class="text_9">{{ constants.total }}元</text>
      </view>
      <view class="text-wrapper_29">
        <text lines="1" class="text_10">留言内容</text>
        <text lines="1" class="text_11">{{ constants.messageContent }}</text>
      </view>
      <view class="text-wrapper_30">
        <text lines="1" class="text_12">电子证书</text>
        <text lines="1" class="text_13">{{ constants.certificateStatus == 1 ? '已发放' : '未发放' }}</text>
      </view>
    </view>
    <view class="box_4">
      <text lines="1" class="text_14">票据信息</text>
      <view class="grid_4">
        <view class="text-wrapper_31-0">
          <text lines="1" class="text_15-0">票据类型</text>
          <text lines="1" class="text_16-0">票据情况</text>
        </view>
        <view class="text-wrapper_31-1">
          <text lines="1" class="text_15-1">{{ constants.invoiceMethod }}</text>
          <text lines="1" class="text_16-1">暂未开票</text>
        </view>
        <view class="text-wrapper_31-2">
          <text lines="1" class="text_15-2">票据主体</text>
          <text lines="1" class="text_16-2">票据抬头</text>
        </view>
        <view class="text-wrapper_31-3">
          <text lines="1" class="text_15-3">{{ constants.invoiceInfo.subject }}</text>
          <text lines="1" class="text_16-3">{{ constants.invoiceInfo.drawerName }}</text>
        </view>
      </view>
      <view class="text-wrapper_32">
        <text lines="1" class="text_17">统一社会信用代码</text>
        <text lines="1" class="text_18">{{ constants.invoiceInfo.creditCode }}</text>
      </view>
      <view class="box_8">
        <view class="text-wrapper_33">
          <text lines="1" class="text_19">收件人邮箱</text>
          <text lines="1" class="text_20">收件人电话</text>
        </view>
        <view class="text-group_8">
          <text lines="1" decode="true" class="paragraph_1">{{ constants.invoiceInfo.email }}<br /></text>
          <text lines="1" class="text_21">{{ constants.invoiceInfo.phone }}</text>
        </view>
      </view>
    </view>

  </view>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";

export default {
  components: {
    rsNavBar,
  },
  data() {
    return {
      constants: {
        invoiceInfo: {
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
          id: "1",
          openId: "1",
          mainItemId: "1",
          subProjectId: null,
          drawerName: null,
          invoiceTime: null,
          subject: "111",
          withdrawType: "1",
          title: "111",
          creditCode: "111",
          email: "123@163.com",
          phone: "13514845151",
          invoiceAmount: null,
          invoiceMethod: null,
        },
        certificateStatus: "1",
        subProject: {
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
          subProjectId: "10001",
          fundraisingTitle:
            "孤寡老人的爱心医疗救治计划啊啊啊啊啊啊啊啊啊啊啊啊",
          mainItemId: null,
          mainItemName: "哈哈",
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
          loveSort: "3",
          homeSort: "4",
          lbAmount: 100,
          loveDisplay: "1",
          homeDisplay: "1",
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
              imgType: "10",
              filePath: "456",
            },
          ],
        },
        oldManName: "张三",
        messageContent: "祝您身体安康！",
        total: "1000.00",
      },
    };
  },
  mounted() {
    this.constants = this.data;
  },
  methods: {
    xing(phoneNumber) {
      let xx = phoneNumber;
      console.log("phoneNumber :>> ", phoneNumber, xx);
      return xx.replace(/^(\d{3})\d{4}(\d+)/, "$1****$2");
    },
    toPath(url) {
      wx.navigateTo({
        url,
      });
    },
    back() {
      wx.switchTab({
        url: "/pages/my/index",
      });
    },
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

