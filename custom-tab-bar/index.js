Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3683d6",
    list: [{
      pagePath: "/pages/mine/mine",
      iconPath: "/image/mine.png",
      selectedIconPath: "/image/mine.png",
      text: "我的"
    }, {
      pagePath: "/pages/find/find",
      iconPath: "/image/find.png",
      selectedIconPath: "/image/find.png",
      text: "发现"
    }, {
      pagePath: "/pages/friend/friend",
      iconPath: "/image/friend.png",
      selectedIconPath: "/image/friend.png",
      text: "朋友"
    }, {
      pagePath: "/pages/video/video",
      iconPath: "/image/mv-line.png",
      selectedIconPath: "/image/mv-line.png",
      text: "视频"
    },]
  },
  attached() { },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})