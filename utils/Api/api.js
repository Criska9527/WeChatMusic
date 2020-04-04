//api请求的封装
const API_BASE_URL = "http://175.24.110.210:3000"
const request = (url, data, method) => {
  let dataurl = `${API_BASE_URL}${url}`
  return new Promise((resolve, reject) => {
    wx.request({
      url: dataurl,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)

      },
      fail(error) {
        reject(error)
      }

    })
  })
}
const API = {
  //获取轮播图数据
  getBanner(data) {
    return request('/banner', data)
  },
  //获取歌单数据，热门或者新
  getplaylist(data) {
    return request('/top/playlist', data)
  },
  //登录(手机号)
  sigininPhone(data){
    return request('/login/cellphone', data)
  },
  //判断用户是否注册
  Phoneexistence(data) {
    return request('/cellphone/existence/check', data)
  },
  //注册
  register(data) {
    return request('/register/cellphone', data)
  },
  //获取验证码
  sendcaptcha(data){
    return request('/captcha/sent', data)
  },
  //验证验证码
  verifycaptcha(data){
    return request('/captcha/verify', data)
  }
  
}
export default API