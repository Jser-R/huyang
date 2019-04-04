//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
        traceUser:true
    })
    this.globalData.db = wx.cloud.database()
  },
  globalData: {
    db:null,
    userInfo: null
  }
})
