// 小程序权限
export default {
  /**
   * 检查是否有某个权限,没有则发出权限请求.有权限或请求权限成功后都resolve
   * @param {String} scope 需要获取权限的 scope，详见 scope 列表:
   * https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8
   */
  checkAuthorize(scope) {
    return new Promise((resolve, reject) => {
      // 检查权限
      uni.getSetting({
        success(res) {
          if (res.authSetting[scope]) {
            resolve();
          } else {
            uni.authorize({
              scope,
              success() {
                // 获得权限
                resolve();
              },
              fail() {
                reject("用户拒绝授权");
              },
            });
          }
        },
      });
    });
  },
};
