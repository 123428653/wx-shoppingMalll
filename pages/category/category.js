// pages/category/category.js
Page({
  data: {
    isLoading: true,
    list: [],
    tab: ['高返','爆款'],
    curTab: 0,
    focus: true,
    inputValue: ''
  },
  tabChang(e) {
    var index = e.currentTarget.dataset.index
    if (index !== this.data.curTab){
      this.setData({
        curTab: index
      })
      this.searchList()
    }
  },
  onLoad(option) {
    this.searchList(option)
  },
  onShow() {
    // console.log('onShow')
  },
  onReady() {
    // console.log('onReady')
  },
  changeVal(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  searchList(option) {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isLoading: true,
      inputValue: (option && option.q) ? option.q : this.data.inputValue
    })
    wx.request({
      url: 'https://easy-mock.com/mock/5c13534ebb577d1fbc488099/wx/search',
      method: 'GET',
      success: res => {
        // console.log(res)
        this.setData({
          isLoading: false,
          list: res.data.data.list
        })
        wx.hideLoading()
      }
    });
  },
  clearVal() {
    this.setData({
      inputValue: ''
    })
  }
})