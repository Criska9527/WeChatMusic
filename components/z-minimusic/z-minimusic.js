// components/z-minimusic/z-minimusic.js
//获取应用实例
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    music() {
      
      //判断当前是否有歌曲被播放
      if (!app.globalData.musicinfo) {
        wx.lin.showToast({
          title: '暂无歌曲播放',
          icon: 'error',
          success: (res) => {
            console.log(res)
          },
          complete: (res) => {
            console.log(res)
          }
        })
        return
      }
      wx.navigateTo({
        url: '/pages/music/music',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }

        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', {
            data: 'test'
          })
        }
      })
    }

  }
})