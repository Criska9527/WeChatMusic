// components/z-mine/z-mine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  //生命周期
  lifetimes: {
    attached: function () {
      var res = wx.getSystemInfoSync();
      console.log(res);
      var tarbar = res.statusBarHeight / (res.windowWidth / 750.0);
      console.log(tarbar)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    bgurl:'http://img3.a0bi.com/upload/ttq/20161015/1476518118768.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
