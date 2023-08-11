// pages/APIkeyDetails/APIkeyDetails.js
import api from '../../API/api'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    APIKey: '',
    //购买
    show: false,
    //未购买
    show_1: false
  },
  gotoIndex() {
    wx.reLaunch({
      url: '../index/index',
    })
  },

  copy: function () {
    const contentToCopy = this.data.APIKey
    wx.setClipboardData({
      data: contentToCopy,
      success: function () {
        wx.showToast({
          title: "复制成功",
          icon: "success",
          duration: 1500,
        });
      },
      fail: function () {
        wx.showToast({
          title: "复制失败",
          icon: "none",
          duration: 1500,
        });
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    api.getKey().then(res => {
      console.log(res)
      if (res.data.code == 1) {
        that.setData({
          APIKey: res.data.data.apikey.apikey,
          show: true
        })
      } else {
        that.setData({
          show_1: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})