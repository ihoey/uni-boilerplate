<template>
  <div>
    <div class="content">
      <div class="placeholder-bar">
        <div class="header-title">小善筹</div>
        <img class="header-bg" src="/static/images/home_header_bg.png" />
      </div>
      <div class="content-body">
        <div class="content-body-header">
          <div>小善筹共帮助家庭 1000 个</div>
          <img src="/static/images/sousuo.png" class="sousuo" @click="inputDialogToggle" alt="">
        </div>
        <!-- <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
          :duration="duration">
          <swiper-item v-for="item in appletImg" :key="item.id">
            <view class="swiper-item uni-bg-red">
              <img class="advertisement" :src="srcImg(item.filePath)" alt />
            </view>
          </swiper-item>

        </swiper> -->
        <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
                :duration="duration">
          <swiper-item>
            <view class=" swiper-item uni-bg-red">
              <img class="advertisement" src="/static/images/advertisement.png" alt />
            </view>
          </swiper-item>
          <swiper-item>
            <view class=" swiper-item uni-bg-red">
              <img class="advertisement" src="/static/images/advertisement.png" alt />
            </view>
          </swiper-item>
        </swiper>

        <div class="m-t-30  d-flex justify-content-between project-list-header">
          <div>最新筹款项目</div>
          <div>
            更多
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- mainContent -->
        <div class="project-list-content">
          <div v-for="item in 3" :key="item" class="project-list-item d-flex">
            <div class="list-item-left">
              <img class="list-item-img" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
            </div>
            <div class="list-item-right">
              <div class="list-item-title">
                <!-- {{ item.fundraisingTitle }} -->孤寡老人的医疗救治计划
                <van-icon name="arrow" />
              </div>
              <div class="list-item-desc  ellipsis">
                <!-- {{ item.story }} --> 为孤寡老人、失能失智老人提供基础医疗服务行动
              </div>

              <button type="default" class="btnC">立即帮助</button>
            </div>
          </div>
        </div>
        <div class="raise-funds-project m-t-10">
          <div class="title">
            筹款项目
          </div>
          <div class="raise-funds-project-content">
            <div class="raise-funds-project-item" v-for="item in 3" :key="item">
              <div class="raise-funds-project-images">
                <img class="list-item-img2" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
              </div>
              <div class="raise-funds-project-info">
                <div class="raise-funds-project-title"> 孤寡老人的医疗救治计划
                  <!-- {{ item.fundraisingTitle }} -->
                </div>
                <div class="raise-funds-project-desc ellipsis"> 为孤寡老人、失能失智老人提供基础医疗服务行动
                  <!-- {{ item.story }} -->
                </div>
              </div>

              <button type="default" class="btnC"> 帮TA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 输入框示例 -->
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog ref="inputClose" mode="input" title="输入内容" value="!" placeholder="请输入内容"
                        @confirm="dialogInputConfirm"></uni-popup-dialog>
    </uni-popup>
    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/custom-tab-bar";
import { homePageItem } from "@/apis/detail";
export default {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      value: "",
      mainContent: [],
      appletImg: [],
      subProjects: [],
    };
  },

  components: {
    tabBar,
  },

  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
    inputDialogToggle() {
      this.$refs.inputDialog.open();
    },
    srcImg(base64) {
      return `data:image/png;base64,${base64}`;
    },
    initD(param) {
      homePageItem(param)
        .then((result) => {
          console.log("result :>> ", result);
          let { data } = result.data;
          this.mainContent = data.mainContent;
          this.subProjects = data.subProjects;
          this.appletImg = data.appletImgs.filter((cur) => {
            return cur.imgType == 7;
          });
          console.log("appletImg :>> ", this.appletImg);
          if (Object.keys.length > 0) {
            this.$refs.inputDialog.close();
          }
        })
        .catch((err) => {});
    },
    dialogInputConfirm() {
      let pa = { fundraisingTitle: this.value };
      this.initD(pa);
    },
  },
  created() {
    wx.hideTabBar();
    this.initD({});
  },
};
</script>

