<template>
  <div class="page flex-col">
    <rs-nav-bar title="捐款回顾" @back="back" />
    <div class="group_4 flex-col">
      <div class="box_2 flex-col">
        <div class="list_4 flex-row">
          <div class="text-wrapper_3 flex-col" v-for="(item, index) in loopData1" :key="index">
            <span class="text_6" v-html="item.lanhutext0"></span>
            <span class="text_7" v-html="item.lanhutext1"></span>
          </div>
        </div>
      </div>

    </div>
    <div class="text-wrapper_4 flex-row justify-between">
      <span class="text_8">我帮助过的项目</span>
      <span class="text_9">共5项</span>
    </div>
    <div class="section_1 flex-col">
      <div class="list_3 flex-col">
        <div class="image-text_1 flex-row justify-between" v-for="(item, index) in loopData0" :key="index">
          <div class="group_2 flex-col" :style="{ background: item.lanhuBg1 }"></div>
          <div class="block_1 flex-col">
            <div class="text-group_3 flex-col">
              <span class="text_1" v-html="item.lanhutext0"></span>
              <span class="text_2" v-html="item.lanhutext1"></span>
            </div>
            <div class="button_1 flex-col">
              <span class="text_3" v-html="item.lanhutext2"></span>
            </div>
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
          lanhuBg1:
            'url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8375d8220d2a4a0f90efdc48168f6d6d_mergeImage.png)',
          lanhutext0: '孤寡老人的医疗救治计划',
          lanhutext1: '为孤寡老人、失能失智老人提供基础医疗服务行动',
          lanhutext2: '捐赠记录',
        },
        {
          lanhuBg1:
            'url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8375d8220d2a4a0f90efdc48168f6d6d_mergeImage.png)',
          lanhutext0: '孤寡老人的医疗救治计划',
          lanhutext1: '为孤寡老人、失能失智老人提供基础医疗服务行动',
          lanhutext2: '捐赠记录',
        },
        {
          lanhuBg1:
            'url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0659cb8550c04392b7c25e548f0fd742_mergeImage.png)',
          lanhutext0: '孤寡老人的医疗救治计划',
          lanhutext1: '为孤寡老人、失能失智老人提供基础医疗服务行动',
          lanhutext2: '捐赠记录',
        },
        {
          lanhuBg1:
            'url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0659cb8550c04392b7c25e548f0fd742_mergeImage.png)',
          lanhutext0: '孤寡老人的医疗救治计划',
          lanhutext1: '为孤寡老人、失能失智老人提供基础医疗服务行动',
          lanhutext2: '捐赠记录',
        },
        {
          lanhuBg1:
            'url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0659cb8550c04392b7c25e548f0fd742_mergeImage.png)',
          lanhutext0: '孤寡老人的医疗救治计划',
          lanhutext1: '为孤寡老人、失能失智老人提供基础医疗服务行动',
          lanhutext2: '捐赠记录',
        },
        {
          lanhuBg1:
            'url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/46981088dac443f8ad5fae538f2f8ed3_mergeImage.png)',
          lanhutext0: '孤寡老人的医疗救治计划',
          lanhutext1: '为孤寡老人、失能失智老人提供基础医疗服务行动',
          lanhutext2: '捐赠记录',
        },
      ],
      loopData1: [
        { lanhutext0: '3', lanhutext1: '我捐赠了(元)' },
        { lanhutext0: '45', lanhutext1: '我帮助了(人)' },
        { lanhutext0: '45', lanhutext1: '我转发了(次)' },
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





