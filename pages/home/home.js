// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: '哈哈哈'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好啊',
    })

    // wx.redirectTo({
    //   url: 'url',
    // })
  }
})