<template>
  <view class="rs-input">
    <input class="rs-input--input" :style="[inputStyle]" :value="value" :type="type" :placeholder="placeholder"
           placeholder-class="input-placeholder" :maxlength="maxlength" @focus="onFocus" @blur="onBlur"
           @input="onInput" />
    <view v-show="focused && value" class="rs-input--clear flex-col-center rs-icon rs-icon-danchuangguanbi"
          @tap="handleClear"></view>
  </view>
</template>

<script>
export default {
  name: "rs-input",
  emits: ["input", "focus", "blur"],
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    // 输入框的类型，textarea，text，number
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: [Number, String],
      default: 140,
    },
    // 高度，单位rpx
    height: {
      type: [Number, String],
      default: "",
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    inputStyle() {
      let style = {};
      if (this.height) {
        style.height = this.height + "rpx";
      }
      return style;
    },
  },
  methods: {
    onFocus() {
      this.focused = true;
      this.$emit("focus");
    },
    onBlur() {
      setTimeout(() => {
        this.focused = false;
      }, 100);
      this.$emit("blur");
    },
    onInput(e) {
      const value = e.detail.value;
      this.$emit("input", value);
    },
    handleClear() {
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss">
$pd-l: 48rpx;
$pd-r: 64rpx;

.rs-input {
  position: relative;
  // width: 100%;
  // height: 100%;

  &--input {
    // width: 622rpx;
    height: 70rpx;
    // background-color: #f9f9f9;
    border-radius: 48rpx;
    padding: 0 $pd-r 0 $pd-l;
    color: #000000;
    font-size: 32rpx;
  }

  ::v-deep .input-placeholder {
    color: #999999;
  }

  &--clear {
    position: absolute;
    right: 0;
    top: 0;
    width: $pd-r;
    height: 100%;
  }
}
</style>
