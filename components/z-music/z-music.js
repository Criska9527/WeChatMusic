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
      //判断播放状态
     
    },
    attached(){
      console.log(this.properties.musicinfo)
  
      this.initMusic()
  
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rotate: {
      type: Boolean,
      value: true
    },
    musicClass: 'music-on',
    palyerclass:'icon-suspend_icon',
    likeclass: 'icon-xihuan',
    commitclass:'icon-pinglun',
    playstatus:'播放',
    MusicCtx:null,//微信音乐组件
    lastsongurl:null//此变量存储上一个歌曲的url
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playermusic(){
     
      //判断播放状态，点击播放还是暂停
      if (this.data.playstatus==='播放'){
           this.setData({
             playstatus:'暂停',
             palyerclass:'icon-zanting',
             musicClass:'pause music-on'
           })
        wx.$musicctx.pause()
      }else{
        this.setData({
          playstatus: '播放',
          palyerclass: 'icon-suspend_icon',
          musicClass: 'music-on'
         
        })
        wx.$musicctx.play()
      }
    },
    playmusic(){

    },
    initMusic(){
      //判断是否是上个音频

 
      if (wx.$musicctx != null){
             //当页面初始化时判断url是否重复清除一次音频ctx
        if (wx.$musicctx.src === this.properties.musicinfo.url) {
          //判断当前音频是否播放完毕
          wx.$musicctx.onEnded((res) => {
            console.log('进来了')
            this.setData({
              playstatus: '暂停',
              palyerclass: 'icon-zanting',
              musicClass: 'pause music-on'
            })
            wx.$musicctx.destroy()
          })
          return
        
         
        }
        wx.$musicctx.destroy()
      }
   
      //初始化微信音频实例
      let MusicCtx = wx.createInnerAudioContext()
      wx.$musicctx = MusicCtx
      console.log(wx.$musicctx)
      //设置播放地址
      wx.$musicctx.src = this.properties.musicinfo.url
      //设置上一播放url
      this.setData({
        lastsongurl: this.properties.musicinfo.url
      })
      wx.$musicctx.onError(function (res) {
        console.log(res)
      })
      wx.$musicctx.onCanplay(() => {
        console.log('can play')
      })
      wx.$musicctx.onPlay(() => {
        console.log('play')
      })
      console.log(wx.$musicctx.src)
      //播放音频
      wx.$musicctx.play()
      wx.$musicctx.onEnded((res) => {
        console.log('进来了')
        this.setData({
          playstatus: '暂停',
          palyerclass: 'icon-zanting',
          musicClass: 'pause music-on'
        })
      })
    
     
      // this.setData({
      //   MusicCtx: MusicCtx
      // })
     
    }
  }
})
