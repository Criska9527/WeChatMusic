// components/z-signin/z-signin.js
// components/z-musiclist/z-musiclist.js
import API from '../..//utils/Api/api.js'
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
    bgimgurl: 'http://zmap.club/xcximg/timg.jpg',
    logoimgurl: 'http://zmap.club/xcximg/default.png',
    username: '',
    password: '',
    focus:true,
    showcode:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //登录
    sigin() {
      API.sigininPhone({
        phone: this.data.username,
        password: this.data.password
      }).then((res) => {
          console.log(res)
          wx.lin.showToast({
            title: '登录成功~',
            icon: 'success'
        })
      })

    },
    //Phoneexistence
    Phoneexistence(){
      return API.Phoneexistence({
        phone: this.data.username
      }).then((res) => {
        if(res.code==200){
          if(res.exist==1){
            return true
          }
        }
        //return Promise.resolve()
      })
    },
    //用户点击登录按钮后做的逻辑处理
    //若账号存在则登录，若账号不存在，注册并登录
    async siginclick(){
      //检查是否已注册
      let phoneexist = await this.Phoneexistence();
      if (phoneexist){
        //若被注册进行登录操作
        this.sigin()
      }
    },
    //输入框的输入事件（账号和密码）
    userInputChange(e) {
      console.log(e)
      this.setData({
        [e.currentTarget.dataset.prop]: e.detail,
        username:e.detail.value
      })
    },
    passInputChange(e) {   
      this.setData({
        [e.currentTarget.dataset.prop]: e.detail,
        password: e.detail.value
      })
    },

    //
  }
})