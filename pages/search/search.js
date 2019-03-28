Page({
  data: {
    isList: true,
    focus: true,
    inputValue: ''
  },
  changeVal(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  goSearchList() {
    wx.navigateTo({
      url: `./searchList/search-list?q=${this.data.inputValue}`
    })
  },
  clearVal() {
    this.setData({
      inputValue: ''
    })
  }
})