<template>
  <div class="tabbar-wrap" :class="isIphoneX? 'isIphoneX':''">
    <ul class="tabbar">
      <li
        class="tabbar-item"
        v-for="(item, index) in navList"
        :key="index"
        :class="item.isSpecial ? 'wrapSpecial':''"
        @click="()=>selectNavItem(index, item.pagePath)">
        <p class="tabbar-icon">
          <img
            alt="tabbar-icon"
            :src="selectNavIndex == index? item.selectedIconPath : item.iconPath"
            :class="item.isSpecial ? 'imgSpecial':''" />
        </p>
        <p class="tabbar-text" :class="selectNavIndex == index? 'active':''">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["selectNavIndex"],
  data() {
    return {
      color: "#979795",
      selectedColor: "#45b7af",
      navList: [
        {
          pagePath: "/pages/index/index",
          iconPath: "/static/tabs/home.png",
          selectedIconPath: "/static/tabs/home-active.png",
          text: "首页",
        },
        {
          pagePath: "/pages/loveProject/index",
          iconPath: "/static/tabs/loveProject.png",
          selectedIconPath: "/static/tabs/loveProject.png",
          isSpecial: true,
          text: "",
        },
        {
          pagePath: "/pages/my/index",
          iconPath: "/static/tabs/my.png",
          selectedIconPath: "/static/tabs/my.png",
          text: "我的",
        },
      ],
    };
  },
  methods: {
    /**
     * 点击导航栏
     */
    selectNavItem(index, pagePath) {
      console.log(this.index);
      console.log(pagePath);
      if (index === this.selectNavIndex) {
        return false;
      }
      this.bindNavigateTo(pagePath);
    },
    /**
     * 路由跳转
     */
    bindNavigateTo(url) {
      wx.switchTab({
        url,
      });
    },
  },
  computed: {
    isIphoneX() {
      return this.$store.getters.isIphoneX;
    },
  },
};
</script>

<style lang="stylus">
.tabbar-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 148px;
  width: 100%;
  padding-top: 12px;
  // box-shadow: 0 0 2px #C4C4C4;
  z-index: 1000;
  background: #fff;

  &.isIphoneX {
    padding-bottom: 66rpx;
  }

  .tabbar {
    display: flex;

    .tabbar-item {
      flex: 1;

      .tabbar-icon {
        text-align: center;
        position: relative;

        img {
          width: 40px;
          height: 40px;

          &.imgSpecial {
            width: w = 80px;
            height: h = 80px;
          }
        }
      }

      .tabbar-text {
        text-align: center;
        line-height: 36px;
        color: #333333;
        font-size: 22px;

        &.active {
          color: #F36728;
        }
      }

      &.wrapSpecial {
        .tabbar-icon {
          position: absolute;
          top: 9px;
          width: 80px;
          height: 80px;
          padding: 0;
          top: 9px;
          left: 50%;
          margin-left: -((@width + @padding * 2) / 2);
          border: none;
          text-align: center;
          background: #fff;
        }

        .tabbar-text {
          position: relative;
          bottom: -56px;
        }
      }
    }
  }
}
</style>
