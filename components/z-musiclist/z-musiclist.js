// components/z-musiclist/z-musiclist.js
import API from '../../utils/Api/api.js'
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
    playlist: null
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    created: function () {
      this.getPlaylist()
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
      //this.getBannerData()
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getPlaylist() {
      API.getplaylist({
        order: "hot",
        limit: 20
      }).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.setData({
            playlist: res.playlists
          })
        }
      })
    },
    jumptest(event) {
      //测试页面跳转
      // wx.navigateTo({
      //   url: '/pages/music/music?id=1',
      //   events: {
      //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      //     acceptDataFromOpenedPage: function (data) {
      //       console.log(data)
      //     },
      //     someEvent: function (data) {
      //       console.log(data)
      //     }

      //   },
      //   success: function (res) {
      //     // 通过eventChannel向被打开页面传送数据
      //     res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      //   }
      // })
      //console.log(event)
      var id = event.currentTarget.dataset.id
      app.globalData.listid = id
      wx.navigateTo({
        url: `/pages/list/list?id=${id}`,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function (data) {
            console.log(data)
          },
          someEvent: function (data) {
            console.log(data)
          }

        },
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        }
      })

    }
  }
})