//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    isLogin: false,
    thumb: '',
    nickname: '',
    logs: []
  },
  onLoad: function (option) {
    console.log(option)
    var self = this;
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.getSetting({
      success(res) {
        // console.log(res.authSetting['scope.userInfo'])
        if(res.authSetting['scope.userInfo']){
          self.setData({
            isLogin: true
          })
        }
        wx.hideLoading()
      }
    })
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
  },
  onGotUserInfo: function (e) {
    // console.log(e)
    if (e.detail.userInfo){
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.onLoad()
    }
  }
})