<style lang="scss">
.content {
  padding-bottom: 200rpx;
  background: #f9f9f9;

  ::v-deep .swiper {
    height: 325rpx;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .content-body {
    margin-top: -629rpx;
    width: 100%;
    text-align: center;

    .content-body-header {
      display: flex;
      justify-content: space-between;
      padding: 0 49rpx 0 25rpx;
      font-weight: 400;
      color: #ffffff;
      font-size: 30rpx;
      margin-bottom: 30rpx;

      .sousuo {
        height: 40rpx;
        width: 40rpx;
      }
    }

    .advertisement {
      width: 710rpx;
      height: 320rpx;
    }

    .project-list-header {
      padding: 0 20rpx;
      margin-bottom: 20rpx;

      div {
        color: #333333;
        font-size: 32rpx;
        font-weight: 500;
      }

      &>div:nth-child(2) {
        color: #999999;
        font-size: 28rpx;
        font-weight: 400;
      }
    }

    .project-list-content {
      padding: 0 20rpx;
    }

    .project-list-item {
      width: 100%;
      background: #ffffff;
      border-radius: 12rpx;
      padding: 20rpx;
      text-align: left;
      position: relative;
      margin-bottom: 10rpx;

      .list-item-img {
        width: 244rpx;
        height: 198rpx;
        margin-right: 20rpx;
      }

      .list-item-title {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
        margin-top: 8rpx;
        margin-bottom: 15rpx;
        display: flex;
        justify-content: space-between;
      }

      .list-item-desc {
        font-weight: 400;
        color: #999999;
        line-height: 1.4;
        font-size: 24rpx;
      }
    }

    .raise-funds-project {
      padding: 0 20rpx 40rpx;

      .title {
        font-size: 32rpx;
        font-weight: 500;
        color: #333333;
        text-align: left;
        margin-top: 10rpx;
      }

      .raise-funds-project-content {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;

        .raise-funds-project-item {
          padding: 20rpx 14rpx 14rpx;
          width: calc(350rpx - 28rpx);
          margin-top: 20rpx;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 428rpx;
          background: #ffffff;
          border-radius: 12rpx;

          ::v-deep .van-image {
            width: 322rpx;
            height: 210rpx;
          }

          .raise-funds-project-info {
            text-align: left;

            .raise-funds-project-title {
              font-weight: 500;
              color: #333333;
              font-size: 26rpx;
              margin-top: 16rpx;
              margin-bottom: 10rpx;
            }

            .raise-funds-project-desc {
              font-weight: 400;
              color: #999999;
              font-size: 22rpx;
              line-height: 1.3;
            }
          }

          ::v-deep .button {
            border-radius: 25rpx;
            position: absolute;
            right: 14rpx;
            bottom: 15rpx;
          }
        }

        .raise-funds-project-item:nth-child(odd) {
          margin-right: 10rpx;
        }
      }
    }
  }

  ::v-deep .van-icon {
    font-size: 24rpx;
    color: #999999;
  }
}

.placeholder-bar {
  height: 805rpx;
  width: 100%;

  .header-bg {
    width: 100%;
    height: 805rpx;
  }

  .header-title {
    position: absolute;
    top: 80rpx;
    width: 100%;
    text-align: center;
    font-size: 36rpx;
    font-weight: 400;
    color: #ffffff;
  }
}

.list-item-right,
.list-item-desc {
  width: 421rpx !important;
}

.btnC {
  background-image: linear-gradient(270deg,
      rgba(250, 156, 78, 1) 0,
      rgba(243, 99, 38, 1) 100%);
  border-radius: 33px;
  position: absolute;
  bottom: 20rpx;
  right: 20rpx;
  line-height: 60rpx;
  font-size: 28rpx;
  color: rgba(255, 255, 255, 1) !important;
  border-radius: 33rpx;
  width: 175rpx;
  height: 60rpx;
}


.list-item-img2 {
  width: 322rpx;
  height: 210rpx;
}
</style>
