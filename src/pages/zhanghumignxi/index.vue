<template>
  <div class="">
    <!-- custom-style="height: 60%;border-radius:4px" -->
    <uni-popup
      round
      ref="popppp"
      type="bottom"
      @close="onClose">
      <div class="group_7 flex-col">
        <div class="text-wrapper_7 flex-row justify-between">
          <span class="text_23" @click="onClose">取消</span> <span class="text_24">筛选</span>
          <span class="text_25" @click="isToTrue">确定</span>
        </div>
        <div class="group_14 flex-row" @click="clickDate">
          <span class="text_26">开始时间</span>
          <span class="text_27">
            <picker mode="date" :value="date1" :start="startDate" :end="endDate" @change="(e)=>bindDateChange('start',e)">
              <view class="uni-input">{{date1}}</view>
            </picker>
          </span>
          <uni-icons class="arrorR" type="right" color="#999" size="15"></uni-icons>
        </div>
        <div class="group_14 flex-row" @click="clickDate1">
          <span class="text_26">结束时间</span>
          <span class="text_27">
            <picker mode="date" :value="date2" :start="startDate" :end="endDate" @change="()=>bindDateChange('end',e)">
              <view class="uni-input">{{date2}}</view>
            </picker>
          </span>
          <uni-icons class="arrorR" type="right" color="#999" size="15"></uni-icons>
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
    </uni-popup>

    <!-- <van-calendar className="calendar" :show="showcalendar" @close="onClosecalendar" @confirm="onConfirm" /> -->

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
    const currentDate = this.getDate({
      format: true,
    });
    return {
      typeC: 1,
      show: false,
      showcalendar: false,
      currentDate: new Date().getTime(),
      minDate: new Date().getTime(),
      startDate1: "",
      // endDate: "",
      deteType: "",
      date1: currentDate,
      date2: currentDate,
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },
  },
  methods: {
    bindPickerChange: function (e) {
      console.log("picker发送选择改变，携带值为", e.detail.value);
      this.index = e.detail.value;
    },
    bindDateChange: function (type, e) {
      if (type === "start") {
        this.date1 = e.detail.value;
      } else {
        this.date2 = e.detail.value;
      }
    },
    bindTimeChange: function (e) {
      this.time = e.detail.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
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
  mounted() {},
};
</script>

<style lang="scss">
@import "../common/common.scss";
.group_16 {
  width: 646rpx;
  margin: 39rpx 6rpx 0 0;
}
.van-popup {
  border-radius: 12rpx !important;
  height: 60%;
}
.arrorR {
  position: absolute;
  top: -20rpx;
  right: 0;
}
.text_33 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 40rpx;
}
.text_32 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 40rpx;
}

.text-wrapper_5 {
  background-color: rgba(238, 239, 244, 1);
  border-radius: 10rpx;
  padding: 18rpx 62rpx 18rpx 62rpx;
}

.text-wrapper_3 {
  background-color: rgba(238, 239, 244, 1);
  border-radius: 10rpx;
  // border: 1rpx solid rgba(233, 73, 69, 1);
  padding: 17rpx 61rpx 17rpx 61rpx;
  border: 1rpx solid rgba(238, 239, 244, 1);
}

.text_31 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 40rpx;
}

.text-wrapper_4 {
  background-color: rgba(238, 239, 244, 1);
  border-radius: 10rpx;
  padding: 18rpx 62rpx 18rpx 62rpx;
}
.group_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 12rpx 12rpx 0rpx 0rpx;
  padding: 50rpx 49rpx 132rpx 49rpx;
}
.text-wrapper_7 {
  width: 652rpx;
  // padding-bottom: 50rpx;
}

.group_14 {
  margin: 60rpx 14rpx 0 0;
  position: relative;
}

.text_23 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 32rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 45rpx;
}
.text_25 {
  overflow-wrap: break-word;
  color: rgba(249, 101, 30, 1);
  font-size: 32rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 45rpx;
}
.text_26 {
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 42rpx;
}
.text_30 {
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 42rpx;
  margin: 64rpx 532rpx 0 0;
}
.text_27 {
  overflow-wrap: break-word;
  color: rgba(102, 102, 102, 1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 42rpx;
  margin-left: 70rpx;
}
.active {
  border: 1rpx solid rgba(233, 73, 69, 1);

  .text_31 {
    color: rgba(233, 73, 69, 1);
  }
}
</style>
