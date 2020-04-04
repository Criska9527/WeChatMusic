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
    timeshow: false,//倒计时的标签的显隐
    codeclick: false//是否禁用按钮 true不可输入，false可以
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显隐控制，传递给父组件
    enterShowclick(){
      
    }
  }
})