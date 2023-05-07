<template>
  <view class="page flex-col">
    <rs-nav-bar title="个人信息" @back="back" />
    <view class="group_2 flex-col">
      <view class="text-wrapper_4 flex-row justify-between">
        <text class="text_2">头像</text>
        <text class="text_3">更换</text>
      </view>
      <view class="group_3 flex-col"></view>
      <view class="text-wrapper_5 flex-row justify-between">
        <text class="text_4">用户昵称</text>
        <text class="text_5">{{ constants.nickName }}</text>
      </view>
      <view class="group_4 flex-col"></view>
      <view class="text-wrapper_5 flex-row justify-between">
        <text class="text_4">性别</text>
        <view class="text_5">{{ constants.gender == 0 ? '男' : '女' }} </view>
      </view>
      <view class="group_4 flex-col"></view>

      <view class="text-wrapper_5 flex-row justify-between">
        <text class="text_4">生日</text>
        <view class="text_5">111</view>
      </view>
      <!-- <view class="group_4 flex-col"></view>
      <text class="text_6">性别</text>
      <view class="group_5 flex-col">{{ constants.gender == 0 ? '男' : '女' }} </view>
      <text class="text_7">生日</text>
      <view class="group_6 flex-col"></view> -->
      <view class="box_2 flex-row justify-between" @click="toPath('/pages/my/phone/index')">
        <text class="text_8">当前账号</text>
        <view class="image-text_3 flex-row justify-between">
          <text class="text-group_1">{{ xing(constants.accountNum) }}</text>
          <image class="image_4" referrerpolicy="no-referrer" src="/static/images/more.png" />

        </view>
      </view>
    </view>
    <view class="box_3 flex-col">
      <view class="group_9 flex-row justify-between" @click="toPath('/pages/my/name/index')">
        <text class="text_9">捐款人姓名</text>
        <view class="image-text_4 flex-row justify-between">
          <text class="text-group_2">{{ constants.userName }}</text>
          <image class="image_5" referrerpolicy="no-referrer" src="/static/images/more.png" />

        </view>
      </view>
      <button class="text-wrapper_3 flex-col" @click="logout">
        <text class="text_10">退出登录</text>
      </button>
    </view>
    <!-- <van-dialog id="van-dialog" /> -->
    <!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>
<script>
// import Dialog from "@vant/weapp/dist/dialog/dialog";

import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";
// showModal
export default {
  components: {
    rsNavBar,
  },
  data() {
    return {
      constants: {},
      data: {
        searchValue: null,
        createBy: null,
        createTime: "2023-04-20 08:09:52",
        updateBy: null,
        updateTime: "2023-04-20 08:09:55",
        remark: null,
        params: {},
        startDate: null,
        endDate: null,
        start: null,
        end: null,
        id: "11",
        openId: "1",
        nickName: "www",
        userName: "qq",
        companyName: null,
        accountNum: "17700888866",
        password: "123456",
        forwardNum: 0,
        gender: "男",
        phoneArea: "北京",
        email: "123@163.com",
        donorName: "qqQ",
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
    logout() {
      // this.$refs.popup.open("top");
      // Dialog.confirm({
      //   // title: "标题",
      //   message: "确定退出登录？",
      //   confirmButtonText: "退出登录",
      //   cancelButtonText: "取消",
      // })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     // on cancel
      //   });
    },
  },
};
</script>
<style lang='scss'>
@import "../../common/common.scss";
@import "./index.rpx.scss";
</style>

