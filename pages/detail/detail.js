import Poster from '../../miniprogram_dist/poster/poster';

Page({
  data: {
    jdConfig: {
      width: 750,
      height: 1334,
      backgroundColor: '#fff',
      debug: false,
      blocks: [
        {
          width: 690,
          height: 808,
          x: 30,
          y: 183,
          borderWidth: 2,
          borderColor: '#f0c2a0',
          borderRadius: 20,
        },
        {
          width: 634,
          height: 74,
          x: 59,
          y: 770,
          backgroundColor: '#fff',
          opacity: 0.5,
          zIndex: 100,
        },
      ],
      texts: [
        {
          x: 113,
          y: 61,
          baseLine: 'middle',
          text: '伟仔',
          fontSize: 32,
          color: '#8d8d8d',
        },
        {
          x: 30,
          y: 113,
          baseLine: 'top',
          text: '发现一个好物，推荐给你呀',
          fontSize: 38,
          color: '#080808',
        },
        {
          x: 92,
          y: 810,
          fontSize: 38,
          baseLine: 'middle',
          text: '标题标题标题标题标题标题标题标题标题',
          width: 570,
          lineNum: 1,
          color: '#8d8d8d',
          zIndex: 200,
        },
        {
          x: 59,
          y: 895,
          baseLine: 'middle',
          text: [
            {
              text: '2人拼',
              fontSize: 28,
              color: '#ec1731',
            },
            {
              text: '¥99',
              fontSize: 36,
              color: '#ec1731',
              marginLeft: 30,
            }
          ]
        },
        {
          x: 522,
          y: 895,
          baseLine: 'middle',
          text: '已拼2件',
          fontSize: 28,
          color: '#929292',
        },
        {
          x: 59,
          y: 945,
          baseLine: 'middle',
          text: [
            {
              text: '商家发货&售后',
              fontSize: 28,
              color: '#929292',
            },
            {
              text: '七天退货',
              fontSize: 28,
              color: '#929292',
              marginLeft: 50,
            },
            {
              text: '运费险',
              fontSize: 28,
              color: '#929292',
              marginLetf: 50,
            },
          ]
        },
        {
          x: 360,
          y: 1075,
          baseLine: 'top',
          text: '长按识别小程序码',
          fontSize: 38,
          color: '#080808',
        },
        {
          x: 360,
          y: 1133,
          baseLine: 'top',
          text: '超值好货一起拼',
          fontSize: 28,
          color: '#929292',
        },
      ],
      images: [
        {
          width: 62,
          height: 62,
          x: 30,
          y: 30,
          borderRadius: 62,
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
        },
        {
          width: 634,
          height: 634,
          x: 59,
          y: 210,
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/193256f45999757701f2.jpeg',
        },
        {
          width: 220,
          height: 220,
          x: 92,
          y: 1020,
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/d719fdb289c955627735.jpg',
        },
        {
          width: 750,
          height: 90,
          x: 0,
          y: 1244,
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/67b0a8ad316b44841c69.png',
        }
      ]

    },
    demoConfig: {
      width: 750,
      height: 1000,
      backgroundColor: '#fff',
      debug: false,
      blocks: [
        {
          x: 0,
          y: 10,
          width: 750, // 如果内部有文字，由文字宽度和内边距决定
          height: 120,
          paddingLeft: 0,
          paddingRight: 0,
          borderWidth: 10,
          borderColor: 'red',
          backgroundColor: 'blue',
          borderRadius: 40,
          text: {
            text: [
              {
                text: '金额¥ 1.00',
                fontSize: 80,
                color: 'yellow',
                opacity: 1,
                marginLeft: 50,
                marginRight: 10,
              },
              {
                text: '金额¥ 1.00',
                fontSize: 20,
                color: 'yellow',
                opacity: 1,
                marginLeft: 10,
                textDecoration: 'line-through',
              },
            ],
            baseLine: 'middle',
          },
        }
      ],
      texts: [
        {
          x: 0,
          y: 180,
          text: [
            {
              text: '长标题长标题长标题长标题长标题长标题长标题长标题长标题',
              fontSize: 40,
              color: 'red',
              opacity: 1,
              marginLeft: 0,
              marginRight: 10,
              width: 200,
              lineHeight: 40,
              lineNum: 2,
            },
            {
              text: '原价¥ 1.00',
              fontSize: 40,
              color: 'blue',
              opacity: 1,
              marginLeft: 10,
              textDecoration: 'line-through',
            },
          ],
          baseLine: 'middle',
        },
        {
          x: 10,
          y: 330,
          text: '金额¥ 1.00',
          fontSize: 80,
          color: 'blue',
          opacity: 1,
          baseLine: 'middle',
          textDecoration: 'line-through',
        },
      ],
      images: [
        {
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
          width: 300,
          height: 300,
          y: 450,
          x: 0,
          // borderRadius: 150,
          // borderWidth: 10,
          // borderColor: 'red',
        },
        {
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
          width: 100,
          height: 100,
          y: 450,
          x: 400,
          borderRadius: 100,
          borderWidth: 10,
        },
      ],
      lines: [
        {
          startY: 800,
          startX: 10,
          endX: 300,
          endY: 800,
          width: 5,
          color: 'red',
        }
      ]

    },
    swiper: {
      imgUrls: [
        'https://i8.mifile.cn/v1/a1/249ac9d7-680d-5014-2009-8a49a0da2a7c.webp',
        'https://i8.mifile.cn/v1/a1/f6969241-5174-61b3-a06a-a3bcfab69a75.webp',
        'https://i8.mifile.cn/v1/a1/99b9acdd-95d2-d7cc-2806-c900f38265f9.webp'
      ],
      indicatorDots: true,
      indicatorColor: '#fff',
      indicatorActiveColor: '#ff4964',
      autoplay: true,
      interval: 5000,
      duration: 800
    },
    img: '',
    isFirst: wx.getStorageSync('isFirst') || 0,
    shareTxt:`律即第至斗身月外交片提么可道。因亲率等展场意叫它状在影效场管过。\n原价: ￥19.90\n现价: ￥9.90\n下载地址: http://www.xxxx.com`,
    name: '',
    price: '',
    isOpenBuyPop: false,
    isOpenPop: false
  },
  onLoad(option) {
    
    // console.log(option.price)
    // this.setData({
    //   name: option.name,
    //   price: option.price
    // })
  },
  copyTxt(e) {
    let that = this;
    wx.setClipboardData({
      data: this.data.shareTxt,
      success() {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '已复制文案'
            })
            that.setData({
              isOpenPop: false
            })
          }
        })
      }
    })
  },
  triggetBuyPop() {
    this.setData({
      isOpenBuyPop: !this.data.isOpenBuyPop
    })
  },
  triggetPop() {
    this.setData({
      isOpenPop: !this.data.isOpenPop
    })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onBeforeCreate(e) {
    // this.copyTxt(e, true)
  },
  onPosterSuccessCopy(e) {
    const { detail } = e;
    wx.previewImage({
      current: detail,
      urls: [detail]
    })
    this.copyTxt()
  },
  onPosterSuccess(e) {
    const { detail } = e;
    // console.log(detail)
    // this.setData({
    //   img: detail
    // })
    wx.previewImage({
      current: detail,
      urls: [detail]
    })
  },
  isFirstSaveImg() {
    let that = this;
    wx.getSetting({
      success(res) {
        let wp = res.authSetting['scope.writePhotosAlbum'];
        console.log(wp)
        if (wp === undefined){
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('已同意')
            },
            fail() {
              console.log('已拒绝')
              if(!that.data.isFirst){
                wx.setStorageSync('isFirst', 1)
                that.setData({
                  isFirst: 1
                })
              }
            }
          })
        }else{
          if (!wp){
            that.setData({
              isFirst: 1
            })
          }else{
            that.setData({
              isFirst: 0
            })
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success() {
                wx.showLoading({
                  mask: true,
                  title: '保存中...',
                })
                wx.downloadFile({
                  url: 'http://dummyimage.com/750x640/d6e4ff',
                  success(res) {
                    // console.log(res.tempFilePath)
                    if(res.statusCode === 200){
                      wx.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success(res) {
                          // console.log(res)
                          wx.hideLoading()
                        },
                        fail(err) {
                          console.log(err)
                          wx.hideLoading()
                        }
                      })
                    }
                  },
                  fail(err){
                    console.log(err)
                    wx.hideLoading()
                  }
                })
                
              },
              fail() {
                console.log('已拒绝')
                
              }
            })
          }
        }
      }
    })
  },
  bindTab(){
    wx.showModal({
      title: '权限',
      content: '您还没授权保存图片权限',
      confirmText: '去授权',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  handler(e) {
    console.log(e)
    if (!e.detail.authSetting['scope.writePhotosAlbum']) {
      this.setData({
        isFirst: 1
      })
    } else {
      this.setData({
        isFirst: 0
      })
    }
  },
  onPosterFail(err) {
    console.error(err);
  }
})