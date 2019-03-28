Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDefault: true,
    code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  
  changeInput(e) {
    let val = e.detail.value
    this.setData({
      code: val,
      isDefault: val.length === 0
    })
  },

  nextSubmit(e) {
    if(!this.data.isDefault){
      console.log(this.data.code.length)
      if (this.data.code.length !== 6){
        wx.showToast({
          mask: true,
          icon: 'none',
          title: '请输入正确的邀请码'
        })
      }else{
        console.log(`可以提交了`)
      }
    }
    
  }
})