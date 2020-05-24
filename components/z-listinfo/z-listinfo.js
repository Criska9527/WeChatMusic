// components/z-listinfo/z-listinfo.js
//获取应用实例
const app = getApp()
import API from '../..//utils/Api/api.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listid: {
      type: String,
      value: null,
      songs: []
    }
  },
  //生命周期
  lifetimes: {
    created: function() {
      this.getmusiclistinfo()
    },
    attached: function() {
      var res = wx.getSystemInfoSync();
      console.log(res);
      var tarbar = res.statusBarHeight / (res.windowWidth / 750.0);
      console.log(tarbar)


      console.log(app.globalData.listid)
      //测试假数据

    },
    observers: { //观察者：属性监听
      'listid' (data) { //单个监听
        console.log('数量改变了')
      },
    },

    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    musiclist: null,
    songlist: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取歌单信息并渲染
    getmusiclistinfo() {
      API.getmusiclistinfo({
        id: app.globalData.listid,
      }).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.setData({
            musiclist: res.playlist
          })
          var songids = []
          //此处拿着trackIds来请求所有歌曲的详细信息


          for (let item of res.playlist.trackIds) {
            songids.push(item.id)
          }
          songids = songids.join(",");
          var musicsongs = []
          API.getsong({
            ids: songids
          }).then((res) => {
            console.log(res)


            let single = {

            }
            for (let item of res.songs) {
              single = {
                name: item.name,
                id: item.id,
                singer: item.ar[0].name
              }
              musicsongs.push(single)
            }
            this.setData({
              songlist: musicsongs
            })
          })


        }
      })
    },
    //跳转播放页面
    playmusic(event) {
      //设置当前播放的歌曲id
      app.globalData.musicid = event.currentTarget.dataset.id
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