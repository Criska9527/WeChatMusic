// components/z-listbar/z-listbar.js
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
    list: [{
        name: '每日推荐',
        icon: '/images/tuijian1.png',
        classname: "icon-tuijian"
      },
      {
        name: '歌单',
        icon: '/images/gedan.png',
        classname: "icon-gedan"
      },
      {
        name: '排行榜',
        icon: '/images/paihang1.png',
        classname: "icon-paihang"
      },
      {
        name: '电台',
        icon: '/images/diantai.png',
        classname: "icon-yinle"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumptest() {
      wx.navigateTo({
        url: '/pages/music/music?id=1',
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