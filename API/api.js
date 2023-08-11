import http from "./http"

// 获取apiKey 判断用户是否购买
function getKey() {
  return http("/Wxpay/getKey", "GET")
}

// 获取微信支付预支付信息
function pay() {
  return http("/Wxpay/pay", "GET")
} 

// 支付后的回调
function afterPayment(res) {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      nonceStr: res.data.nonceStr,
      package: res.data.package,
      paySign: res.data.paySign,
      timeStamp: res.data.timeStamp,
      signType: res.data.signType,
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      },
    });
  })
}


// 以对象的形式导出
export default {
  getKey,pay,afterPayment
}