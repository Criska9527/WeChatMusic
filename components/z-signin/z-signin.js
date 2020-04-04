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
    username: null,
    password: null,
    nickname: null,
    phonecode: null,
    focus: true,
    showcode: true,
    secoundtext: '获取验证码', //验证码按钮文字
    codewrite: false, //验证框是否可输入,true不可输入，false可以
    codeplacetext: '请键入验证码', //验证框的placeholder
    codeloading: false, //验证框的loading效果
    timestatus: false, //倒计时的状态
    timeshow:false,//倒计时的标签的显隐
    codeclick: false//是否禁用按钮 true不可输入，false可以
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
    //注册
    register() {
      API.register({
        phone: this.data.username,
        password: this.data.password,
        captcha: this.data.phonecode,
        nickname: this.data.nickname
      }).then((res) => {
        console.log(res)
        if(res.code==200){
          wx.lin.showToast({
            title: '注册成功~',
            icon: 'success'
          })
        }else{
          wx.lin.showToast({
            title: res.message,
            icon: 'error'
          })
        }
     
      })
    },
    //获取验证码
    sendcaptcha() {
      API.sendcaptcha({
        phone: this.data.username,
      }).then((res) => {
        this.setData({
          codeloading: false,
          timestatus:true,
          timeshow: true,
          codeclick:true,
          secoundtext:'可重新获取'
        })
        console.log(res)
        wx.lin.showToast({
          title: '短信发送成功~',
          icon: 'success'
        })
      })
    },
    sendcaptchaclick(){
      this.setData({
        codeloading: true
      })
      this.sendcaptcha()
    },
    //验证是否注册
    Phoneexistence() {
      return API.Phoneexistence({
        phone: this.data.username
      }).then((res) => {
        if (res.code == 200) {
          if (res.exist == 1) {
            return true
          }
        }
        //return Promise.resolve()
      })
    },
    //验证验证码的正确性
    verifycaptcha() {
      return API.verifycaptcha({
        captcha: this.data.phonecode,
        phone: this.data.username,
      }).then((res) => {
        if (res.code == 200) {
          // if (res.exist == 1) {
          //   return true
          // }
          return true
        }
        //return Promise.resolve()
      }).catch((res) => {
        return false
      })
    },
    //用户点击登录按钮后做的逻辑处理
    //若账号存在则登录，若账号不存在，注册并登录
    async siginclick() {
      //检查是否已注册
      let phoneexist = await this.Phoneexistence();
      if (phoneexist) {
        //若被注册进行登录操作
        this.sigin()
      } else {
        wx.lin.showToast({
          title: '手机号未注册,请先注册',
          icon: 'error'
        })
      }
    },
    //注册点击按钮
    async registerclick() {
      //检查是否已注册
      let phoneexist = await this.Phoneexistence()
      let verifycaptcha = await this.verifycaptcha()
      let verifyinput = this.verifyinput()
      console.log(verifyinput)
      if (!verifyinput) {
        //若被注册进行登录操作
        //this.sigin()
        wx.lin.showToast({
          title: '请键入必要信息',
          icon: 'error'
        })
        return
      }
      // if (phoneexist) {
      //   //若被注册进行登录操作
      //   //this.sigin()
      //   wx.lin.showToast({
      //     title: '手机号已注册,请直接登录',
      //     icon: 'error'
      //   })
      //   return
      // }
      // if (!verifycaptcha) {
      //   //若被注册进行登录操作
      //   //this.sigin()
      //   wx.lin.showToast({
      //     title: '验证码错误',
      //     icon: 'error'
      //   })
      //   return
      // }
      // //若上述都争取可正常注册
      // this.register()


    },
    //验证是否为空
    verifyinput(){
      if (this.data.phonecode && this.data.username && this.data.password && this.data.nickname){
        return true
      }else{
        return false
      }
    },
    //输入框的输入事件（账号和密码）
    userInputChange(e) {
      console.log(e)
      this.setData({
        [e.currentTarget.dataset.prop]: e.detail,
        username: e.detail.value
      })
    },
    passInputChange(e) {
      this.setData({
        [e.currentTarget.dataset.prop]: e.detail,
        password: e.detail.value
      })
    },
    NicknameChange(e) {
      this.setData({
        [e.currentTarget.dataset.prop]: e.detail,
        nickname: e.detail.value
      })
    },
    phonecodeChange(e) {
      console.log(e)
      this.setData({
        [e.currentTarget.dataset.prop]: e.detail,
        phonecode: e.detail.value
      })
    },
    //倒计时结束的事件
    timeend(){
      console.log('已结束')
      this.setData({
        codeloading: false,
        timestatus: false,
        timeshow:false,
        codeclick:false,
        secoundtext: '获取验证码'
      })
    }

    //
  }
})