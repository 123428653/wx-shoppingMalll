Page({
  data: {
    isLoading: true,
    list: [],
    focus: true,
    inputValue: ''
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
      inputValue: option.q ? option.q : this.data.inputValue
    })
    wx.request({
      url: 'https://www.fastmock.site/mock/4a9b8832c36656e244c3c63a34680d6e/wx/search',
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