<template>
  <div class="counter-warp">
    <div class="header-bj-title">
      <img src="/static/images/my_bj.png" class="my_bj" alt="" />
    </div>
    <div class="user-counter">
      <div class="user-face">
        <img src="/static/images/my/face.png" alt="" />
      </div>
      <div class="user-login">
        <h2>
          立即登录
          <img src="/static/images/my/right-arrow.png" alt="" />
        </h2>
        <p
          @click="() => toPath('/pages/my/info/index')">

          个人中心
          <img src="/static/images/my/right-arrow.png" alt="" />
        </p>
      </div>
    </div>
    <div class="contribution">
      <div class="left-counter">
        <div>
          <div>发起受捐</div>
          <div>本人发起捐款</div>
        </div>
        <img class="image" src="/static/images/my/left.png" alt="" />
      </div>
      <div class="right-counter">
        <img class="image" src="/static/images/my/right.png" alt="" />
      </div>
    </div>
    <div class="function-counter">
      <div
        class="function-counter-item"
        v-for="(item, index) in functionList"
        :key="index"
        @click="() => toPath(item.toPath)">
        <img
          :src="'/static/images/my/' + item.img"
          class="title-icon"
          :alt="item.title" />
        <div class="title">{{ item.title }}</div>
        <img
          src="/static/images/my/right-arrow-2.png"
          class="right-arrow"
          alt="" />
      </div>
    </div>
    <tab-bar :selectNavIndex="2"></tab-bar>
  </div>
</template>

<script>
// Use Vuex
import store from "@/store/index";
import tabBar from "@/components/custom-tab-bar";

export default {
  components: {
    tabBar,
  },
  data() {
    return {
      functionList: [
        { img: "public-welfare2.png", title: "我发起的", toPath: "" },
        { img: "shuju-2.png", title: "捐款回顾", toPath: "/pages/huigu/index" },
        {
          img: "zhengshu6.png",
          title: "获得证书",
          toPath: "/pages/zhengshu/index",
        },
        { img: "tixian.png", title: "提现设置", toPath: "" },
        {
          img: "guanyuwomen.png",
          title: "关于我们",
          toPath: "/pages/my/about/index",
        },
      ],
    };
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    toPath(url) {
      console.log(url);
      wx.redirectTo({
        url,
      });
    },
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
  },
};
</script>

<style lang="scss">
.counter-warp {
  .my_bj {
    width: 100%;
    height: 581rpx;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .user-counter {
    padding-top: 163rpx;
    margin-left: 30rpx;
    margin-bottom: 40rpx;
    display: flex;

    .user-face img {
      margin-right: 30rpx;
      width: 120rpx;
      height: 120rpx;
    }

    .user-login {
      color: #333333;

      h2 {
        font-size: 36rpx;
        font-weight: 500;
        padding-top: 10rpx;
        padding-bottom: 13rpx;
        line-height: 1.5;
      }

      p {
        font-weight: 400;
        font-size: 24rpx;
        padding-left: 13rpx;
        width: 139rpx;
        padding: 3px 13rpx;
        background: #ffffff;
        border-radius: 23rpx;
        opacity: 0.7;
      }

      img {
        width: 10rpx;
        height: 13rpx;
        margin-left: 7rpx;
      }
    }
  }

  .contribution {
    width: calc(710rpx - 28rpx);
    display: flex;
    height: calc(218rpx - 30rpx - 28rpx);
    margin-left: 20rpx;
    padding: 30rpx 14rpx 28rpx 14rpx;
    background: #ffffff;
    border-radius: 20rpx;

    .image {
      width: 337rpx;
      height: 160rpx;
    }

    .left-counter {
      margin-right: 8rpx;
      position: relative;
      width: 50%;

      & > div {
        position: absolute;
        left: 20rpx;
        top: 32rpx;

        div:nth-child(1) {
          font-weight: 500;
          color: #3f3f3f;
          font-size: 28rpx;
        }

        div:nth-child(2) {
          font-weight: 400;
          color: #999999;
          font-size: 26rpx;
          padding-top: 12rpx;
        }
      }
    }
  }

  .function-counter {
    border-radius: 12rpx;
    background: #ffffff;
    margin: 20rpx;

    .function-counter-item {
      display: flex;
      justify-content: start;
      align-items: center;
      position: relative;
      padding: 30rpx 41rpx 30rpx 30rpx;

      .title {
        font-weight: 400;
        color: #3f3f3f;
        font-size: 28rpx;
        padding-left: 28rpx;
      }

      .title-icon {
        width: 43rpx;
        height: 43rpx;
      }

      .right-arrow {
        position: absolute;
        right: 41rpx;
        width: 24rpx;
        height: 24rpx;
      }

      &:after {
        content: "";
        width: 575rpx;
        height: 1rpx;
        background: #e9e9e9;
        position: absolute;
        bottom: 0;
        left: 101rpx;
      }
    }

    .function-counter-item:last-child:after {
      display: none;
    }
  }
}
</style>
