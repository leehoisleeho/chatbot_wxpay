// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://wxpay.hellochange.online/api/user/jscode2session',
          data:{js_code:res.code},
          success:function(res2){
            wx.setStorageSync('token', res2.data.data.userinfo.token)
          }
        })
      }
    })
  },
  globalData: {
    code:'',
    openId:''
  }
})
