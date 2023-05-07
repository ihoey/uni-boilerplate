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
        <img src="/static/images/my/left.png" alt="" />
      </div>
      <div class="right-counter">
        <img src="/static/images/my/right.png" alt="" />
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
import store from "@/store";
import tabBar from "@/components/custom-tab-bar";

export default {
  components: {
    tabBar,
  },
  data() {
    return {
      functionList: [
        { img: "public-welfare2.png", title: "我发起的", toPath: "" },
        { img: "shuju-2.png", title: "捐款回顾", toPath: "" },
        { img: "zhengshu6.png", title: "获得证书", toPath: "" },
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
    height: 581px;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  .user-counter {
    padding-top: 163px;
    margin-left: 30px;
    margin-bottom: 40px;
    display: flex;

    .user-face img {
      margin-right: 30px;
      width: 120px;
      height: 120px;
    }

    .user-login {
      color: #333333;

      h2 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 10px;
        padding-bottom: 13px;
        line-height: 1.5;
      }

      p {
        font-weight: 400;
        font-size: 24px;
        padding-left: 13px;
        width: 139px;
        padding: 3px 13px;
        background: #ffffff;
        border-radius: 23px;
        opacity: 0.7;
      }

      img {
        width: 10px;
        height: 13px;
        margin-left: 7px;
      }
    }
  }

  .contribution {
    width: calc(710px - 28px);
    display: flex;
    height: calc(218px - 30px - 28px);
    margin-left: 20px;
    padding: 30px 14px 28px 14px;
    background: #ffffff;
    border-radius: 20px;

    image {
      width: 337px;
      height: 160px;
    }

    .left-counter {
      margin-right: 8px;
      position: relative;

      & > div {
        position: absolute;
        left: 20px;
        top: 32px;

        div:nth-child(1) {
          font-weight: 500;
          color: #3f3f3f;
          font-size: 28px;
        }

        div:nth-child(2) {
          font-weight: 400;
          color: #999999;
          font-size: 26px;
          padding-top: 12px;
        }
      }
    }
  }

  .function-counter {
    border-radius: 12px;
    background: #ffffff;
    margin: 20px;

    .function-counter-item {
      display: flex;
      justify-content: start;
      align-items: center;
      position: relative;
      padding: 30px 41px 30px 30px;

      .title {
        font-weight: 400;
        color: #3f3f3f;
        font-size: 28px;
        padding-left: 28px;
      }

      .title-icon {
        width: 43px;
        height: 43px;
      }

      .right-arrow {
        position: absolute;
        right: 41px;
        width: 24px;
        height: 24px;
      }

      &:after {
        content: "";
        width: 575px;
        height: 1px;
        background: #e9e9e9;
        position: absolute;
        bottom: 0;
        left: 101px;
      }
    }

    .function-counter-item:last-child:after {
      display: none;
    }
  }
}
</style>
