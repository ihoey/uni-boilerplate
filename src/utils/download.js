// import { getCdnUrl } from "./index.js";
import authorizeUtil from "./authorize.js";

export default {
  // 保存图片到系统相册,支持网络图片
  saveUriToPhotosAlbum(uri) {
    return new Promise((resolve, reject) => {
      new Promise((resolve2, reject2) => {
        if (uri.startsWith("https://")) {
          uni.downloadFile({
            url: uri,
            success(res) {
              resolve2(res.tempFilePath);
            },
            fail(e) {
              console.log("downloadFile fail:", e);
              reject2();
            },
          });
        } else {
          resolve2(uri);
        }
      })
        .then((filePath) => {
          uni.saveImageToPhotosAlbum({
            filePath,
            success() {
              resolve();
            },
            fail() {
              reject("保存失败");
            },
          });
        })
        .catch(() => {
          reject("网络图片下载失败");
        });
    });
  },
  // 下载证书
  downloadQRCode(qrCodeUri) {
    return new Promise((resolve, reject) => {
      authorizeUtil
        .checkAuthorize("scope.writePhotosAlbum")
        .then(() => {
          // 二维码uri
          // const qrCodeUri = getCdnUrl("/images/rise_parent_poster.png");
          uni.showLoading({
            title: "下载中",
          });
          this.saveUriToPhotosAlbum(qrCodeUri)
            .then(() => {
              uni.showToast({
                title: "保存成功",
                icon: "success",
                duration: 1500,
              });
              resolve();
            })
            .catch((error) => {
              uni.showToast({
                title: error || "保存失败",
                icon: "none",
                duration: 1500,
              });
              reject(error);
            });
        })
        .catch(() => {
          uni.showToast({
            title: "没有保存权限",
            icon: "none",
            duration: 1500,
          });
        });
    });
  },
};
