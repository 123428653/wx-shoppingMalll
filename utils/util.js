const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


module.exports = {
  formatTime: formatTime,
  http: function(url, method, data = {}) {
    wx.showNavigationBarLoading()
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        header: {},
        method: method.toUpperCase(),
        success: function (res) {
          wx.hideNavigationBarLoading()
          resolve(res.data)
        },
        fail: function (msg) {
          console.log('reqest error', msg)
          wx.hideNavigationBarLoading()
          reject('fail')
        }
      })
    })
  },
  getToken: function() {
    return new Promise((resolve, reject) => {
      this.http(
        'https://api.weixin.qq.com/cgi-bin/token',
        'get',
        {
          grant_type: 'client_credential',
          appid: 'wx7236ae254fea815f',
          secret: '6c336fb0f4ef024e4cfb4ad04721f03d'
        }
      ).then(res => {
        resolve(res.access_token)
      }).catch(err => {
        reject(res)
      })
    })
  },
  getWXCode: function() {
    return new Promise((resolve, reject) => {
      this.getToken().then(token => {
        this.http(
          'https://api.weixin.qq.com/wxa/getwxacode',
          'post',
          {
            access_token: token
          }
        ).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    })
  }
}
