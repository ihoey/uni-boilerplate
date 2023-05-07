<template>
  <div class="">
    <van-popup
      :show="showMode"
      round
      position="bottom"
      custom-style="height: 60%;border-radius:4px"
      @close="onClose">
      <div class="group_7 flex-col">
        <div class="text-wrapper_7 flex-row justify-between">
          <span class="text_23" @click="onClose">取消</span> <span class="text_24">筛选</span>
          <span class="text_25" @click="isToTrue">确定</span>
        </div>
        <div class="group_14 flex-row" @click="clickDate">
          <span class="text_26">开始时间</span>
          <span class="text_27">{{ startDate? startDate:'请选择' }}</span>
        </div>
        <div class="group_14 flex-row" @click="clickDate1">
          <span class="text_26">结束时间</span>
          <span class="text_27">{{ endDate? endDate:'请选择' }}</span>
          <!-- <img
            class="icon_1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1de797e9b62b33d8d951d5a8c60062bb715d953b2377e931769c834d84ff9417" /> -->
        </div>
        <span class="text_30">提现类型</span>
        <div class="group_16 flex-row justify-between">
          <div class="text-wrapper_3 flex-col " :class="{'active':typeC==1}" @click="chooseBtn('1')">
            <span class="text_31">全部</span>
          </div>
          <div class="text-wrapper_3 flex-col" :class="{'active':typeC==2}" @click="chooseBtn('2')">
            <span class="text_32">成功</span>
          </div>
          <div class="text-wrapper_3 flex-col" :class="{'active':typeC==3}" @click="chooseBtn('3')">
            <span class="text_33">失败</span>
          </div>
        </div>
      </div>
    </van-popup>

    <van-calendar className="calendar" :show="showcalendar" @close="onClosecalendar" @confirm="onConfirm" />

  </div>
</template>
<script>
export default {
  name: "zhanghumingxi",
  props: {
    showMode: {
      type: Boolean,
      default: false,
    },
  },

  //  :formatter="formatter"
  data() {
    return {
      typeC: 1,
      show: false,
      showcalendar: false,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      startDate: "",
      endDate: "",
      deteType: "",
      // formatter: (type, value) => {
      //   if (type === "year") {
      //     return `${value}年`;
      //   }
      //   if (type === "month") {
      //     return `${value}月`;
      //   }
      //   return value;
      // },
    };
  },
  computed: {},
  methods: {
    chooseBtn(num) {
      this.typeC = num;
    },
    onClose() {
      this.showMode = false;
    },

    isToTrue() {
      this.showMode = false;
    },
    onClosecalendar() {
      this.showcalendar = false;
    },
    formatDate(date) {
      date = new Date(date);
      console.log("date :>> ", date);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(event) {
      this.showcalendar = false;
      if (this.deteType && this.deteType == "start") {
        this.startDate = this.formatDate(event.detail);
      } else if (this.deteType && this.deteType == "end") {
        this.endDate = this.formatDate(event.detail);
      }
    },
    clickDate() {
      this.showcalendar = true;
      this.deteType = "start";
    },
    clickDate1() {
      this.showcalendar = true;
      this.deteType = "end";
    },
    back() {
      wx.switchTab({
        url: "/pages/my/index",
      });
    },
    onInput(event) {
      this.currentDate = event.detail;
    },
  },
};
</script>

<style lang="scss">
@import "../common/common.scss";
.group_16 {
  width: 646px;
  margin: 39px 6px 0 0;
}
.van-popup {
  border-radius: 12rpx !important;
  height: 60%;
}
.text_33 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 40px;
}
.text_32 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 40px;
}

.text-wrapper_5 {
  background-color: rgba(238, 239, 244, 1);
  border-radius: 10px;
  padding: 18px 62px 18px 62px;
}

.text-wrapper_3 {
  background-color: rgba(238, 239, 244, 1);
  border-radius: 10px;
  // border: 1px solid rgba(233, 73, 69, 1);
  padding: 17px 61px 17px 61px;
  border: 1px solid rgba(238, 239, 244, 1);
}

.text_31 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 40px;
}

.text-wrapper_4 {
  background-color: rgba(238, 239, 244, 1);
  border-radius: 10px;
  padding: 18px 62px 18px 62px;
}
.group_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12px 12px 0px 0px;
  padding: 50px 49px 132px 49px;
}
.text-wrapper_7 {
  width: 652px;
  // padding-bottom: 50px;
}

.group_14 {
  margin: 60px 14px 0 0;
}

.text_23 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 32px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 45px;
}
.text_25 {
  overflow-wrap: break-word;
  color: rgba(249, 101, 30, 1);
  font-size: 32px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 45px;
}
.text_26 {
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 42px;
}
.text_30 {
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 42px;
  margin: 64px 532px 0 0;
}
.text_27 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 30px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 42px;
  margin-left: 70px;
}
.active {
  border: 1px solid rgba(233, 73, 69, 1);

  .text_31 {
    color: rgba(233, 73, 69, 1);
  }
}
</style>
