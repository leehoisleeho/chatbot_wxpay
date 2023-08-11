// 封装小程序获取token的方法
const getToken = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://wxpay.hellochange.online/api/user/jscode2session',
          data:{js_code:res.code},
          success:function(res2){
            resolve(res2.data.data.userinfo.token);
          }
        })
        wx.hideLoading();
      }
    })
  });
};
export default getToken;