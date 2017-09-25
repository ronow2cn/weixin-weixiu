//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    topimgs:[
      "../../images/topimg1.png" ,
      "../../images/topimg2.png" ,
      "../../images/topimg3.png" 
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.onLoad()
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
})
