// index.js
Component({
  data: {
    isShow_index: false,
    isShow_playing: false,
    isShow_me: false,
    selected: 0, //首页
    color: "#8D8D8D",
    selectedColor: "#8D8D8D",
    list: [{
        pagePath: "/pages/find/find",
        iconPath: "/images/music.png",
        selectedIconPath: "/images/selected-music.png",
        text: "乐库"
      },
      {
        pagePath: "/pages/search/search",
        iconPath: "/images/搜索.png",
        selectedIconPath: "/images/selected-music.png",
        text: "搜索"
      },

      {
        pagePath: "/pages/mine/mine",
        iconPath: "/images/me.png",
        selectedIconPath: "/images/selected-me.png",
        text: "我的"
      }
    ]
  },

  methods: {

    switchTab_index: function() {
      // this.setData({
      //   isShow_index: true,
      //   isShow_me: false,
      //   isShow_playing: false
      // })
      wx.switchTab({
        url: '/pages/find/find'
      })

    },

    switchTab_playing: function() {
      // this.setData({
      //   isShow_playing: true,
      //   isShow_index: false,
      //   isShow_me: false
      // })
      wx.switchTab({
        url: '/pages/friend/friend'
      })

    },

    switchTab_me: function() {
      // this.setData({
      //   isShow_me: true,
      //   isShow_playing: false,
      //   isShow_index: false
      // })
      wx.switchTab({
        url: '/pages/mine/mine'
      })

    },
    switchTab_search:function () {
      // this.setData({
      //   isShow_me: true,
      //   isShow_playing: false,
      //   isShow_index: false
      // })
      wx.switchTab({
        url: '/pages/search/search'
      })

    }
  }
})