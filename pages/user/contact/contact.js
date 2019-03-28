//logs.js
const util = require('../../../utils/util.js')

Page({
  data: {
    id: 'xiaqideID',
    qq: '238166359'
  },
  onLoad: function (option) {
    util.getWXCode().then(res => {
      console.log(res)
    })
  },
  copy(e) {
    wx.setClipboardData({
      data: e.target.id === 'id' ? this.data.id : this.data.qq,
      success() {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '已复制到粘贴板'
            })
          }
        })
      }
    })
  }
})
