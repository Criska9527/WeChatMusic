// components/z-music/z-music.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    musicid: {
      type: Number,
      value: null
    },
    musicinfo:{
      type:Object,
      value:null
    }
  },
  lifetimes:{
    created(){
     
    },
    attached(){
      console.log(this.properties.musicinfo)
  
    }
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

  }
})
