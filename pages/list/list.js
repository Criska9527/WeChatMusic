// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     listid:'2',//歌曲id
     tarbar:null //自定义头部栏的高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    //设置歌单id

    this.setData({
      listid:options.id
    })
    console.log(this.data.listid)
 
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
    //获取地址栏的高度,并自动调整组件高度
    var res = wx.getSystemInfoSync();
    console.log(res);
    var tarbar = res.statusBarHeight / (res.windowWidth / 750.0);
    console.log(tarbar)
    this.setData({
      tarbar:tarbar
    })

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