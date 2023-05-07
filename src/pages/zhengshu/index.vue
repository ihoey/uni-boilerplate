<template>
  <div class="page flex-col">
    <rs-nav-bar title="捐款详情" @back="back" />

    <div class="group_4 flex-col">
      <div class="text-wrapper_2 flex-row justify-between">
        <span class="text_2">共获得证书</span> <span class="text_3">共3张</span>
      </div>
      <div class="list_2 flex-col">
        <div class="list-items_1 flex-col" v-for="(item, index) in loopData0" :key="index">
          <div class="block_2 flex-row justify-between">
            <div class="text-group_2 flex-col">
              <span class="text_4" v-html="item.lanhutext0"></span>
              <span class="text_5" v-html="item.lanhutext1"></span>
            </div>
            <img class="icon_2" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
          </div>
          <div class="block_3 flex-row justify-between">
            <img class="image_2" referrerpolicy="no-referrer" :src="item.lanhuimage1" />
            <button class="button_1 flex-col" @click="onClick_1">
              <span class="text_6" v-html="item.lanhutext2"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import rsNavBar from "@/components/rs-nav-bar/rs-nav-bar";

export default {
  components: {
    rsNavBar,
  },
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '孤寡老人的午餐计划',
          lanhutext1: '为孤寡老人、失能失智老人提供免费午餐行动',
          lanhuimage0:
            '/static/images/more.png',
          lanhuimage1:
            'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c64a076554cc41c4ba180e8b110a10ab_mergeImage.png',
          lanhutext2: '保存下载',
        },
        {
          lanhutext0: '孤寡老人的午餐计划',
          lanhutext1: '为孤寡老人、失能失智老人提供免费午餐行动',
          lanhuimage0:
            '/static/images/more.png',
          lanhuimage1:
            'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c64a076554cc41c4ba180e8b110a10ab_mergeImage.png',
          lanhutext2: '保存下载',
        },
        {
          lanhutext0: '孤寡老人的午餐计划',
          lanhutext1: '为孤寡老人、失能失智老人提供免费午餐行动',
          lanhuimage0:
            '/static/images/more.png',
          lanhuimage1:
            'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c64a076554cc41c4ba180e8b110a10ab_mergeImage.png',
          lanhutext2: '保存下载',
        },
      ],
      constants: {},
    };
  },
  methods: {
    onClick_1() {
      alert(1);
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
  },
};
</script>




<style lang='scss'>
@import "../common/common.scss";
@import "./index.rpx.scss";
</style>





