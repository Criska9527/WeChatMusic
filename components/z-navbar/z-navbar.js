const app = getApp()
Component({
  properties: {
    navigationBarTitle: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },

  data: {
    statusBarHeight: app.globalData.statusBarHeight
  },
  methods: {
    backHome: function () {
      wx.reLaunch({
        url: '/pages/find/find',
      })
    },
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
