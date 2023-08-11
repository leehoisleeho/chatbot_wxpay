// index.js
import api from "../../API/api";
Page({
  data: {},
  // 点击购买
  shop: function () {
    wx.requestSubscribeMessage({
      tmplIds: ["IwKxV8r4-drO6LWibIeHqzs7930NsISC8c9cPf4lBzY"],
      success: function (res) {
        // 调取预支付接口
        api.pay().then((res) => {
          if (res.data.code == 0) {
            wx.showModal({
              title: "🎉🎉🎉",
              content: "你已经购买过了，请返回公众号查看API Key",
              showCancel: false,  // 是否显示取消按钮
              confirmText: "确定", // 确定按钮的文字，可自定义
            });
          } else {
            // 支付后的回调
            api.afterPayment(res)
              .then((res) => {
                wx.reLaunch({
                  url: "../Successful/Successful",
                });
              })
              .catch((err) => {
                wx.reLaunch({
                  url: "../Fail/Fail",
                });
              });
          }
        });
      },
    });
  },
});
