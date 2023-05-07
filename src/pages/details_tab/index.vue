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
      <!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" @change="onSwiperChange">
        <block v-for="item in swiperList" :key="item">
          <swiper-item>
            <image class="swiper-item "
              :src="item">
            </image>
          </swiper-item>
        </block>
      </swiper> -->
    </view>
    <!-- card -->
    <view class="box_10 flex-col">
      <view class="text-group_28 flex-col">
        <text class="text_29">{{ mainItemInfo.mainItemName }}</text>
        <text class="text_30">
          {{ mainItemInfo.content }}
        </text>
      </view>
      <view class="box_23 flex-row justify-between">
        <van-progress class="image_11" :show-pivot="false" color="rgba(243, 99, 38, 1)" :percentage="25" />
        <text class="text_31">{{ mainItemInfo.process }}</text>
      </view>
      <view class="box_24 flex-row">
        <view class="text-group_29 flex-col">
          <text class="text_32">{{ mainItemInfo.currentFundraising }}</text>
          <text class="text_33">当前筹款(元)</text>
        </view>
        <text class="text_34">、</text>
        <view class="text-group_30 flex-col">
          <text class="text_35">{{ mainItemInfo.fundraisingTarget }}</text>
          <text class="text_36">计划筹款(元)</text>
        </view>
        <view class="text-group_31 flex-col">
          <text class="text_37">{{ mainItemInfo.donorsNumber }}</text>
          <text class="text_38">已捐人数(人）</text>
        </view>
      </view>
    </view>

    <view class="group_7 flex-col">
      <view class="tabs_3 flex-col">

        <van-tabs class="text-wrapper_9 flex-row" :active="tabActive" @change="onChangeTab">
          <van-tab class="text_5" title="项目详情"></van-tab>
          <van-tab class="text_5" title="项目进程"></van-tab>
          <van-tab class="text_5" title="爱心名单"></van-tab>
        </van-tabs>

      </view>

      <!-- 项目内容 -->
      <view v-if="tabActive == 0">
        <view class="text-group_24 flex-col">
          <text class="text_8">项目内容</text>
          <text class="text_9">
            一间狭小又破旧的房屋，屋内的陈设也乱七八糟，墙上到处挂满了蜘蛛网，一张古老又陈旧的老式床，零零散散的挂着一些衣服，床单被套没有叠整，看起来乱糟糟的。
          </text>
        </view>
        <view class="box_6 flex-col">
          <image src="/static/images/details_tab/0df03f02faf141a88056b19761002299_mergeImage.png" />
        </view>
        <view class="box_6 flex-col" v-show="more[0]">
          <image src="/static/images/details_tab/0df03f02faf141a88056b19761002299_mergeImage.png" />
        </view>
        <view @click="() => changeMore(0)" class="image-text_17 flex-row justify-between">
          <text class="text-group_4">查看全部</text>
          <image :class="{ more: more[0] }" class="icon_4" style="transition: all 0.3s ease-in-out;"
                 referrerpolicy="no-referrer"
                 src="/static/images/details_tab/SketchPngefd2add4b90542ef72ffcb54c45d35520e6b46a3cc914addbac47f68bb7a4b1a.png" />
        </view>
        <view class="image_4" />

        <!-- 立项时间 -->
        <view class="text-wrapper_10 flex-row justify-between">
          <text class="text_10">立项时间</text>
          <text class="text_11">{{ projectDetails.initiationTime }}</text>
        </view>
        <view class="image_4" />

        <view class="text-group_25 flex-col">
          <text class="text_12">募捐档案备案编号</text>
          <text class="text_13">{{ projectDetails.recordNumber }}</text>
        </view>
        <view class="image_4" />

        <view class="text-group_26 flex-col">
          <text class="text_14">收款机构</text>
          <text class="text_15">{{ projectDetails.collectionAgency }}</text>
        </view>
        <view class="image_4" />

        <text class="text_16">执行计划</text>
        <text class="paragraph_1">
          {{ projectDetails.executionPlan }}
        </text>
        <view class="image_4" />

        <text class="text_17">项目预算</text>
        <view class="box_20 flex-row">
          <view class="group_1 flex-col">
            <text class="text_18">项目</text>
            <text class="text_19">健康包</text>
            <view class="text-wrapper_3 flex-col">
              <text class="text_20">管理费</text>
            </view>
          </view>
          <view class="text-wrapper_4 flex-col">
            <text class="text_21">单价</text>
          </view>
          <view class="group_2 flex-col">
            <text class="text_22">备注</text>
            <view class="group_3 flex-col"></view>
          </view>
        </view>

        <view class="image_4" />
        <view class="box_21 flex-row justify-between">
          <text class="text_23">执行能力说明</text>
          <view class="image-text_18 flex-row justify-between">
            <text class="text-group_7">更多</text>
            <image class="icon_5" referrerpolicy="no-referrer" src="/static/images/more.png" />
          </view>
        </view>
        <text class="text_24">
          {{ projectDetails.executiveCapacity }}
        </text>
        <view @click="() => changeMore(1)" class="image-text_19 flex-row justify-between">
          <text class="text-group_8">查看全部</text>
          <image class="icon_6" :class="{ more: more[1] }" referrerpolicy="no-referrer"
                 style="transition: all 0.3s ease-in-out;"
                 src="/static/images/details_tab/SketchPngefd2add4b90542ef72ffcb54c45d35520e6b46a3cc914addbac47f68bb7a4b1a.png" />
        </view>

        <view class="image_4" />
        <view class="box_22 flex-row justify-between">
          <text class="text_25">关于我们</text>
          <view class="image-text_20 flex-row justify-between">
            <text class="text-group_9">更多</text>
            <image class="icon_7" referrerpolicy="no-referrer" src="/static/images/more.png" />
          </view>
        </view>
        <text class="text_26">
          {{ projectDetails.aboutUs }}
        </text>
        <view @click="() => changeMore(2)" class="image-text_21 flex-row justify-between">
          <text class="text-group_10">查看全部</text>
          <image class="icon_8" :class="{ more: more[2] }" referrerpolicy="no-referrer"
                 style="transition: all 0.3s ease-in-out;"
                 src="/static/images/details_tab/SketchPngefd2add4b90542ef72ffcb54c45d35520e6b46a3cc914addbac47f68bb7a4b1a.png" />
        </view>

        <view class="image_4" />
        <view class="text-group_27 flex-col">
          <text class="text_27">发票说明</text>
          <text class="text_28">
            {{ projectDetails.invoiceSpecification }}
          </text>
        </view>
      </view>

      <!-- 项目进程 -->

      <view class="group_9 flex-col" v-if="tabActive == 1">
        <text class="text_8">项目进程</text>
        <view class="section_3 flex-row justify-between">
          <image class="image_3" referrerpolicy="no-referrer" src="/static/images/details_tab/line.png" />
          <view class="group_10 flex-col">
            <view class="text-group_15 flex-col">
              <text class="text_9">2023年3月1日由公益机构发布</text>
              <text class="text_10">感谢爱心人士</text>
            </view>

            <image class="section_1 flex-col"
                   src="/static/images/details_tab/SketchPng90ce35b3cde27f93b14f2e70b035a73ddc99cdf472b6d45cef9ab855af51f3d6.png" />

            <view class="text-group_16 flex-col">
              <text class="text_11">2023年3月1日由公益机构发布</text>
              <text class="text_12">已完成项目30%捐款进度。</text>
            </view>
            <view class="text-group_17 flex-col">
              <text class="text_13">2023年3月1日由公益机构发布</text>
              <text class="text_14">
                项目已上线，所筹善款将用于帮助困境家庭老人，后续将持续跟进项目执行情况和善款使用，感谢您的关注与捐赠。
              </text>
            </view>
          </view>
        </view>
        <view class="box_5 flex-col"></view>
        <view class="box_6 box_5 flex-col"></view>
        <view class="box_7 box_5 flex-col"></view>
      </view>

      <!-- 爱心名单 -->
      <view v-if="tabActive == 2">
        <view class="group_4 flex-col">
          <view class="text-wrapper_2 flex-row justify-between">
            <text class="text_23">爱心人士</text>
            <text class="text_24">{{ mainItemInfo.donorsNumber }} 人参与</text>
          </view>
        </view>
        <view class="group_2 flex-col">
          <view class="section_2 flex-row justify-between">
            <view class="image-text_1 flex-row justify-between">
              <image class="single-avatar_1" referrerpolicy="no-referrer"
                     src="http://localhost:3000/images/details/SketchPng90ce35b3cde27f93b14f2e70b035a73ddc99cdf472b6d45cef9ab855af51f3d6.png" />
              <view class="text-group_1 flex-col">
                <text class="text_4">爱心人士</text>
                <text class="text_5">2023.10.10</text>
              </view>
            </view>
            <text class="text_6">100.00元</text>
          </view>
          <view class="section_2 flex-row justify-between last">
            <view class="image-text_1 flex-row justify-between">
              <image class="single-avatar_1" referrerpolicy="no-referrer"
                     src="http://localhost:3000/images/details/SketchPng90ce35b3cde27f93b14f2e70b035a73ddc99cdf472b6d45cef9ab855af51f3d6.png" />
              <view class="text-group_1 flex-col">
                <text class="text_4">爱心人士</text>
                <text class="text_5">2023.10.10</text>
              </view>
            </view>
            <text class="text_6">100.00元</text>
          </view>
        </view>
      </view>

    </view>
    <!-- card -->
    <view class="box_4 flex-row">
      <view class="image-text_15 flex-col" @click="toPath('/pages/index/index')">
        <image class="icon_2" referrerpolicy="no-referrer"
               src="/static/images/details_tab/SketchPng60684e3b3edebcc91af51c04387d7c289ad4fbce5ff0b64b82a744a5b83661b8.png" />
        <text class="text-group_1">首页</text>
      </view>
      <view class="image-text_16 flex-col">
        <image class="icon_3" referrerpolicy="no-referrer"
               src="/static/images/details_tab/SketchPnga8f90a1c9592c21cefdd58146710ec1de0ed4475ee2beb8ac1935a7fa31d8f8d.png" />
        <text class="text-group_2">{{ mainItemInfo.forwardNum }}次</text>
      </view>
      <button class="button_1 flex-col" @click="onClick_1">
        <text class="text_4">我要帮助</text>
      </button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
      currentSwiperIndex: 1,
      more: [false, false, false],
      swiperList: [
        "http://localhost:3000/images/details/SketchPng90ce35b3cde27f93b14f2e70b035a73ddc99cdf472b6d45cef9ab855af51f3d6.png",
        "http://localhost:3000/images/details/cb3d2e128b334dc885ed62cfe9ac09c8_mergeImage.png",
      ],
      tabActive: 0,
      message: {},
      mainItemInfo: {},
      projectDetails: {},
      data: {
        orderInfos: [
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
            id: "5",
            orderId: null,
            mainItemId: "1",
            subProjectId: "10026",
            openId: "1",
            payNum: null,
            amount: null,
            donorTime: null,
            donorStatus: null,
            transactionType: null,
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
                subProjectId: null,
                mainItemId: null,
                imgType: "0",
                filePath: null,
              },
            ],
          },
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
            id: "6",
            orderId: null,
            mainItemId: "1",
            subProjectId: "10001",
            openId: "1",
            payNum: null,
            amount: 100,
            donorTime: null,
            donorStatus: null,
            transactionType: null,
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
                subProjectId: null,
                mainItemId: null,
                imgType: "0",
                filePath: null,
              },
            ],
          },
        ],
        projectDetails: {
          id: "1",
          mainItemId: "1",
          content:
            "对一些特殊老人群体进行善款筹集，通过中国老龄事业发展基金会募捐平台做精准帮扶，为孤困老人发放生活物资，为有困难的老人提供应急药品。",
          initiationTime: "2023-04-14 15:08:26",
          recordNumber: "531000005000081643A22008",
          collectionAgency: "中国老龄事业发展基金会",
          executeAgency: "中国老龄事业发展基金会",
          executionPlan:
            "1.实施区域：全国。\r\n2.受益人群：贫困、孤寡、失能失智老人。\r\n3.实施时间：2023年 5 月 - 2024年 1月",
          executiveCapacity:
            "mujin（1）孤寡、无保障、失能半失能、失智和贫困地区的老年人及其子女通过“小善筹”帮扶小程序发起救助申请并上传相关证明资料，或由村委志愿者推荐等方式收集资料。凡确属于帮扶目标内的老人，我们会通过新闻、公众号、视频号等媒体进行推广为其发起扶助募捐。\r\n（2）依据募捐金额组织购买爱心包，逐步开展慰问活动。\r\n（3）2024年1月，做好项目总结报告和财务披露报告，公众项目反馈并结项。",
          aboutUs:
            "中国老龄事业发展基金会是民政部和全国老龄办领导下的为全国老年人服务的民间慧普组织，是独立的社会法人",
          invoiceSpecification:
            "感谢您对中国老龄事业发展基金会改普老人居住环境项目的支持，如果您需要捐赠发票，可将以下信息(捐赠人姓名、开票抬头)",
        },
        mainItemInfo: {
          searchValue: null,
          createBy: "admin",
          createTime: "2023-04-14 07:14:22",
          updateBy: "admin",
          updateTime: "2023-04-12 03:45:47",
          remark: null,
          params: {},
          startDate: null,
          endDate: null,
          start: null,
          end: null,
          id: "1",
          mainItemId: "1",
          mainItemName: "扶危济困爱伴老人",
          openId: "1",
          itemType: "1",
          fundraisingTarget: 500000,
          currentFundraising: 100000,
          donorsNumber: "1500",
          forwardNum: "15",
          itemEndTime: "2023-04-30 15:14:02",
          supportLimit: "10000",
          itemClassification: "1",
          content:
            "该项目以资助养老护理员为主，通过评估、汇总、删选符合条件的护理员，为他们提供父母赡养礼包、岗位公益补贴和公益培训费用、公益保险。 ",
          publicity: "1",
          paymentType: "1",
          donationCustom: "1",
          paymentMethod: "1",
          infoFeedback: "1",
          wechatFeedback: "1",
          lbNumber: 150,
          process: "30%",
          initiator: "",
          initiatorJob: null,
          relationship: null,
          requiredMes: null,
          defMes: null,
          invoiceType: "2",
          minAmount: null,
          lbAmount: 100,
          templateNum: null,
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
              openId: null,
              subProjectId: null,
              mainItemId: "1",
              imgType: "12",
              filePath: "1",
            },
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
              openId: null,
              subProjectId: null,
              mainItemId: "1",
              imgType: "12",
              filePath: "2",
            },
          ],
        },
        projectProcess: [
          {
            id: "1",
            mainItemId: "1",
            processTime: "2023-04-14 17:00:13",
            processContent: "项目筹建成功",
            payDetails: null,
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
                openId: null,
                subProjectId: null,
                mainItemId: "1",
                imgType: "13",
                filePath: "222",
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    // console.log(this);
    // getInfo(10004).then((res) => {});
    this.handleMessage();
  },
  methods: {
    changeMore(index) {
      console.log(!this.more[index]);
      this.more[index] = !this.more[index];
    },
    onChangeTab({ detail }) {
      console.log(detail);
      this.tabActive = detail.index;
    },
    back() {
      wx.navigateBack({
        delta: 1,
      });
    },
    toPath(path) {
      console.log(path);
      wx.switchTab({
        url: path,
      });
    },
    onClick_1() {
      // alert(1);
    },
    handleMessage(data) {
      this.message = this.data;
      this.mainItemInfo = this.data.mainItemInfo;
      this.projectDetails = this.data.projectDetails;

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
    onSwiperChange({ detail: { current } }) {
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

