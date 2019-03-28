//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    navList: [
      '推荐',
      '百货',
      '母婴',
      '鞋包',
      '服饰',
      '水果',
      '百货',
      '母婴',
      '鞋包',
      '服饰',
      '水果'
    ],
    filterList: [
      '综合',
      '返利',
      '销量',
      '价格'
    ],
    curFilter: 0,
    curNav: 0,
    name: '推荐',
    listData: [],
    swiper: {
      imgUrls: [
        'https://i8.mifile.cn/v1/a1/25f8a23f-de0e-c948-3d71-90238ec37e7a!720x360.webp',
        'https://i8.mifile.cn/v1/a1/67244253-3bd6-4233-00ce-5bfe249af84c!720x360.webp',
        'https://i8.mifile.cn/v1/a1/569835bc-4925-de08-2c22-121492ac8684!720x360.webp'
      ],
      indicatorDots: true,
      indicatorColor: '#fff',
      indicatorActiveColor: '#ff4964',
      autoplay: true,
      interval: 5000,
      duration: 800
    },
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onReachBottom() {
    // console.log(this.data.note.length)
    // wx.showLoading({
    //   title: '玩命加载中',
    // })
    // var arr = this.data.note;
    // var newArr = this.data.newNote;
    // newArr.forEach(function(item){
    //   arr.push(item)
    // })
    // this.setData({
    //   note: this.data.note
    // })
    // wx.hideLoading();
    console.log('到底部了~~')
  },
  onReady() {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs?id=2'
    })
  },
  tabChang(e) {
    let index = e.currentTarget.dataset.index
    let name = e.currentTarget.dataset.name
    if(index !== this.data.curNav){
      this.setData({
        curNav: index,
        name: name,
        curFilter: 0
      })
      this.getDate();
    }
  },
  filterTab(e) {
    let index = e.currentTarget.dataset.index
    if (index !== this.data.curFilter) {
      this.setData({
        curFilter: index
      })
      this.getDate();
    }
  },
  onLoad: function () {
    // wx.setClipboardData({
    //   data: '已复制文案',
    //   success(res) {
    //     wx.getClipboardData({
    //       success(res) {
    //         wx.showToast({

    //           title: res.data,

    //         });
    //         console.log(res.data) // data
    //       }
    //     })
    //   }
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.getDate()
  },
  getDate(name) {
    wx.showLoading({
      title: '加载中',
    })
    util.http(
      // https://www.easy-mock.com/mock/5c13534ebb577d1fbc488099/wx
      'https://www.fastmock.site/mock/4a9b8832c36656e244c3c63a34680d6e/wx/index/list',
      'get',
      { name: this.data.name}
    ).then(res => {
      this.setData({
        listData: res.data
      })
      wx.hideLoading()
    }).catch(err => {
      wx.hideLoading()
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
