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
            <div class="mark-content">
              <div class="mark danger">孤寡老人</div>
              <div class="mark warning">失能失智</div>
              <!--              <div class="mark primary">贫困地区</div>-->
            </div>
          </div>
          <van-button color="linear-gradient(to right, #FA9C4E, #F36326 )" size="small">
            立即帮助
          </van-button>
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
      height: 967px;
      position: absolute;
      top: 0;
      z-index: -1;
    }

    .project-title {
      font-weight: 400;
      color: #ffffff;
      font-size: 36px;
      width: 100%;
      text-align: center;
      padding-top: 80px;
    }
  }

  ::v-deep .van-search {
    margin: 28px 16px 52px 21px;
    height: 70px;
    background: #f9f9f9;
    border-radius: 12px;
  }

  .project-list-content {
    background: #ffffff;
    border-radius: 30px 30px 0px 0px;
    padding-bottom: 180px;

    .project-list-title {
      font-weight: 500;
      color: #333333;
      font-size: 32px;
      padding-top: 35px;
      padding-left: 18px;
      margin-bottom: 30px;
    }

    .btn-gather {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      margin-bottom: 40px;

      .btn {
        text-align: center;
        width: 161px;
        height: 58px;
        line-height: 60px;
        background: #efefef;
        border-radius: 6px;
        font-size: 30px;
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
            width: 40px;
            height: 27px;
            position: absolute;
            background-size: 100% 100%;
            top: 0;
            right: 0;
          }
        }
      }
    }

    .project-list-item {
      width: calc(100% - 40px);
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      text-align: left;
      position: relative;
      padding-bottom: 51px;
      position: relative;

      &:after {
        position: absolute;
        content: "";
        width: calc(100% - 40px);
        height: 1px;
        background: #e8e8e8;
        bottom: 21px;
      }

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

        .mark-content {
          margin-top: 24px;
          display: flex;
          flex-flow: wrap;
          width: 268px;
          margin-bottom: 9px;

          .mark {
            text-align: center;
            margin-left: 5px;
            width: 115px;
            height: 41px;
            line-height: 41px;
            font-size: 22px;
            font-weight: 400;
            border-radius: 21px;

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

      ::v-deep .van-button {
        position: absolute;
        bottom: 41px;
        right: 20px;
        border-radius: 33px;
        width: 175px;
        height: 60px;
      }
    }

    .project-list-item:last-child:after {
      display: none;
    }
  }
}
</style>
