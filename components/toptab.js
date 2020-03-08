
Component({//自定义组件
  //定义属性
  properties: {//首先头部我主要是控制title提示和返回键所以我只要定义3个属性，1title2是否显示返回3返回的地址是什么就可以了
    title: {
      type: String,
      value: ''
    },
    hideBack: {
      type: Boolean,
      value: false
    },
    url: {
      type: String,
      value: ''
    }
  },
  data: {//私有数据  //你要自定义导航栏首先你要知道状态栏的高度
    statusBarHeight: '',
    fontSizeSetting: ''
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
    this.getSystem();
  }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  methods: {
    getSystem() {
      var That = this;
      wx.getSystemInfo({
        success(res) {
          console.log("d", res);
          That.setData({
            statusBarHeight: res.statusBarHeight,
            fontSizeSetting: res.fontSizeSetting
          })
        }
      })
    }
  }
})