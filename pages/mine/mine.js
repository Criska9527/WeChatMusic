// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "navigationBarTitle": "我的",
    "signshow":false,
    "entershow":false,
    "mychoseshow":true,
    "bgimgurl": 'http://zmap.club/xcximg/timg.jpg',
    "logoimgurl": 'http://zmap.club/xcximg/default.png',
  },
  //显示登录页
  showenter:function(){
      this.setData({
        mychoseshow:false,
        entershow:true,
        signshow:false

      })
  },
  showregister: function () {
    this.setData({
      mychoseshow: false,
      entershow: false,
      signshow: true

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})