<template>
  <div class="counter-warp">
    <div class="header-bj-title">
      <img src="/static/images/project_bj.png" class="project-bj" alt="">
      <div class="project-title">爱心项目</div>
    </div>
    <van-search :value="value" placeholder="请输入搜索关键词" />
    <div class="project-list-content">
      <div class="project-list-title">全部项目</div>
      <div class="btn-gather">
        <div class="btn" :class="{ 'active': item.id == btnActive }" v-for="(item, index) in btnList" :key="index"
          @click="handleProjectListBtn(item.id)">
          {{ item.title }}
        </div>
      </div>
      <div class="project-list-item d-flex" v-for="item in 3" :key="item">
        <div class="list-item-left">
          <img class="list-item-img" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
        </div>
        <div class="list-item-right">
          <div class="list-item-title">孤寡老人的医疗救治计划</div>
          <div class="list-item-desc">
            为孤寡老人、失能失智老人提供基础医疗服务行动
            <div class="mark-content d-flex justify-content-around">
              <div class="mark danger">孤寡老人</div>
              <div class="mark warning">失能失智</div>
              <!--              <div class="mark primary">贫困地区</div>-->

              <button class="button" size="small">
                立即帮助
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <tab-bar :selectNavIndex="1"></tab-bar>
  </div>
</template>

<script>
// Use Vuex
import tabBar from "@/components/custom-tab-bar";
import store from "@/store/index";

export default {
  data() {
    return {
      btnActive: "1",
      btnList: [
        { id: "1", title: "全部" },
        { id: "2", title: "孤寡老人" },
        { id: "3", title: "贫困地区" },
        { id: "4", title: "失能失智" },
      ],
      value: "",
    };
  },

  components: {
    tabBar,
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    handleProjectListBtn(id) {
      console.log("id :>> ", this.value);
      this.btnActive = id;
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
  .header-bj-title {
    .project-bj {
      width: 100%;
      height: 967rpx;
      position: absolute;
      top: 0;
      z-index: -1;
    }

    .project-title {
      font-weight: 400;
      color: #ffffff;
      font-size: 36rpx;
      width: 100%;
      text-align: center;
      padding-top: 80rpx;
    }
  }

  ::v-deep .van-search {
    margin: 28px 16px 52px 21rpx;
    height: 70rpx;
    background: #f9f9f9;
    border-radius: 12rpx;
  }

  .project-list-content {
    background: #ffffff;
    border-radius: 30px 30px 0px 0rpx;
    padding-bottom: 180rpx;

    .project-list-title {
      font-weight: 500;
      color: #333333;
      font-size: 32rpx;
      padding-top: 35rpx;
      padding-left: 18rpx;
      margin-bottom: 30rpx;
    }

    .btn-gather {
      display: flex;
      justify-content: space-between;
      padding: 0 20rpx;
      margin-bottom: 40rpx;

      .btn {
        text-align: center;
        width: 161rpx;
        height: 58rpx;
        line-height: 60rpx;
        background: #efefef;
        border-radius: 6rpx;
        font-size: 30rpx;
        font-weight: 400;
        color: #999999;
        border: 1px solid #efefef;

        &.active {
          background: #fdefe8;
          border: 1px solid #f9651e;
          color: #f9651e;
          position: relative;

          &:after {
            content: "";
            display: block;
            background-image: url("http://localhost/public/images/progect_btn_active.png");
            width: 40rpx;
            height: 27rpx;
            position: absolute;
            background-size: 100% 100%;
            top: 0;
            right: 0;
          }
        }
      }
    }

    .project-list-item {
      width: calc(100% - 40rpx);
      background: #ffffff;
      border-radius: 12rpx;
      padding: 20rpx;
      text-align: left;
      position: relative;
      padding-bottom: 51rpx;
      position: relative;

      &:after {
        position: absolute;
        content: "";
        width: calc(100% - 40rpx);
        height: 1rpx;
        background: #e8e8e8;
        bottom: 21rpx;
      }

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
        font-size: 24rpx;
        font-weight: 400;
        color: #999999;
        line-height: 33rpx;

        .mark-content {
          margin-top: 24rpx;
          display: flex;
          align-items: center;

          .mark {
            text-align: center;
            margin-left: 5rpx;
            width: 115rpx;
            height: 41rpx;
            line-height: 41rpx;
            font-size: 22rpx;
            font-weight: 400;
            border-radius: 21rpx;

            &.danger {
              color: #f2a796;
              background: #fef1ef;
            }

            &.warning {
              color: #f1b05f;
              background: #fdf6ee;
            }

            &.primary {
              color: #97dadf;
              background: #eefafc;
            }
          }
        }
      }

      .button {
        border-radius: 33rpx;
        width: 175rpx;
        height: 60rpx;
        background: linear-gradient(to right, #fa9c4e, #f36326);

        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 60rpx;
      }
    }

    .project-list-item:last-child:after {
      display: none;
    }
  }
}
</style>
