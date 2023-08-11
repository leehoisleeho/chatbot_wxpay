// 封装微信小程序的http请求
// 引入获取token方法
import getToken from "./getToken";
// API地址
const API_URL = "https://wxpay.hellochange.online/api";
async function http(url, method, data = {}) {
  // 加载动画
  wx.showLoading({
    title: "加载中.", // 提示文本
    mask: true, // 是否显示透明蒙层，防止触摸穿透，默认为 false
  });
  let token = await getToken();
  return new Promise((resolve, reject) => {
    // 获取token
    wx.request({
      url: API_URL + url,
      data: data,
      method: method,
      header: { token: token },
      success: function (res) {
        resolve(res);
        // 隐藏加载框
        wx.hideLoading();
      },
      fail: function (err) {
        reject(err);
        // 显示错误
        wx.showToast({
          title: err,
          icon: "error",
        });
      },
    });
  });
}

export default http;
