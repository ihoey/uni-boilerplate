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
          <img src="/static/images/sousuo.png" class="sousuo" alt="">
        </div>
        <img class="advertisement" src="/static/images/advertisement.png" alt />
        <div class="m-t-30  d-flex justify-content-between project-list-header">
          <div>最新筹款项目</div>
          <div>
            更多
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="project-list-content">
          <div v-for="item in 3" :key="item" class="project-list-item d-flex">
            <div class="list-item-left">
              <img class="list-item-img" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
            </div>
            <div class="list-item-right">
              <div class="list-item-title">
                孤寡老人的医疗救治计划
                <van-icon name="arrow" />
              </div>
              <div class="list-item-desc">
                为孤寡老人、失能失智老人提供基础医疗服务行动
              </div>
              <van-button color="linear-gradient(to right, #FA9C4E, #F36326 )" size="small">
                立即帮助
              </van-button>
            </div>
          </div>
        </div>
        <div class="raise-funds-project m-t-10">
          <div class="title">
            筹款项目
          </div>
          <div class="raise-funds-project-content">
            <div class="raise-funds-project-item" v-for="item in 4" :key="item">
              <div class="raise-funds-project-images">
                <van-image fit="contain" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </div>
              <div class="raise-funds-project-info">
                <div class="raise-funds-project-title">孤寡老人的医疗救治计划</div>
                <div class="raise-funds-project-desc">为孤寡老人、失能失智老人提供基础医疗服务备份</div>
              </div>
              <van-button color="linear-gradient(to right, #FA9C4E, #F36326 )" size="small">
                帮TA
              </van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 使用组件 -->
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/custom-tab-bar";

export default {
  data() {
    return {};
  },

  components: {
    tabBar,
  },

  methods: {},
  created() {
    wx.hideTabBar();
  },
};
</script>

<style lang="scss">
.content {
  padding-bottom: 200px;
  background: #f9f9f9;

  .content-body {
    margin-top: -629px;
    width: 100%;
    text-align: center;

    .content-body-header {
      display: flex;
      justify-content: space-between;
      padding: 0 49px 0 25px;
      font-weight: 400;
      color: #ffffff;
      font-size: 30px;
      margin-bottom: 30px;

      .sousuo {
        height: 40px;
        width: 40px;
      }
    }

    .advertisement {
      width: 710px;
      height: 320px;
    }

    .project-list-header {
      padding: 0 20px;
      margin-bottom: 20px;

      div {
        color: #333333;
        font-size: 32px;
        font-weight: 500;
      }

      & > div:nth-child(2) {
        color: #999999;
        font-size: 28px;
        font-weight: 400;
      }
    }

    .project-list-content {
      padding: 0 20px;
    }

    .project-list-item {
      width: calc(100% - 40px);
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      text-align: left;
      position: relative;
      margin-bottom: 10px;

      .list-item-img {
        width: 244px;
        height: 198px;
        margin-right: 20px;
      }

      .list-item-title {
        font-size: 28px;
        font-weight: 500;
        color: #333333;
        margin-top: 8px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
      }

      .list-item-desc {
        font-weight: 400;
        color: #999999;
        line-height: 1.4;
      }

      ::v-deep .van-button {
        position: absolute;
        bottom: 20px;
        right: 20px;
        border-radius: 33px;
        width: 175px;
        height: 60px;
      }
    }

    .raise-funds-project {
      padding: 0 20px 40px;

      .title {
        font-size: 32px;
        font-weight: 500;
        color: #333333;
        text-align: left;
        margin-top: 10px;
      }

      .raise-funds-project-content {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;

        .raise-funds-project-item {
          padding: 20px 14px 14px;
          width: calc(350px - 28px);
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 428px;
          background: #ffffff;
          border-radius: 12px;

          ::v-deep .van-image {
            width: 322px;
            height: 210px;
          }

          .raise-funds-project-info {
            text-align: left;

            .raise-funds-project-title {
              font-weight: 500;
              color: #333333;
              font-size: 26px;
              margin-top: 16px;
              margin-bottom: 10px;
            }

            .raise-funds-project-desc {
              font-weight: 400;
              color: #999999;
              font-size: 22px;
              line-height: 1.3;
            }
          }

          ::v-deep .van-button {
            border-radius: 25px;
            position: absolute;
            right: 14px;
            bottom: 15px;
          }
        }

        .raise-funds-project-item:nth-child(odd) {
          margin-right: 10px;
        }
      }
    }
  }

  ::v-deep .van-icon {
    font-size: 24px;
    color: #999999;
  }
}

.placeholder-bar {
  height: 805px;
  width: 100%;

  .header-bg {
    width: 100%;
    height: 805px;
  }

  .header-title {
    position: absolute;
    top: 80px;
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>
