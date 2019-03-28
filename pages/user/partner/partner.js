//partner.js

Page({
  data: {
    //轮播图
    swiperCurrent: 1,
    arr: [{
      images: 'http://dummyimage.com/480x670'
    },
    {
      images: 'http://dummyimage.com/480x670'
    },
    {
      images: 'http://dummyimage.com/480x670'
    },
    {
      images: 'http://dummyimage.com/480x670'
    }
    ],
    indicatorDots: false, //关闭指示点（false）
    autoplay: false,
    interval: 2000,
    duration: 1000,
    circular: true,
    beforeColor: "white",//指示点颜色  
    afterColor: "coral",//当前选中的指示点颜色  
    previousmargin: '66px',//前边距
    nextmargin: '66px',//后边距
    isOpen: false
  },
  onShareAppMessage() {
    return {
      title: '邀请合伙人',
      path: 'pages/user/partner/partner'
    }
  },
  handleTapShareButton() {
    if (!((typeof wx.canIUse === 'function') && wx.canIUse('button.open-type.share'))) {
      wx.showModal({
        title: '当前版本不支持转发按钮',
        content: '请升级至最新版本微信客户端',
        showCancel: false
      })
    }
  },
  //轮播图的切换事件  
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current   //获取当前轮播图片的下标
    })
  },
  //滑动图片切换  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  shareOpen() {
    this.setData({
      isOpen: !this.data.isOpen
    })
  }
})