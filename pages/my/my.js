//my.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icon1: '../../images/icon_03.png',
    icon2: '../../images/icon_09.png',
    icon3: '../../images/icon_11.png',

    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
      console.log(this.data)

    };
  }
})
