// pages/friend/friend.js
// components/z-musiclist/z-musiclist.js
import API from '../../utils/Api/api.js'
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationBarTitle: "",
    musicid: app.globalData.musicid,
    musicinfo: {

    }
  },
  //获取歌曲详情
  getsongs() {
    var song = {
      url:"",
      imgurl: "",
      artistsname: "",
      musicid:""
    }
    API.getsong({
      ids: app.globalData.musicid
    }).then((res) => {
      console.log(res)
      this.setData({
        navigationBarTitle: res.songs[0].name
      })
      //歌曲图片
      song.imgurl = res.songs[0].al.picUrl
      //歌手名称
      song.artistsname = res.songs[0].ar[0].name
      
      //获取歌曲的播放地址
      API.getmusicurl({
        id: app.globalData.musicid
      }).then((res)=>{
        console.log(res)
        song.url = res.data[0].url
        this.setData({
          musicinfo:song
        })
      })
      app.globalData.musicinfo = song

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getsongs()
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

  },

})